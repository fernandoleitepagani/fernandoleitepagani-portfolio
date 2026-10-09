import type { GitHubCalendarDay, GitHubStats } from '../src/data/types';

/**
 * `GET /api/github` — the only place that talks to api.github.com.
 *
 * The browser never sees `GITHUB_TOKEN`: it is read here, at runtime, from the
 * Vercel environment. Responses are cached by Vercel's CDN for 5 minutes, so
 * real traffic costs roughly one upstream call per interval (5000/h quota).
 */

/** Only this account is served, otherwise the route becomes an open proxy. */
const OWNER = 'fernandoleitepagani';

const CACHE_SECONDS = 300;
const STALE_SECONDS = 3600;

const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
const REST_USER_ENDPOINT = `https://api.github.com/users/${OWNER}`;

/**
 * One query for everything the stats section renders:
 * the contribution calendar (GitHub's own heatmap data), the counters and the
 * language bytes summed across every public repository.
 */
const USER_QUERY = /* GraphQL */ `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
        totalCommitContributions
        totalPullRequestContributions
      }
      repositories(
        first: 100
        ownerAffiliations: [OWNER]
        privacy: PUBLIC
        orderBy: { field: NAME, direction: ASC }
      ) {
        totalCount
        nodes {
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/** Minimal shapes for the two upstream payloads — every field is optional. */
interface GraphQLUser {
  contributionsCollection?: {
    contributionCalendar?: {
      totalContributions?: number;
      weeks?: Array<{
        contributionDays?: Array<{ date?: string; contributionCount?: number }>;
      }>;
    };
    totalCommitContributions?: number;
    totalPullRequestContributions?: number;
  };
  repositories?: {
    totalCount?: number;
    nodes?: Array<{
      languages?: {
        edges?: Array<{ size?: number; node?: { name?: string } }>;
      } | null;
    } | null> | null;
  };
}

interface GraphQLBody {
  data?: { user?: GraphQLUser | null };
  errors?: Array<{ message?: string }>;
}

interface RestUserBody {
  public_repos?: number;
  followers?: number;
  following?: number;
  created_at?: string;
}

/**
 * Structural stand-ins for `@vercel/node`'s request/response types, so the
 * function is type-checked by `tsc -b` without adding a dependency.
 */
interface ServerRequest {
  method?: string;
  query: Record<string, string | string[] | undefined>;
}

interface ServerResponse {
  statusCode: number;
  setHeader(name: string, value: string): void;
  end(body?: string): void;
}

async function readJson(response: Response): Promise<unknown> {
  if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
  return response.json();
}

export default async function handler(request: ServerRequest, response: ServerResponse) {
  const send = (statusCode: number, body: unknown) => {
    response.statusCode = statusCode;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(body));
  };

  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return send(405, { error: 'method_not_allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) return send(503, { error: 'github_token_missing' });

  const requested = request.query.username;
  const username = typeof requested === 'string' ? requested.toLowerCase() : OWNER;
  if (username !== OWNER) return send(403, { error: 'unknown_username' });

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'portfolio-stats',
  };

  let graphQL: GraphQLBody;
  let restUser: RestUserBody;

  try {
    const [graphqlResponse, userResponse] = await Promise.all([
      fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query: USER_QUERY, variables: { login: OWNER } }),
      }),
      fetch(REST_USER_ENDPOINT, { headers }),
    ]);

    const [graphqlJson, userJson] = await Promise.all([
      readJson(graphqlResponse),
      readJson(userResponse),
    ]);

    graphQL = graphqlJson as GraphQLBody;
    restUser = userJson as RestUserBody;

    if (graphQL.errors?.length || !graphQL.data?.user) {
      throw new Error(graphQL.errors?.[0]?.message ?? 'missing user payload');
    }
  } catch {
    // Never let a GitHub hiccup break the page — the client renders its
    // fallback when this returns non-2xx.
    return send(503, { error: 'github_unreachable' });
  }

  const user = graphQL.data.user;
  const calendar = user.contributionsCollection?.contributionCalendar;

  // Flatten the weeks: day 0 of week 0 is a Sunday, so the array already
  // reads column-by-column, top-to-bottom — exactly like github.com.
  const calendarDays: GitHubCalendarDay[] = [];
  for (const week of calendar?.weeks ?? []) {
    for (const day of week.contributionDays ?? []) {
      if (day.date) calendarDays.push({ date: day.date, count: day.contributionCount ?? 0 });
    }
  }

  // Sum language bytes across every public repo — this is the same math
  // behind GitHub's own "most used languages" widget.
  const bytesByLanguage = new Map<string, number>();
  for (const repo of user.repositories?.nodes ?? []) {
    for (const edge of repo?.languages?.edges ?? []) {
      const name = edge.node?.name;
      const size = edge.size ?? 0;
      if (!name || size <= 0) continue;
      bytesByLanguage.set(name, (bytesByLanguage.get(name) ?? 0) + size);
    }
  }
  const totalBytes = [...bytesByLanguage.values()].reduce((sum, bytes) => sum + bytes, 0);

  const stats: GitHubStats = {
    username: OWNER,
    public_repos: restUser.public_repos ?? 0,
    followers: restUser.followers ?? 0,
    following: restUser.following ?? 0,
    created_at: restUser.created_at ?? '',
    contributions: {
      total: calendar?.totalContributions ?? 0,
      commits: user.contributionsCollection?.totalCommitContributions ?? 0,
      pullRequests: user.contributionsCollection?.totalPullRequestContributions ?? 0,
    },
    calendar: calendarDays,
    languages: [...bytesByLanguage.entries()]
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([name, bytes]) => ({
        name,
        bytes,
        percent: totalBytes > 0 ? Number(((bytes / totalBytes) * 100).toFixed(1)) : 0,
      })),
  };

  response.setHeader(
    'Cache-Control',
    `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${STALE_SECONDS}`,
  );
  return send(200, stats);
}

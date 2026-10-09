import type { GitHubCalendarDay, GitHubRepo, GitHubStats } from '../src/data/types';

const OWNER = 'fernandoleitepagani';
const CACHE_SECONDS = 300;
const STALE_SECONDS = 3600;

const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
const REST_USER_ENDPOINT = `https://api.github.com/users/${OWNER}`;

const HIDDEN_LANGUAGES = new Set(['Assembly', 'HTML', 'CSS']);

const USER_QUERY = `
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
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        restrictedContributionsCount
      }
      repositories(
        first: 100
        ownerAffiliations: [OWNER]
        privacy: PUBLIC
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          description
          url
          homepageUrl
          stargazerCount
          forkCount
          pushedAt
          isFork
          isArchived
          primaryLanguage {
            name
          }
          repositoryTopics(first: 20) {
            nodes {
              topic {
                name
              }
            }
          }
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

interface GraphQLRepository {
  name?: string;
  description?: string | null;
  url?: string;
  homepageUrl?: string | null;
  stargazerCount?: number;
  forkCount?: number;
  pushedAt?: string;
  isFork?: boolean;
  isArchived?: boolean;
  primaryLanguage?: { name?: string } | null;
  repositoryTopics?: { nodes?: Array<{ topic?: { name?: string } } | null> | null } | null;
  languages?: { edges?: Array<{ size?: number; node?: { name?: string } }> } | null;
}

interface GraphQLUser {
  contributionsCollection?: {
    contributionCalendar?: {
      totalContributions?: number;
      weeks?: Array<{
        contributionDays?: Array<{ date?: string; contributionCount?: number }>;
      }>;
    };
    totalCommitContributions?: number;
    totalIssueContributions?: number;
    totalPullRequestContributions?: number;
    totalPullRequestReviewContributions?: number;
    restrictedContributionsCount?: number;
  };
  repositories?: {
    totalCount?: number;
    nodes?: Array<GraphQLRepository | null> | null;
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

function streakStats(days: GitHubCalendarDay[]) {
  let longest = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    if (run > longest) longest = run;
  }

  let index = days.length - 1;
  if (index >= 0 && days[index].count === 0) index -= 1;
  let current = 0;
  while (index >= 0 && days[index].count > 0) {
    current += 1;
    index -= 1;
  }

  return { current, longest };
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
    return send(503, { error: 'github_unreachable' });
  }

  const user = graphQL.data.user;
  const calendar = user.contributionsCollection?.contributionCalendar;
  const repositoryNodes = user.repositories?.nodes ?? [];

  const calendarDays: GitHubCalendarDay[] = [];
  for (const week of calendar?.weeks ?? []) {
    for (const day of week.contributionDays ?? []) {
      if (day.date) calendarDays.push({ date: day.date, count: day.contributionCount ?? 0 });
    }
  }

  const bytesByLanguage = new Map<string, number>();
  for (const repo of repositoryNodes) {
    for (const edge of repo?.languages?.edges ?? []) {
      const name = edge.node?.name;
      const size = edge.size ?? 0;
      if (!name || size <= 0 || HIDDEN_LANGUAGES.has(name)) continue;
      bytesByLanguage.set(name, (bytesByLanguage.get(name) ?? 0) + size);
    }
  }
  const totalBytes = [...bytesByLanguage.values()].reduce((sum, bytes) => sum + bytes, 0);

  const repos: GitHubRepo[] = repositoryNodes
    .filter((repo): repo is GraphQLRepository => Boolean(repo?.name))
    .map((repo) => ({
      name: repo.name as string,
      description: repo.description ?? null,
      url: repo.url ?? '',
      homepageUrl: repo.homepageUrl ?? null,
      stars: repo.stargazerCount ?? 0,
      forks: repo.forkCount ?? 0,
      pushedAt: repo.pushedAt ?? '',
      language: repo.primaryLanguage?.name ?? null,
      topics: (repo.repositoryTopics?.nodes ?? [])
        .map((node) => node?.topic?.name)
        .filter((topic): topic is string => Boolean(topic)),
      isFork: Boolean(repo.isFork),
      isArchived: Boolean(repo.isArchived),
    }));

  const streaks = streakStats(calendarDays);

  const stats: GitHubStats = {
    username: OWNER,
    public_repos: restUser.public_repos ?? 0,
    followers: restUser.followers ?? 0,
    following: restUser.following ?? 0,
    created_at: restUser.created_at ?? '',
    contributions: {
      total: calendar?.totalContributions ?? 0,
      commits: user.contributionsCollection?.totalCommitContributions ?? 0,
      issues: user.contributionsCollection?.totalIssueContributions ?? 0,
      pullRequests: user.contributionsCollection?.totalPullRequestContributions ?? 0,
      reviews: user.contributionsCollection?.totalPullRequestReviewContributions ?? 0,
      restricted: user.contributionsCollection?.restrictedContributionsCount ?? 0,
      currentStreak: streaks.current,
      longestStreak: streaks.longest,
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
    repos,
  };

  response.setHeader(
    'Cache-Control',
    `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${STALE_SECONDS}`,
  );
  return send(200, stats);
}

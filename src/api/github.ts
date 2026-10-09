import type { GitHubStats } from '../data/types';

/** Same-origin route served by `api/github.ts`. */
const ENDPOINT = '/api/github';

function isGitHubStats(value: unknown): value is GitHubStats {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<GitHubStats>;
  return (
    typeof candidate.public_repos === 'number' &&
    typeof candidate.followers === 'number' &&
    typeof candidate.contributions?.total === 'number' &&
    Array.isArray(candidate.calendar) &&
    Array.isArray(candidate.languages)
  );
}

/**
 * Returns the stats payload, or `null` when the endpoint is missing, fails or
 * answers something unexpected (no token, GitHub down, offline visitor).
 * The UI simply hides the section — the page never breaks.
 */
export async function fetchGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const response = await fetch(`${ENDPOINT}?username=${encodeURIComponent(username)}`);
    if (!response.ok) return null;
    const payload: unknown = await response.json();
    return isGitHubStats(payload) ? payload : null;
  } catch {
    return null;
  }
}

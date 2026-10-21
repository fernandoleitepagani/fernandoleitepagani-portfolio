import { useCallback, useEffect, useState } from 'react';
import { fetchGitHubStats } from '../api/github';
import type { GitHubStats } from '../data/types';

export type GitHubStatsState = 'loading' | 'ready' | 'fallback';

export function useGitHubStats(username: string) {
  const [state, setState] = useState<GitHubStatsState>('loading');
  const [data, setData] = useState<GitHubStats | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setState('loading');

    fetchGitHubStats(username).then((result) => {
      if (!active) return;
      if (result) {
        setData(result);
        setState('ready');
      } else {
        setState('fallback');
      }
    });

    return () => {
      active = false;
    };
  }, [username, attempt]);

  const reload = useCallback(() => setAttempt((current) => current + 1), []);

  return { state, data, reload };
}

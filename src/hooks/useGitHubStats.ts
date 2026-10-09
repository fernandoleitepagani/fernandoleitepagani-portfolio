import { useEffect, useState } from 'react';
import { fetchGitHubStats } from '../api/github';
import type { GitHubStats } from '../data/types';

export type GitHubStatsState = 'loading' | 'ready' | 'fallback';

export function useGitHubStats(username: string) {
  const [state, setState] = useState<GitHubStatsState>('loading');
  const [data, setData] = useState<GitHubStats | null>(null);

  useEffect(() => {
    let active = true;

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
  }, [username]);

  return { state, data };
}

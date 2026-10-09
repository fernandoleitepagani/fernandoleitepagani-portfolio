import { Text } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';
import type { GitHubStats } from '../data/types';

/** Headline counters — contributions, commits, PRs, repos and followers. */
export default function StatsCard({ stats }: { stats: GitHubStats }) {
  const { t, lang } = useLanguage();
  const { about } = t;
  const number = new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US');

  const counters = [
    { label: about.statsContributions, value: stats.contributions.total },
    { label: about.statsCommits, value: stats.contributions.commits },
    { label: about.statsPullRequests, value: stats.contributions.pullRequests },
    { label: about.statsRepos, value: stats.public_repos },
    { label: about.statsFollowers, value: stats.followers },
  ];

  return (
    <div className="stats-counters">
      {counters.map((counter) => (
        <div key={counter.label} className="stats-counter">
          <Text className="stats-counter-value">{number.format(counter.value)}</Text>
          <Text className="stats-counter-label">{counter.label}</Text>
        </div>
      ))}
    </div>
  );
}

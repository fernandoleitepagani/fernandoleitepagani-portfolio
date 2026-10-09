import { Text } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';
import type { GitHubLanguage } from '../data/types';

export default function LanguageBars({ languages }: { languages: GitHubLanguage[] }) {
  const { t, lang } = useLanguage();
  const { about } = t;
  const percent = new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    maximumFractionDigits: 1,
  });

  return (
    <>
      <Text className="stats-block-title">{about.languagesTitle}</Text>

      <div className="lang-list">
        {languages.map((language) => (
          <div key={language.name} className="lang-row">
            <div className="lang-head">
              <Text className="lang-name">{language.name}</Text>
              <Text className="lang-percent">{percent.format(language.percent)}%</Text>
            </div>
            <div className="lang-track">
              <div className="lang-fill" style={{ width: `${language.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

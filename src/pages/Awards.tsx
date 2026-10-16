import { Anchor, Stack, Text, Title } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import PageCard from '../components/PageCard';
import { useLanguage } from '../context/LanguageContext';
import { awards } from '../data/awards';

export default function Awards() {
  const { lang } = useLanguage();
  const content = awards[lang];

  return (
    <Stack gap="md">
      {content.items.length === 0 && (
        <PageCard>
          <Text c="dimmed">{content.empty}</Text>
        </PageCard>
      )}

      {content.items.map((item) => (
        <PageCard key={item.title.en}>
          <Stack gap="xs">
            <Title order={2} className="award-title">
              {item.title[lang]}
            </Title>
            <Text size="sm" c="dimmed">
              {[item.issuer, ...(item.dates ?? [])].filter(Boolean).join(' · ')}
            </Text>
            <Text>{item.description[lang]}</Text>
            {item.link && (
              <Anchor href={item.link} target="_blank" rel="noreferrer" className="resume-link">
                <IconExternalLink size={15} stroke={1.6} />
                {item.title[lang]}
              </Anchor>
            )}
          </Stack>
        </PageCard>
      ))}
    </Stack>
  );
}

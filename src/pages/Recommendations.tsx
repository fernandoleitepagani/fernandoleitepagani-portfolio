import { Stack, Text, Title } from '@mantine/core';
import PageCard from '../components/PageCard';
import RecommendationCard from '../components/RecommendationCard';
import { useLanguage } from '../context/LanguageContext';
import { recommendations } from '../data/content';

export default function Recommendations() {
  const { t } = useLanguage();
  const recText = t.recommendations;

  return (
    <Stack gap="xl">
      <PageCard accent>
        <Stack gap="xs">
          <Title order={1} className="page-title">
            {recText.title}
          </Title>
          <Text c="dimmed" maw={640}>
            {recText.subtitle}
          </Text>
        </Stack>
      </PageCard>

      {recommendations.length === 0 ? (
        <Text c="dimmed">{recText.empty}</Text>
      ) : (
        <Stack gap="md">
          {recommendations.map((rec) => (
            <RecommendationCard key={rec.id} rec={rec} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

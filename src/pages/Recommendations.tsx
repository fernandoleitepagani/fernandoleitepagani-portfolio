import { Stack, Text, Title } from '@mantine/core';
import PageCard from '../components/PageCard';
import RecommendationCard from '../components/RecommendationCard';
import { useLanguage } from '../context/LanguageContext';
import { recommendations } from '../data/content';

export default function Recommendations() {
  const { t } = useLanguage();
  const { recommendations: copy } = t;

  return (
    <Stack gap="md">
      <PageCard>
        <Title order={1} className="page-title">
          {copy.title}
        </Title>
      </PageCard>

      {recommendations.length === 0 ? (
        <PageCard>
          <Text c="dimmed">{copy.empty}</Text>
        </PageCard>
      ) : (
        recommendations.map((rec) => (
          <RecommendationCard key={rec.id} rec={rec} />
        ))
      )}
    </Stack>
  );
}
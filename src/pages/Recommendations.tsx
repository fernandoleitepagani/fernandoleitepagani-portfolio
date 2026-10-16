import { Stack, Text } from '@mantine/core';
import PageCard from '../components/PageCard';
import RecommendationCard from '../components/RecommendationCard';
import { useLanguage } from '../context/LanguageContext';
import { recommendations } from '../data/content';

export default function Recommendations() {
  const { t } = useLanguage();
  const { recommendations: copy } = t;

  return (
    <Stack gap="md">
      {recommendations.length === 0 ? (
        <PageCard>
          <div className="recommendations-empty">
            <Text c="dimmed">{copy.empty}</Text>
          </div>
        </PageCard>
      ) : (
        recommendations.map((rec) => (
          <RecommendationCard key={rec.id} rec={rec} />
        ))
      )}
    </Stack>
  );
}
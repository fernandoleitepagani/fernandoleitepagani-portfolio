import { Stack, Text, Title } from '@mantine/core';
import SkillsSection from '../components/skills/SkillsSection';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Stack gap="xl" className="skills-page">
      <header className="page-head">
        <Title order={1} className="page-title page-display">
          {t.skills.title}
        </Title>
        <Text className="page-subtitle">{t.skills.subtitle}</Text>
      </header>

      <SkillsSection />
    </Stack>
  );
}

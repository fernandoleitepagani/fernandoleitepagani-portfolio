import { Stack, Text, Title } from '@mantine/core';
import PageCard from '../components/PageCard';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';

export default function Projects() {
  const { projects: text } = useLanguage().t;

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="xs">
          <Title order={1} className="page-title">
            {text.title}
          </Title>
          <Text c="dimmed">{text.subtitle}</Text>
        </Stack>
      </PageCard>

      <Stack gap="xl" className="projects-list">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </Stack>
    </Stack>
  );
}

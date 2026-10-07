import { SimpleGrid, Stack, Title } from '@mantine/core';
import PageCard from '../components/PageCard';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';

export default function Projects() {
  const { projects: text } = useLanguage().t;

  return (
    <Stack gap="md">
      <PageCard>
        <Title order={1} className="page-title">
          {text.title}
        </Title>
      </PageCard>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
import { Stack, Text, Title } from '@mantine/core';
import PageCard from '../components/PageCard';
import ProjectCard from '../components/ProjectCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useLanguage } from '../context/LanguageContext';
import { mergeProjects, profile, projects as curatedProjects } from '../data/content';

export default function Projects() {
  const { projects: text } = useLanguage().t;
  const { state, data } = useGitHubStats(profile.githubUser);

  const liveProjects = state === 'ready' && data ? mergeProjects(data.repos) : [];
  const projects = liveProjects.length > 0 ? liveProjects : curatedProjects;

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

import { Stack } from '@mantine/core';
import ProjectCard from '../components/ProjectCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { mergeProjects, profile, projects as curatedProjects } from '../data/content';

export default function Projects() {
  const { state, data } = useGitHubStats(profile.githubUser);

  const liveProjects = state === 'ready' && data ? mergeProjects(data.repos) : [];
  const projects = liveProjects.length > 0 ? liveProjects : curatedProjects;

  return (
    <Stack gap="md" className="projects-list">
      {projects.map((p) => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </Stack>
  );
}

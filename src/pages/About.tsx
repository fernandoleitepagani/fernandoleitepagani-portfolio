import {
  Anchor,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconBrandGithub, IconFileCv, IconMail } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import ContributionGrid from '../components/ContributionGrid';
import LanguageBars from '../components/LanguageBars';
import PageCard from '../components/PageCard';
import ProjectCard from '../components/ProjectCard';
import SkillsSection from '../components/skills/SkillsSection';
import StatsCard from '../components/StatsCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useLanguage } from '../context/LanguageContext';
import { mergeProjects, profile, projects as curatedProjects } from '../data/content';

export default function About() {
  const { t } = useLanguage();
  const { about, projects: text, interests } = t;
  const { state, data } = useGitHubStats(profile.githubUser);

  const liveProjects = state === 'ready' && data ? mergeProjects(data.repos) : [];
  const featured = (liveProjects.length > 0 ? liveProjects : curatedProjects).filter(
    (project) => project.featured,
  );
  const stats = state === 'ready' ? data : null;

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="lg">
          <Flex gap="xl" justify="space-between" direction={{ base: 'column-reverse', sm: 'row' }}>
            <Stack gap="md" maw={560}>
              <span className="availability">
                <span className="availability-dot" aria-hidden="true" />
                {about.available}
              </span>
              <Title order={1} className="page-title">
                {about.title}
              </Title>
              <div>
                {about.tagline.map((line) => (
                  <Text key={line}>{line}</Text>
                ))}
              </div>
              <Text>{about.description}</Text>
            </Stack>
            <img src="/photo.jpg" alt={profile.name} className="photo" width={280} height={280} />
          </Flex>
          <Group gap="sm" className="cta-row">
            <Anchor component={Link} to="/resume" className="cta">
              <IconFileCv size={15} stroke={1.6} />
              {about.ctaResume}
            </Anchor>
            <Anchor component={Link} to="/contact" className="cta">
              <IconMail size={15} stroke={1.6} />
              {about.ctaContact}
            </Anchor>
            <Anchor href={profile.github} target="_blank" rel="noreferrer" className="cta">
              <IconBrandGithub size={15} stroke={1.6} />
              {t.a11y.github}
            </Anchor>
          </Group>
        </Stack>
      </PageCard>

      <Stack gap="md">
        <Group justify="space-between">
          <Title order={2} className="page-title">
            {t.skills.title}
          </Title>
          <Anchor component={Link} to="/skills" className="link">
            {t.skills.explore} →
          </Anchor>
        </Group>
        <SkillsSection compact />
      </Stack>

      <Stack gap="md">
        <Title order={2} className="page-title">
          {interests.title}
        </Title>
        <List spacing="xs" className="interests">
          {interests.items.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
      </Stack>

      {featured.length > 0 && (
        <Stack gap="md">
          <Group justify="space-between">
            <Title order={2} className="page-title">
              {text.title}
            </Title>
            <Anchor component={Link} to="/projects">
              {text.viewAll}
            </Anchor>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            {featured.map((p) => (
              <ProjectCard key={p.name} project={p} variant="compact" />
            ))}
          </SimpleGrid>
        </Stack>
      )}

      {state !== 'fallback' && (
        <Stack gap="md">
          <Title order={2} className="page-title">
            {about.statsTitle}
          </Title>

          {state === 'loading' && <Skeleton height={160} radius="md" />}

          {state === 'ready' && stats && (
            <>
              <Paper className="subcard" p="md">
                <ContributionGrid days={stats.calendar} />
              </Paper>

              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <Paper className="subcard" p="md">
                  <LanguageBars languages={stats.languages} />
                </Paper>
                <Paper className="subcard" p="md">
                  <StatsCard stats={stats} />
                </Paper>
              </SimpleGrid>
            </>
          )}
        </Stack>
      )}
    </Stack>
  );
}

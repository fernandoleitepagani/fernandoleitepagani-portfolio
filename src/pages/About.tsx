import {
  Anchor,
  Badge,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import ContributionGrid from '../components/ContributionGrid';
import LanguageBars from '../components/LanguageBars';
import PageCard from '../components/PageCard';
import ProjectCard from '../components/ProjectCard';
import StatsCard from '../components/StatsCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useLanguage } from '../context/LanguageContext';
import { profile, projects } from '../data/content';

export default function About() {
  const { t } = useLanguage();
  const { about, projects: text, tools } = t;
  const featured = projects.filter((p) => p.featured);
  const { state, data: stats } = useGitHubStats(profile.githubUser);

  return (
    <Stack gap="xl">
      <PageCard>
        <Flex gap="xl" justify="space-between" direction={{ base: 'column-reverse', sm: 'row' }}>
          <Stack gap="md" maw={400}>
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
          <Image
            src="/photo.jpg"
            alt={profile.name}
            w={300}
            h={400}
            maw="100%"
            fit="cover"
            radius="md"
            className="photo"
          />
        </Flex>
      </PageCard>

      <Stack gap="md">
        <Title order={2} className="page-title">
          {tools.title}
        </Title>
        {tools.groups.map((group) => (
          <Stack key={group.name} gap="xs">
            <Text c="dimmed">{group.name}</Text>
            <Group gap="xs">
              {group.items.map((item) => (
                <Badge key={item} variant="outline" className="tag">
                  {item}
                </Badge>
              ))}
            </Group>
          </Stack>
        ))}
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
              <PageCard p="md">
                <ContributionGrid days={stats.calendar} />
              </PageCard>

              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <PageCard p="md">
                  <LanguageBars languages={stats.languages} />
                </PageCard>
                <PageCard p="md">
                  <StatsCard stats={stats} />
                </PageCard>
              </SimpleGrid>
            </>
          )}
        </Stack>
      )}
    </Stack>
  );
}

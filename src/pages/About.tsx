import {
  Anchor,
  Button,
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
import {
  IconBrandGithub,
  IconFileCv,
  IconMail,
  IconRefresh,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import Clamped from '../components/Clamped';
import ContributionGrid from '../components/ContributionGrid';
import LanguageBars from '../components/LanguageBars';
import PageCard from '../components/PageCard';
import PageIndex, { type PageIndexItem } from '../components/PageIndex';
import ProjectCard from '../components/ProjectCard';
import RecommendationCard from '../components/RecommendationCard';
import Rich from '../components/Rich';
import SectionHead from '../components/SectionHead';
import SkillsSection from '../components/skills/SkillsSection';
import StatsCard from '../components/StatsCard';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useLanguage } from '../context/LanguageContext';
import {
  mergeProjects,
  profile,
  projects as curatedProjects,
  recommendations,
} from '../data/content';

export default function About() {
  const { t } = useLanguage();
  const { about, projects: text, interests, resume, recommendations: recText } = t;
  const { state, data, reload } = useGitHubStats(profile.githubUser);

  const liveProjects = state === 'ready' && data ? mergeProjects(data.repos) : [];
  const featured = (liveProjects.length > 0 ? liveProjects : curatedProjects).filter(
    (project) => project.featured,
  );
  const stats = state === 'ready' ? data : null;

  const sections: PageIndexItem[] = [
    { id: 'research', label: resume.researchTitle },
    { id: 'education', label: resume.educationTitle },
    { id: 'projects', label: text.title },
    { id: 'skills', label: t.skills.title },
    { id: 'recommendations', label: recText.title },
    { id: 'interests', label: interests.title },
    { id: 'activity', label: about.githubTitle },
  ];

  return (
    <Stack gap="xl">
      <PageCard accent>
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
            <Link to="/resume" viewTransition className="cta">
              <IconFileCv size={15} stroke={1.6} />
              {about.ctaResume}
            </Link>
            <Link to="/contact" viewTransition className="cta">
              <IconMail size={15} stroke={1.6} />
              {about.ctaContact}
            </Link>
            <Anchor href={profile.github} target="_blank" rel="noreferrer" className="cta">
              <IconBrandGithub size={15} stroke={1.6} />
              {t.a11y.github}
            </Anchor>
          </Group>
        </Stack>
      </PageCard>

      <PageIndex items={sections} />

      <section id="research" className="page-section">
        <Stack gap="md">
          <SectionHead
            index={1}
            title={resume.researchTitle}
            action={
              <Link to="/resume" viewTransition className="link">
                {t.nav.resume} →
              </Link>
            }
          />
          <div className="entry-list">
            {resume.research.map((entry) => (
              <article className="entry" key={entry.title}>
                <div className="entry-head">
                  <Title order={3} className="entry-title">
                    {entry.title}
                  </Title>
                </div>
                <Text className="entry-meta">{entry.meta}</Text>
                <Clamped lines={3} className="entry-body">
                  <Rich text={entry.body} />
                </Clamped>
              </article>
            ))}
          </div>
        </Stack>
      </section>

      <section id="education" className="page-section">
        <Stack gap="md">
          <SectionHead
            index={2}
            title={resume.educationTitle}
            action={
              <Link to="/academics" viewTransition className="link">
                {t.nav.academics} →
              </Link>
            }
          />
          <div className="entry-list">
            {resume.education.map((entry) => (
              <article className="entry" key={entry.degree}>
                <div className="entry-head">
                  <Title order={3} className="entry-title">
                    {entry.degree}
                  </Title>
                </div>
                <Text className="entry-meta">{entry.meta}</Text>
                {entry.details && <Text className="entry-summary">{entry.details}</Text>}
              </article>
            ))}
          </div>
        </Stack>
      </section>

      {featured.length > 0 && (
        <section id="projects" className="page-section">
          <Stack gap="md">
            <SectionHead
              index={3}
              title={text.title}
              action={
                <Link to="/projects" viewTransition className="link">
                  {text.viewAll} →
                </Link>
              }
            />
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              {featured.map((project) => (
                <ProjectCard key={project.name} project={project} variant="compact" />
              ))}
            </SimpleGrid>
          </Stack>
        </section>
      )}

      <section id="skills" className="page-section">
        <Stack gap="md">
          <SectionHead
            index={4}
            title={t.skills.title}
            action={
              <Link to="/skills" viewTransition className="link">
                {t.skills.explore} →
              </Link>
            }
          />
          <SkillsSection compact />
        </Stack>
      </section>

      <section id="recommendations" className="page-section">
        <Stack gap="md">
          <SectionHead
            index={5}
            title={recText.title}
            action={
              <Link to="/recommendations" viewTransition className="link">
                {recText.viewAll} →
              </Link>
            }
          />
          {recommendations.length === 0 ? (
            <Text c="dimmed">{recText.empty}</Text>
          ) : (
            recommendations.slice(0, 2).map((rec) => <RecommendationCard key={rec.id} rec={rec} />)
          )}
        </Stack>
      </section>

      <section id="interests" className="page-section">
        <Stack gap="md">
          <SectionHead index={6} title={interests.title} />
          <List spacing="xs" className="interests">
            {interests.items.map((item) => (
              <List.Item key={item}>{item}</List.Item>
            ))}
          </List>
        </Stack>
      </section>

      <section id="activity" className="page-section">
        <Stack gap="md">
          <SectionHead index={7} title={about.githubTitle} />

          {state === 'loading' && <Skeleton height={160} radius="md" />}

          {state === 'fallback' && (
            <Paper className="subcard" p="md">
              <Stack gap="xs" align="flex-start">
                <Text className="stats-block-title">{about.githubError}</Text>
                <Text c="dimmed" size="sm">
                  {about.githubErrorHint}
                </Text>
                <Button
                  variant="default"
                  size="compact-sm"
                  leftSection={<IconRefresh size={14} stroke={1.6} />}
                  onClick={reload}
                >
                  {about.githubRetry}
                </Button>
              </Stack>
            </Paper>
          )}

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
      </section>
    </Stack>
  );
}

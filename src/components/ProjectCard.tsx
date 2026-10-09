import { Badge, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconExternalLink, IconGitFork, IconStar } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  variant?: 'showcase' | 'compact';
}

const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31536000000],
  ['month', 2592000000],
  ['week', 604800000],
  ['day', 86400000],
  ['hour', 3600000],
  ['minute', 60000],
];

function relativeTime(iso: string, locale: string) {
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const elapsed = Math.max(0, Date.now() - new Date(iso).getTime());
  for (const [unit, ms] of RELATIVE_UNITS) {
    const amount = Math.floor(elapsed / ms);
    if (amount >= 1) return formatter.format(-amount, unit);
  }
  return formatter.format(0, 'day');
}

export default function ProjectCard({ project, variant = 'showcase' }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const { live, sourceCode, stars, forks, updated, preview } = t.projects;
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const number = new Intl.NumberFormat(locale);
  const href = project.githubUrl ?? project.liveUrl;

  if (variant === 'compact') {
    return (
      <Paper className="subcard project-compact" p="md" h="100%">
        <Stack gap="xs" h="100%">
          <Group justify="space-between" gap="xs" wrap="nowrap">
            {href ? (
              <a className="project-compact-name" href={href} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            ) : (
              <Text fw={500}>{project.name}</Text>
            )}
            {project.stars !== undefined && (
              <span className="project-compact-meta" title={stars}>
                <IconStar size={13} stroke={1.6} />
                {number.format(project.stars)}
              </span>
            )}
          </Group>

          {project.description[lang] && (
            <Text c="dimmed" size="sm">
              {project.description[lang]}
            </Text>
          )}

          <Group gap="xs" mt="auto">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="tag">
                {tag}
              </Badge>
            ))}
          </Group>
          {href && (
            <a className="project-compact-btn" href={href} target="_blank" rel="noreferrer">
              <IconBrandGithub size={15} stroke={1.6} />
              {sourceCode}
            </a>
          )}
        </Stack>
      </Paper>
    );
  }

  return (
    <article className="project">
      <div className="project-inner">
        {project.screenshot && (
          <div className="project-media">
            <div className="project-window">
              <div className="project-window-bar" aria-hidden="true">
                <span className="project-dot" data-dot="red" />
                <span className="project-dot" data-dot="yellow" />
                <span className="project-dot" data-dot="green" />
              </div>
              <img
                className="project-image"
                src={project.screenshot}
                alt={`${project.name} — ${preview}`}
                loading="lazy"
              />
            </div>
          </div>
        )}

        <div className="project-info">
          <div className="project-info-top">
            <header>
              <Title order={2} className="project-name">
                {project.name}
              </Title>
              <Text className="project-category">{project.category[lang]}</Text>
            </header>

            <Group gap="xs" className="project-tags">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="tag">
                  {tag}
                </Badge>
              ))}
            </Group>

            {project.description[lang] && (
              <Text className="project-description">{project.description[lang]}</Text>
            )}

            {(project.stars !== undefined || project.pushedAt) && (
              <div className="project-meta">
                {project.stars !== undefined && (
                  <span className="project-stat" title={stars}>
                    <IconStar size={14} stroke={1.6} />
                    {number.format(project.stars)}
                  </span>
                )}
                {project.forks !== undefined && (
                  <span className="project-stat" title={forks}>
                    <IconGitFork size={14} stroke={1.6} />
                    {number.format(project.forks)}
                  </span>
                )}
                {project.pushedAt && (
                  <span className="project-stat">
                    {updated.replace('{when}', relativeTime(project.pushedAt, locale))}
                  </span>
                )}
              </div>
            )}
          </div>

          <nav className="project-links" aria-label={`${project.name} — links`}>
            {project.liveUrl && (
              <a
                className="project-link project-link-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <IconExternalLink size={15} stroke={1.6} />
                {live}
              </a>
            )}
            {project.githubUrl && (
              <a
                className="project-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandGithub size={15} stroke={1.6} />
                {sourceCode}
              </a>
            )}
          </nav>
        </div>
      </div>
    </article>
  );
}

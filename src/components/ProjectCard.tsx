import { Badge, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  /** `showcase` = full windowed card (Projects page); `compact` = small bordered card (About). */
  variant?: 'showcase' | 'compact';
}

export default function ProjectCard({ project, variant = 'showcase' }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const { live, sourceCode } = t.projects;
  const href = project.githubUrl ?? project.liveUrl;

  if (variant === 'compact') {
    return (
      <Paper className="subcard project-compact" p="md" h="100%">
        <Stack gap="xs" h="100%">
          {href ? (
            <a className="project-compact-name" href={href} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          ) : (
            <Text fw={500}>{project.name}</Text>
          )}
          <Text c="dimmed" size="sm">
            {project.description[lang]}
          </Text>
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
                alt={`${project.name} preview`}
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

            <Text className="project-description">{project.description[lang]}</Text>
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

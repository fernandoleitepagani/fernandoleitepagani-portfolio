import { Anchor, Badge, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageCard from '../components/PageCard';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const text = t.projects;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="lg">
          <Anchor component={Link} to="/projects" className="back-link">
            <IconArrowLeft size={15} stroke={1.6} />
            {text.back}
          </Anchor>

          <Stack gap="xs">
            <Text className="project-category">{project.category[lang]}</Text>
            <Title order={1} className="page-title">
              {project.name}
            </Title>
            {project.summary && <Text className="detail-summary">{project.summary[lang]}</Text>}
          </Stack>

          <div className="detail-body">
            <div className="detail-main">
              {project.images?.[0] && (
                <div className="project-window">
                  <div className="project-window-bar" aria-hidden="true">
                    <span className="project-dot" data-dot="red" />
                    <span className="project-dot" data-dot="yellow" />
                    <span className="project-dot" data-dot="green" />
                  </div>
                  <img
                    className="project-image"
                    src={project.images[0]}
                    alt={`${project.name} — ${text.preview}`}
                  />
                </div>
              )}

              {project.sections?.map((section) => (
                <Stack key={section.title.en} gap="xs" className="detail-section">
                  <Title order={2} className="detail-section-title">
                    {section.title[lang]}
                  </Title>
                  <Text>{section.body[lang]}</Text>
                </Stack>
              ))}
            </div>

            <aside className="detail-aside">
              {project.period && (
                <div className="subcard detail-meta">
                  <Text className="detail-meta-label">{text.period}</Text>
                  <Text>{project.period}</Text>
                </div>
              )}

              <div className="subcard detail-meta">
                <Text className="detail-meta-label">{text.stack}</Text>
                <Group gap="xs">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="tag">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="subcard detail-meta">
                  <Text className="detail-meta-label">{text.links}</Text>
                  {project.liveUrl && (
                    <Anchor
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-link"
                    >
                      <IconExternalLink size={15} stroke={1.6} />
                      {text.live}
                    </Anchor>
                  )}
                  {project.githubUrl && (
                    <Anchor
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-link"
                    >
                      <IconBrandGithub size={15} stroke={1.6} />
                      {text.sourceCode}
                    </Anchor>
                  )}
                </div>
              )}
            </aside>
          </div>
        </Stack>
      </PageCard>
    </Stack>
  );
}

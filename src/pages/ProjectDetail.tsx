import { Anchor, Badge, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Clamped from '../components/Clamped';
import PageCard from '../components/PageCard';
import PageIndex, { type PageIndexItem } from '../components/PageIndex';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const text = t.projects;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const sections = project.sections ?? [];
  const contents: PageIndexItem[] = sections.map((section, index) => ({
    id: `section-${index}`,
    label: section.title[lang],
  }));

  return (
    <Stack gap="xl">
      <PageCard accent>
        <Stack gap="lg">
          <Link to="/projects" viewTransition className="back-link">
            <IconArrowLeft size={15} stroke={1.6} />
            {text.back}
          </Link>

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

              {sections.map((section, index) => (
                <Stack
                  key={section.title.en}
                  gap="xs"
                  className="detail-section"
                  id={`section-${index}`}
                >
                  <Title order={2} className="detail-section-title">
                    <span className="section-num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.title[lang]}
                  </Title>
                  <Clamped lines={3} className="detail-section-body">
                    {section.body[lang]}
                  </Clamped>
                </Stack>
              ))}
            </div>

            <aside className="detail-aside">
              {contents.length > 1 && <PageIndex items={contents} className="page-index-aside" />}

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

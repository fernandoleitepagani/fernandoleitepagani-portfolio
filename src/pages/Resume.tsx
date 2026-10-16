import { Anchor, Badge, Group, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail } from '@tabler/icons-react';
import PageCard from '../components/PageCard';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/content';
import type { Lang, ResumeEducation, ResumeEntry } from '../data/types';

const RESUME_PDF: Record<Lang, string> = {
  en: '/resume/fernando-leite-pagani-resume-en.pdf',
  pt: '/resume/fernando-leite-pagani-resume-pt.pdf',
};

function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <Group gap="xs">
      {items.map((item) => (
        <Badge key={item} variant="outline" className="tag">
          {item}
        </Badge>
      ))}
    </Group>
  );
}

function ExperienceEntry({ entry }: { entry: ResumeEntry }) {
  return (
    <Stack gap={6} className="resume-entry">
      <Group justify="space-between" align="baseline" gap="md" wrap="wrap">
        <Text fw={500}>{entry.role}</Text>
        <Text className="resume-period">{entry.period}</Text>
      </Group>
      <Text size="sm" c="dimmed">
        {[entry.org, entry.location].filter(Boolean).join(' · ')}
      </Text>
      <Text size="sm">{entry.summary}</Text>
      {entry.bullets.length > 0 && (
        <ul className="resume-list">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      <Tags items={entry.tags} />
    </Stack>
  );
}

function EducationEntry({ entry }: { entry: ResumeEducation }) {
  return (
    <Stack gap={6} className="resume-entry">
      <Group justify="space-between" align="baseline" gap="md" wrap="wrap">
        <Text fw={500}>{entry.degree}</Text>
        <Text className="resume-period">{entry.period}</Text>
      </Group>
      <Text size="sm" c="dimmed">
        {entry.school}
      </Text>
      <Text size="sm">{entry.summary}</Text>
      <Tags items={entry.tags} />
    </Stack>
  );
}

export default function Resume() {
  const { t, lang } = useLanguage();
  const { resume, tools, contact } = t;

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" gap="md" wrap="wrap">
            <Stack gap={4}>
              <Title order={1} className="page-title">
                {profile.name}
              </Title>
              <Text c="dimmed">{resume.role}</Text>
              <Text size="sm" c="dimmed">
                {profile.location}
              </Text>
            </Stack>
            <Anchor className="cta" href={RESUME_PDF[lang]} download>
              <IconDownload size={15} stroke={1.6} />
              {resume.download}
            </Anchor>
          </Group>

          <Group gap="lg" className="resume-links">
            <Anchor href={`mailto:${profile.email}`} className="resume-link">
              <IconMail size={15} stroke={1.6} />
              {profile.email}
            </Anchor>
            <Anchor href={profile.linkedin} target="_blank" rel="noreferrer" className="resume-link">
              <IconBrandLinkedin size={15} stroke={1.6} />
              {contact.labelLinkedin}
            </Anchor>
            <Anchor href={profile.github} target="_blank" rel="noreferrer" className="resume-link">
              <IconBrandGithub size={15} stroke={1.6} />
              {contact.labelGithub}
            </Anchor>
          </Group>

          <Group gap="xl" className="resume-highlights">
            {resume.highlights.map((highlight) => (
              <div key={highlight.label} className="resume-highlight">
                <Text className="resume-highlight-value">{highlight.value}</Text>
                <Text size="sm" c="dimmed">
                  {highlight.label}
                </Text>
              </div>
            ))}
          </Group>
        </Stack>
      </PageCard>

      <PageCard>
        <Stack gap="md">
          <Title order={2} className="page-title">
            {resume.summaryTitle}
          </Title>
          <Text>{resume.summary}</Text>
        </Stack>
      </PageCard>

      <PageCard>
        <Stack gap="md">
          <Title order={2} className="page-title">
            {resume.experienceTitle}
          </Title>
          {resume.experience.map((entry) => (
            <ExperienceEntry key={entry.role} entry={entry} />
          ))}
        </Stack>
      </PageCard>

      <PageCard>
        <Stack gap="md">
          <Title order={2} className="page-title">
            {resume.educationTitle}
          </Title>
          {resume.education.map((entry) => (
            <EducationEntry key={entry.degree} entry={entry} />
          ))}
        </Stack>
      </PageCard>

      <PageCard>
        <Stack gap="lg">
          <Stack gap="md">
            <Title order={2} className="page-title">
              {resume.skillsTitle}
            </Title>
            {tools.groups.map((group) => (
              <Stack key={group.name} gap="xs">
                <Text c="dimmed">{group.name}</Text>
                <Tags items={group.items} />
              </Stack>
            ))}
          </Stack>

          <Stack gap={4}>
            <Title order={2} className="page-title">
              {resume.languagesTitle}
            </Title>
            {resume.languages.map((language) => (
              <div key={language.name} className="resume-lang">
                <Text size="sm">{language.name}</Text>
                <Text size="sm" c="dimmed">
                  {language.level}
                </Text>
              </div>
            ))}
          </Stack>
        </Stack>
      </PageCard>
    </Stack>
  );
}

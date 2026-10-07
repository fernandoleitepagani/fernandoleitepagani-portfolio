import { Anchor, Badge, Group, Paper, Stack, Text } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../data/content';

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <Paper className="subcard" p="md" h="100%">
      <Stack gap="xs" h="100%">
        <Anchor href={project.url} target="_blank" rel="noreferrer" fw={500}>
          {project.name}
        </Anchor>
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
        <Anchor href={project.url} target="_blank" rel="noreferrer" className="btn" w="fit-content" px="sm" py={4}>
          GitHub ↗
        </Anchor>
      </Stack>
    </Paper>
  );
}

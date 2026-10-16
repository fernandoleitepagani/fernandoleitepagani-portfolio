import { Anchor, Avatar, Group, Paper, Stack, Text } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Clamped from './Clamped';
import { useLanguage } from '../context/LanguageContext';
import type { Recommendation } from '../data/content';

export default function RecommendationCard({
  rec,
  full = false,
}: {
  rec: Recommendation;
  full?: boolean;
}) {
  const { lang } = useLanguage();
  const initial = rec.name.trim().charAt(0).toUpperCase();

  return (
    <Paper className="subcard" p="md">
      <Group align="flex-start" wrap="nowrap" gap="md">
        <Avatar
          src={rec.avatar}
          alt={rec.name}
          size={72}
          radius="50%"
          className="recommendation-avatar"
        >
          {initial}
        </Avatar>

        <Stack gap={6} style={{ flex: 1, minWidth: 0 }}>
          <Text className="recommendation-name">{rec.name}</Text>

          <Text className="recommendation-relationship">{rec.relationship[lang]}</Text>

          {full ? (
            <Text className="recommendation-text">{rec.text[lang]}</Text>
          ) : (
            <Clamped lines={4} className="recommendation-text">
              {rec.text[lang]}
            </Clamped>
          )}

          {rec.link && (
            <Anchor
              href={rec.link}
              target="_blank"
              rel="noreferrer"
              className="recommendation-link"
            >
              <IconBrandLinkedin size={16} stroke={1.5} />
              LinkedIn
            </Anchor>
          )}
        </Stack>
      </Group>
    </Paper>
  );
}

import { useLayoutEffect, useRef, useState } from 'react';
import { Anchor, Avatar, Group, Paper, Stack, Text } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext';
import type { Recommendation } from '../data/content';

export default function RecommendationCard({ rec }: { rec: Recommendation }) {
  const { lang, t } = useLanguage();
  const { readMore, readLess } = t.recommendations;
  const initial = rec.name.trim().charAt(0).toUpperCase();
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element || expanded) return;
    setClamped(element.scrollHeight > element.clientHeight + 1);
  }, [rec.text, lang, expanded]);

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

          <Text ref={textRef} className="recommendation-text" data-clamped={!expanded || undefined}>
            {rec.text[lang]}
          </Text>

          {(clamped || expanded) && (
            <button
              type="button"
              className="recommendation-toggle"
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? readLess : readMore}
            </button>
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

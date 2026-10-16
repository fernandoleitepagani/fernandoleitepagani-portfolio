import { useState, type CSSProperties } from 'react';
import { Badge, Group, SegmentedControl, Stack, Text } from '@mantine/core';
import { IconGlobe, IconGridDots } from '@tabler/icons-react';
import SkillsGlobe from './SkillsGlobe';
import { SKILL_CATEGORIES, skills, type SkillCategoryId } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const themeInk: Record<string, string> = {
  dark: '#ffffff',
  matrix: '#00ff41',
  crt: '#52ff2f',
};

interface SkillsSectionProps {
  compact?: boolean;
}

export default function SkillsSection({ compact = false }: SkillsSectionProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [category, setCategory] = useState<SkillCategoryId | 'all'>('all');
  const [view, setView] = useState<'globe' | 'list'>('globe');

  const filtered = category === 'all' ? skills : skills.filter((s) => s.category === category);
  const count = (cat: SkillCategoryId | 'all') =>
    cat === 'all' ? skills.length : skills.filter((s) => s.category === cat).length;

  const categories: (SkillCategoryId | 'all')[] = ['all', ...SKILL_CATEGORIES];

  return (
    <Stack gap="md">
      <Group justify="space-between" gap="md">
        <Group gap={6}>
          {categories.map((cat) => (
            <Badge
              key={cat}
              component="button"
              type="button"
              variant={cat === category ? 'filled' : 'outline'}
              className="tag skills-chip"
              aria-pressed={cat === category}
              onClick={() => setCategory(cat)}
            >
              {cat === 'all' ? t.skills.all : t.skills.categories[cat]} · {count(cat)}
            </Badge>
          ))}
        </Group>
        {!compact && (
          <SegmentedControl
            data={[
              {
                value: 'globe',
                label: (
                  <Group gap={6} justify="center">
                    <IconGlobe size={15} stroke={1.6} />
                    <Text size="xs">{t.skills.viewGlobe}</Text>
                  </Group>
                ),
              },
              {
                value: 'list',
                label: (
                  <Group gap={6} justify="center">
                    <IconGridDots size={15} stroke={1.6} />
                    <Text size="xs">{t.skills.viewList}</Text>
                  </Group>
                ),
              },
            ]}
            value={view}
            onChange={(value) => setView(value as 'globe' | 'list')}
          />
        )}
      </Group>

      {view === 'globe' || compact ? (
        <Stack gap={6}>
          <SkillsGlobe
            key={category}
            skills={filtered}
            color={themeInk[theme]}
            label={t.skills.title}
            compact={compact}
          />
          <Text size="xs" c="dimmed" ta="center">
            {t.skills.hint}
          </Text>
        </Stack>
      ) : (
        <ul className="skills-grid">
          {filtered.map((skill) => {
            const Icon = skill.icon;
            return (
              <li key={skill.name}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--skill': skill.color } as CSSProperties}
                >
                  {Icon ? <Icon aria-hidden="true" /> : <span className="skills-monogram">{skill.monogram}</span>}
                  <span>{skill.name}</span>
                  <small>{t.skills.categories[skill.category]}</small>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </Stack>
  );
}

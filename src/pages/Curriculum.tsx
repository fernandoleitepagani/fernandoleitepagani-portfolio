import { Stack, Text, Title } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';

export default function Curriculum() {
  const { curriculum } = useLanguage().t;

  return (
    <Stack gap="md">
      <Title order={1} className="page-title">
        {curriculum.title}
      </Title>
      <div className="timeline">
        {curriculum.items.map((item) => (
          <div key={item.period + item.title} className="timeline-row">
            <Text c="dimmed" className="timeline-period">
              {item.period}
            </Text>
            <div className="timeline-body">
              <Text>{item.title}</Text>
              <Text c="dimmed" size="sm">
                {item.place}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Stack>
  );
}

import { List, Stack, Title } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';

export default function Interests() {
  const { interests } = useLanguage().t;

  return (
    <Stack gap="md">
      <Title order={1} className="page-title">{interests.title}</Title>
      <List spacing="xs">
        {interests.items.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </Stack>
  );
}

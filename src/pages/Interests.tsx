import { List, Stack, Title } from '@mantine/core';
import PageCard from '../components/PageCard';
import { useLanguage } from '../context/LanguageContext';

export default function Interests() {
  const { interests } = useLanguage().t;

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="md">
          <Title order={1} className="page-title">
            {interests.title}
          </Title>
          <List spacing="xs">
            {interests.items.map((item) => (
              <List.Item key={item}>{item}</List.Item>
            ))}
          </List>
        </Stack>
      </PageCard>
    </Stack>
  );
}

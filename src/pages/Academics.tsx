import { Anchor, Stack, Table, Text, Title } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import PageCard from '../components/PageCard';
import { useLanguage } from '../context/LanguageContext';
import { academics } from '../data/academics';

export default function Academics() {
  const { lang } = useLanguage();
  const content = academics[lang];
  const hasGrades = content.semesters.some((semester) =>
    semester.courses.some((course) => course.grade),
  );

  return (
    <Stack gap="xl">
      <PageCard>
        <Stack gap="xs">
          <Title order={1} className="page-title">
            {content.title}
          </Title>
          <Text c="dimmed">{content.subtitle}</Text>
        </Stack>
      </PageCard>

      <PageCard>
        <Stack gap="xs">
          <Title order={2} className="page-title">
            {content.degree}
          </Title>
          <Text c="dimmed">{content.school}</Text>
          <Text>{content.status}</Text>
        </Stack>
      </PageCard>

      {content.semesters.map((semester) => (
        <PageCard key={semester.label.en}>
          <Stack gap="md">
            <Title order={2} className="page-title">
              {semester.label[lang]}
            </Title>
            <Table className="grades-table" verticalSpacing="xs" highlightOnHover={false}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>{content.coursesLabel}</Table.Th>
                  {hasGrades && (
                    <Table.Th w={90} ta="right">
                      {content.gradeLabel}
                    </Table.Th>
                  )}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {semester.courses.map((course) => (
                  <Table.Tr key={course.name.en}>
                    <Table.Td>{course.name[lang]}</Table.Td>
                    {hasGrades && (
                      <Table.Td ta="right">{course.grade ?? '—'}</Table.Td>
                    )}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </PageCard>
      ))}

      {content.certificates.length > 0 && (
        <PageCard>
          <Stack gap="md">
            <Title order={2} className="page-title">
              {content.certificatesLabel}
            </Title>
            {content.certificates.map((certificate) => (
              <Stack key={certificate.name.en} gap={4} className="resume-entry">
                <Text fw={500}>{certificate.name[lang]}</Text>
                <Text size="sm" c="dimmed">
                  {[certificate.issuer, certificate.year].filter(Boolean).join(' · ')}
                </Text>
                {certificate.link && (
                  <Anchor
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-link"
                  >
                    <IconExternalLink size={15} stroke={1.6} />
                    {certificate.name[lang]}
                  </Anchor>
                )}
              </Stack>
            ))}
          </Stack>
        </PageCard>
      )}
    </Stack>
  );
}

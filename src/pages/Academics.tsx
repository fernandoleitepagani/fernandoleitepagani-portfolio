import { Anchor, Stack, Table, Text, Title } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import PageCard from '../components/PageCard';
import SectionHead from '../components/SectionHead';
import { useLanguage } from '../context/LanguageContext';
import { academics } from '../data/academics';
import { awards } from '../data/awards';

export default function Academics() {
  const { lang } = useLanguage();
  const content = academics[lang];
  const honors = awards[lang];
  const hasGrades = content.semesters.some((semester) =>
    semester.courses.some((course) => course.grade),
  );

  let index = 0;
  const next = () => {
    index += 1;
    return index;
  };

  return (
    <Stack gap="md">
      <PageCard accent>
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
            <SectionHead index={next()} title={semester.label[lang]} />
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
                    {hasGrades && <Table.Td ta="right">{course.grade ?? '—'}</Table.Td>}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </PageCard>
      ))}

      {content.certificates.length > 0 && (
        <section className="page-section">
          <Stack gap="md">
            <SectionHead index={next()} title={content.certificatesLabel} />
            <div className="entry-list">
              {content.certificates.map((certificate) => (
                <article className="entry" key={certificate.name.en}>
                  <div className="entry-head">
                    <Title order={3} className="entry-title">
                      {certificate.name[lang]}
                    </Title>
                    {certificate.year && <span className="entry-period">{certificate.year}</span>}
                  </div>
                  <Text className="entry-meta">{certificate.issuer}</Text>
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
                </article>
              ))}
            </div>
          </Stack>
        </section>
      )}

      {honors.items.length > 0 && (
        <section className="page-section">
          <Stack gap="md">
            <SectionHead index={next()} title={honors.title} />
            <div className="entry-list">
              {honors.items.map((item) => (
                <article className="entry" key={item.title.en}>
                  <div className="entry-head">
                    <Title order={3} className="entry-title">
                      {item.title[lang]}
                    </Title>
                    {item.dates && item.dates.length > 0 && (
                      <span className="entry-period">{item.dates.join(' · ')}</span>
                    )}
                  </div>
                  <Text className="entry-meta">{item.issuer}</Text>
                  <Text className="entry-summary">{item.description[lang]}</Text>
                  {item.link && (
                    <Anchor
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-link"
                    >
                      <IconExternalLink size={15} stroke={1.6} />
                      {item.title[lang]}
                    </Anchor>
                  )}
                </article>
              ))}
            </div>
          </Stack>
        </section>
      )}
    </Stack>
  );
}

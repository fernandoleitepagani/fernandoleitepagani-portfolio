import { Anchor } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext';
import { profile, type Lang } from '../data/content';

const RESUME_PDF: Record<Lang, string> = {
  en: '/resume/fernando-leite-pagani-resume-en.pdf',
  pt: '/resume/fernando-leite-pagani-resume-pt.pdf',
};

const SITE_HOST = new URL(profile.website).host;

export default function Resume() {
  const { t, lang } = useLanguage();
  const { resume } = t;

  return (
    <div className="resume">
      <div className="resume-toolbar">
        <Anchor className="cta" href={RESUME_PDF[lang]} download>
          <IconDownload size={15} stroke={1.6} />
          {resume.download}
        </Anchor>
      </div>

      <article className="resume-sheet">
        <header className="resume-head">
          <h1>{profile.name}</h1>
          <p className="resume-role">{resume.role}</p>
          <p className="resume-contact">
            <span>{profile.location}</span>
            <span className="sep">·</span>
            <a href={`mailto:${profile.emailWork}`}>{profile.emailWork}</a>
          </p>
          <p className="resume-contact">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/fernandoleitepagani
            </a>
            <span className="sep">·</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/fernandoleitepagani
            </a>
            <span className="sep">·</span>
            <a href={profile.website} target="_blank" rel="noreferrer">
              {SITE_HOST}
            </a>
          </p>
        </header>

        <section>
          <h2>{resume.summaryTitle}</h2>
          <p>{resume.summary}</p>
        </section>

        <section>
          <h2>{resume.educationTitle}</h2>
          {resume.education.map((entry) => (
            <div className="resume-entry" key={entry.degree}>
              <p className="resume-entry-line">
                <strong>{entry.degree}</strong>
                {entry.meta && <span className="resume-entry-meta"> | {entry.meta}</span>}
              </p>
              {entry.details && <p>{entry.details}</p>}
            </div>
          ))}
        </section>

        <section>
          <h2>{resume.researchTitle}</h2>
          {resume.research.map((entry) => (
            <div className="resume-entry" key={entry.title}>
              <p className="resume-entry-line">
                <strong>{entry.title}</strong>
                {entry.meta && <span className="resume-entry-meta"> | {entry.meta}</span>}
              </p>
              <p>{entry.body}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>{resume.projectsTitle}</h2>
          {resume.projects.map((entry) => (
            <div className="resume-entry" key={entry.title}>
              <p className="resume-entry-line">
                <strong>{entry.title}</strong>
                {entry.meta && <span className="resume-entry-meta"> | {entry.meta}</span>}
              </p>
              <p>{entry.body}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>{resume.skillsTitle}</h2>
          {resume.skillLines.map((line) => (
            <p className="resume-line" key={line[0].name}>
              {line.map((skill, index) => (
                <span key={skill.name}>
                  <strong>{skill.name}:</strong> {skill.items}
                  {index < line.length - 1 && <span className="sep"> · </span>}
                </span>
              ))}
            </p>
          ))}
          <p className="resume-line">
            {resume.languages.map((language, index) => (
              <span key={language.name}>
                <strong>{language.name}:</strong> {language.level}
                {index < resume.languages.length - 1 && <span className="sep"> · </span>}
              </span>
            ))}
          </p>
          <p className="resume-line">
            <strong>{resume.availability.label}:</strong> {resume.availability.text}
          </p>
        </section>
      </article>
    </div>
  );
}

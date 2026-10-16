import { Anchor } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import Rich from '../components/Rich';
import { useLanguage } from '../context/LanguageContext';
import { profile, type Lang } from '../data/content';

const RESUME_PDF: Record<Lang, string> = {
  en: '/resume/fernando-leite-pagani-resume-en.pdf',
  pt: '/resume/fernando-leite-pagani-resume-pt.pdf',
};

const PORTFOLIO_URL = 'https://fernandoleitepagani-portfolio.vercel.app/';

export default function Resume() {
  const { t, lang } = useLanguage();
  const { resume, tools } = t;
  const portfolio = lang === 'pt' ? 'Portfólio' : 'Portfolio';

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
            <a href={`mailto:${profile.emailWork}`}>{profile.emailWork}</a>
            <span className="sep">|</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="sep">|</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="sep">|</span>
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer">
              {portfolio}
            </a>
          </p>
        </header>

        <section>
          <h2>{resume.summaryTitle}</h2>
          <p>
            <Rich text={resume.summary} />
          </p>
        </section>

        <section>
          <h2>{resume.experienceTitle}</h2>
          {resume.experience.map((entry) => (
            <div className="resume-entry" key={entry.role}>
              <div className="resume-entry-head">
                <span className="resume-entry-title">
                  {entry.role}
                  <span className="resume-entry-type">
                    {' | '}
                    {[entry.org, entry.location].filter(Boolean).join(' · ')}
                  </span>
                </span>
                <span className="resume-entry-period">{entry.period}</span>
              </div>
              <p className="resume-entry-org">{entry.summary}</p>
              <p>
                <Rich text={entry.body} />
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2>{resume.educationTitle}</h2>
          {resume.education.map((entry) => (
            <div className="resume-entry" key={entry.degree}>
              <div className="resume-entry-head">
                <span className="resume-entry-title">{entry.degree}</span>
                <span className="resume-entry-period">{entry.period}</span>
              </div>
              <p className="resume-entry-org no-italic">{entry.school}</p>
              <p>
                <Rich text={entry.summary} />
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2>{resume.skillsTitle}</h2>
          {tools.groups.map((group) => (
            <p className="resume-line" key={group.name}>
              <strong>{group.name}:</strong> {group.items.join(', ')}
            </p>
          ))}
        </section>

        <section>
          <h2>{resume.languagesTitle}</h2>
          {resume.languages.map((language) => (
            <p className="resume-line" key={language.name}>
              <strong>{language.name}:</strong> {language.level}
            </p>
          ))}
        </section>
      </article>
    </div>
  );
}

import type { AcademicsContent, Lang } from './types';

export const academics: Record<Lang, AcademicsContent> = {
  en: {
    title: 'Academics',
    subtitle: 'My Computer Science degree at PUC Minas, semester by semester.',
    degree: 'B.Sc. Computer Science',
    school: 'PUC Minas — Belo Horizonte, MG',
    status: 'Currently in the 2nd semester',
    coursesLabel: 'Courses',
    gradeLabel: 'Grade',
    certificatesLabel: 'Certificates & licenses',
    certificates: [
      {
        name: {
          en: 'Cambridge English: First (FCE)',
          pt: 'Cambridge English: First (FCE)',
        },
        issuer: 'Cambridge English',
      },
    ],
    semesters: [
      {
        label: { en: '1st semester', pt: '1º período' },
        courses: [
          { name: { en: 'Algorithms and Data Structures I', pt: 'Algoritmos e Estruturas de Dados I' } },
          { name: { en: 'Introduction to Computing', pt: 'Introdução à Computação' } },
          { name: { en: 'Discrete Mathematics', pt: 'Matemática Discreta' } },
          { name: { en: 'Interdisciplinary Project I', pt: 'Trabalho Interdisciplinar I' } },
        ],
      },
      {
        label: { en: '2nd semester', pt: '2º período' },
        courses: [
          { name: { en: 'Algorithms and Data Structures II', pt: 'Algoritmos e Estruturas de Dados II' } },
          { name: { en: 'Databases I', pt: 'Banco de Dados I' } },
          { name: { en: 'Web Interface Development', pt: 'Desenvolvimento de Interfaces Web' } },
          { name: { en: 'Software Engineering', pt: 'Engenharia de Software' } },
          { name: { en: 'Interdisciplinary Project II', pt: 'Trabalho Interdisciplinar II' } },
        ],
      },
    ],
  },
  pt: {
    title: 'Acadêmico',
    subtitle: 'Minha graduação em Ciência da Computação na PUC Minas, período por período.',
    degree: 'Bacharelado em Ciência da Computação',
    school: 'PUC Minas — Belo Horizonte, MG',
    status: 'Atualmente no 2º período',
    coursesLabel: 'Disciplinas',
    gradeLabel: 'Nota',
    certificatesLabel: 'Certificados e licenças',
    certificates: [
      {
        name: {
          en: 'Cambridge English: First (FCE)',
          pt: 'Cambridge English: First (FCE)',
        },
        issuer: 'Cambridge English',
      },
    ],
    semesters: [
      {
        label: { en: '1st semester', pt: '1º período' },
        courses: [
          { name: { en: 'Algorithms and Data Structures I', pt: 'Algoritmos e Estruturas de Dados I' } },
          { name: { en: 'Introduction to Computing', pt: 'Introdução à Computação' } },
          { name: { en: 'Discrete Mathematics', pt: 'Matemática Discreta' } },
          { name: { en: 'Interdisciplinary Project I', pt: 'Trabalho Interdisciplinar I' } },
        ],
      },
      {
        label: { en: '2nd semester', pt: '2º período' },
        courses: [
          { name: { en: 'Algorithms and Data Structures II', pt: 'Algoritmos e Estruturas de Dados II' } },
          { name: { en: 'Databases I', pt: 'Banco de Dados I' } },
          { name: { en: 'Web Interface Development', pt: 'Desenvolvimento de Interfaces Web' } },
          { name: { en: 'Software Engineering', pt: 'Engenharia de Software' } },
          { name: { en: 'Interdisciplinary Project II', pt: 'Trabalho Interdisciplinar II' } },
        ],
      },
    ],
  },
};

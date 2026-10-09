import type { Recommendation } from './types';

export const recommendations: Recommendation[] = [
  {
    id: 'rec-joao-paulo-aramuni',
    name: 'João Paulo Aramuni',
    year: 2026,
    avatar: '/linkedin/rec-joaopauloaramuni.jpg',
    relationship: {
      en: "Professor, CTO and tech consultant — was Fernando's mentor at PUC Minas",
      pt: 'Professor, CTO e consultor de tecnologia — foi mentor do Fernando na PUC Minas',
    },
    text: {
      en: [
        'I met Fernando as a student in Web Interface Development (DIW) and in Interdisciplinary Work II (Front-end), in the Computer Science programme at PUC Minas. But much of what I know about him I learned outside class hours: in the conversations before and after class, when he would always show up with a new project to present, a technology he had just discovered, or a question that already arrived half-solved.',
        'He is a guaranteed presence in my DIW workshops, where we build projects with Spring Boot and JavaScript. And he is the kind of student who is not satisfied with making things work: he wants to understand why they work. Not by chance, he started a React portfolio of his own and is part of the Web Tech community at PUC Minas, always chasing the next thing to learn.',
        'In the Interdisciplinary Work I saw a born leader up close. Fernando drives the team, organises the work, resolves the merge conflicts in the pull requests, and still leads in number of commits and lines of code. It is a leadership that does not stay in words: it is the kind that sits down and does it with you.',
        'Any team that takes Fernando on will gain someone curious, organised and generous with what he knows. Just one warning: he will show up with Vim configured and an energy drink in hand. I recommend him without any reservation, and with great pride in having followed a piece of that journey.',
        'Fernando, keep it up. I am rooting for you!',
      ].join('\n\n'),
      pt: [
        'Conheci o Fernando como aluno de Desenvolvimento de Interfaces Web (DIW) e de Trabalho Interdisciplinar II (Front-end), no curso de Ciência da Computação da PUC Minas. Mas boa parte do que sei sobre ele aprendi fora do horário oficial: nas conversas antes e depois da aula, quando ele sempre aparecia com um projeto novo para mostrar, uma tecnologia que tinha acabado de descobrir ou uma dúvida que já chegava meio resolvida.',
        'Ele é presença garantida nas minhas oficinas de DIW, onde construímos projetos com Spring Boot e JavaScript. E é o tipo de aluno que não se contenta em fazer funcionar: quer entender por que funciona. Não à toa, começou por conta própria um portfólio em React e faz parte da comunidade Web Tech da PUC Minas, sempre atrás da próxima coisa para aprender.',
        'No Trabalho Interdisciplinar, vi de perto um líder nato. O Fernando puxa o time, organiza o trabalho, resolve os conflitos de merge nos PRs e ainda lidera em número de commits e linhas de código. É uma liderança que não fica no discurso: é de quem senta e faz junto.',
        'Qualquer equipe que receber o Fernando vai ganhar alguém curioso, organizado e generoso com o que sabe. Só um aviso: ele vai chegar com o Vim configurado e um energético na mão. Recomendo sem nenhuma reserva, e com muito orgulho de ter acompanhado um pedaço dessa trajetória.',
        'Fernando, continue assim. Estou torcendo muito por você!',
      ].join('\n\n'),
    },
    link: 'https://www.linkedin.com/in/joaopauloaramuni/',
  },
];

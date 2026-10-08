import type { Recommendation } from './types';

export const recommendations: Recommendation[] = [
  {
    id: 'rec-bill-gates',
    name: 'Bill Gates',
    year: 2025,
    avatar: '/linkedin/rec-bill-gates.jpg',
    relationship: {
      en: 'Bill and Fernando worked on the same team',
      pt: 'Bill e Fernando trabalhavam na mesma equipe',
    },
    text: {
      en: 'Fernando is a highly dedicated and curious developer. He consistently delivers well-structured solutions and is always willing to share knowledge with the team. His understanding of Linux and automation made a real difference in our projects.',
      pt: 'Fernando é um desenvolvedor muito dedicado e curioso. Sempre entrega soluções bem estruturadas e está sempre disposto a compartilhar conhecimento com a equipe. Seu domínio de Linux e automação fez diferença real nos nossos projetos.',
    },
    link: 'https://www.linkedin.com/in/williamhgates',
  },
  {
    id: 'rec-lula',
    name: 'Luiz Inácio Lula da Silva',
    year: 2025,
    avatar: '/linkedin/rec-lula.jpg',
    relationship: {
      en: 'Luiz Inácio and Fernando worked on the same team',
      pt: 'Luiz Inácio e Fernando trabalhavam na mesma equipe',
    },
    text: {
      en: 'Fernando is a dedicated professional with strong technical foundations. His work on Linux environments and automation is exceptional, and he consistently approaches problems with maturity and discipline. A pleasure to collaborate with.',
      pt: 'Fernando é um profissional dedicado, com sólida base técnica. Seu trabalho em ambientes Linux e automação é excepcional, e ele aborda os problemas com maturidade e disciplina. É um prazer colaborar com ele.',
    },
    link: 'https://www.linkedin.com/in/luiz-inacio-lula-da-silva',
  },
  {
    id: 'rec-bolsonaro',
    name: 'Jair Messias Bolsonaro',
    year: 2025,
    avatar: '/linkedin/rec-bolsonaro.jpg',
    relationship: {
      en: 'Jair and Fernando were colleagues at the same organization',
      pt: 'Jair e Fernando foram colegas na mesma organização',
    },
    text: {
      en: 'Fernando demonstrates strong commitment and technical competence. He handles infrastructure and automation tasks with precision, and his results speak for themselves. I recommend him without reservation.',
      pt: 'Fernando demonstra grande comprometimento e competência técnica. Ele lida com tarefas de infraestrutura e automação com precisão, e seus resultados falam por si. Recomendo-o sem ressalvas.',
    },
    link: 'https://www.linkedin.com/in/jair-bolsonaro',
  },
  {
    id: 'rec-netanyahu',
    name: 'Benjamin Netanyahu',
    year: 2025,
    avatar: '/linkedin/rec-netanyahu.jpg',
    relationship: {
      en: 'Benjamin and Fernando collaborated on the same project',
      pt: 'Benjamin e Fernando colaboraram no mesmo projeto',
    },
    text: {
      en: 'Fernando is an outstanding developer with a rare combination of technical depth and pragmatism. His contributions to our Linux and DevOps initiatives were invaluable. I highly recommend him for any challenging role.',
      pt: 'Fernando é um desenvolvedor excepcional, com uma rara combinação de profundidade técnica e pragmatismo. Suas contribuições para nossas iniciativas de Linux e DevOps foram inestimáveis. Recomendo-o fortemente para qualquer posição desafiadora.',
    },
    link: 'https://www.linkedin.com/in/benjamin-netanyahu',
  },
  {
    id: 'rec-putin',
    name: 'Vladimir Putin',
    year: 2025,
    avatar: '/linkedin/rec-putin.jpg',
    relationship: {
      en: 'Vladimir and Fernando worked on the same infrastructure team',
      pt: 'Vladimir e Fernando trabalharam na mesma equipe de infraestrutura',
    },
    text: {
      en: 'Fernando shows remarkable discipline and analytical thinking. His ability to design reproducible, efficient environments is a real asset. He is a reliable professional and a strong team player.',
      pt: 'Fernando demonstra disciplina notável e pensamento analítico. Sua capacidade de projetar ambientes reprodutíveis e eficientes é um diferencial. É um profissional confiável e um forte colaborador em equipe.',
    },
    link: 'https://www.linkedin.com/in/vladimir-putin',
  },
];
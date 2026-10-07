export type Lang = 'en' | 'pt';

export const profile = {
  name: 'Fernando Leite Pagani',
  github: 'https://github.com/fernandoleitepagani',
  linkedin: 'https://www.linkedin.com/in/fernandoleitepagani',
  email: 'fernando.leite@sga.pucminas.br',
  emailWork: 'fernandolp.work@protonmail.com',
  instagram: 'https://www.instagram.com/fernandoleitepagani/',
  lattes: 'https://lattes.cnpq.br/6096024024879687',
  location: 'Belo Horizonte, MG',
  githubUser: 'fernandoleitepagani',
};

/** Third-party stat images (transparent bg so site theme shows through). */
export const stats = {
  github: `https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&hide_border=true&bg_color=00000000&title_color=8a8368&text_color=ffffff&icon_color=8a8368`,
  langs: `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&hide_border=true&bg_color=00000000&title_color=8a8368&text_color=ffffff`,
  leetcode: `https://leetcard.jacoblin.cool/${profile.githubUser}?theme=dark&font=Inter&border=0&radius=8`,
};

export interface Project {
  name: string;
  url: string;
  tags: string[];
  featured?: boolean;
  description: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    name: 'MangoMod',
    url: `${profile.github}/MangoMod`,
    tags: ['Python', 'GTK4', 'Wayland'],
    featured: true,
    description: {
      en: 'Visual, interactive configuration UI for the MangoWM compositor (GTK4/libadwaita), forked and adapted from NiriMod.',
      pt: 'Interface visual e interativa de configuração para o compositor MangoWM (GTK4/libadwaita), adaptada a partir do NiriMod.',
    },
  },
  {
    name: 'visualize_it',
    url: `${profile.github}/visualize_it`,
    tags: ['HTML', 'CSS', 'JS'],
    featured: true,
    description: {
      en: 'Simple website to visualize concepts from the AEDS II course (data structures & algorithms).',
      pt: 'Site simples para visualizar conceitos da disciplina de AEDS II (estruturas de dados e algoritmos).',
    },
  },
  {
    name: 'Simple-Nvim',
    url: `${profile.github}/Simple-Nvim`,
    tags: ['Lua', 'Neovim'],
    featured: true,
    description: {
      en: 'Modular, performant Neovim config powered by lazy.nvim — LSP, completion, debugging and more.',
      pt: 'Configuração modular e performática do Neovim com lazy.nvim — LSP, completion, debugging e mais.',
    },
  },
  {
    name: 'myinfo',
    url: `${profile.github}/myinfo`,
    tags: ['HTML', 'CSS'],
    description: {
      en: 'Personal info page hosted on GitHub Pages.',
      pt: 'Página de informações pessoais hospedada no GitHub Pages.',
    },
  },
  {
    name: 'Prototipo-Login-PUC',
    url: `${profile.github}/Prototipo-Login-PUC`,
    tags: ['CSS', 'Java'],
    description: {
      en: 'Login prototype inspired by the PUC Minas student portal.',
      pt: 'Protótipo de login inspirado no portal do aluno da PUC Minas.',
    },
  },
];

export interface Recommendation {
  id: string;
  name: string;
  year?: number;
  avatar?: string;
  relationship: Record<Lang, string>;
  text: Record<Lang, string>;
  link?: string;
}

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

export interface Content {
  nav: Record<
    'about' | 'curriculum' | 'projects' | 'interests' | 'recommendations' | 'contact',
    string
  >;
  themeLabel: string;
  about: { title: string; tagline: string[]; description: string };
  curriculum: { title: string; items: { period: string; title: string; place: string }[] };
  projects: { title: string; viewAll: string };
  tools: { title: string; groups: { name: string; items: string[] }[] };
  interests: { title: string; items: string[] };
  recommendations: { title: string; empty: string };
  contact: {
    title: string;
    email: string;
    emailWork: string;
    location: string;
    formTitle: string;
    formSubtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formSending: string;
    formSentTitle: string;
    formSent: string;
    formSendAnother: string;
    formError: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: 'About',
      curriculum: 'Curriculum',
      projects: 'Projects',
      interests: 'Interests',
      recommendations: 'Recommendations',
      contact: 'Contacts',
    },
    themeLabel: 'Theme',
    about: {
      title: 'About Me',
      tagline: [
        'Computer Science student at PUC Minas.',
        'Linux, systems, automation & DevOps.',
      ],
      description:
        'CS student at PUC Minas (2nd semester). Into Linux since 13. Care about operating systems, automation and DevOps — building fast, reproducible and efficient environments. Prefer understanding how things work under the hood.',
    },
    curriculum: {
      title: 'Curriculum',
      items: [
        {
          period: '2025 – now',
          title: 'B.Sc. Computer Science (2nd semester)',
          place: 'PUC Minas — Belo Horizonte, MG',
        },
        {
          period: 'Previously',
          title: 'Rotary Youth Exchange · contact with IT at AVTEC',
          place: 'Alaska, USA',
        },
      ],
    },
    projects: { title: 'Projects', viewAll: 'View all' },
    tools: {
      title: 'Tools',
      groups: [
        { name: 'Languages', items: ['C', 'C++', 'Python', 'Java', 'Lua', 'Bash', 'HTML', 'CSS'] },
        { name: 'Systems & infra', items: ['Linux (Fedora, Arch, Debian)', 'Docker', 'Git', 'Tailscale', 'Syncthing'] },
        { name: 'Daily setup', items: ['Neovim', 'Wayland', 'Jellyfin', 'Homelab / self-hosting'] },
      ],
    },
    interests: {
      title: 'Interests',
      items: [
        'Linux desktops and servers (daily driver)',
        'Networks, infrastructure and cybersecurity',
        'Competitive programming',
        'AI / ML and data science',
        'Homelabbing and self-hosting',
        'C, Zig and Go',
        'Building apps, TUIs and scripts for my own workflows',
        'Strategy and management games (Rome: Total War, Age of Empires, Victoria, EUIV)',
      ],
    },
    recommendations: {
      title: 'Recommendations',
      empty: 'No recommendations yet.',
    },
    contact: {
      title: 'Contacts',
      email: 'University email',
      emailWork: 'Work email',
      location: 'Location',
      formTitle: 'Get in touch',
      formSubtitle: 'Feel free to reach out or send a message.',
      formName: 'Your name',
      formEmail: 'Your email',
      formMessage: 'Your message…',
      formSend: 'Send',
      formSending: 'Sending…',
      formSentTitle: 'Message sent',
      formSent: "Thanks — I'll get back to you soon.",
      formSendAnother: 'Send another email',
      formError: 'Could not send. Please try again or email me directly.',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      curriculum: 'Currículo',
      projects: 'Projetos',
      interests: 'Interesses',
      recommendations: 'Recomendações',
      contact: 'Contato',
    },
    themeLabel: 'Tema',
    about: {
      title: 'Sobre Mim',
      tagline: [
        'Estudante de Ciência da Computação na PUC Minas.',
        'Linux, sistemas, automação e DevOps.',
      ],
      description:
        'Estudante de CC na PUC Minas (2º período). No Linux desde os 13. Interesse por sistemas operacionais, automação e DevOps — ambientes rápidos, reprodutíveis e eficientes. Gosto de entender como as coisas funcionam por baixo dos panos.',
    },
    curriculum: {
      title: 'Currículo',
      items: [
        {
          period: '2025 – hoje',
          title: 'Bacharelado em Ciência da Computação (2º período)',
          place: 'PUC Minas — Belo Horizonte, MG',
        },
        {
          period: 'Anteriormente',
          title: 'Intercâmbio Rotary · contato com TI na AVTEC',
          place: 'Alaska, EUA',
        },
      ],
    },
    projects: { title: 'Projetos', viewAll: 'Ver todos' },
    tools: {
      title: 'Ferramentas',
      groups: [
        { name: 'Linguagens', items: ['C', 'C++', 'Python', 'Java', 'Lua', 'Bash', 'HTML', 'CSS'] },
        { name: 'Sistemas e infra', items: ['Linux (Fedora, Arch, Debian)', 'Docker', 'Git', 'Tailscale', 'Syncthing'] },
        { name: 'Setup diário', items: ['Neovim', 'Wayland', 'Jellyfin', 'Homelab / self-hosting'] },
      ],
    },
    interests: {
      title: 'Interesses',
      items: [
        'Desktops e servidores Linux (uso diário)',
        'Redes, infraestrutura e cibersegurança',
        'Programação competitiva',
        'IA / ML e ciência de dados',
        'Homelabbing e self-hosting',
        'C, Zig e Go',
        'Desenvolver apps, TUIs e scripts para meus próprios fluxos',
        'Jogos de estratégia e administração (Rome: Total War, Age of Empires, Victoria, EUIV)',
      ],
    },
    recommendations: {
      title: 'Recomendações',
      empty: 'Nenhuma recomendação ainda.',
    },
    contact: {
      title: 'Contato',
      email: 'E-mail universitário',
      emailWork: 'E-mail de trabalho',
      location: 'Localização',
      formTitle: 'Entre em contato',
      formSubtitle: 'Sinta-se à vontade para se conectar ou me enviar uma mensagem.',
      formName: 'Seu nome',
      formEmail: 'Seu email',
      formMessage: 'Sua mensagem…',
      formSend: 'Enviar',
      formSending: 'Enviando…',
      formSentTitle: 'Mensagem enviada',
      formSent: 'Obrigado — retornarei em breve.',
      formSendAnother: 'Enviar outro email',
      formError: 'Não foi possível enviar. Tente de novo ou me escreva diretamente.',
    },
  },
};
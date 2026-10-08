import type { Content, Lang } from './types';

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
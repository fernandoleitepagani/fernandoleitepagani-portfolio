import { profile } from './profile';
import type { Project } from './types';

export const projects: Project[] = [
  {
    name: 'MangoMod',
    githubUrl: `${profile.github}/MangoMod`,
    screenshot: '/projects/placeholder.svg',
    tags: ['Python', 'GTK4', 'Wayland'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    featured: true,
    description: {
      en: 'Visual, interactive configuration UI for the MangoWM compositor (GTK4/libadwaita), forked and adapted from NiriMod.',
      pt: 'Interface visual e interativa de configuração para o compositor MangoWM (GTK4/libadwaita), adaptada a partir do NiriMod.',
    },
  },
  {
    name: 'visualize_it',
    githubUrl: `${profile.github}/visualize_it`,
    screenshot: '/projects/placeholder.svg',
    tags: ['HTML', 'CSS', 'JS'],
    category: { en: 'University project — AEDS II', pt: 'Projeto acadêmico — AEDS II' },
    featured: true,
    description: {
      en: 'Simple website to visualize concepts from the AEDS II course (data structures & algorithms).',
      pt: 'Site simples para visualizar conceitos da disciplina de AEDS II (estruturas de dados e algoritmos).',
    },
  },
  {
    name: 'Simple-Nvim',
    githubUrl: `${profile.github}/Simple-Nvim`,
    screenshot: '/projects/placeholder.svg',
    tags: ['Lua', 'Neovim'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    featured: true,
    description: {
      en: 'Modular, performant Neovim config powered by lazy.nvim — LSP, completion, debugging and more.',
      pt: 'Configuração modular e performática do Neovim com lazy.nvim — LSP, completion, debugging e mais.',
    },
  },
  {
    name: 'myinfo',
    githubUrl: `${profile.github}/myinfo`,
    liveUrl: 'https://fernandoleitepagani.github.io/myinfo/',
    screenshot: '/projects/placeholder.svg',
    tags: ['HTML', 'CSS'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    description: {
      en: 'Personal info page hosted on GitHub Pages.',
      pt: 'Página de informações pessoais hospedada no GitHub Pages.',
    },
  },
  {
    name: 'Prototipo-Login-PUC',
    githubUrl: `${profile.github}/Prototipo-Login-PUC`,
    screenshot: '/projects/placeholder.svg',
    tags: ['CSS', 'Java'],
    category: { en: 'University project', pt: 'Projeto acadêmico' },
    description: {
      en: 'Login prototype inspired by the PUC Minas student portal.',
      pt: 'Protótipo de login inspirado no portal do aluno da PUC Minas.',
    },
  },
];

import { profile } from './profile';
import type { Project } from './types';

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
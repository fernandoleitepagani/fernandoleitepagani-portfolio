import { profile } from './profile';
import type { GitHubRepo, Project } from './types';

export const PORTFOLIO_TOPIC = 'portfolio';

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
    name: 'Portfolio',
    repo: 'fernandoleitepagani-portfolio',
    githubUrl: `${profile.github}/fernandoleitepagani-portfolio`,
    liveUrl: 'https://fernandoleitepagani-portfolio.vercel.app/',
    screenshot: '/projects/placeholder.svg',
    tags: ['React', 'TypeScript', 'Vite'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    description: {
      en: 'This portfolio — React, Vite and Mantine, with its own GitHub API layer for the stats and project data.',
      pt: 'Este portfólio — React, Vite e Mantine, com camada própria de API do GitHub para as estatísticas e os dados dos projetos.',
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

const FALLBACK_CATEGORY = { en: 'Repository', pt: 'Repositório' };

export function mergeProjects(repos: GitHubRepo[]): Project[] {
  const repoByName = new Map(repos.map((repo) => [repo.name, repo]));
  const curatedByRepo = new Map(projects.map((project) => [project.repo ?? project.name, project]));

  const enrich = (repo: GitHubRepo): Project => {
    const curated = curatedByRepo.get(repo.name);
    const repoTopics = repo.topics.filter((topic) => topic !== PORTFOLIO_TOPIC);
    const tags =
      curated?.tags ?? [repo.language, ...repoTopics].filter((tag): tag is string => Boolean(tag));

    return {
      name: curated?.name ?? repo.name,
      repo: repo.name,
      githubUrl: repo.url,
      liveUrl: curated?.liveUrl ?? repo.homepageUrl ?? undefined,
      screenshot: curated?.screenshot,
      tags,
      category: curated?.category ?? FALLBACK_CATEGORY,
      featured: curated?.featured,
      description: curated?.description ?? { en: repo.description ?? '', pt: repo.description ?? '' },
      stars: repo.stars,
      forks: repo.forks,
      pushedAt: repo.pushedAt,
    };
  };

  const curated = projects.map((project) => {
    const repo = repoByName.get(project.repo ?? project.name);
    return repo ? enrich(repo) : project;
  });

  const claimed = new Set(projects.map((project) => project.repo ?? project.name));
  const discovered = repos
    .filter((repo) => !repo.isFork && !repo.isArchived)
    .filter((repo) => repo.topics.includes(PORTFOLIO_TOPIC))
    .filter((repo) => !claimed.has(repo.name))
    .map(enrich);

  return [...curated, ...discovered];
}

import { profile } from './profile';
import type { GitHubRepo, Project } from './types';

export const PORTFOLIO_TOPIC = 'portfolio';

export const projects: Project[] = [
  {
    name: 'MangoMod',
    slug: 'mangomod',
    repo: 'MangoMod',
    githubUrl: `${profile.github}/MangoMod`,
    screenshot: '/projects/placeholder.svg',
    images: ['/projects/placeholder.svg'],
    period: '2026',
    tags: ['Python', 'GTK4', 'libadwaita', 'Wayland'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    featured: true,
    description: {
      en: 'Visual, interactive configuration UI for the MangoWM compositor (GTK4/libadwaita), forked and adapted from NiriMod.',
      pt: 'Interface visual e interativa de configuração para o compositor MangoWM (GTK4/libadwaita), adaptada a partir do NiriMod.',
    },
    summary: {
      en: 'A GTK4/libadwaita configuration editor for the MangoWM Wayland compositor — visual, safe and multi-file aware.',
      pt: 'Um editor de configuração em GTK4/libadwaita para o compositor Wayland MangoWM — visual, seguro e ciente de múltiplos arquivos.',
    },
    sections: [
      {
        title: { en: 'Motivation', pt: 'Motivação' },
        body: {
          en: 'MangoWM is configured through plain-text files split across several `source`d files. Editing monitor layouts, scaling and gaps by hand is error-prone and hard to visualise, so I wanted a visual editor that edits the real configuration safely.',
          pt: 'O MangoWM é configurado por arquivos de texto divididos em vários arquivos via `source`. Editar layout de monitores, escala e gaps na mão é propenso a erros e difícil de visualizar, então eu queria um editor visual que alterasse a configuração real com segurança.',
        },
      },
      {
        title: { en: 'How it works', pt: 'Como funciona' },
        body: {
          en: 'Built with Python, GTK4 and libadwaita (forked and adapted from NiriMod). It offers drag-and-drop monitor arrangement, resolution, refresh rate, VRR and fractional scaling, plus gaps, borders, per-tag layout and mouse/touchpad/trackpoint settings. A built-in editor edits `config.conf`, and `source` paths are resolved across files.',
          pt: 'Feito com Python, GTK4 e libadwaita (adaptado a partir do NiriMod). Oferece arranjo de monitores por drag-and-drop, resolução, taxa de atualização, VRR e escala fracionária, além de gaps, bordas, layout por tag e configurações de mouse/touchpad/trackpoint. Um editor embutido edita o `config.conf`, e caminhos `source` são resolvidos entre arquivos.',
        },
      },
      {
        title: { en: 'The hard part', pt: 'A parte difícil' },
        body: {
          en: 'Keeping the configuration safe: invalid configurations are blocked and surfaced with compiler diagnostics, and custom comments, whitespace and formatting are preserved across round-trips so the generated file never drifts from what was written.',
          pt: 'Manter a configuração segura: configurações inválidas são bloqueadas e mostradas com diagnósticos de compilador, e comentários, espaços e formatação personalizados são preservados, para que o arquivo gerado nunca difira do que foi escrito.',
        },
      },
      {
        title: { en: "What's next", pt: 'Próximos passos' },
        body: {
          en: 'Still evolving — detecting every keybinding (including Rofi), porting the app to C, and letting it target other compositors such as Hyprland and Niri.',
          pt: 'Ainda em evolução — detectar todos os keybindings (incluindo Rofi), portar o app para C e permitir usá-lo com outros compositores, como Hyprland e Niri.',
        },
      },
    ],
  },
  {
    name: 'Simple-Nvim',
    slug: 'simple-nvim',
    repo: 'Simple-Nvim',
    githubUrl: `${profile.github}/Simple-Nvim`,
    screenshot: '/projects/placeholder.svg',
    images: ['/projects/placeholder.svg'],
    period: '2026',
    tags: ['Lua', 'Neovim', 'lazy.nvim'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    featured: true,
    description: {
      en: 'Modular, performant Neovim config powered by lazy.nvim — LSP, completion, debugging and more.',
      pt: 'Configuração modular e performática do Neovim com lazy.nvim — LSP, completion, debugging e mais.',
    },
    summary: {
      en: 'A modular, performant Neovim configuration built on lazy.nvim and organised by concern.',
      pt: 'Uma configuração de Neovim modular e performática, baseada no lazy.nvim e organizada por responsabilidade.',
    },
    sections: [
      {
        title: { en: 'Motivation', pt: 'Motivação' },
        body: {
          en: 'I wanted an editor that starts fast and stays out of the way, so I built my own Neovim setup instead of using a distribution — organised by concern and loaded lazily on demand.',
          pt: 'Eu queria um editor que inicia rápido e não atrapalha, então construí minha própria configuração de Neovim em vez de usar uma distribuição — organizada por responsabilidade e carregada sob demanda.',
        },
      },
      {
        title: { en: 'How it works', pt: 'Como funciona' },
        body: {
          en: 'Each concern is its own module: LSP (lspconfig), completion (nvim-cmp), debugging (nvim-dap), fuzzy finding (fzf-lua), treesitter, diagnostics (trouble), which-key, mini.nvim, auto-save, linting and markdown rendering. lazy.nvim loads each plugin only when it is needed.',
          pt: 'Cada responsabilidade é um módulo: LSP (lspconfig), completion (nvim-cmp), debugging (nvim-dap), busca fuzzy (fzf-lua), treesitter, diagnósticos (trouble), which-key, mini.nvim, auto-save, linting e renderização de markdown. O lazy.nvim carrega cada plugin só quando é necessário.',
        },
      },
      {
        title: { en: 'Takeaways', pt: 'Aprendizados' },
        body: {
          en: 'Writing the configuration myself taught me how the editor works under the hood and keeps my whole workflow reproducible on any machine.',
          pt: 'Escrever a configuração eu mesmo me ensinou como o editor funciona por baixo dos panos e mantém todo o meu fluxo de trabalho reprodutível em qualquer máquina.',
        },
      },
    ],
  },
  {
    name: 'Rofi-Scripts',
    slug: 'rofi-scripts',
    repo: 'Rofi-Scripts',
    githubUrl: `${profile.github}/Rofi-Scripts`,
    screenshot: '/projects/placeholder.svg',
    images: ['/projects/placeholder.svg'],
    period: '2026',
    tags: ['Shell', 'Bash', 'Rofi', 'Wayland'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    description: {
      en: 'A collection of custom Rofi scripts for a faster, keyboard-driven Linux desktop.',
      pt: 'Uma coleção de scripts Rofi para um desktop Linux mais rápido e orientado ao teclado.',
    },
    summary: {
      en: 'Lean, theme-agnostic Rofi scripts for the small tasks I repeat every day.',
      pt: 'Scripts Rofi enxutos e agnósticos de tema para as pequenas tarefas que repito todos os dias.',
    },
    sections: [
      {
        title: { en: 'Motivation', pt: 'Motivação' },
        body: {
          en: 'Rofi is my launcher. I wanted the small tasks I repeat every day to be one keystroke away, so I wrote a set of simple, theme-agnostic scripts.',
          pt: 'O Rofi é meu launcher. Eu queria que as pequenas tarefas que repito todo dia estivessem a uma tecla de distância, então escrevi um conjunto de scripts simples e agnósticos de tema.',
        },
      },
      {
        title: { en: 'How it works', pt: 'Como funciona' },
        body: {
          en: 'Bash scripts (plus a Python one) that plug into Rofi: system info for network, Bluetooth and audio, media control over MPRIS, a power menu (logout/reboot/shutdown/suspend) and switching power profiles. Developed and tested on Wayland.',
          pt: 'Scripts Bash (e um em Python) que se integram ao Rofi: informações de rede, Bluetooth e áudio, controle de mídia via MPRIS, menu de energia (logout/reboot/shutdown/suspend) e troca de perfis de energia. Desenvolvidos e testados no Wayland.',
        },
      },
      {
        title: { en: 'Takeaways', pt: 'Aprendizados' },
        body: {
          en: 'A small example of automating my own workflow and keeping scripts simple, portable and theme-agnostic.',
          pt: 'Um pequeno exemplo de automatizar meu próprio fluxo e manter scripts simples, portáveis e agnósticos de tema.',
        },
      },
    ],
  },
  {
    name: 'Portfolio',
    slug: 'portfolio',
    repo: 'fernandoleitepagani-portfolio',
    githubUrl: `${profile.github}/fernandoleitepagani-portfolio`,
    liveUrl: 'https://fernandoleitepagani-portfolio.vercel.app/',
    screenshot: '/projects/placeholder.svg',
    images: ['/projects/placeholder.svg'],
    period: '2026',
    tags: ['React', 'TypeScript', 'Vite', 'Mantine'],
    category: { en: 'Personal project', pt: 'Projeto pessoal' },
    description: {
      en: 'This portfolio — React, Vite and Mantine, with its own GitHub API layer for the stats and project data.',
      pt: 'Este portfólio — React, Vite e Mantine, com camada própria de API do GitHub para as estatísticas e os dados dos projetos.',
    },
    summary: {
      en: 'This website — React, TypeScript and Mantine, bilingual, with its own GitHub API layer for live stats and project data.',
      pt: 'Este site — React, TypeScript e Mantine, bilíngue, com camada própria de API do GitHub para estatísticas e dados de projetos ao vivo.',
    },
    sections: [
      {
        title: { en: 'Motivation', pt: 'Motivação' },
        body: {
          en: 'I wanted a portfolio that was itself a demonstration of how I work: no template, bilingual (PT/EN), three switchable themes, and real data instead of screenshots.',
          pt: 'Eu queria um portfólio que fosse, ele mesmo, uma demonstração de como eu trabalho: sem template, bilíngue (PT/EN), três temas alternáveis e dados reais em vez de prints.',
        },
      },
      {
        title: { en: 'How it works', pt: 'Como funciona' },
        body: {
          en: 'A single-page React app (Vite + Mantine) with client-side routing, i18n and theming driven by CSS tokens. A Vercel serverless function (`/api/github`) is the only thing that talks to GitHub — one authenticated GraphQL query plus REST — and returns contribution stats, languages and repositories. The projects page merges that data with a curated list, so the Portuguese copy, screenshots and categories always win.',
          pt: 'Uma SPA em React (Vite + Mantine) com rotas no cliente, i18n e temas controlados por CSS tokens. Uma função serverless na Vercel (`/api/github`) é a única coisa que fala com o GitHub — uma query GraphQL autenticada mais REST — e retorna estatísticas de contribuição, linguagens e repositórios. A página de projetos mescla esses dados com uma lista curada, então o texto em português, os prints e as categorias sempre prevalecem.',
        },
      },
      {
        title: { en: 'The hard part', pt: 'A parte difícil' },
        body: {
          en: 'Showing live GitHub data without shipping a token to the browser, and degrading gracefully when the API is unavailable or the token is missing. The endpoint is GET-only, cached at the CDN, and the pages fall back to curated content instead of breaking.',
          pt: 'Mostrar dados do GitHub ao vivo sem expor um token no navegador, e degradar de forma elegante quando a API está indisponível ou o token falta. O endpoint é somente GET, com cache na CDN, e as páginas caem para o conteúdo curado em vez de quebrar.',
        },
      },
      {
        title: { en: 'Takeaways', pt: 'Aprendizados' },
        body: {
          en: 'It made me comfortable with serverless functions, caching, the GitHub API and building a small design system with CSS tokens.',
          pt: 'Me deixou confortável com funções serverless, cache, a API do GitHub e construir um pequeno design system com CSS tokens.',
        },
      },
    ],
  },
  {
    name: 'visualize_it',
    slug: 'visualize-it',
    repo: 'visualize_it',
    githubUrl: `${profile.github}/visualize_it`,
    screenshot: '/projects/placeholder.svg',
    images: ['/projects/placeholder.svg'],
    period: '2026',
    tags: ['React', 'TypeScript', 'Vite', 'Mantine'],
    category: { en: 'University project — AEDS II', pt: 'Projeto acadêmico — AEDS II' },
    description: {
      en: 'Simple website to visualize concepts from the AEDS II course (data structures & algorithms).',
      pt: 'Site simples para visualizar conceitos da disciplina de AEDS II (estruturas de dados e algoritmos).',
    },
    summary: {
      en: 'An interactive visualizer for algorithms, data structures and asymptotic complexity.',
      pt: 'Um visualizador interativo de algoritmos, estruturas de dados e complexidade assintótica.',
    },
    sections: [
      {
        title: { en: 'Motivation', pt: 'Motivação' },
        body: {
          en: 'Built for AEDS II: reading the code was not enough, so I made the algorithms run step by step, with the Java or C code, the variables and the complexity table side by side.',
          pt: 'Feito para AEDS II: só ler o código não bastava, então fiz os algoritmos rodarem passo a passo, com o código em Java ou C, as variáveis e a tabela de complexidade lado a lado.',
        },
      },
      {
        title: { en: 'How it works', pt: 'Como funciona' },
        body: {
          en: 'Each lesson is pure data plus a pure function: `steps()` returns the list of animation frames and the player just walks that list, so lessons are testable without a browser. Views render bars, cells or graph nodes, and the code panel highlights the line being executed.',
          pt: 'Cada lição é dado puro mais uma função pura: `steps()` devolve a lista de quadros da animação e o player só percorre essa lista, então as lições são testáveis sem navegador. As views renderizam barras, células ou nós de grafo, e o painel de código destaca a linha em execução.',
        },
      },
      {
        title: { en: 'Takeaways', pt: 'Aprendizados' },
        body: {
          en: 'Testing animations through pure functions, and turning coursework into a reusable study tool.',
          pt: 'Testar animações por meio de funções puras, e transformar um trabalho de disciplina em uma ferramenta de estudo reutilizável.',
        },
      },
    ],
  },
  {
    name: 'Prototipo-Login-PUC',
    slug: 'prototipo-login-puc',
    repo: 'Prototipo-Login-PUC',
    githubUrl: `${profile.github}/Prototipo-Login-PUC`,
    screenshot: '/projects/placeholder.svg',
    images: ['/projects/placeholder.svg'],
    period: '2026',
    tags: ['HTML', 'CSS'],
    category: { en: 'University project', pt: 'Projeto acadêmico' },
    description: {
      en: 'Login prototype inspired by the PUC Minas student portal.',
      pt: 'Protótipo de login inspirado no portal do aluno da PUC Minas.',
    },
    summary: {
      en: 'A front-end prototype reproducing a familiar, real login interface.',
      pt: 'Um protótipo de front-end reproduzindo uma interface de login real e familiar.',
    },
    sections: [
      {
        title: { en: 'Motivation', pt: 'Motivação' },
        body: {
          en: 'A front-end exercise to reproduce a familiar, real interface and focus on layout, form details and responsive behaviour.',
          pt: 'Um exercício de front-end para reproduzir uma interface real e familiar, com foco em layout, detalhes de formulário e comportamento responsivo.',
        },
      },
      {
        title: { en: 'How it works', pt: 'Como funciona' },
        body: {
          en: 'HTML and CSS with a form (email and password), validation states and a responsive layout that mirrors the portal visual language.',
          pt: 'HTML e CSS com um formulário (email e senha), estados de validação e um layout responsivo que espelha a linguagem visual do portal.',
        },
      },
    ],
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
      slug: curated?.slug ?? repo.name,
      repo: repo.name,
      githubUrl: repo.url,
      liveUrl: curated?.liveUrl ?? repo.homepageUrl ?? undefined,
      screenshot: curated?.screenshot,
      images: curated?.images,
      period: curated?.period,
      tags,
      category: curated?.category ?? FALLBACK_CATEGORY,
      featured: curated?.featured,
      description: curated?.description ?? { en: repo.description ?? '', pt: repo.description ?? '' },
      summary: curated?.summary,
      sections: curated?.sections,
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

<!-- README baseado no template do Prof. Dr. João Paulo Aramuni (PUC Minas) -->

---

# 🏷️ Portfólio Profissional — Fernando Leite Pagani 👨‍💻

> [!NOTE]
> Portfólio pessoal bilíngue (PT/EN), com estética de terminal, três temas e dados reais do GitHub.
> **Foque no valor:** um site que apresenta trajetória, habilidades, projetos e contato de forma
> moderna, rápida e acessível.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este repositório contém o <b>portfólio profissional</b> de <b>Fernando Leite Pagani</b>,
        estudante de Ciência da Computação na PUC Minas. O site reúne as quatro seções pedidas no
        <i>Laboratório 01</i> — <b>Sobre Mim</b> (PT/EN), <b>Projetos</b>, <b>Experiências</b> e
        <b>Contato</b> — com uma identidade visual própria inspirada em <i>terminais</i>, três temas
        alternáveis (Dark, Matrix e CRT) e suporte a dois idiomas. Todo o conteúdo é dirigido por
        dados (<code>src/data/</code>) e o site consome a API do GitHub por meio de uma
        <b>função serverless própria</b>, sem expor o token no navegador.
      </div>
    </td>
    <td>
      <div>
        <img src="public/favicon.svg" alt="Logo do Projeto" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Status do Projeto

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://fernandoleitepagani-portfolio.vercel.app/)
[![Licença](https://img.shields.io/github/license/fernandoleitepagani/fernandoleitepagani-portfolio?style=for-the-badge&color=007ec6&logo=opensourceinitiative)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/fernandoleitepagani/fernandoleitepagani-portfolio?style=for-the-badge&color=007ec6&logo=gitkraken)](https://github.com/fernandoleitepagani/fernandoleitepagani-portfolio/commits/main)
[![React](https://img.shields.io/badge/React-19-007ec6?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-007ec6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-007ec6?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Mantine](https://img.shields.io/badge/Mantine-8-007ec6?style=for-the-badge&logo=mantine&logoColor=white)](https://mantine.dev/)

---

## 📚 Índice

- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
  - [Protótipos (Wireframes)](#-protótipos-wireframes)
  - [Aplicação Web](#-aplicação-web)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis

- 🌐 **Demo Online:** [Acesse a Aplicação Web](https://fernandoleitepagani-portfolio.vercel.app/)
  > 💻 **Descrição:** Aplicação em produção, hospedada na **Vercel**.
- 📄 **Currículo (PDF):** [English](public/resume/fernando-leite-pagani-resume-en.pdf) · [Português](public/resume/fernando-leite-pagani-resume-pt.pdf)
  > 📚 **Descrição:** Currículo em PDF (gerado automaticamente a partir do próprio site).
- 🎤 **Apresentação final:** [Slides em PDF](docs/presentation/apresentacao-lab01.pdf) · [Apresentação navegável](docs/presentation/index.html) · [Roteiro](docs/presentation/SCRIPT.md)
  > 🗣️ **Descrição:** Defesa do Laboratório 01 em português, com notas do apresentador em cada slide.
- 🐙 **Repositório:** [github.com/fernandoleitepagani/fernandoleitepagani-portfolio](https://github.com/fernandoleitepagani/fernandoleitepagani-portfolio)

---

## 📝 Sobre o Projeto

Este projeto existe para **apresentar a trajetória, as habilidades, os projetos e as formas de
contato** de um estudante de Ciência da Computação de forma moderna, acessível e — sobretudo —
autêntica. Em vez de usar um template pronto, o site foi construído do zero para funcionar, ele
mesmo, como uma **demonstração prática** das competências do autor.

- **Por que existe:** surgiu como o **Laboratório 01** da disciplina de Desenvolvimento de
  Interfaces Web (DIW), mas foi levado além do mínimo: bilíngue, com três temas e dados reais.
- **Que problema resolve:** reúne, em um só lugar e de forma organizada, a apresentação pessoal, os
  projetos (com estudo de caso), as experiências e o contato — reduzindo o esforço de quem quer
  conhecê-lo profissionalmente.
- **Contexto:** acadêmico/pessoal.
- **Onde pode ser usado:** como portfólio profissional para processos seletivos e para a comunidade
  acadêmica; e como base para outros sites pessoais.

> [!NOTE]
> O objetivo não foi apenas entregar as seções pedidas, mas construir uma **identidade visual
> coerente** (estética de terminal), um site **responsivo** e uma arquitetura que **não exponha
> segredos** e **degrade com elegância**.

---

## ✨ Funcionalidades Principais

- 🌐 **Internacionalização (i18n):** todo o conteúdo em **Português** e **Inglês**, alternável em
  tempo de execução.
- 🎨 **Três temas:** **Dark**, **Matrix** e **CRT**, alternáveis e persistidos em `localStorage`.
- 👤 **Sobre Mim (PT/EN):** apresentação, badge “aberto a estágios”, ferramentas e interesses.
- 📁 **Projetos:** cards com nome, descrição, tecnologias e link do GitHub, além de uma **página de
  estudo de caso** por projeto (motivação, como funciona, desafios, aprendizados).
- 🧑‍🎓 **Experiências / Currículo:** página com resumo, experiência, formação, habilidades e idiomas —
  e **download do currículo em PDF** (EN/PT).
- ✉️ **Contato:** ícones clicáveis (e-mail, LinkedIn, GitHub, Instagram, Lattes) e **formulário
  funcional** com envio de e-mail via **EmailJS** (notificação + resposta automática).
- 📊 **Dados reais do GitHub:** heatmap de contribuições, linguagens e contadores, servidos por uma
  **função serverless própria** (`/api/github`).
- 🔗 **Open Graph:** preview do link (imagem de compartilhamento) ao postar o site em redes sociais.

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, frameworks e bibliotecas foram utilizados na construção deste projeto.
Recomenda-se o uso das versões listadas (ou superiores) para garantir a compatibilidade.

### 💻 Front-end

- **Framework/Biblioteca:** [React v19](https://react.dev/)
- **Linguagem/Superset:** [TypeScript v5.8](https://www.typescriptlang.org/) (strict)
- **Build Tool:** [Vite v7](https://vite.dev/)
- **Biblioteca de UI:** [Mantine v8](https://mantine.dev/) (`@mantine/core`, `@mantine/hooks`)
- **Roteamento:** [React Router v7](https://reactrouter.com/)
- **Ícones:** [Tabler Icons](https://tabler.io/icons) (`@tabler/icons-react`)
- **Tipografia:** [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (`@fontsource/jetbrains-mono`)
- **Estilização:** CSS com **tokens** (variáveis CSS) e *themes* próprios

### 🖥️ Back-end

- **Runtime:** [Node.js](https://nodejs.org/) v20+ (Vercel Functions)
- **Função serverless:** [`api/github.ts`](api/github.ts) — única camada que acessa o GitHub
- **Integrações:** [GitHub GraphQL API](https://docs.github.com/en/graphql) + [REST API](https://docs.github.com/en/rest)
- **E-mail:** [EmailJS](https://www.emailjs.com/) (no cliente)

> [!NOTE]
> Não há banco de dados. O “back-end” é uma única **função serverless** que normaliza dados do
> GitHub e os entrega ao front-end, protegendo o token e aplicando cache.

### ⚙️ Infraestrutura & DevOps

- **Hospedagem:** [Vercel](https://vercel.com/) (front-end + funções serverless)
- **Qualidade:** [ESLint](https://eslint.org/) v9 (flat config) + `typescript-eslint` + `tsc`
- **Versionamento:** Git e GitHub (commits semânticos, issues e pull requests)

---

## 🏗 Arquitetura

O sistema é uma **SPA (Single Page Application)** em React que consome uma **função serverless**
própria. A ideia central é simples: **o navegador nunca fala diretamente com o GitHub** — quem faz
isso é o endpoint `/api/github`, que guarda o token no servidor, aplica cache e protege a aplicação.

**Principais componentes:**

- **Front-end (SPA):** rotas no cliente, i18n (PT/EN) e temas controlados por *CSS tokens*.
- **Camada de dados:** `src/data/` concentra todo o conteúdo (i18n, projetos, recomendações,
  acadêmico, prêmios) — nunca se edita componente para mudar texto.
- **Endpoint `/api/github`:** faz **uma query GraphQL** + **REST** `GET /users/:u`, calcula
  estatísticas (contribuições, linguagens, streaks) e devolve os repositórios.
- **Camada de merge de projetos:** `mergeProjects()` une os dados do GitHub a uma lista curada — o
  texto em PT, os prints e as categorias sempre vencem.

**Decisões arquiteturais importantes:**

- **Token só no servidor:** `GITHUB_TOKEN` sem prefixo `VITE_`, garantindo que não vá para o bundle.
- **Cache na CDN:** `s-maxage=300, stale-while-revalidate=3600`.
- **Degradação graciosa:** se o endpoint falhar (sem token/rate limit), as páginas caem para o
  conteúdo curado em vez de quebrar.
- **Guards:** apenas `GET` (405), *whitelist* de usuário (403) e falha upstream (503).

### Exemplos de diagramas

Para melhor visualização, os diagramas principais ficam em [`docs/diagrams/`](docs/diagrams/).

| Arquitetura (visão geral) | Fluxo de dados |
| :---: | :---: |
| <img src="docs/diagrams/arquitetura.svg" alt="Visão geral: React → /api/github → GitHub" width="420px"> | <img src="docs/diagrams/fluxo-dados.svg" alt="Fluxo de dados: cache e fallback" width="420px"> |

---

## 🔧 Instalação e Execução

### Pré-requisitos

- **Node.js:** versão **20** ou superior
- **Gerenciador de Pacotes:** npm (ou pnpm/yarn)
- **Git**

---

### 🔑 Variáveis de Ambiente

Copie o arquivo de exemplo e preencha os valores:

```bash
cp .env.example .env.local
```

**Front-end (Vite)** — o prefixo `VITE_` é obrigatório para expor a variável ao navegador:

```env
# EmailJS — https://dashboard.emailjs.com/admin
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=      # notificação (para você)
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=  # resposta automática (para o visitante)
VITE_EMAILJS_PUBLIC_KEY=
```

**Back-end (função serverless)** — **sem** prefixo `VITE_`, lida apenas no servidor:

```env
# Token do GitHub (fine-grained, leitura de repositórios públicos)
GITHUB_TOKEN=
```

> [!IMPORTANT]
> Sem o `GITHUB_TOKEN` o site funciona normalmente — apenas a seção de estatísticas do GitHub é
> omitida e os projetos caem para a lista curada.

---

### 📦 Instalação de Dependências

#### Front-end (React)

```bash
npm install
```

---

### ⚡ Como Executar a Aplicação

**Front-end:**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

**Ambiente completo (front-end + endpoint `/api/github` local):**

```bash
# Terminal 1: sobe o endpoint em :8787 (lê .env.local)
npm run dev:api

# Terminal 2: Vite com /api encaminhado para :8787
npm run dev:local
```

> Alternativa: `npx vercel dev` sobe front-end e função juntos.

---

## 🚀 Deploy

O projeto é implantado na **Vercel**. O deploy é automático a cada `push` na branch `main`.

Passos manuais (se necessário):

```bash
# 1. Build de produção (type-check + bundle para /dist)
npm run build

# 2. Deploy (CLI da Vercel)
npx vercel --prod
```

> [!IMPORTANT]
> Configure as variáveis de ambiente na Vercel (**Production** e **Preview**): as quatro
> `VITE_EMAILJS_*` e o `GITHUB_TOKEN`. Sem o token, as estatísticas do GitHub não aparecem em
> produção.

---

## 📂 Estrutura de Pastas

```text
.
├── api/
│   └── github.ts               # função serverless: única camada que acessa o GitHub
├── docs/
│   ├── diagrams/               # diagramas de arquitetura (seção Arquitetura)
│   ├── presentation/           # slides, PDF, roteiro e notas do apresentador
│   └── wireframes/             # wireframes SVG importáveis no Figma
├── public/
│   ├── linkedin/               # avatar da recomendação
│   ├── projects/               # imagens/prints dos projetos
│   ├── resume/                 # currículos em PDF (EN/PT)
│   ├── favicon.svg
│   ├── og.png                  # imagem de compartilhamento (Open Graph)
│   └── photo.jpg
├── scripts/
│   ├── build-og-image.mjs      # gera public/og.png
│   ├── build-resume-pdf.mjs    # gera os PDFs do currículo
│   ├── check-github-api.mjs    # teste de contrato do endpoint
│   ├── dev-api.mjs             # endpoint local para desenvolvimento
│   ├── og/                     # template HTML do cartão Open Graph
│   └── resume/                 # templates HTML dos currículos (EN/PT)
├── src/
│   ├── api/                    # cliente do endpoint
│   ├── components/             # componentes reutilizáveis (inclui icons/LattesIcon)
│   ├── config/                 # configuração do EmailJS
│   ├── context/                # Language e Theme (React Context)
│   ├── data/                   # TODO o conteúdo (i18n, projects, academics, awards…)
│   ├── hooks/                  # useGitHubStats
│   ├── pages/                  # Sobre, Resume, Projects(+detalhe), Academics, Awards…
│   ├── styles/                 # tokens, temas e CSS por área
│   ├── App.tsx                 # rotas
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig*.json
├── vercel.json
└── vite.config.ts
```

---

## 🎥 Demonstração

### 🧩 Protótipos (Wireframes)

Wireframes de **média fidelidade** das páginas principais (*Sobre Mim*, *Projetos*, *Experiências* e
*Contato*). As prévias PNG abaixo garantem a renderização das imagens no GitHub; cada imagem também
é clicável e abre o **SVG vetorial importável no Figma**. Cada prancha inclui desktop e uma prévia
responsiva mobile.

| Sobre Mim | Projetos |
| :---: | :---: |
| <a href="docs/wireframes/wireframe-sobre-mim.svg"><img src="docs/wireframes/previews/wireframe-sobre-mim.png" alt="Wireframe — Sobre Mim (SVG para Figma)" width="440px"></a> | <a href="docs/wireframes/wireframe-projetos.svg"><img src="docs/wireframes/previews/wireframe-projetos.png" alt="Wireframe — Projetos (SVG para Figma)" width="440px"></a> |
| **Experiências (Currículo)** | **Contato** |
| <a href="docs/wireframes/wireframe-experiencias.svg"><img src="docs/wireframes/previews/wireframe-experiencias.png" alt="Wireframe — Experiências (SVG para Figma)" width="440px"></a> | <a href="docs/wireframes/wireframe-contato.svg"><img src="docs/wireframes/previews/wireframe-contato.png" alt="Wireframe — Contato (SVG para Figma)" width="440px"></a> |

### 🎤 Apresentação Final

- [Slides em PDF](docs/presentation/apresentacao-lab01.pdf)
- [Apresentação navegável em HTML](docs/presentation/index.html)
- [Roteiro completo](docs/presentation/SCRIPT.md)
- [Notas do apresentador](docs/presentation/NOTAS.md)

### 🌐 Aplicação Web

Site publicado: **[fernandoleitepagani-portfolio.vercel.app](https://fernandoleitepagani-portfolio.vercel.app/)**

Capturas reais do site **em produção**, no tema escuro (1400×900):

| Sobre Mim | Experiência e Formação |
| :---: | :---: |
| <img src="docs/screenshots/01-sobre-mim.png" alt="Seção Sobre Mim, com índice de navegação na página" width="440px"> | <img src="docs/screenshots/02-experiencia-formacao.png" alt="Seções de experiência profissional e formação acadêmica" width="440px"> |
| **Projetos (timeline)** | **Detalhe do projeto (estudo de caso)** |
| <img src="docs/screenshots/03-projetos-timeline.png" alt="Timeline de projetos, do mais antigo ao mais recente" width="440px"> | <img src="docs/screenshots/04-projeto-detalhe.png" alt="Página de estudo de caso de um projeto" width="440px"> |
| **Habilidades** | **Currículo** |
| <img src="docs/screenshots/05-habilidades.png" alt="Globo 3D de habilidades e lista completa" width="440px"> | <img src="docs/screenshots/06-curriculo.png" alt="Currículo no tema do site, com download em PDF" width="440px"> |
| **Acadêmico** | **Recomendações** |
| <img src="docs/screenshots/07-academico.png" alt="Percurso acadêmico por período, com notas e certificados" width="440px"> | <img src="docs/screenshots/08-recomendacoes.png" alt="Recomendações de professores e colegas" width="440px"> |
| **Contato** | **Atividade no GitHub (dados reais via `/api/github`)** |
| <img src="docs/screenshots/09-contato.png" alt="Página de contato com e-mail, redes e formulário" width="440px"> | <img src="docs/screenshots/10-github-atividade.png" alt="Heatmap de contribuições, linguagens e estatísticas" width="440px"> |

**Temas** — o mesmo site em três identidades visuais:

| Matrix | CRT |
| :---: | :---: |
| <img src="docs/screenshots/11-tema-matrix.png" alt="Tema Matrix" width="440px"> | <img src="docs/screenshots/11-tema-crt.png" alt="Tema CRT, com efeito de tubo" width="440px"> |

**Responsividade** — 390×844 (iPhone 12/13/14):

| Sobre Mim | Menu de navegação | Projeto |
| :---: | :---: | :---: |
| <img src="docs/screenshots/12-mobile-sobre.png" alt="Site no celular — Sobre Mim" height="340px"> | <img src="docs/screenshots/13-mobile-menu.png" alt="Site no celular — menu aberto" height="340px"> | <img src="docs/screenshots/14-mobile-projeto.png" alt="Site no celular — projeto" height="340px"> |

> [!NOTE]
> As capturas acima são do site publicado. Em *Projetos*, o portfólio, o `visualize_it` e o
> `Prototipo-Login-PUC` já usam capturas reais das aplicações em execução; `MangoMod`, `Simple-Nvim`
> e `Rofi-Scripts` ainda usam pranchas de substituição (`public/projects/*.svg`), por dependerem de
> sessão gráfica (GTK4/Wayland/terminal) para serem gravados.

---

## 🧪 Testes

- **Verificação de tipos:** `npm run build` (executa `tsc -b` antes do bundle)
- **Lint:** `npm run lint` (ESLint 9)
- **Teste de contrato do endpoint:** `npm run check:api`
  - Valida o formato da resposta, o cabeçalho de cache, os *guards* (405/403/503), o filtro de
    linguagens e o merge de projetos.
  - Pode ser executado contra um deploy:

```bash
npm run check:api -- https://fernandoleitepagani-portfolio.vercel.app
```

> [!NOTE]
> O projeto ainda não possui suíte de testes unitários com Vitest; a validação atual cobre tipos,
> lint e o contrato do endpoint.

---

## 🔗 Documentações utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Mantine](https://mantine.dev/)
- [React Router](https://reactrouter.com/)
- [Tabler Icons](https://tabler.io/icons)
- [EmailJS](https://www.emailjs.com/docs/)
- [Vercel Functions](https://vercel.com/docs/functions)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)

---

## 👥 Autores

- **Fernando Leite Pagani** — [GitHub](https://github.com/fernandoleitepagani) · [LinkedIn](https://www.linkedin.com/in/fernandoleitepagani)

---

## 🤝 Contribuição

Sugestões e correções são bem-vindas! Veja o guia em [`CONTRIBUTING.md`](CONTRIBUTING.md) para
padrões de commit, fluxo local e pull requests.

---

## 🙏 Agradecimentos

- Ao professor **João Paulo Carneiro Aramuni** (PUC Minas), pelo template de README e pelas
  orientações da disciplina de Desenvolvimento de Interfaces Web.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

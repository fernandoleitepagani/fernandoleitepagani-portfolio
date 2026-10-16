# Roteiro da Apresentação Final — Portfólio Profissional (Lab 01)

> Duração sugerida: **8–10 minutos** + perguntas. Slides em português.
> A apresentação deve explicar **escolhas de design, arquitetura e funcionalidades** (critério da
> avaliação). Adapte os tempos conforme a sua turma.

---

## Slide 1 — Capa

**Título:** Portfólio Profissional — Fernando Leite Pagani
**Subtítulo:** Laboratório 01 — DIW · PUC Minas · 2º período
**Rodapé:** Professor João Paulo Carneiro Aramuni · [link do site] · [link do repositório]

**Fala:** “Boa tarde. Eu sou o Fernando, aluno do 2º período de Ciência da Computação, e vou
apresentar o meu portfólio profissional — o Lab 01 de DIW.”

---

## Slide 2 — O problema e o objetivo

- **Objetivo:** um site de portfólio que apresenta trajetória, habilidades, projetos e contato.
- **Público:** recrutadores e a comunidade acadêmica.
- **Diferencial:** não é um template — é uma demonstração de como eu trabalho (código próprio, dados
  reais, identidade visual própria).

**Fala:** “Eu queria um portfólio que fosse, ele mesmo, uma demonstração das minhas habilidades:
sem template pronto, bilíngue, com dados reais do meu GitHub e uma identidade visual coerente.”

---

## Slide 3 — Demonstração ao vivo

- Abrir o site publicado (Vercel) e navegar: **Sobre → Projetos → Currículo → Contato**.
- Mostrar a troca de **tema** e de **idioma** ao vivo.

**Fala:** “Vou mostrar rapidamente o sistema funcionando: as seções, a troca de tema e de idioma, e o
formulário de contato.”

---

## Slide 4 — As seções

- **Sobre Mim (PT/EN):** apresentação, badge “aberto a estágios”, ferramentas e interesses.
- **Projetos:** cards com nome, descrição, tecnologias, link do GitHub e **página de estudo de caso**.
- **Experiências:** na página **Currículo**, com resumo, experiência, formação, habilidades e idiomas.
- **Contato:** ícones clicáveis + formulário funcional.

**Fala:** “O site segue as quatro seções pedidas — Sobre Mim, Projetos, Experiências e Contato — com
o diferencial de cada projeto ter uma página aprofundada de estudo de caso.”

---

## Slide 5 — Design e identidade visual

- **Estética de terminal:** fonte monoespaçada (JetBrains Mono), alto contraste.
- **Três temas:** Dark, Matrix e CRT — trocáveis e persistidos.
- **Sistema de tokens:** cores e tipografia em variáveis CSS, para consistência.
- **Responsivo:** barra lateral no desktop, menu em gaveta no mobile.
- **Acessibilidade:** rótulos ARIA, foco visível, respeito a `prefers-reduced-motion`.

**Fala:** “As escolhas de design vêm do meu perfil: Linux e terminal. Tudo é guiado por um sistema de
tokens de CSS, então os três temas e a responsividade saem de graça.”

---

## Slide 6 — Arquitetura

- **Front-end:** SPA em **React 19 + TypeScript + Vite**, UI com **Mantine**, rotas com React Router.
- **Back-end:** **função serverless** na Vercel (`/api/github`) — a única parte que fala com o GitHub.
- **Fluxo:** React → `/api/github` → GitHub (GraphQL + REST) → dados normalizados → páginas.
- **Por que:** não expor token no navegador e poder cachear/limitar no servidor.

**Fala:** “A arquitetura é uma SPA com uma função serverless. O token do GitHub fica só no servidor,
e o endpoint tem cache na CDN — o navegador nunca vê segredo nenhum.”

---

## Slide 7 — Funcionalidades técnicas

- **Endpoint `/api/github`:** query GraphQL + REST, cache `s-maxage=300`, guards (405/403/503) e
  **degradação graciosa** se falhar.
- **Projetos:** merge entre dados do GitHub e uma lista curada (o texto em PT, prints e categorias
  sempre vencem).
- **Contato:** envio de e-mail com **EmailJS** (notificação + resposta automática).
- **Extras:** currículo em **PDF (EN/PT)** gerado automaticamente e **Open Graph** para o link
  bonito ao compartilhar.

**Fala:** “Do lado técnico, destaco o endpoint próprio com cache e fallback, o merge de projetos, o
formulário com EmailJS e os extras: o currículo em PDF e o preview do link.”

---

## Slide 8 — Processo e organização

- **Commits semânticos** (Conventional Commits) e pull requests com template.
- **Issues** para cada tarefa/bug.
- **Verificações:** `tsc`, `eslint`, `build` e um **check de contrato** do endpoint.

**Fala:** “Organizei o trabalho com issues e commits semânticos, e mantive as checagens de tipo,
lint e build sempre verdes.”

---

## Slide 9 — Desafios e aprendizados

- Mostrar dados do GitHub **sem expor token** e **sem quebrar** quando a API falha.
- Manter **i18n + 3 temas** consistentes em todas as telas.
- Gerar **PDFs** do currículo a partir do próprio HTML.

**Fala:** “O maior desafio foi mostrar dados reais do GitHub com segurança e resiliência — e fazer
isso conviver com dois idiomas e três temas sem perder consistência.”

---

## Slide 10 — Resultados

- Site **hospedado** (Vercel) e responsivo.
- **Bilíngue** PT/EN, **três temas**, seções completas.
- Currículo em PDF, preview de link (Open Graph) e estudo de caso por projeto.

**Fala:** “O resultado é um site publicado, bilíngue, com três temas e todos os recursos que eu
gostaria de ver em um portfólio.”

---

## Slide 11 — Próximos passos

- Linha do tempo cronológica dos projetos.
- Screenshots/GIFs reais em cada projeto.
- Novas páginas de conteúdo (acadêmico, prêmios).

**Fala:** “Como próximos passos: ordenar os projetos cronologicamente, adicionar prints/GIFs reais e
ampliar as páginas de conteúdo.”

---

## Slide 12 — Encerramento

- **Obrigado!** Perguntas?
- Links: **site** · **repositório** · **LinkedIn**

**Fala:** “Obrigado pela atenção. Fico à disposição para perguntas.”

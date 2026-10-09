# Fernando Leite Pagani — Portfolio

Personal portfolio site. A single-page React app with client-side routing, three switchable terminal-inspired themes, PT/EN localisation, and a working contact form via EmailJS. Deployed on Vercel.

Live: [fernandoleitepagani-portfolio.vercel.app](https://fernandoleitepagani-portfolio.vercel.app)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 (strict mode) |
| Build tool | Vite 7 |
| UI library | Mantine 8 (`@mantine/core`, `@mantine/hooks`) |
| Icons | `@tabler/icons-react` |
| Routing | `react-router-dom` 7 |
| Font | JetBrains Mono (`@fontsource/jetbrains-mono`) |
| Email | EmailJS (`@emailjs/browser`) |
| Linting | ESLint 9 (flat config) + `typescript-eslint` |
| Hosting | Vercel |

---

## Features

- **Three themes** — Dark, Matrix, CRT — switchable at runtime, persisted to `localStorage`.
- **Bilingual** — Portuguese and English, switchable at runtime, persisted to `localStorage`.
- **Contact form** — sends a notification to the owner and an auto-reply to the visitor, both via EmailJS.
- **Recommendations** — cards with avatar, relationship context, text, and LinkedIn link. Data lives in `src/data/recommendations.ts`.
- **GitHub / LeetCode stats** — embedded as live images on the About page.
- **Responsive** — collapsible sidebar on desktop, drawer on mobile.

---

## Project structure

````
.
├── public/
│   ├── favicon.svg
│   ├── photo.jpg                       # profile photo
│   └── linkedin/                       # recommendation avatars
│       ├── rec-bill-gates.jpg
│       ├── rec-bolsonaro.jpg
│       ├── rec-lula.jpg
│       ├── rec-netanyahu.jpg
│       └── rec-putin.jpg
├── src/
│   ├── components/
│   │   ├── Layout.tsx                  # AppShell: sidebar + header + outlet
│   │   ├── PageCard.tsx                # reusable bordered card
│   │   ├── ProjectCard.tsx
│   │   ├── RecommendationCard.tsx
│   │   └── Sidebar.tsx
│   ├── config/
│   │   └── emailjs.ts                  # EmailJS env-var wiring
│   ├── context/
│   │   ├── LanguageContext.tsx         # PT/EN provider + useLanguage()
│   │   └── ThemeContext.tsx            # theme provider + useTheme()
│   ├── data/
│   │   ├── content.ts                  # barrel — re-exports everything below
│   │   ├── i18n.ts                     # PT/EN translation dictionary
│   │   ├── profile.ts                  # name, links, stats image URLs
│   │   ├── projects.ts                 # projects array
│   │   ├── recommendations.ts          # recommendations array
│   │   └── types.ts                    # Lang, Project, Recommendation, Content
│   ├── pages/
│   │   ├── About.tsx                   # about + tools + featured projects + stats
│   │   ├── Contact.tsx                 # contact form + success state
│   │   ├── Curriculum.tsx
│   │   ├── Interests.tsx
│   │   ├── Projects.tsx
│   │   └── Recommendations.tsx
│   ├── styles/
│   │   ├── index.css                   # barrel — @imports everything below
│   │   ├── tokens.css                  # theme tokens + Mantine var overrides
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── timeline.css
│   │   ├── stats.css
│   │   ├── contact.css
│   │   ├── recommendations.css
│   │   ├── sidebar.css
│   │   └── themes/
│   │       └── crt.css                 # CRT overlays (scanlines, flicker, glow)
│   ├── App.tsx                         # route table
│   ├── main.tsx                        # entry point, providers
│   ├── routes.ts                       # sidebar nav items
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
````

**Conventions**

- **Content editing** — everything user-facing lives in `src/data/`. Never edit components to change text; edit `i18n.ts`, `projects.ts`, or `recommendations.ts`.
- **Styling** — one CSS module per feature area, all pulled into `src/styles/index.css` via `@import`. Components don't import CSS directly.
- **Theming** — components use CSS variables (`var(--ink)`, `var(--border)`), never hardcoded colors. That's how a single button works across all three themes.

---

## Running locally

### Prerequisites

- Node.js **20.19+** or **22.12+** (Vite 7 requirement)
- npm 10+

Check your version:

```bash
node -v
```

### Setup

```bash
# 1. Clone
git clone https://github.com/fernandoleitepagani/fernandoleitepagani-portfolio.git
cd fernandoleitepagani-portfolio

# 2. Install
npm install

# 3. Configure EmailJS (see below)
cp .env.example .env.local
# edit .env.local with your keys

# 4. Run
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

### Environment variables

The contact form requires four EmailJS values in `.env.local` (or Vercel's env settings in production):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=
VITE_EMAILJS_PUBLIC_KEY=
```

**How to get them:**

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an email service (SendGrid recommended for deliverability; Gmail/Proton works but auto-replies often land in spam).
3. Create two templates:
   - **Notify me** — "To Email" is your inbox, "Reply To" is `{{email}}`, body includes `{{name}}`, `{{email}}`, `{{message}}`, `{{time}}`.
   - **Auto reply** — "To Email" is `{{email}}`, "Reply To" is your inbox, body includes `{{name}}`, `{{message}}`.
4. Copy the Service ID, both Template IDs, and the Public Key into `.env.local`.

**Without these variables**, the rest of the site works fine — only the contact form fails.

#### `GITHUB_TOKEN` (optional — GitHub stats)

The About page's stats (contribution heatmap, most used languages and the headline counters) come from a Vercel Function in `api/github.ts`, the only place that talks to `api.github.com`:

```
browser ──► /api/github ──► api.github.com
              │ holds GITHUB_TOKEN (server-only)
              │ caches the answer for 5 min (CDN)
              ◄── JSON
```

```
GITHUB_TOKEN=
```

- **No `VITE_` prefix.** It is read on the server at runtime and must never reach the browser bundle. Verify with `npm run build && grep -r "$GITHUB_TOKEN" dist/` — it must print nothing.
- Create a **fine-grained** token with read-only access to public repositories. No write scopes.
- Add it in Vercel under **Settings → Environment Variables** for Production, Preview and Development.
- **Without it**, the site is unaffected: the About page just skips the stats section.
- Local development: `npx vercel dev` runs the function locally (`npm run dev` alone shows no stats).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

### Replacing your profile photo

Drop a square-ish JPG into `public/photo.jpg`. It renders on the About page at 300×400. Any aspect ratio works; the image is `object-fit: cover`.

### Adding a recommendation

1. Save the recommender's photo as `public/linkedin/rec-{id}.jpg`.
2. Append an entry to `src/data/recommendations.ts`:

```ts
{
  id: 'rec-jane-doe',
  name: 'Jane Doe',
  year: 2025,
  avatar: '/linkedin/rec-jane-doe.jpg',
  relationship: { en: '…', pt: '…' },
  text: { en: '…', pt: '…' },
  link: 'https://www.linkedin.com/in/jane-doe',
}
```

### Adding a project

Append to the `projects` array in `src/data/projects.ts`. Set `featured: true` to also show it on the About page.

---

## Hosting (Vercel)

The site deploys to Vercel on every push to `main`.

### First-time setup

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com), log in with GitHub.
3. **Add New → Project** → import the repo.
4. Vercel auto-detects Vite. Accept the defaults:
   - **Framework:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
5. **Before deploying**, add the four EmailJS variables under **Environment Variables** (Production + Preview + Development).
6. Deploy.

### `vercel.json`

The single rewrite rule sends every path to `/` so React Router handles client-side routing correctly on refresh and direct links:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Updating env vars

Changing a variable in Vercel's dashboard **does not** rebuild existing deployments. After editing, go to **Deployments → ⋯ → Redeploy** on the latest build (uncheck "Use existing build cache").

### Custom domain

Vercel → **Project Settings → Domains**. Add your domain, then point the DNS records at Vercel (the dashboard shows exactly which records to create).

---

## Contributing

Contributions are welcome — bug reports, typo fixes, accessibility improvements, or new features that fit the terminal aesthetic. Before opening a PR, please follow the process below.

### Before you start

- **Bug or small fix** — open an issue using the **Bug report** template.
- **New feature or visual change** — open an issue using the **Feature request** template first. Discussing the idea before coding saves everyone time.
- **Typo or one-line fix** — you can open a PR directly.

### Local workflow

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-user>/fernandoleitepagani-portfolio.git
cd fernandoleitepagani-portfolio

# 2. Add the upstream remote
git remote add upstream https://github.com/fernandoleitepagani/fernandoleitepagani-portfolio.git

# 3. Create a branch
git checkout -b fix/sidebar-overflow
# or: feat/reading-time, chore/bump-deps, docs/readme-typo

# 4. Install and run
npm install
npm run dev

# 5. Before committing
npm run lint
npm run build     # must pass with zero errors

# 6. Commit and push
git commit -m "fix(sidebar): prevent overflow on narrow screens"
git push origin fix/sidebar-overflow
```

### Commit style

Conventional Commits, loosely:

```
feat(projects): add filter by tag
fix(contact): prevent double submit while sending
docs(readme): update env var instructions
chore(deps): bump vite to 7.0.1
style(sidebar): align active item padding
refactor(data): split content.ts into modules
```

Scope is optional but useful. Keep the subject under 72 characters.

### Pull requests

Open a PR against `main` and fill in the template that appears automatically (see [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md)). It will ask for:

- What the change does and why.
- Which issue it closes (`Closes #12`).
- How you tested it (dev server, `npm run build`, browser/OS, themes checked).
- A short note on visual changes (screenshots help).

A PR is ready when:

- `npm run lint` passes with zero warnings.
- `npm run build` completes without errors.
- All three themes (Dark, Matrix, CRT) and both languages (PT, EN) still look correct on the affected pages.
- No `console.log` statements or commented-out code remain.

### Issues

Two templates are provided under [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/):

- **Bug report** — reproduction steps, expected vs actual, browser/OS, theme and language in use.
- **Feature request** — problem being solved, proposed solution, alternatives considered.

If your report doesn't fit either, open a blank issue and describe it clearly.

---

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.

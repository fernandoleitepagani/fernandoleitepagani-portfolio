export type Lang = 'en' | 'pt';

/** One day of the contribution calendar, flattened from GraphQL weeks. */
export interface GitHubCalendarDay {
  /** ISO date, e.g. "2026-01-05". */
  date: string;
  count: number;
}

export interface GitHubLanguage {
  name: string;
  bytes: number;
  percent: number;
}

/**
 * Shape returned by `GET /api/github` (see `api/github.ts`).
 * Kept here so the serverless function and the client share one contract.
 */
export interface GitHubStats {
  username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  contributions: { total: number; commits: number; pullRequests: number };
  /** 53 weeks × 7 days, first day is a Sunday (github.com order). */
  calendar: GitHubCalendarDay[];
  languages: GitHubLanguage[];
}

export interface Project {
  name: string;
  /** Repository URL. Omit for projects without public source. */
  githubUrl?: string;
  /** Deployed/live URL, when the project is publicly available. */
  liveUrl?: string;
  /**
   * Preview image under `public/projects/`, referenced as
   * `/projects/{file}`. Omit to render the card without media.
   */
  screenshot?: string;
  tags: string[];
  /** Short category shown above the description, e.g. "Personal project". */
  category: Record<Lang, string>;
  featured?: boolean;
  description: Record<Lang, string>;
}

export interface Recommendation {
  id: string;
  name: string;
  /** Kept for future grouping; not rendered in the card. */
  year?: number;
  /**
   * Avatar path. Served from `public/linkedin/`, so reference it as
   * `/linkedin/{filename}`. Omit the field to fall back to the initial.
   */
  avatar?: string;
  relationship: Record<Lang, string>;
  text: Record<Lang, string>;
  link?: string;
}

export interface Content {
  nav: Record<
    'about' | 'curriculum' | 'projects' | 'interests' | 'recommendations' | 'contact',
    string
  >;
  themeLabel: string;
  a11y: {
    language: string;
    expandSidebar: string;
    collapseSidebar: string;
    github: string;
    menu: string;
  };
  about: {
    title: string;
    tagline: string[];
    description: string;
    statsTitle: string;
    heatmapTitle: string;
    heatmapLess: string;
    heatmapMore: string;
    heatmapNone: string;
    heatmapOne: string;
    heatmapMany: string;
    languagesTitle: string;
    statsContributions: string;
    statsCommits: string;
    statsPullRequests: string;
    statsRepos: string;
    statsFollowers: string;
  };
  curriculum: { title: string; items: { period: string; title: string; place: string }[] };
  projects: { title: string; viewAll: string; subtitle: string; live: string; sourceCode: string };
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
    formPartial: string;
    labelGithub: string;
    labelLinkedin: string;
    labelInstagram: string;
    labelLattes: string;
    labelEmail: string;
    lattesText: string;
  };
}
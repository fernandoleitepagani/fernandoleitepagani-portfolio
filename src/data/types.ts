export type Lang = 'en' | 'pt';

export interface GitHubCalendarDay {
  date: string;
  count: number;
}

export interface GitHubLanguage {
  name: string;
  bytes: number;
  percent: number;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stars: number;
  forks: number;
  pushedAt: string;
  language: string | null;
  topics: string[];
  isFork: boolean;
  isArchived: boolean;
}

export interface GitHubStats {
  username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  contributions: {
    total: number;
    commits: number;
    issues: number;
    pullRequests: number;
    reviews: number;
    restricted: number;
    currentStreak: number;
    longestStreak: number;
  };
  calendar: GitHubCalendarDay[];
  languages: GitHubLanguage[];
  repos: GitHubRepo[];
}

export interface Project {
  name: string;
  repo?: string;
  githubUrl?: string;
  liveUrl?: string;
  screenshot?: string;
  tags: string[];
  category: Record<Lang, string>;
  featured?: boolean;
  description: Record<Lang, string>;
  stars?: number;
  forks?: number;
  pushedAt?: string;
}

export interface Recommendation {
  id: string;
  name: string;
  year?: number;
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
    statsIssues: string;
    statsPullRequests: string;
    statsReviews: string;
    statsPrivate: string;
    statsCurrentStreak: string;
    statsLongestStreak: string;
    statsRepos: string;
    statsFollowers: string;
  };
  curriculum: { title: string; items: { period: string; title: string; place: string }[] };
  projects: {
    title: string;
    viewAll: string;
    subtitle: string;
    live: string;
    sourceCode: string;
    stars: string;
    forks: string;
    updated: string;
    preview: string;
  };
  tools: { title: string; groups: { name: string; items: string[] }[] };
  interests: { title: string; items: string[] };
  recommendations: { title: string; empty: string; readMore: string; readLess: string };
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
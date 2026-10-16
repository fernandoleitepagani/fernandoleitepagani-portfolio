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

export interface ProjectSection {
  title: Record<Lang, string>;
  body: Record<Lang, string>;
}

export interface Project {
  name: string;
  slug?: string;
  repo?: string;
  githubUrl?: string;
  liveUrl?: string;
  screenshot?: string;
  images?: string[];
  period?: string;
  tags: string[];
  category: Record<Lang, string>;
  featured?: boolean;
  description: Record<Lang, string>;
  summary?: Record<Lang, string>;
  sections?: ProjectSection[];
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

export interface ResumeEntry {
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  body: string;
}

export interface ResumeEducation {
  degree: string;
  school: string;
  period: string;
  summary: string;
}

export interface Course {
  name: Record<Lang, string>;
  grade?: string;
}

export interface Semester {
  label: Record<Lang, string>;
  courses: Course[];
}

export interface Certificate {
  name: Record<Lang, string>;
  issuer: string;
  year?: string;
  link?: string;
}

export interface AcademicsContent {
  title: string;
  subtitle: string;
  degree: string;
  school: string;
  status: string;
  semesters: Semester[];
  coursesLabel: string;
  gradeLabel: string;
  certificatesLabel: string;
  certificates: Certificate[];
}

export interface Award {
  title: Record<Lang, string>;
  issuer: string;
  description: Record<Lang, string>;
  count?: number;
  dates?: string[];
  link?: string;
}

export interface AwardsContent {
  title: string;
  subtitle: string;
  empty: string;
  items: Award[];
}

export interface Content {
  nav: Record<'about' | 'resume' | 'projects' | 'academics' | 'awards' | 'recommendations' | 'contact', string>;
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
    available: string;
    ctaResume: string;
    ctaContact: string;
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
  resume: {
    title: string;
    role: string;
    download: string;
    summaryTitle: string;
    summary: string;
    experienceTitle: string;
    experience: ResumeEntry[];
    educationTitle: string;
    education: ResumeEducation[];
    skillsTitle: string;
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  projects: {
    title: string;
    viewAll: string;
    subtitle: string;
    live: string;
    sourceCode: string;
    learnMore: string;
    back: string;
    period: string;
    stack: string;
    links: string;
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
    subtitle: string;
    replyNote: string;
    email: string;
    emailWork: string;
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
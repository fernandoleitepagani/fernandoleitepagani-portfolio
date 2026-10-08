export type Lang = 'en' | 'pt';

export interface Project {
  name: string;
  url: string;
  tags: string[];
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
  about: { title: string; tagline: string[]; description: string };
  curriculum: { title: string; items: { period: string; title: string; place: string }[] };
  projects: { title: string; viewAll: string };
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
  };
}
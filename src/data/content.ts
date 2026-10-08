// Barrel file. Keeps every existing `from '../data/content'` import working.
export type { Lang, Project, Recommendation, Content } from './types';
export { profile, stats } from './profile';
export { projects } from './projects';
export { recommendations } from './recommendations';
export { content } from './i18n';
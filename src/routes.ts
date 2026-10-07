import {
  IconFileText,
  IconFolder,
  IconHeart,
  IconMail,
  IconMessage,
  IconUser,
} from '@tabler/icons-react';

export const navItems = [
  { key: 'about', path: '/', icon: IconUser },
  { key: 'curriculum', path: '/curriculum', icon: IconFileText },
  { key: 'projects', path: '/projects', icon: IconFolder },
  { key: 'interests', path: '/interests', icon: IconHeart },
  { key: 'recommendations', path: '/recommendations', icon: IconMessage },
  { key: 'contact', path: '/contact', icon: IconMail },
] as const;
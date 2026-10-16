import type { ComponentType } from 'react';
import {
  IconAtom,
  IconFileCv,
  IconFolder,
  IconMail,
  IconSchool,
  IconUser,
} from '@tabler/icons-react';

export interface NavItem {
  key: 'about' | 'resume' | 'skills' | 'projects' | 'academics' | 'contact';
  path: string;
  icon: ComponentType<{ size?: number; stroke?: number }>;
  size?: number;
}

export const navItems: NavItem[] = [
  { key: 'about', path: '/', icon: IconUser },
  { key: 'resume', path: '/resume', icon: IconFileCv },
  { key: 'skills', path: '/skills', icon: IconAtom },
  { key: 'projects', path: '/projects', icon: IconFolder },
  { key: 'academics', path: '/academics', icon: IconSchool },
  { key: 'contact', path: '/contact', icon: IconMail },
];

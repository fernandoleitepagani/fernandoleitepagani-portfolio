import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiArchlinux,
  SiC,
  SiCplusplus,
  SiDebian,
  SiDocker,
  SiFedora,
  SiGit,
  SiGnubash,
  SiGithub,
  SiJellyfin,
  SiLinux,
  SiLua,
  SiNeovim,
  SiPython,
  SiReact,
  SiSyncthing,
  SiTailscale,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';

export type SkillCategoryId = 'languages' | 'web' | 'systems' | 'setup';

export const SKILL_CATEGORIES: SkillCategoryId[] = ['languages', 'web', 'systems', 'setup'];

export interface Skill {
  name: string;
  icon?: IconType;
  monogram?: string;
  color: string;
  category: SkillCategoryId;
  link: string;
}

export const skills: Skill[] = [
  { name: 'C', icon: SiC, color: '#A8B9CC', category: 'languages', link: 'https://en.cppreference.com/w/c' },
  { name: 'C++', icon: SiCplusplus, color: '#659AD2', category: 'languages', link: 'https://en.cppreference.com/w/cpp' },
  { name: 'Python', icon: SiPython, color: '#4B8BBE', category: 'languages', link: 'https://docs.python.org/pt-br/3/' },
  { name: 'Java', icon: FaJava, color: '#E76F00', category: 'languages', link: 'https://dev.java/learn/' },
  { name: 'Lua', icon: SiLua, color: '#8AA1D6', category: 'languages', link: 'https://www.lua.org/docs.html' },
  { name: 'Bash', icon: SiGnubash, color: '#4EAA25', category: 'languages', link: 'https://www.gnu.org/software/bash/manual/' },

  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'web', link: 'https://react.dev/' },
  { name: 'TypeScript', icon: SiTypescript, color: '#4C97E8', category: 'web', link: 'https://www.typescriptlang.org/docs/' },
  { name: 'Vite', icon: SiVite, color: '#8B8CFF', category: 'web', link: 'https://vite.dev/' },
  { name: 'Vercel', icon: SiVercel, color: '#E6E8EB', category: 'web', link: 'https://vercel.com/docs' },
  { name: 'GitHub', icon: SiGithub, color: '#F0F6FC', category: 'web', link: 'https://docs.github.com/' },

  { name: 'Linux', icon: SiLinux, color: '#FCC624', category: 'systems', link: 'https://www.kernel.org/' },
  { name: 'Fedora', icon: SiFedora, color: '#51A2DA', category: 'systems', link: 'https://docs.fedoraproject.org/' },
  { name: 'Arch', icon: SiArchlinux, color: '#29B5F6', category: 'systems', link: 'https://wiki.archlinux.org/' },
  { name: 'Debian', icon: SiDebian, color: '#D70A53', category: 'systems', link: 'https://www.debian.org/doc/' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'systems', link: 'https://docs.docker.com/' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'systems', link: 'https://git-scm.com/book/pt-br/v2' },
  { name: 'Tailscale', icon: SiTailscale, color: '#C5D1E0', category: 'systems', link: 'https://tailscale.com/kb/' },
  { name: 'Syncthing', icon: SiSyncthing, color: '#29A8E0', category: 'systems', link: 'https://docs.syncthing.net/' },

  { name: 'Neovim', icon: SiNeovim, color: '#57A143', category: 'setup', link: 'https://neovim.io/doc/' },
  { name: 'Jellyfin', icon: SiJellyfin, color: '#00A4DC', category: 'setup', link: 'https://jellyfin.org/docs/' },
  { name: 'Homelab', monogram: 'HL', color: '#9CA3AF', category: 'setup', link: 'https://www.reddit.com/r/homelab/' },
];

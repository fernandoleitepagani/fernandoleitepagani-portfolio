import { Text, Tooltip, UnstyledButton } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import {
  IconBrandGithub,
  IconChevronsLeft,
  IconChevronsRight,
  IconCode,
  IconDeviceTvOld,
  IconLanguage,
  IconMoon,
  IconWorld,
} from '@tabler/icons-react';
import { navItems } from '../routes';
import { profile } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { themes, useTheme, type ThemeId } from '../context/ThemeContext';

const themeIcons: Record<ThemeId, typeof IconMoon> = {
  dark: IconMoon,
  matrix: IconCode,
  crt: IconDeviceTvOld,
};

interface SidebarProps {
  collapsed: boolean;
  onNavigate: () => void;
  onToggle?: () => void; // only passed on desktop
}

export default function Sidebar({ collapsed, onNavigate, onToggle }: SidebarProps) {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();

  const themeIndex = themes.findIndex((x) => x.id === theme);
  const nextTheme = () => setTheme(themes[(themeIndex + 1) % themes.length].id);

  return (
    <div className="sidebar" data-collapsed={collapsed || undefined}>
      <div className="sidebar-top">
        {collapsed ? <IconWorld size={20} className="logo-icon" /> : <Text className="logo">{profile.name}</Text>}
        {onToggle && (
          <UnstyledButton
            className="icon-btn"
            onClick={onToggle}
            aria-label={collapsed ? t.a11y.expandSidebar : t.a11y.collapseSidebar}
          >
            {collapsed ? <IconChevronsRight size={18} /> : <IconChevronsLeft size={18} />}
          </UnstyledButton>
        )}
      </div>

      <nav>
        {navItems.map(({ key, path, icon: Icon }) => {
          const label = t.nav[key];
          return (
            <Tooltip key={key} label={label} position="right" disabled={!collapsed}>
              <UnstyledButton
                component={Link}
                to={path}
                className="nav-item"
                data-active={pathname === path || undefined}
                aria-label={label}
                onClick={onNavigate}
              >
                <Icon size={18} stroke={1.5} />
                {!collapsed && <span>{label}</span>}
              </UnstyledButton>
            </Tooltip>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="actions">
          <Tooltip label={`${t.themeLabel}: ${themes[themeIndex].label}`} position="top">
            <UnstyledButton className="action-btn" onClick={nextTheme} aria-label={t.themeLabel}>
              {(() => {
                const ThemeIcon = themeIcons[theme];
                return <ThemeIcon size={18} stroke={1.5} />;
              })()}
            </UnstyledButton>
          </Tooltip>
          <Tooltip label={lang === 'pt' ? 'English' : 'Português'} position="top">
            <UnstyledButton className="action-btn" onClick={toggleLang} aria-label={t.a11y.language}>
              <IconLanguage size={18} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
          <Tooltip label={t.a11y.github} position="top">
            <UnstyledButton
              component="a"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="action-btn"
              aria-label={t.a11y.github}
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

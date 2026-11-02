import { useEffect, useState } from 'react';
import { AppShell, Burger, Container, Text } from '@mantine/core';
import { useClickOutside, useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { profile } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

export default function Layout() {
  const { t } = useLanguage();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem('sidebar') === 'collapsed');
  const isDesktop = useMediaQuery('(min-width: 48em)');
  const compact = collapsed && !!isDesktop; // the mobile menu is always expanded
  const headerRef = useClickOutside(close);

  useEffect(() => {
    localStorage.setItem('sidebar', collapsed ? 'collapsed' : 'expanded');
  }, [collapsed]);

  useEffect(() => {
    if (!opened) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [opened, close]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.a11y.skipToContent}
      </a>
      <AppShell
        header={{ height: { base: 58, sm: 0 } }}
        navbar={{ width: compact ? 72 : 224, breakpoint: 'sm' }}
        padding="md"
      >
      <AppShell.Header ref={headerRef} hiddenFrom="sm" className="app-header">
        <div className="mobile-bar">
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            color="var(--ink)"
            aria-label={t.a11y.menu}
            aria-expanded={opened}
            aria-controls="mobile-menu"
          />
          <Text className="logo">{profile.displayName}</Text>
        </div>
        <div className="mobile-menu" id="mobile-menu" data-open={opened || undefined}>
          <div className="mobile-menu-inner">
            <Sidebar collapsed={false} onNavigate={close} />
          </div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar className="app-navbar" visibleFrom="sm">
        <Sidebar
          collapsed={compact}
          onNavigate={close}
          onToggle={isDesktop ? () => setCollapsed((c) => !c) : undefined}
        />
      </AppShell.Navbar>

      <AppShell.Main id="main-content" tabIndex={-1} className="app-main">
        <Container size={1080} className="page-container">
          <Outlet />
        </Container>
      </AppShell.Main>
      </AppShell>
    </>
  );
}

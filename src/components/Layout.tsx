import { useEffect, useState } from 'react';
import { AppShell, Burger, Container, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
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

  useEffect(() => {
    localStorage.setItem('sidebar', collapsed ? 'collapsed' : 'expanded');
  }, [collapsed]);

  return (
    <AppShell
      header={{ height: { base: 56, sm: 0 } }}
      navbar={{ width: compact ? 56 : 190, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header hiddenFrom="sm" px="md" className="mobile-header">
        <Burger opened={opened} onClick={toggle} size="sm" color="var(--ink)" aria-label={t.a11y.menu} />
        <Text>{profile.name}</Text>
      </AppShell.Header>

      <AppShell.Navbar p={0}>
        <Sidebar
          collapsed={compact}
          onNavigate={close}
          onToggle={isDesktop ? () => setCollapsed((c) => !c) : undefined}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size={1000}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

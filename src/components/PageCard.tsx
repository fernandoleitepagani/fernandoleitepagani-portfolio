import type { ReactNode } from 'react';
import { Paper, type MantineSpacing } from '@mantine/core';

interface PageCardProps {
  children: ReactNode;
  className?: string;
  p?: MantineSpacing;
  accent?: boolean;
}

export default function PageCard({ children, className, p = 'xl', accent = false }: PageCardProps) {
  const classes = ['card', accent ? 'card-accent' : '', className ?? ''].filter(Boolean).join(' ');

  return (
    <Paper className={classes} p={p} w="100%">
      {children}
    </Paper>
  );
}

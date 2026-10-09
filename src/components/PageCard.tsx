import type { ReactNode } from 'react';
import { Paper, type MantineSpacing } from '@mantine/core';

interface PageCardProps {
  children: ReactNode;
  className?: string;
  p?: MantineSpacing;
}

export default function PageCard({ children, className, p = 'xl' }: PageCardProps) {
  return (
    <Paper className={className ? `card ${className}` : 'card'} p={p} w="100%">
      {children}
    </Paper>
  );
}
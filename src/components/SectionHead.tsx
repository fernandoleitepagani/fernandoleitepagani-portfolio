import type { ReactNode } from 'react';
import { Title } from '@mantine/core';

interface SectionHeadProps {
  index: number;
  title: string;
  action?: ReactNode;
}

export default function SectionHead({ index, title, action }: SectionHeadProps) {
  return (
    <div className="section-head">
      <Title order={2} className="page-title">
        <span className="section-num" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
        {title}
      </Title>
      {action}
    </div>
  );
}

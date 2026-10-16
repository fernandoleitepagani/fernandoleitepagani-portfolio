import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Text } from '@mantine/core';
import { useLanguage } from '../context/LanguageContext';

interface ClampedProps {
  children: ReactNode;
  lines?: number;
  className?: string;
}

export default function Clamped({ children, lines = 3, className }: ClampedProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return undefined;
    const measure = () => {
      if (!expanded) setClamped(element.scrollHeight > element.clientHeight + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [expanded, lines]);

  return (
    <div className="clamp">
      <Text
        ref={textRef}
        className={className}
        data-clamped={!expanded || undefined}
        style={expanded ? undefined : { WebkitLineClamp: lines }}
      >
        {children}
      </Text>
      {(clamped || expanded) && (
        <button type="button" className="clamp-toggle" onClick={() => setExpanded((v) => !v)}>
          {expanded ? t.common.showLess : t.common.showMore}
        </button>
      )}
    </div>
  );
}

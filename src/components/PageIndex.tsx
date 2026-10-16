import { useLanguage } from '../context/LanguageContext';
import { useSectionSpy } from '../hooks/useSectionSpy';

export interface PageIndexItem {
  id: string;
  label: string;
}

export default function PageIndex({
  items,
  className,
}: {
  items: PageIndexItem[];
  className?: string;
}) {
  const { t } = useLanguage();
  const active = useSectionSpy(items.map((item) => item.id));

  return (
    <nav className={className ? `page-index ${className}` : 'page-index'} aria-label={t.common.index}>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="page-index-link"
          data-active={active === item.id || undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

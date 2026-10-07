import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export const themes = [
  { id: 'dark', label: 'Dark' },
  { id: 'matrix', label: 'Matrix' },
  { id: 'crt', label: 'CRT' },
] as const;

export type ThemeId = (typeof themes)[number]['id'];

interface ThemeValue {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

function loadTheme(): ThemeId {
  const saved = localStorage.getItem('theme');
  return themes.some((t) => t.id === saved) ? (saved as ThemeId) : 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(loadTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

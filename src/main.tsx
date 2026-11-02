import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@mantine/core/styles.css';
import './styles/index.css';
import { router } from './router';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const mantineTheme = createTheme({
  fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  fontFamilyMonospace: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  headings: {
    fontFamily: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
    fontWeight: '500',
  },
  defaultRadius: 'sm',
  components: {
    Anchor: { defaultProps: { underline: 'always', className: 'link' } },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={mantineTheme} forceColorScheme="dark">
      <ThemeProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </ThemeProvider>
    </MantineProvider>
  </StrictMode>,
);

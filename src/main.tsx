import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider, createTheme } from '@mantine/core';
import '@fontsource/jetbrains-mono/400.css';
import '@mantine/core/styles.css';
import './styles/index.css';
import { router } from './router';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const mantineTheme = createTheme({
  fontFamily: '"JetBrains Mono", monospace',
  headings: { fontFamily: '"JetBrains Mono", monospace', fontWeight: '400' },
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

import type { ComponentType } from 'react';
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';

const page = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
});

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <About /> },
      { path: 'resume', lazy: page(() => import('./pages/Resume')) },
      { path: 'skills', lazy: page(() => import('./pages/Skills')) },
      { path: 'projects', lazy: page(() => import('./pages/Projects')) },
      { path: 'projects/:slug', lazy: page(() => import('./pages/ProjectDetail')) },
      { path: 'academics', lazy: page(() => import('./pages/Academics')) },
      { path: 'contact', lazy: page(() => import('./pages/Contact')) },
      { path: 'curriculum', element: <Navigate to="/resume" replace /> },
      { path: 'experiencias', element: <Navigate to="/skills" replace /> },
      { path: 'experiences', element: <Navigate to="/skills" replace /> },
      { path: 'awards', element: <Navigate to="/academics" replace /> },
      { path: 'recommendations', element: <Navigate to="/" replace /> },
      { path: 'interests', element: <Navigate to="/" replace /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

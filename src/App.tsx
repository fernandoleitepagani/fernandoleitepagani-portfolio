import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageCard from './components/PageCard';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import Recommendations from './pages/Recommendations';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="recommendations" element={<Recommendations />} />

        <Route
          element={
            <PageCard>
              <Outlet />
            </PageCard>
          }
        >
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="interests" element={<Interests />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

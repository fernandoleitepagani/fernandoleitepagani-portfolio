import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Academics from './pages/Academics';
import Awards from './pages/Awards';
import Recommendations from './pages/Recommendations';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="academics" element={<Academics />} />
        <Route path="awards" element={<Awards />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="resume" element={<Resume />} />
        <Route path="curriculum" element={<Navigate to="/resume" replace />} />
        <Route path="interests" element={<Navigate to="/" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

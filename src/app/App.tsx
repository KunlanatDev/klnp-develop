import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import ProjectDetail from '@/pages/ProjectDetail';
import Projects from '@/pages/Projects';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        {/* v2: <Route path="/admin/*" element={<AdminRoutes />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

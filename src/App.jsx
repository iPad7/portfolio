import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/AppShell/AppShell';
import Home from './pages/Home/Home';
import Career from './pages/Career/Career';
import TechStack from './pages/TechStack/TechStack';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Contact from './pages/Contact/Contact';
import Print from './pages/Print/Print';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/print" element={<Print />} />
        <Route element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="career" element={<Career />} />
          <Route path="tech-stack" element={<TechStack />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

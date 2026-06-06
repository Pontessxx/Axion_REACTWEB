import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import About from '@/pages/About';
import Finance from '@/pages/Finance';
import Projects from '@/pages/Projects';
import Profile from '@/pages/Profile';
import Historychat from '@/pages/Historychat';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/about" element={<About />} />
          <Route path='/history-chat' element={<Historychat />} />
          <Route path='/profile' element={<Profile />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
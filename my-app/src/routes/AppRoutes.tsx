import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layout/MainLayout';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
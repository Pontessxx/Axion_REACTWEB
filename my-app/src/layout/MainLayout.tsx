import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import '@/styles/MainLayout.scss';

export default function MainLayout() {
  return (
    <>
      <Sidebar />
      <div className="layout__content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
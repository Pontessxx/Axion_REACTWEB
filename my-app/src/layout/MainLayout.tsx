import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/MainLayout.scss';

export default function MainLayout() {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="layout__content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
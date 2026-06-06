import '@/styles/Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/routes/routeConfig';
import logo from '@/assets/logo.png';

import {
  FaHome,
  FaFolderOpen,
  FaMoneyBillWave,
  FaRobot,
  FaHistory,
  FaUserCircle,
} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <nav className="sidebar__menu">
        <NavLink
          to={ROUTES.HOME}
          className="sidebar__item"
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to={ROUTES.PROJECTS}
          className="sidebar__item"
        >
          <FaFolderOpen />
          <span>Projetos</span>
        </NavLink>

        <NavLink
          to={ROUTES.FINANCE}
          className="sidebar__item"
        >
          <FaMoneyBillWave />
          <span>Financeiro</span>
        </NavLink>

        <NavLink
          to={ROUTES.ABOUT}
          className="sidebar__item"
        >
          <FaRobot />
          <span>Sobre nós</span>
        </NavLink>

        <NavLink
          to={ROUTES.HISTORYCHAT}
          className="sidebar__item"
        >
          <FaHistory />
          <span>Histórico</span>
        </NavLink>
      </nav>

        <NavLink
          to={ROUTES.PROFILE}
          className="sidebar__item"
        >
          <FaUserCircle />
          <span>Perfil</span>
        </NavLink>
    </aside>
  );
}
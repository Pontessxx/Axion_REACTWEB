import '@/styles/Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/routes/routeConfig';
import logo from '@/assets/logo.png';

import {
  FaChartLine,
  FaMoneyBillWave,
  FaRobot,
} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="sidebar__menu">

        <NavLink
          to={ROUTES.DASHBOARD}
          className="sidebar__item"
        >
          <FaChartLine />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to={ROUTES.FINANCE}
          className="sidebar__item"
        >
          <FaMoneyBillWave />
          <span>Financeiro</span>
        </NavLink>

        <NavLink
          to={ROUTES.CHAT}
          className="sidebar__item"
        >
          <FaRobot />
          <span>Chat IA</span>
        </NavLink>

      </nav>
    </aside>
  );
}
import { FaUserCircle } from 'react-icons/fa';
import '@/styles/Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__brand">Axion Tech</span>
        <span className="header__divider">|</span>
        <span className="header__breadcrumb">Archives</span>
      </div>

      <div className="header__right">
        <FaUserCircle className="header__avatar-icon" />
        <span className="header__username">User</span>
      </div>
    </header>
  );
}

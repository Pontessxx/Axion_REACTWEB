import '@/styles/Footer.scss';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <h3>AXION TECH</h3>
          
        </div>

        <div className="footer__links">
          <p>
             © {new Date().getFullYear()} AXION TECH. Todos os direitos reservados.
          </p>
        </div>

        <div className="footer__social">
          <a href="https://github.com/Pontessxx/Axion_REACTWEB">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
}
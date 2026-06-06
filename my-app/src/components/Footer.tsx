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
          <p>
            Gestão inteligente para empresas modernas.
          </p>
        </div>

        <div className="footer__links">
          <a href="#">Dashboard</a>
          <a href="#">Financeiro</a>
          <a href="#">Chat IA</a>
        </div>

        <div className="footer__social">
          <a href="https://github.com/Pontessxx/Axion_REACTWEB">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          {/* <a href="#">
            <FaInstagram />
          </a> */}
        </div>

      </div>

      {/* <div className="footer__bottom">
        © {new Date().getFullYear()} AXION TECH. Todos os direitos reservados.
      </div> */}
    </footer>
  );
}
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-names">
              <h3>Mirtha & Daniel</h3>
              <p className="wedding-date">25 de Octubre, 2025</p>
            </div>
            
            <div className="footer-quote">
              <p>"El amor es la poesía de los sentidos"</p>
              <span className="quote-author">- Honoré de Balzac</span>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-info">
            <div className="footer-section">
              <h4>Ubicación</h4>
              <p>Salón Aguas Blancas<br />
              Rawson, San Juan</p>
            </div>
            
            <div className="footer-section">
              <h4>Horario</h4>
              <p>20:00 hs<br />
              Recepción de invitados</p>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>Para consultas<br />
              contacta a los novios</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Mirtha & Daniel - Hecho con ❤️ para nuestro día especial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

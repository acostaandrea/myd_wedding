import React from 'react';
import './Gifts.css';

const Gifts: React.FC = () => {
  return (
    <section id="gifts" className="gifts section">
      <div className="container">
        <div className="gifts-content">
          <div className="gifts-header text-center slide-in-left">
            <div className="decorative-header">
              <div className="decorative-bow"></div>
              <div className="decorative-lines">
                <div className="line left"></div>
                <div className="line right"></div>
              </div>
            </div>
            <h2 className="section-title">REGALOS</h2>
          </div>

          <div className="gifts-message slide-in-right">
            <div className="message-card">
              <p className="main-message">
                Tu presencia es nuestro mejor regalo. Sin embargo,<br />
                si quisieras hacernos un presente adicional, agradeceríamos una<br />
                contribución para nuestra luna de miel.
              </p>
              
              <div className="alias-section">
                <span className="alias-label">Alias:</span>
                <span className="alias-value">DANYT1963</span>
              </div>
            </div>
          </div>

          <div className="closing-message slide-in-left">
            <p className="thank-you-text">
              Gracias por ser parte de nuestra historia de amor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;

import React from 'react';
import './Gifts.css';

const Gifts: React.FC = () => {
  return (
    <section id="gifts" className="gifts section">
      <div className="container">
        <div className="gifts-content">
          <div className="gifts-header text-center slide-in-left">
            <h2 className="section-title">REGALOS</h2>
          </div>

          <div className="gifts-details slide-in-right">
            <div className="gifts-info">
              <p className="info-text">Tu presencia es nuestro mejor regalo. Sin embargo, si quisieras hacernos un presente adicional, agradeceríamos una contribución para nuestra luna de miel</p>
              <div className="alias-info">
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

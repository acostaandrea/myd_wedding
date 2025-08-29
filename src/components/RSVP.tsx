import React from 'react';
import './RSVP.css';

const RSVP: React.FC = () => {
  const handleRSVPClick = () => {
    window.open('https://docs.google.com/forms/d/11Vyhnq185AacsR7GzNAwAUnF8NV6Q0AQ8oKC_s2TXqc/edit?usp=drivesdk', '_blank');
  };

  return (
    <section id="rsvp" className="rsvp section">
      <div className="container">
        <div className="rsvp-content">
          <div className="rsvp-header text-center slide-in-left">
            <h2 className="section-title">CONFIRMAR ASISTENCIA</h2>
          </div>

          <div className="rsvp-details slide-in-right">
            <div className="rsvp-info">
              <p className="info-text">Por favor confirma tu asistencia antes del 03 de octubre</p>
              <p className="dress-code">Código de vestimenta: Estrictamente Formal</p>
            </div>
            
            <div className="rsvp-action">
              <button onClick={handleRSVPClick} className="rsvp-btn">
                <svg className="form-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>CONFIRMAR ASISTENCIA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;

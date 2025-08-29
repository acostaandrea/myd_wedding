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
          <div className="rsvp-card slide-in-left">
            <svg className="rsvp-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <h3>Confirmar Asistencia</h3>
            <p className="rsvp-description">
              Es muy importante para nosotros que confirmes tu asistencia 
              para poder organizar todo perfectamente para este día tan especial.
            </p>
            
            <div className="rsvp-features">
              <div className="feature-item">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Por favor confirma tu asistencia antes del 03 de octubre</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.26V9c0-.55-.45-1-1-1s-1 .45-1 1v6h2v7h3z"/>
                </svg>
                <span>Para consultas especiales, contáctanos directamente</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
                <span>Código de vestimenta: Extrictamente Formal</span>
              </div>
            </div>
            
            <div className="rsvp-action">
              <button onClick={handleRSVPClick} className="btn rsvp-btn">
                Confirmar Asistencia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;

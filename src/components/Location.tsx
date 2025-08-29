import React from 'react';
import './Location.css';

const Location: React.FC = () => {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/YbiSRdm6kiSTmKkV8?g_st=aw', '_blank');
  };

  return (
    <section id="location" className="location section">
      <div className="container">
        <div className="location-content">
          <div className="location-header text-center slide-in-left">
            <h2 className="section-title">Ubicación</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Te esperamos en este lugar tan especial
            </p>
          </div>

          <div className="location-main slide-in-right">
            <div className="venue-info">
              <h3 className="venue-name">Salón Aguas Blancas</h3>
              <div className="venue-details">
                <div className="venue-item">
                  <svg className="venue-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="venue-text">
                    <h4>Dirección</h4>
                    <p>Entre Abraham Tapia y C. Vieja<br />
                    Rawson, San Juan</p>
                  </div>
                </div>                
               
              </div>
              
              <div className="venue-action">
                <button onClick={handleMapClick} className="btn">
                  Cómo llegar
                </button>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default Location;

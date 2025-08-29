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
            <h2 className="section-title">UBICACIÓN</h2>
            <p className="section-subtitle">Salón Aguas Blancas</p>
          </div>

          <div className="location-details slide-in-right">
            <div className="address-info">
              <p className="address-text">Entre Abraham Tapia y C. Vieja</p>
              <p className="city-text">Rawson, San Juan</p>
            </div>
            
            <div className="location-action">
              <button onClick={handleMapClick} className="location-btn">
                <svg className="map-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>CÓMO LLEGAR</span>
              </button>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default Location;

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
                
                <div className="venue-item">
                  <svg className="venue-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                  <div className="venue-text">
                    <h4>Estacionamiento</h4>
                    <p>Disponible en el lugar</p>
                  </div>
                </div>
                
                <div className="venue-item">
                  <svg className="venue-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div className="venue-text">
                    <h4>Horario</h4>
                    <p>20:00 hs en adelante</p>
                  </div>
                </div>
              </div>
              
              <div className="venue-action">
                <button onClick={handleMapClick} className="btn">
                  Ver en Google Maps
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

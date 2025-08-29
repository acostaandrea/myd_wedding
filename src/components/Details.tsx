import React from 'react';
import './Details.css';

const Details: React.FC = () => {
  return (
    <section id="details" className="details section">
      <div className="container">
        <div className="details-content">
          <div className="details-header text-center slide-in-left">
            <h2 className="section-title">CEREMONIA & RECEPCIÓN</h2>
            <div className="divider"></div>
            <p className="section-subtitle">Programa del evento</p>
          </div>

          <div className="details-grid slide-in-right">
            <div className="detail-card">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3>Cóctel de Bienvenida</h3>
              <div className="detail-time">20:00 hs</div>
              <div className="detail-location">Recepción</div>
              <div className="detail-description">
                Brindis de bienvenida y cóctel para todos los invitados
              </div>
            </div>

            <div className="detail-card">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <h3>Ceremonia Civil</h3>
              <div className="detail-time">21:00 hs</div>
              <div className="detail-location">Salón Principal</div>
              <div className="detail-description">
                Celebración del enlace matrimonial
              </div>
            </div>

            <div className="detail-card">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
              </svg>
              <h3>Cena</h3>
              <div className="detail-time">21:30 hs</div>
              <div className="detail-location">Comedor</div>
              <div className="detail-description">
                Cena especial preparada para la ocasión
              </div>
            </div>

            <div className="detail-card">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
              <h3>Fiesta y Baile</h3>
              <div className="detail-time">22:30 hs</div>
              <div className="detail-location">Salón de Baile</div>
              <div className="detail-description">
                Música en vivo y baile hasta el amanecer
              </div>
            </div>
          </div>

          <div className="timeline slide-in-left">
            <h3 className="timeline-title">Cronograma Detallado</h3>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-time">20:00</div>
                <div className="timeline-content">
                  <h4>Recepción de bienvenida</h4>
                  <p>Cóctel de bienvenida y registro de invitados</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">21:00</div>
                <div className="timeline-content">
                  <h4>Ceremonia Civil</h4>
                  <p>Celebración del enlace matrimonial de Mirtha y Daniel</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">21:30</div>
                <div className="timeline-content">
                  <h4>Cena</h4>
                  <p>Cena especial con menú gourmet</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">22:30</div>
                <div className="timeline-content">
                  <h4>Fiesta y Baile</h4>
                  <p>Música en vivo y baile hasta el amanecer</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">04:00</div>
                <div className="timeline-content">
                  <h4>Fin del Evento</h4>
                  <p>Despedida y cierre de la celebración</p>
                </div>
              </div>
            </div>
          </div>

          <div className="closing-message slide-in-right">
            <p className="message-text">
              "El amor no tiene edad, tiene vida. Y después de 34 años de espera, 
              finalmente celebramos nuestro día más especial juntos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

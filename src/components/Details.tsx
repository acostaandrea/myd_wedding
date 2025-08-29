import React from 'react';
import './Details.css';

const Details: React.FC = () => {
  return (
    <section id="details" className="details section">
      <div className="container">
        <div className="details-content">
          <div className="details-header text-center slide-in-left">
            <h2 className="section-title">PROGRAMA DEL EVENTO</h2>
            <p className="section-subtitle">Ceremonia & Recepción</p>
          </div>

          <div className="timeline-simple slide-in-right">
            <div className="timeline-item">
              <div className="timeline-time">20:00</div>
              <div className="timeline-event">Cóctel de Bienvenida</div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">21:00</div>
              <div className="timeline-event">Ceremonia Civil</div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">21:30</div>
              <div className="timeline-event">Cena</div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">22:30</div>
              <div className="timeline-event">Fiesta y Baile</div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-time">04:00</div>
              <div className="timeline-event">Fin del Evento</div>
            </div>
          </div>

          <div className="closing-message slide-in-left">
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

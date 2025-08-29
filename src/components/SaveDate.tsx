import React, { useState, useEffect } from 'react';
import './SaveDate.css';

const SaveDate: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: October 25, 2025 at 20:00 (Argentina time)
    const targetDate = new Date('2025-10-25T20:00:00-03:00');
    
    const updateTimer = () => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCalendar = () => {
    const eventTitle = encodeURIComponent('Boda de Mirtha & Daniel');
    const eventDate = '20251025T200000';
    const eventEndDate = '20251026T040000';
    const eventLocation = encodeURIComponent('Aguas Blancas, Entre Abraham Tapia y C. Vieja, Rawson, San Juan');
    const eventDescription = encodeURIComponent('Celebración de la boda de Mirtha y Daniel. ¡Los esperamos para compartir este día tan especial!');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDate}/${eventEndDate}&location=${eventLocation}&details=${eventDescription}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="save-date" className="save-date section">
      <div className="container">
        <div className="save-date-content">
          <div className="save-date-header text-center slide-in-left">
            <h2 className="section-title">Agendá la Fecha</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Sábado, 25 de Octubre de 2025
            </p>
          </div>

          <div className="event-info slide-in-right">
            <div className="info-cards">
              <div className="info-card">
                <svg className="info-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <h3>Fecha</h3>
                <p>25 de Octubre, 2025</p>
              </div>
              
              <div className="info-card">
                <svg className="info-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <h3>Horario</h3>
                <p>20:00 hs</p>
              </div>
              
              <div className="info-card">
                <svg className="info-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h3>Lugar</h3>
                <p>Salón Aguas Blancas</p>
              </div>
            </div>
          </div>

          <div className="countdown-section slide-in-left">
            <h3 className="countdown-title">Faltan</h3>
            
            <div className="countdown-timer">
              <div className="countdown-item">
                <div className="countdown-circle">
                  <span className="countdown-number">{timeLeft.days}</span>
                </div>
                <span className="countdown-label">DÍAS</span>
              </div>
              <div className="countdown-separator">•</div>
              <div className="countdown-item">
                <div className="countdown-circle">
                  <span className="countdown-number">{timeLeft.hours}</span>
                </div>
                <span className="countdown-label">HS</span>
              </div>
              <div className="countdown-separator">•</div>
              <div className="countdown-item">
                <div className="countdown-circle">
                  <span className="countdown-number">{timeLeft.minutes}</span>
                </div>
                <span className="countdown-label">MIN</span>
              </div>
              <div className="countdown-separator">•</div>
              <div className="countdown-item">
                <div className="countdown-circle">
                  <span className="countdown-number">{timeLeft.seconds}</span>
                </div>
                <span className="countdown-label">SEG</span>
              </div>
            </div>
          </div>
          
          <div className="calendar-action slide-in-right">
            <button onClick={handleAddToCalendar} className="save-date-btn">
              <svg className="calendar-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              <span>AGENDAR EN GOOGLE CALENDAR</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveDate;

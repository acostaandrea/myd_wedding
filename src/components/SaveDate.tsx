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
            <svg className="calendar-header-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <h2 className="section-title">AGENDÁ LA FECHA</h2>
            <p className="section-subtitle">
              25 de octubre de 2025
            </p>
          </div>

          <div className="countdown-section slide-in-right">
            <div className="countdown-display">
              <div className="countdown-number-large">{timeLeft.days}</div>
              <div className="countdown-separator">•</div>
              <div className="countdown-number-large">{timeLeft.hours}</div>
              <div className="countdown-separator">•</div>
              <div className="countdown-number-large">{timeLeft.minutes}</div>
              <div className="countdown-separator">•</div>
              <div className="countdown-number-large">{timeLeft.seconds}</div>
            </div>
            
            <div className="countdown-labels">
              <span className="countdown-label">DÍAS</span>
              <span className="countdown-label">HS</span>
              <span className="countdown-label">MIN</span>
              <span className="countdown-label">SEG</span>
            </div>
          </div>
          
          <div className="calendar-action slide-in-left">
            <button onClick={handleAddToCalendar} className="save-date-btn">
              <svg className="calendar-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              <span>AGENDAR FECHA</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveDate;

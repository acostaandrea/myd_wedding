import React from 'react';
import './Hero.css';

interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  return (
    <section className={`hero ${isLoaded ? 'fade-in' : ''}`}>
      <div className="hero-background">
        <img 
          src="/wedding2.jpg" 
          alt="Mirtha y Daniel" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="name">Mirtha</span>
              <span className="and">&</span>
              <span className="name">Daniel</span>
            </h1>            
            
            <div className="hero-description">
              <p>El amor no tiene edad, tiene vida</p>              
            </div>
            
            <div className="hero-cta">
              <a href="#save-date" className="btn btn-secondary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;

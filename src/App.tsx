import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import SaveDate from './components/SaveDate';
import Details from './components/Details';
import Location from './components/Location';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="App">
      <Hero isLoaded={isLoaded} />
      <SaveDate />
      <Details />
      <Location />
      <RSVP />
      <Gifts />
      <Footer />
    </div>
  );
};

export default App;

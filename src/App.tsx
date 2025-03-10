import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import WhoWeAre from './components/WhoWeAre';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
 
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      
      <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <section id="inicio">
          <ImageSlider />
        </section>
        <section id="empresa">
          <WhoWeAre />
        </section>
        <section id="servicos">
          <CardsSection />
        </section>
      </main>
      <section id="contato">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;

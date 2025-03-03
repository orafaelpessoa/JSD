import React from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import WhoWeAre from './components/WhoWeAre';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
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

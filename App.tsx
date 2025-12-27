
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import WhyEnjaz from './components/WhyEnjaz';
import Credibility from './components/Credibility';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="solutions">
          <Solutions />
        </section>
        <section id="why-enjaz">
          <WhyEnjaz />
        </section>
        <section id="credibility">
          <Credibility />
        </section>
        <section id="cta">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

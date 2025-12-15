import React from 'react';
import HeroSection from './sections/Herosection';
import PartnersSection from './sections/Partnersection';
import Worksection from './sections/Worksection';
import ServicesSection from './sections/ServicesSection';
import GetintouchSection from './sections/ContactSection';
import Footer from './sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PartnersSection />
      <Worksection />
      <ServicesSection />
      <GetintouchSection />
      <Footer />
    </div>
  );
}

export default App;
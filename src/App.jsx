import React from 'react';
import HeroSection from './sections/Herosection';
import PartnersSection from './sections/Partnersection';
import Worksection from './sections/Worksection';
import ServicesSection from './sections/Servicessection';
import GetintouchSection from './sections/ContactSection';
import FooterSection from './sections/footerSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PartnersSection />
      <Worksection />
      <ServicesSection />
      <GetintouchSection />
      <FooterSection />
    </div>
  );
}

export default App;
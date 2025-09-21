import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import EventsSection from '../components/EventsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

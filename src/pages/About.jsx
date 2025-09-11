import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from '../components/Section';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section padding="lg" className="pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SHPE FAU
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our organization, leadership, and mission to empower Hispanic engineers.
            </p>
          </div>
        </Section>
        
        <Section background="gray">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              E-Board & Dev Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated students who lead our organization and drive our mission forward.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

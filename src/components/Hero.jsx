import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-shpe-blue to-blue-600 text-white py-20">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Society of Hispanic Professional Engineers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Empowering the next generation of Hispanic engineers at Florida Atlantic University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Join Our Chapter
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-shpe-blue">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

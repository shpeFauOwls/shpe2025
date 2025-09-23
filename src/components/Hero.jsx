import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className=" relative text-white py-20 ">
      <picture className= "absolute inset-0 -z-10">
      <source srcSet="/images/home/shpe-group.webp" type="image/webp" />
        <img src="/images/home/shpe-group.jpg" alt="SHPE FAU members at a recent event"
        className="w-full h-full sm:h-90 lg:h-[30rem] object-cover  border-slate-200 shadow-soft"
       loading="eager"/>
       </picture>
        
       
       
      
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Hispanic Engineers at FAU
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white-500  max-w-3xl mx-auto">
            Join a vibrant community that builds projects, ships real features, and lands internships together.
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

import React from 'react';
import Button from './Button';

const CTASection = () => {
  return (
    <section className="bg-shpe-blue text-white py-20">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join SHPE FAU?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Become part of a community that will support your academic and professional journey in engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Join Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-shpe-blue">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

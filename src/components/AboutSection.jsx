import React from 'react';
import Card from './Card';

const AboutSection = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: 'Supporting our members in achieving academic success through tutoring, study groups, and mentorship programs.'
    },
    {
      icon: '💼',
      title: 'Professional Development',
      description: 'Connecting students with industry professionals and providing career development opportunities.'
    },
    {
      icon: '🤝',
      title: 'Community Impact',
      description: 'Making a positive impact in our community through outreach programs and STEM education initiatives.'
    }
  ];
  
  return (
    <section className="py-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About SHPE FAU
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our mission is to change lives by empowering the Hispanic community to realize their fullest potential and to impact the world through STEM awareness, access, support, and professional development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" hover className="p-8 text-center">
              <div className="w-16 h-16 bg-shpe-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

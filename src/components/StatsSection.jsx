import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '250+', label: 'Active Members' },
    { number: '15+', label: 'Corporate Partners' },
    { number: '50+', label: 'Events Per Year' },
    { number: '95%', label: 'Job Placement Rate' },
  ];
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-shpe-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

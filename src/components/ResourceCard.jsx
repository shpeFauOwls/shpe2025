import React from 'react';

const ResourceCard = ({ 
  title, 
  description, 
  icon, 
  link,
  category 
}) => {
  const getCategoryColor = (category) => {
    const categoryColors = {
      'Academic': 'bg-blue-50 border-blue-200 text-blue-800',
      'Career': 'bg-green-50 border-green-200 text-green-800',
      'Scholarships': 'bg-yellow-50 border-yellow-200 text-yellow-800',
      'Technical': 'bg-purple-50 border-purple-200 text-purple-800',
      'General': 'bg-gray-50 border-gray-200 text-gray-800'
    };
    return categoryColors[category] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  const getDefaultIcon = (category) => {
    const iconMap = {
      'Academic': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      'Career': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      'Scholarships': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      'Technical': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      'General': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    };
    return iconMap[category] || iconMap['General'];
  };

  const CardContent = () => (
    <div className="p-6 h-full flex flex-col">
      {/* Icon and Category */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-shpe-blue bg-opacity-10 rounded-lg flex items-center justify-center text-shpe-blue">
          {icon ? (
            <img src={icon} alt={title} className="w-8 h-8" />
          ) : (
            getDefaultIcon(category)
          )}
        </div>
        {category && (
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(category)}`}>
            {category}
          </span>
        )}
      </div>
      
      {/* Title and Description */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Link Arrow */}
      <div className="mt-4 flex items-center text-shpe-blue text-sm font-medium">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  if (link) {
    const isExternal = link.startsWith('http');
    
    return (
      <a
        href={link}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        className="block bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 h-full"
        aria-label={`Learn more about ${title}`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 h-full">
      <CardContent />
    </div>
  );
};

export default ResourceCard;

import React from 'react';

const SponsorCard = ({ 
  name, 
  logo, 
  tier, 
  url 
}) => {
  const getTierColor = (tier) => {
    const tierColors = {
      'Gold': 'bg-yellow-50 border-yellow-200 text-yellow-800',
      'Silver': 'bg-gray-50 border-gray-200 text-gray-800',
      'Bronze': 'bg-orange-50 border-orange-200 text-orange-800',
      'Platinum': 'bg-purple-50 border-purple-200 text-purple-800'
    };
    return tierColors[tier] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  const CardContent = () => (
    <div className="flex flex-col items-center justify-center p-6 h-full">
      {/* Logo */}
      <div className="mb-4 flex-shrink-0">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-16 max-w-32 object-contain"
          />
        ) : (
          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium">
              {name}
            </span>
          </div>
        )}
      </div>
      
      {/* Sponsor Name */}
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
        {name}
      </h3>
      
      {/* Tier Badge */}
      {tier && (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTierColor(tier)}`}>
          {tier} Sponsor
        </span>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 h-full"
        aria-label={`Visit ${name} website`}
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

export default SponsorCard;

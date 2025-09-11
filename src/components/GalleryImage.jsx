import React from 'react';

const GalleryImage = ({ 
  src, 
  alt, 
  onClick 
}) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-square bg-gray-200">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-shpe-blue to-blue-600">
            <div className="text-center text-white">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">Image Placeholder</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay with alt text */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
        <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium">{alt}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;

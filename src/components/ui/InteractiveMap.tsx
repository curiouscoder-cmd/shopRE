'use client';

import { useState } from 'react';

interface InteractiveMapProps {
  address: string;
  businessName: string;
  className?: string;
}

const InteractiveMap = ({ 
  address, 
  businessName, 
  className = "h-[400px] rounded-lg overflow-hidden shadow-lg" 
}: InteractiveMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8!2d81.3498!3d21.6637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM5JzQ5LjMiTiA4McKwMjAnNTkuMyJF!5e1!3m2!1sen!2sin!4v1638461460188!5m2!1sen!2sin&maptype=roadmap&zoom=16&q=Baloda+Bazar+Raipur+Chhattisgarh`;
  
  const directionsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <div className={`${className} relative group`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4 animate-bounce">🗺️</div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Loading Map...</h3>
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}
      
      {/* Google Maps iframe */}
      <iframe 
        src={mapUrl}
        width="100%" 
        height="100%" 
        style={{ 
          border: 0, 
          filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
          transition: 'filter 0.3s ease'
        }} 
        allowFullScreen 
        loading="lazy"
        title={`${businessName} Location Map`}
        onLoad={() => setIsLoaded(true)}
        className="group-hover:brightness-110 transition-all duration-300"
      />
      
      {/* Store info overlay */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50 transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-800">{businessName}</h4>
            <p className="text-xs text-gray-600">📍 Baloda Bazar, Raipur</p>
          </div>
        </div>
      </div>
      
      {/* Interactive buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <a 
          href={directionsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
        >
          <span>🗺️</span>
          <span>Get Directions</span>
        </a>
        
        <button 
          onClick={() => window.open(`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=k`, '_blank')}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
        >
          <span>🛰️</span>
          <span>Satellite View</span>
        </button>
      </div>
      
      {/* Zoom controls overlay */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-gray-200">
        <div className="text-xs text-gray-600 px-2 py-1">
          📍 Live Location
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;

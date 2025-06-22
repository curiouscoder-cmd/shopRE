'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ShowroomImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ShowroomImage = ({ 
  src, 
  alt, 
  className = "object-cover w-full h-full rounded-2xl"
}: ShowroomImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-[400px] w-full flex items-center justify-center card-3d">
        <div className="text-center">
          <div className="text-6xl mb-4">🏪</div>
          <h3 className="text-2xl font-bold gradient-text">Our Showroom</h3>
          <p className="text-gray-600 mt-2">Visit us to experience our products</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl card-3d">
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={handleImageError}
      />
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
      
      {/* Optional overlay text */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold drop-shadow-lg">Our Showroom</h3>
        <p className="text-sm opacity-90 drop-shadow-lg">Visit us to experience our products</p>
      </div>
    </div>
  );
};

export default ShowroomImage;

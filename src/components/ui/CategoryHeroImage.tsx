'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CategoryHeroImageProps {
  src: string;
  alt: string;
  categoryName: string;
  categoryType: 'electronics' | 'furniture';
  description: string;
}

const CategoryHeroImage = ({ 
  src, 
  alt, 
  categoryName, 
  categoryType, 
  description 
}: CategoryHeroImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center">
          <div className="text-6xl mb-4">
            {categoryType === 'electronics' ? '📱' : '🛋️'}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{categoryName}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{categoryName}</h1>
        <p className="text-lg opacity-90">{description}</p>
      </div>
    </>
  );
};

export default CategoryHeroImage;

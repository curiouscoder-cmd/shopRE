'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CategoryImageProps {
  src: string;
  alt: string;
  categoryName: string;
  categoryType: 'electronics' | 'furniture';
  className?: string;
  fallbackClassName?: string;
}

const CategoryImage = ({ 
  src, 
  alt, 
  categoryName, 
  categoryType, 
  className = "object-cover group-hover:scale-110 transition-transform duration-300",
  fallbackClassName = "flex items-center justify-center h-full"
}: CategoryImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={fallbackClassName}>
        <div className="text-center">
          <div className="text-4xl mb-2">
            {categoryType === 'electronics' ? '📱' : '🛋️'}
          </div>
          <span className="text-gray-600 font-medium">
            {categoryName}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={handleImageError}
    />
  );
};

export default CategoryImage;

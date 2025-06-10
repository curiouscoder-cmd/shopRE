'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BrandImageProps {
  src: string;
  alt: string;
  brandName: string;
  className?: string;
  fallbackClassName?: string;
}

const BrandImage = ({ 
  src, 
  alt, 
  brandName, 
  className = "object-contain w-full h-full",
  fallbackClassName = "w-24 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
}: BrandImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className={fallbackClassName}>
        <span className="text-gray-600 text-xs font-semibold group-hover:text-purple-600 transition-colors">
          {brandName}
        </span>
      </div>
    );
  }

  return (
    <div className="w-24 h-16 bg-white rounded-xl flex items-center justify-center mb-4 p-2 group-hover:bg-blue-50 transition-all duration-300 border border-gray-100">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={50}
        className={className}
        onError={handleImageError}
      />
    </div>
  );
};

export default BrandImage;

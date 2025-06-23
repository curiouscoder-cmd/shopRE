'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  productName: string;
  className?: string;
}

const ProductImage = ({ 
  src, 
  alt, 
  productName,
  className = "relative h-48 bg-white overflow-hidden group"
}: ProductImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200`}>
        <div className="text-center p-4">
          <div className="text-4xl mb-2">📦</div>
          <div className="text-sm font-medium text-gray-600">{productName}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      )}
      
      {/* Product Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        onError={handleImageError}
        onLoad={handleImageLoad}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProductImage;

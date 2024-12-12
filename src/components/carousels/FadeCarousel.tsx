

import React, { useState, useEffect } from 'react';

interface FadeCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export const FadeCarousel: React.FC<FadeCarouselProps> = ({
  images,
  autoPlayInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  
  
  
  return (
    <div className="relative h-96 overflow-hidden rounded-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentIndex === index
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
          } ${isTransitioning ? 'scale-105' : 'scale-100'}`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};


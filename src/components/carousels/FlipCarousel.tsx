

import React, { useState, useEffect } from 'react';

interface FlipCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export const FlipCarousel: React.FC<FlipCarouselProps> = ({
  images,
  autoPlayInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFlipping(false);
      }, 500);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  return (
    <div className="relative h-96 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          flipping ? 'rotate-x-180' : ''
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full backface-hidden transition-opacity duration-300 ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            } ${index === (currentIndex + 1) % images.length ? 'rotate-x-180' : ''}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
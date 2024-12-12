

import { PartyPopperIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';




interface ZoomCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}



export const ZoomCarousel: React.FC<ZoomCarouselProps> = ({
  images,
  autoPlayInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zooming, setZooming] = useState(false);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setZooming(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setZooming(false);
      }, 500);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);


  return (
    <div className="relative h-96 overflow-hidden rounded-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 ${
            currentIndex === index
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-150 z-0'
          } ${zooming ? 'scale-150' : 'scale-100'}`}
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
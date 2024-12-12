

import React, { useState } from 'react';

interface CoverflowCarouselProps {
  images: string[];
}







export const CoverflowCarousel: React.FC<CoverflowCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const rotateY = Math.min(Math.max(offset * 45, -45), 45);
    const translateZ = Math.abs(offset) * -100;
    const translateX = offset * 50;
    const opacity = 1 - Math.min(1, Math.abs(offset) * 0.5);


    return {
      transform: `translateX(${translateX}%) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      opacity,
      zIndex: 10 - Math.abs(offset),
    };
  };

  return (
    <div className="carousel-container perspective">
      <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-all duration-500 cursor-pointer"
            style={getSlideStyle(index)}
            onClick={() => setCurrentIndex(index)}
          >print(prp)
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

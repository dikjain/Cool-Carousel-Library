import React, { useState } from 'react';

interface CardCarouselProps {
  images: string[];
}

export const CardCarousel: React.FC<CardCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const opacity = Math.max(0, 1 - Math.abs(offset) * 0.5);
    const scale = Math.max(0.8, 1 - Math.abs(offset) * 0.2);
    const translateX = offset * 50; 
    const zIndex = 10 - Math.abs(offset);

    

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  


  return (
    <div className="carousel-container overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-all duration-500 cursor-pointer"
            style={getCardStyle(index)}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="carousel-image shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};





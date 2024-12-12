import React, { useState } from 'react';

interface CubeCarouselProps {
  images: string[];
}

export const CubeCarousel: React.FC<CubeCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotate = (direction: 'next' | 'prev') => {
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % images.length;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative h-96 perspective">
      <div
        className="relative w-full h-full transition-transform duration-1000 transform-style-3d"
        style={{
          transform: `rotateY(-${currentIndex * 90}deg)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full backface-hidden"
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(400px)`,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={() => rotate('prev')}
          className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => rotate('next')}
          className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
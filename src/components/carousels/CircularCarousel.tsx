import React, { useState } from 'react';

interface CircularCarouselProps {
  images: string[];
}

export const CircularCarousel: React.FC<CircularCarouselProps> = ({ images }) => {
  const [rotation, setRotation] = useState(0);

  const getSlideStyle = (index: number) => {
    const angle = (360 / images.length) * index + rotation;
    const radius = 200; 
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const z = Math.sin((angle * Math.PI) / 180) * radius;
    const scale = (z + radius) / (2 * radius);

    return {
      transform: `translate3d(${x}px, 0, ${z}px) scale(${scale})`,
      opacity: scale,
      zIndex: Math.floor(scale * 10),
    };
  };

  const rotate = (direction: 'next' | 'prev') => {
    const step = 360 / images.length;
    setRotation(prev => prev + (direction === 'next' ? -step : step));
  };

  return (
    <div className="carousel-container perspective">
      <div className="absolute inset-0 flex items-center justify-center transform-style-3d">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-56 h-56 transition-all duration-500"
            style={getSlideStyle(index)}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image shadow-2xl"
            />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          onClick={() => rotate('prev')}
          className="carousel-button"
        >
          Previous
        </button>
        <button
          onClick={() => rotate('next')}
          className="carousel-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};
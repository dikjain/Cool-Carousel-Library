import React, { useState, useEffect } from 'react';

interface InfiniteCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  return (
    <div className="relative h-96 overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
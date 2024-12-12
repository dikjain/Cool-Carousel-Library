

import React, { useState } from 'react';




interface ParallaxCarouselProps {
  images: string[];
}

export const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleDragStart = (e: React.MouseEvent) => {
    setDragStart(e.clientX - dragOffset);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (dragStart === 0) return;
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    setDragStart(0);
    setDragOffset(0);
  };
  
  return (
    <div 
      className="relative h-96 overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <div
        className="flex transition-transform duration-500 h-full"
        style={{
          transform: `translateX(${-currentIndex * 100 + (dragOffset / window.innerWidth) * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
            style={{
              transform: `translateX(${(index - currentIndex) * 10}%)`,
              transition: 'transform 500ms',
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};
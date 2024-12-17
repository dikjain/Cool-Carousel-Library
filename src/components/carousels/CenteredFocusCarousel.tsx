import React, { useState, useEffect } from "react";

interface FocusedWidthCarouselProps {
  images: string[];
  duration?: number; // Duration per image in milliseconds
}

export const FocusedWidthCarousel: React.FC<FocusedWidthCarouselProps> = ({
  images,
  duration = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="relative w-full h-[400px] flex justify-center items-center gap-4 bg-gray-900">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative flex-shrink-0 h-full overflow-hidden rounded-lg transition-all duration-500 ${
            index === currentIndex
              ? "w-[80%] opacity-100"
              : "w-[10%] opacity-50"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

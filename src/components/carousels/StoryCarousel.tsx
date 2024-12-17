import React, { useState, useEffect } from "react";

interface StoryCarouselProps {
  images: string[];
  duration?: number; 
}

export const StoryCarousel: React.FC<StoryCarouselProps> = ({ images, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, duration / 100); 

    if (progress >= 100) {
      moveToNextSlide();
    }

    return () => clearInterval(interval);
  }, [progress]);

  const moveToNextSlide = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const moveToPrevSlide = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-96 bg-black overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 left-0 w-full flex gap-2 px-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-1 rounded-full ${
              index < currentIndex
                ? "bg-white"
                : index === currentIndex
                ? "bg-white"
                : "bg-gray-500"
            }`}
          >
            {index === currentIndex && (
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={moveToPrevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700/50 text-white px-3 py-2 rounded-full hover:bg-gray-800/70 z-10"
      >
        &lt;
      </button>
      <button
        onClick={moveToNextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700/50 text-white px-3 py-2 rounded-full hover:bg-gray-800/70 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

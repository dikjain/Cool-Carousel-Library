import React, { useState } from "react";
interface ZoomSlideCarouselProps {
  images: string[];
}


export const ZoomSlideCarousel: React.FC<ZoomSlideCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };





  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative overflow-hidden"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transform transition-transform duration-700 ${
                index === currentIndex ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700/50 text-white px-3 py-2 rounded-full hover:bg-gray-800/70"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700/50 text-white px-3 py-2 rounded-full hover:bg-gray-800/70"
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


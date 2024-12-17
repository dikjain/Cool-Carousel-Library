import React, { useState } from "react";

interface RotatingCarouselProps {
  images: string[];
}

export const RotatingCarousel: React.FC<RotatingCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateCarousel = (direction: "next" | "prev") => {
    setCurrentIndex((prev) =>
      direction === "next" ? (prev + 1) % images.length : (prev === 0 ? images.length - 1 : prev - 1)
    );
  };

  const angle = 360 / images.length;
  const translateZ = 300;

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center perspective">
      <div
        className="relative w-[400px] h-[400px] transform-style-3d transition-transform duration-1000"
        style={{
          transform: `rotateY(${-currentIndex * angle}deg)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute w-full h-full flex justify-center items-center backface-hidden"
            style={{
              transform: `rotateY(${index * angle}deg) translateZ(${translateZ}px)`,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-64 h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => rotateCarousel("prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-800/70"
      >
        &lt;
      </button>
      <button
        onClick={() => rotateCarousel("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-800/70"
      >
        &gt;
      </button>
    </div>
  );
};

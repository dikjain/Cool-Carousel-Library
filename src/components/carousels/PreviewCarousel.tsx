import React, { useState, useEffect } from "react";

interface PreviewCarouselProps {
  images: string[];
  duration?: number;
}

export const PreviewCarousel: React.FC<PreviewCarouselProps> = ({ images, duration = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / duration) * 100;
      setProgress(newProgress);

      if (newProgress >= 100) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        startTime = Date.now();
        setProgress(0);
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [images.length, duration]);

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center bg-black overflow-hidden">
      <div className="relative w-full h-full">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      </div>

      <div className="absolute bottom-6 right-6 w-32 h-32 bg-gray-800 p-1 rounded-md shadow-lg">
        <div className="relative w-full h-full overflow-hidden">
          <img
            key={nextIndex}
            src={images[nextIndex]}
            alt={`Preview ${nextIndex + 1}`}
            className="w-full h-full object-cover rounded-md transition-all duration-1000 ease-in-out"
            style={{
              opacity: 0.4 + (progress / 100) * 0.6,
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 ease-linear loader-bar2"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

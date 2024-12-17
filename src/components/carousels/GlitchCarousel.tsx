import React, { useState, useEffect } from "react";

interface GlitchCarouselProps {
  images: string[];
  duration?: number;
}

export const GlitchCarousel: React.FC<GlitchCarouselProps> = ({ images, duration = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center bg-black overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent mix-blend-overlay animate-glitch-1"></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-red-500 to-transparent mix-blend-overlay animate-glitch-2"></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-green-500 to-transparent mix-blend-overlay animate-glitch-3"></div>
            
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_rgba(0,0,0,0.1)_50%,_transparent_100%)] bg-[length:100%_4px] animate-scan-lines"></div>
            
            <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-noise mix-blend-overlay opacity-50"></div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-800/70 z-10"
      >
        &lt;
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-800/70 z-10"
      >
        &gt;
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(5px, -5px); }
          60% { transform: translate(-5px); }
          80% { transform: translate(5px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(5px); }
          40% { transform: translate(-5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(-5px, -5px); }
        }
        
        @keyframes glitch-3 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, -3px); }
          40% { transform: translate(3px, 3px); }
          60% { transform: translate(-3px); }
          80% { transform: translate(3px); }
        }

        @keyframes scan-lines {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }

        @keyframes noise {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-5%, -5%); }
          30% { transform: translate(3%, -2%); }
          50% { transform: translate(-2%, 6%); }
          70% { transform: translate(5%, 2%); }
          90% { transform: translate(-3%, -5%); }
        }

        .animate-glitch-1 {
          animation: glitch-1 0.5s cubic-bezier(.25, .46, .45, .94) infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 0.5s cubic-bezier(.25, .46, .45, .94) infinite;
          animation-delay: 0.1s;
        }

        .animate-glitch-3 {
          animation: glitch-3 0.5s cubic-bezier(.25, .46, .45, .94) infinite;
          animation-delay: 0.2s;
        }

        .animate-scan-lines {
          animation: scan-lines 8s linear infinite;
        }

        .animate-noise {
          animation: noise 8s steps(10) infinite;
        }
      `}} />
    </div>
  );
};

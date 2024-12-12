import React from 'react';
import { Boxes } from 'lucide-react';
import { InfiniteCarousel } from './components/carousels/InfiniteCarousel';
import { CubeCarousel } from './components/carousels/CubeCarousel';
import { FadeCarousel } from './components/carousels/FadeCarousel';
import { FlipCarousel } from './components/carousels/FlipCarousel';
import { ZoomCarousel } from './components/carousels/ZoomCarousel';
import { ParallaxCarousel } from './components/carousels/ParallaxCarousel';
import { CardCarousel } from './components/carousels/CardCarousel';
import { CoverflowCarousel } from './components/carousels/CoverflowCarousel';
import { CircularCarousel } from './components/carousels/CircularCarousel';
import { CarouselShowcase } from './components/CarouselShowcase';

const images = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
  'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s'

];



function App() {

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <header className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-white mb-4">
            <Boxes className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Carousel Library</h1>
          </div>
          <p className="text-gray-300 text-lg">
            A collection of beautiful, customizable carousel components for your next project.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-16 space-y-16">
        <CarouselShowcase
          title="Infinite Carousel"
          description="A smooth, auto-playing carousel with infinite loop functionality."
          htmlCode={`<div class="carousel">
  <div class="carousel-inner">
    <!-- Add your images here -->
  </div>
  <div class="carousel-dots">
    <!-- Dots are generated dynamically -->
  </div>
</div>`}
          cssCode={`.carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-out;
  height: 100%;
}

.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}`}
          jsCode={`class Carousel {
  constructor(element, options = {}) {
    this.element = element;
    this.interval = options.interval || 3000;
    this.currentIndex = 0;
    
    this.init();
    this.startAutoPlay();
  }

  init() {
    // Initialize carousel
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updatePosition();
  }

  updatePosition() {
    // Update carousel position
  }
}`}
        >
          <InfiniteCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="3D Cube Carousel"
          description="An impressive 3D cube rotation effect for showcasing content."
          htmlCode={`<div class="cube-carousel">
  <div class="cube">
    <!-- Add your slides here -->
  </div>
  <div class="controls">
    <button class="prev">Previous</button>
    <button class="next">Next</button>
  </div>
</div>`}
          cssCode={`.cube-carousel {
  perspective: 1000px;
  height: 400px;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}`}
          jsCode={`class CubeCarousel {
  constructor(element) {
    this.element = element;
    this.currentRotation = 0;
    
    this.init();
  }

  rotate(direction) {
    this.currentRotation += direction === 'next' ? 90 : -90;
    this.element.style.transform = 
      \`rotateY(\${this.currentRotation}deg)\`;
  }
}`}
        >
          <CubeCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Fade Carousel"
          description="A sophisticated fade transition effect between slides."
          htmlCode={`<div class="fade-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.fade-carousel {
  position: relative;
  height: 400px;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}`}
          jsCode={`class FadeCarousel {
  constructor(element, options = {}) {
    this.element = element;
    this.interval = options.interval || 4000;
    this.currentIndex = 0;
    
    this.init();
    this.startAutoPlay();
  }

  transition() {
    const slides = this.element.querySelectorAll('.slide');
    slides[this.currentIndex].classList.remove('active');
    this.currentIndex = (this.currentIndex + 1) % slides.length;
    slides[this.currentIndex].classList.add('active');
  }
}`}
        >
          <FadeCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Flip Carousel"
          description="A 3D flip animation between slides."
          htmlCode={`<div class="flip-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.flip-carousel {
  perspective: 1000px;
  height: 400px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}`}
          jsCode={`class FlipCarousel {
  constructor(element) {
    this.element = element;
    this.currentIndex = 0;
    this.flipping = false;
    
    this.init();
  }

  flip() {
    this.flipping = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.flipping = false;
    }, 500);
  }
}`}
        >
          <FlipCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Zoom Carousel"
          description="A zoom transition effect between slides."
          htmlCode={`<div class="zoom-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.zoom-carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  transition: all 0.5s;
}`}
          jsCode={`class ZoomCarousel {
  constructor(element) {
    this.element = element;
    this.currentIndex = 0;
    
    this.init();
  }

  zoom() {
    this.slides[this.currentIndex].classList.add('zooming');
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.slides[this.currentIndex].classList.remove('zooming');
    }, 500);
  }
}`}
        >
          <ZoomCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Parallax Carousel"
          description="A smooth parallax effect with drag interaction."
          htmlCode={`<div class="parallax-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.parallax-carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.slide {
  position: relative;
  min-width: 100%;
  transition: transform 0.5s;
}`}
          jsCode={`class ParallaxCarousel {
  constructor(element) {
    this.element = element;
    this.dragStart = 0;
    this.currentIndex = 0;
    
    this.init();
  }

  handleDrag(offset) {
    if (Math.abs(offset) > 100) {
      this.currentIndex += offset > 0 ? -1 : 1;
    }
    this.updatePosition();
  }
}`}
        >
          <ParallaxCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Card Carousel"
          description="A stack of cards with smooth transitions."
          htmlCode={`<div class="card-carousel">
  <!-- Cards are added dynamically -->
</div>`}
          cssCode={`.card-carousel {
  position: relative;
  height: 400px;
}

.card {
  position: absolute;
  transition: all 0.5s;
}`}
          jsCode={`class CardCarousel {
  constructor(element) {
    this.element = element;
    this.currentIndex = 0;
    
    this.init();
  }

  updateCards() {
    this.cards.forEach((card, index) => {
      const offset = index - this.currentIndex;
      card.style.transform = \`
        translateX(\${offset * 60}%)
        scale(\${1 - Math.abs(offset) * 0.2})
      \`;
    });
  }
}`}
        >
          <CardCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Coverflow Carousel"
          description="A classic coverflow effect with 3D rotation."
          htmlCode={`<div class="coverflow-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.coverflow-carousel {
  perspective: 1000px;
  height: 400px;
}

.slide {
  position: absolute;
  transition: all 0.5s;
  transform-style: preserve-3d;
}`}
          jsCode={`class CoverflowCarousel {
  constructor(element) {
    this.element = element;
    this.currentIndex = 0;
    
    this.init();
  }

  updateSlides() {
    this.slides.forEach((slide, index) => {
      const offset = index - this.currentIndex;
      slide.style.transform = \`
        rotateY(\${offset * 45}deg)
        translateZ(\${Math.abs(offset) * -100}px)
      \`;
    });
  }
}`}
        >
          <CoverflowCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Circular Carousel"
          description="A circular 3D carousel with perspective."
          htmlCode={`<div class="circular-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.circular-carousel {
  perspective: 1000px;
  height: 400px;
}

.slide {
  position: absolute;
  transition: all 0.5s;
  transform-style: preserve-3d;
}`}
          jsCode={`class CircularCarousel {
  constructor(element) {
    this.element = element;
    this.rotation = 0;
    
    this.init();
  }

  rotate(direction) {
    const step = 360 / this.slides.length;
    this.rotation += direction === 'next' ? -step : step;
    this.updatePositions();
  }
}`}
        >
          <CircularCarousel images={images} />
        </CarouselShowcase>
      </main>
    </div>
  );
}
export default App;
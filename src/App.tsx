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
import { ZoomSlideCarousel } from './components/carousels/ZoomSlideCarousel';
import { CarouselShowcase } from './components/CarouselShowcase';
import { StoryCarousel } from './components/carousels/StoryCarousel';
import { RotatingCarousel } from './components/carousels/RotatingCarousel';
import { GlitchCarousel } from './components/carousels/GlitchCarousel';
import { PreviewCarousel } from './components/carousels/PreviewCarousel';
import { FocusedWidthCarousel } from './components/carousels/CenteredFocusCarousel';

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
          title="Preview Carousel"
          description="A carousel with preview of the next slide and progress bar."
          htmlCode={`<div class="preview-carousel">
  <div class="main-image">
    <!-- Current slide -->
  </div>
  <div class="preview">
    <!-- Next slide preview -->
    <div class="progress-bar"></div>
  </div>
</div>`}
          cssCode={`.preview-carousel {
  position: relative;
  height: 500px;
}

.preview {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 8rem;
  height: 8rem;
  background: #1f2937;
  padding: 0.25rem;
  border-radius: 0.375rem;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.25rem;
  background: #3b82f6;
  transition: width 1s linear;
}`}
          jsCode={`class PreviewCarousel {
  constructor(element, options = {}) {
    this.element = element;
    this.duration = options.duration || 5000;
    this.currentIndex = 0;
    
    this.init();
    this.startAutoPlay();
  }

  init() {
    // Initialize carousel
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlides();
  }

  updateSlides() {
    // Update current and preview slides
  }
}`}
        >
          <PreviewCarousel images={images} />
        </CarouselShowcase>

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

        <CarouselShowcase
          title="Zoom Slide Carousel"
          description="A zoom slide transition effect between slides."
          htmlCode={`<div class="zoom-slide-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.zoom-slide-carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  transition: all 0.5s;
}`}
          jsCode={`class ZoomSlideCarousel {
  constructor(element) {
    this.element = element;
    this.currentIndex = 0;
    
    this.init();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updatePosition();
  }

  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updatePosition();
  }

  goToPrev() {
    this.currentIndex = (this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1);
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.transform = \`translateX(-\${this.currentIndex * 100}%)\`;
  }
}`}
        >
          <ZoomSlideCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Story Carousel"
          description="A story-like carousel with progress bar and navigation buttons."
          htmlCode={`<div class="story-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.story-carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.story-carousel img {
  position: absolute;
  inset: 0;
  object-fit: cover;
  transition: opacity 0.5s;
}

.story-carousel .progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
}

.story-carousel .progress-bar .progress {
  height: 100%;
  background: #3182ce;
}

.story-carousel .navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
}

.story-carousel .navigation button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  color: #3182ce;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}`}
          jsCode={`class StoryCarousel {
  constructor(element, options = {}) {
    this.element = element;
    this.interval = options.interval || 3000;
    this.currentIndex = 0;
    this.progress = 0;
    
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
          <StoryCarousel images={images} />
        </CarouselShowcase>

        <CarouselShowcase
          title="Rotating Carousel"
          description="A rotating carousel with navigation buttons."
          htmlCode={`<div class="rotating-carousel">
  <!-- Slides are added dynamically -->
</div>`}
          cssCode={`.rotating-carousel {
  perspective: 1000px;
  height: 400px;
}

.rotating-carousel img {
  position: absolute;
  inset: 0;
  object-fit: cover;
  transition: opacity 0.5s;
}

.rotating-carousel .navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
}

.rotating-carousel .navigation button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  color: #3182ce;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}`}
          jsCode={`class RotatingCarousel {
  constructor(element, options = {}) {
    this.element = element;
    this.interval = options.interval || 3000;
    this.currentIndex = 0;
    this.progress = 0;
    
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
          <RotatingCarousel images={images} />
        </CarouselShowcase>
        <CarouselShowcase
          title="Glitch Carousel"
          description="A carousel with glitch effects and animations."
          htmlCode={`<div class="glitch-carousel">
  {images.map((image, index) => (
    <div key={index} class="slide">
      <img src={image} alt="img"} />
      <div class="glitch-overlay glitch-1"></div>
      <div class="glitch-overlay glitch-2"></div>
      <div class="glitch-overlay glitch-3"></div>
      <div class="scan-lines"></div>
      <div class="noise"></div>
    </div>
  ))}
</div>`}
          cssCode={`.glitch-carousel {
  position: relative;
  width: 100%;
  height: 500px;
  background: black;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  transition: opacity 1s;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.glitch-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  mix-blend-mode: overlay;
}

.glitch-1 { color: #3B82F6; animation: glitch-1 0.5s infinite; }
.glitch-2 { color: #EF4444; animation: glitch-2 0.5s infinite 0.1s; }
.glitch-3 { color: #10B981; animation: glitch-3 0.5s infinite 0.2s; }

.scan-lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    transparent 0%,
    rgba(0,0,0,0.1) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
  animation: scan 8s linear infinite;
}

.noise {
  position: absolute;
  inset: 0;
  background-image: url(noise.svg);
  mix-blend-mode: overlay;
  opacity: 0.5;
  animation: noise 8s steps(10) infinite;
}`}
          jsCode={`const GlitchCarousel = ({ images, duration = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div className="glitch-carousel">
      {images.map((image, index) => (
        <div key={index} 
          className={\`slide \${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }\`}>
          <img src={image} alt={\`Slide \${index + 1}\`} />
          <div className="glitch-overlay glitch-1" />
          <div className="glitch-overlay glitch-2" />
          <div className="glitch-overlay glitch-3" />
          <div className="scan-lines" />
          <div className="noise" />
        </div>
      ))}
    </div>
  );
}`}
        >
          <GlitchCarousel images={images} />
        </CarouselShowcase>
        <CarouselShowcase
          title="Focused Width Carousel" 
          description="A carousel that focuses the current slide by expanding its width while shrinking others."
          htmlCode={`<div class="focused-width-carousel">
  <!-- Images rendered with dynamic widths -->
</div>`}
          cssCode={`.focused-width-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 400px;
}

.carousel-slide {
  flex-shrink: 0;
  height: 100%;
  transition: all 0.5s;
}

.carousel-slide.active {
  width: 80%;
  opacity: 1;
}

.carousel-slide.inactive {
  width: 10%;
  opacity: 0.5;
}`}
          jsCode={`const FocusedWidthCarousel = ({ images, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, []);

}`}
        >
          <FocusedWidthCarousel images={images} />
        </CarouselShowcase>
        
        
      </main>
    </div>
  );
}
export default App;
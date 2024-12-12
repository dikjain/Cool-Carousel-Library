# Modern Carousel Collection

A collection of beautiful, customizable carousel components built with React, TypeScript, and Tailwind CSS. This project showcases different carousel animations and transitions that you can use in your web applications.

NOTE : I've used AI in this project to complete the README.md file as i don't have any experience in writing README.md files and also  i've taken the help of AI in 3D Carousels as im not very good at 3D animations.

## Features

- 🎨 10 Unique Carousel Designs
- 🔄 Smooth Animations
- 📱 Responsive Design
- 🎯 Easy to Copy & Use
- 💻 TypeScript Support
- 🎭 Tailwind CSS Styling

## Carousel Types

1. **Infinite Carousel**
   - Smooth auto-playing carousel with infinite loop
   - Customizable transition timing
   - Progress indicators

2. **3D Cube Carousel**
   - Impressive 3D cube rotation effect
   - Smooth transitions between slides
   - Interactive controls

3. **Fade Carousel**
   - Elegant fade transitions
   - Auto-play functionality
   - Smooth opacity changes

4. **Flip Carousel**
   - 3D flip animation
   - Automatic rotation
   - Perspective transforms

5. **Zoom Carousel**
   - Zoom transition effects
   - Smooth scaling animations
   - Auto-play support

6. **Parallax Carousel**
   - Interactive drag functionality
   - Parallax scrolling effect
   - Smooth transitions

7. **Card Carousel**
   - Stacked card layout
   - Interactive card selection
   - Scale and position animations

8. **Coverflow Carousel**
   - Classic coverflow effect
   - 3D rotation and depth
   - Interactive slide selection

9. **Circular Carousel**
   - 3D circular arrangement
   - Perspective scaling
   - Smooth rotations

10. **Time Machine Carousel**
    - Depth-based transitions
    - Scale and opacity effects
    - Interactive navigation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Each carousel component is self-contained and can be easily copied into your project. Simply:

1. Copy the desired carousel component from `src/components/carousels`
2. Import the required styles from `src/index.css`
3. Use the component in your application

Example:

```tsx
import { InfiniteCarousel } from './components/carousels/InfiniteCarousel';

const images = [
  'your-image-urls-here'
];

function App() {
  return (
    <InfiniteCarousel images={images} />
  );
}
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

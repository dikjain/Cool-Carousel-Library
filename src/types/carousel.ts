export interface BaseCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export interface CarouselControls {
  onNext?: () => void;
  onPrev?: () => void;
  onSelect?: (index: number) => void;
}

export interface CarouselState {
  currentIndex: number;
  isTransitioning: boolean;
}
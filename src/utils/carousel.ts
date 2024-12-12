export const calculateOffset = (current: number, total: number, step: number): number => {
  return ((current % total) + total) % total;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const calculateScale = (offset: number, baseScale: number = 1, factor: number = 0.2): number => {
  return Math.max(baseScale - Math.abs(offset) * factor, 0);
};

export const calculateOpacity = (offset: number, factor: number = 0.5): number => {
  return Math.max(0, 1 - Math.abs(offset) * factor);
};
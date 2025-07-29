import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) setHasAnimated(true);
              }, delay);
            } else {
              setIsVisible(true);
              if (triggerOnce) setHasAnimated(true);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible };
};

// Hook for animating multiple elements with staggered delays
export const useStaggeredScrollAnimation = (
  count: number,
  options: UseScrollAnimationOptions = {}
) => {
  const baseDelay = options.delay || 0;
  const staggerDelay = 100; // 100ms between each element

  const animations = Array.from({ length: count }, (_, index) =>
    useScrollAnimation({
      ...options,
      delay: baseDelay + (index * staggerDelay),
    })
  );

  return animations;
};

// Hook for grid animations with different patterns
export const useGridScrollAnimation = (
  rows: number,
  cols: number,
  pattern: 'wave' | 'cascade' | 'center-out' = 'wave',
  options: UseScrollAnimationOptions = {}
) => {
  const baseDelay = options.delay || 0;
  const staggerDelay = 80;

  const getDelayForPosition = (row: number, col: number) => {
    switch (pattern) {
      case 'wave':
        return baseDelay + ((row + col) * staggerDelay);
      case 'cascade':
        return baseDelay + (row * cols + col) * staggerDelay;
      case 'center-out':
        const centerRow = Math.floor(rows / 2);
        const centerCol = Math.floor(cols / 2);
        const distance = Math.abs(row - centerRow) + Math.abs(col - centerCol);
        return baseDelay + (distance * staggerDelay);
      default:
        return baseDelay;
    }
  };

  const animations = Array.from({ length: rows * cols }, (_, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const delay = getDelayForPosition(row, col);

    return useScrollAnimation({
      ...options,
      delay,
    });
  });

  return animations;
};
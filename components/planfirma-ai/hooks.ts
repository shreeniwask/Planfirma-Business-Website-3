import { useEffect, useState } from 'react';

export function useParallaxScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Throttle the scroll event for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  // Calculate parallax transform values
  const transforms = {
    video: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
    overlay: `translateY(${scrollY * 0.3}px)`,
    content: `translateY(${scrollY * 0.1}px)`,
    scrollIndicator: `translateX(-50%) translateY(${-scrollY * 0.5}px)`
  };

  const opacities = {
    overlay: Math.max(0.7 - scrollY * 0.001, 0.3),
    scrollIndicator: Math.max(1 - scrollY * 0.005, 0)
  };

  const gradientBackground = `radial-gradient(ellipse at center, rgba(0,0,0,${0.2 + scrollY * 0.001}) 0%, rgba(0,0,0,${0.8 + scrollY * 0.0005}) 100%)`;
  const videoBlur = `blur(${Math.min(scrollY * 0.01, 3)}px)`;

  return {
    scrollY,
    transforms,
    opacities,
    gradientBackground,
    videoBlur
  };
}
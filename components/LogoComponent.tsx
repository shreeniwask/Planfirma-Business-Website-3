import { useState, useEffect } from 'react';
import { getLogoForTheme, getFallbackLogoForTheme, getInlineLogoForTheme, LOGOS } from '../utils/logoUtils';

interface LogoComponentProps {
  isDark: boolean;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  onClick?: () => void;
}

export default function LogoComponent({ 
  isDark, 
  alt, 
  className = '', 
  loading = 'lazy',
  onClick 
}: LogoComponentProps) {
  const [currentSrc, setCurrentSrc] = useState(getLogoForTheme(isDark));
  const [, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  useEffect(() => {
    const newSrc = getLogoForTheme(isDark);
    console.log('LogoComponent: Setting logo src to:', newSrc, 'for theme:', isDark ? 'dark' : 'light');
    setCurrentSrc(newSrc);
    setHasError(false);
    setIsLoaded(false);
    setFallbackAttempt(0);
  }, [isDark]);

  const handleError = () => {
    console.error('Logo failed to load:', currentSrc, 'for theme:', isDark ? 'dark' : 'light', 'attempt:', fallbackAttempt);
    setHasError(true);
    
    if (fallbackAttempt === 0) {
      // First fallback: try the fallback path
      const fallbackSrc = getFallbackLogoForTheme(isDark);
      console.log('Trying fallback path:', fallbackSrc);
      setCurrentSrc(fallbackSrc);
      setFallbackAttempt(1);
    } else if (fallbackAttempt === 1) {
      // Second fallback: try opposite theme
      const oppositeSrc = isDark ? LOGOS.light : LOGOS.dark;
      console.log('Trying opposite theme logo:', oppositeSrc);
      setCurrentSrc(oppositeSrc);
      setFallbackAttempt(2);
    } else if (fallbackAttempt === 2) {
      // Third fallback: try inline SVG
      const inlineSrc = getInlineLogoForTheme(isDark);
      console.log('Using inline SVG fallback');
      setCurrentSrc(inlineSrc);
      setFallbackAttempt(3);
    } else {
      // Final fallback: use text
      console.log('All fallbacks failed, using text fallback');
      setCurrentSrc('');
      setFallbackAttempt(4);
    }
  };

  const handleLoad = () => {
    console.log('Logo loaded successfully:', currentSrc);
    setIsLoaded(true);
    setHasError(false);
  };

  // Text fallback component
  const TextFallback = () => (
    <div 
      className={`flex items-center justify-center bg-gradient-to-r from-[#2D993D] to-[#3fab4a] text-white font-bold text-lg px-4 py-2 rounded-lg ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      Planfirma
    </div>
  );

  if (!currentSrc || fallbackAttempt >= 4) {
    return <TextFallback />;
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      loading={loading}
      onError={handleError}
      onLoad={handleLoad}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  );
}
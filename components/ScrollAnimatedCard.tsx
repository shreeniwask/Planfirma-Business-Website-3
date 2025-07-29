import React, { ReactNode } from 'react';

interface ScrollAnimatedCardProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'slide-up' | 'card-fade-up' | 'card-scale-fade' | 'card-slide-in';
  delay?: number;
  className?: string;
  hover?: boolean;
}

export const ScrollAnimatedCard: React.FC<ScrollAnimatedCardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  animation?: ScrollAnimatedCardProps['animation'];
  delay?: number;
  className?: string;
}

export const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface ScrollAnimatedGridProps {
  children: ReactNode;
  animation?: ScrollAnimatedCardProps['animation'];
  delay?: number;
  className?: string;
  staggerDelay?: number;
  hover?: boolean;
}

export const ScrollAnimatedGrid: React.FC<ScrollAnimatedGridProps> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
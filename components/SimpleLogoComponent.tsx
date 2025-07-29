

interface SimpleLogoComponentProps {
  isDark: boolean;
  alt: string;
  className?: string;
  onClick?: () => void;
}

// Simple logo component with just the green circle and text content to avoid SVG text issues
export default function SimpleLogoComponent({ isDark, alt, className = '', onClick }: SimpleLogoComponentProps) {
  const textColor = isDark ? 'var(--background, #ffffff)' : 'var(--foreground, #1a1a1a)';
  const subtitleColor = isDark ? 'var(--muted-foreground, #cccccc)' : 'var(--muted-foreground, #666666)';
  
  return (
    <div 
      className={`flex items-center space-x-3 ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      role="img"
      aria-label={alt}
    >
      {/* Green circular element as SVG */}
      <div className="relative flex-shrink-0">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" style={{ fill: 'var(--primary, #2D993D)' }} />
          <circle cx="20" cy="20" r="12" style={{ fill: 'var(--background, #ffffff)', opacity: 0.2 }} />
          <circle cx="20" cy="20" r="6" style={{ fill: 'var(--background, #ffffff)' }} />
        </svg>
      </div>
      
      {/* Text content using HTML instead of SVG text */}
      <div className="flex flex-col">
        <div 
          className="font-bold text-lg leading-tight"
          style={{ color: textColor }}
        >
          Planfirma
        </div>
        <div 
          className="text-xs leading-tight"
          style={{ color: subtitleColor }}
        >
          Building Business Solutions
        </div>
      </div>
    </div>
  );
}
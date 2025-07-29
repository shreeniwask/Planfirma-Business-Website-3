

interface DirectLogoComponentProps {
  isDark: boolean;
  alt: string;
  className?: string;
  onClick?: () => void;
}

// Direct inline SVG components to ensure they always work
const LightLogo = ({ className, alt, onClick }: { className?: string; alt: string; onClick?: () => void }) => (
  <svg 
    width="200" 
    height="60" 
    viewBox="0 0 200 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
    role="img"
    aria-label={alt}
  >
    {/* Green circular element */}
    <circle cx="30" cy="30" r="20" fill="#2D993D"/>
    <circle cx="30" cy="30" r="12" fill="#ffffff" opacity="0.2"/>
    <circle cx="30" cy="30" r="6" fill="#ffffff"/>
    
    {/* Company name */}
    <text x="65" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1a1a1a">
      Planfirma
    </text>
    
    {/* Tagline */}
    <text x="65" y="42" fontFamily="Arial, sans-serif" fontSize="10" fill="#666666">
      Building Business Solutions
    </text>
  </svg>
);

const DarkLogo = ({ className, alt, onClick }: { className?: string; alt: string; onClick?: () => void }) => (
  <svg 
    width="200" 
    height="60" 
    viewBox="0 0 200 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
    role="img"
    aria-label={alt}
  >
    {/* Green circular element */}
    <circle cx="30" cy="30" r="20" fill="#2D993D"/>
    <circle cx="30" cy="30" r="12" fill="#ffffff" opacity="0.2"/>
    <circle cx="30" cy="30" r="6" fill="#ffffff"/>
    
    {/* Company name (white for dark backgrounds) */}
    <text x="65" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#ffffff">
      Planfirma
    </text>
    
    {/* Tagline (light gray for dark backgrounds) */}
    <text x="65" y="42" fontFamily="Arial, sans-serif" fontSize="10" fill="#cccccc">
      Building Business Solutions
    </text>
  </svg>
);

export default function DirectLogoComponent({ isDark, alt, className = '', onClick }: DirectLogoComponentProps) {
  console.log('DirectLogoComponent: Rendering', isDark ? 'dark' : 'light', 'logo');
  
  return (
    <div className={`inline-block ${className}`}>
      {isDark ? (
        <DarkLogo className="w-full h-full" alt={alt} onClick={onClick} />
      ) : (
        <LightLogo className="w-full h-full" alt={alt} onClick={onClick} />
      )}
    </div>
  );
}
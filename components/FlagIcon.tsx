import React from 'react';

interface FlagIconProps {
  countryCode: string;
  size?: number;
  className?: string;
}

// Simple flag SVG components for common countries
const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, size = 16, className = '' }) => {
  const flagMap: { [key: string]: string } = {
    'US': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id="a"><path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"/></clipPath></defs>
      <g clip-path="url(#a)" transform="translate(80) scale(.94)">
        <g stroke-width="1pt">
          <path fill="#012169" d="M-256 0H768v512H-256z"/>
          <path fill="#FFF" d="m-256 0 512 256L-256 512z"/>
          <path fill="#C8102E" d="m-256 0 512 256L-256 512z"/>
          <path fill="#FFF" d="M-256 0h512v512H-256z"/>
          <path fill="#C8102E" d="M-256 0h512v512H-256z"/>
        </g>
      </g>
    </svg>`,
    'GB': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id="a"><path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"/></clipPath></defs>
      <g clip-path="url(#a)" transform="translate(80) scale(.94)">
        <g stroke-width="1pt">
          <path fill="#012169" d="M-256 0H768v512H-256z"/>
          <path fill="#FFF" d="m-256 0 512 256L-256 512z"/>
          <path fill="#C8102E" d="m-256 0 512 256L-256 512z"/>
          <path fill="#FFF" d="M-256 0h512v512H-256z"/>
          <path fill="#C8102E" d="M-256 0h512v512H-256z"/>
        </g>
      </g>
    </svg>`,
    'CA': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f00" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#f00" d="M0 0h640v480H0z"/>
    </svg>`,
    'AU': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id="a"><path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"/></clipPath></defs>
      <g clip-path="url(#a)" transform="translate(80) scale(.94)">
        <g stroke-width="1pt">
          <path fill="#012169" d="M-256 0H768v512H-256z"/>
          <path fill="#FFF" d="m-256 0 512 256L-256 512z"/>
          <path fill="#C8102E" d="m-256 0 512 256L-256 512z"/>
          <path fill="#FFF" d="M-256 0h512v512H-256z"/>
          <path fill="#C8102E" d="M-256 0h512v512H-256z"/>
        </g>
      </g>
    </svg>`,
    'DE': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffce00" d="M0 320h640v160H0z"/>
      <path d="M0 0h640v160H0z"/>
      <path fill="#d00" d="M0 160h640v160H0z"/>
    </svg>`,
    'FR': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h640v480H0z"/>
        <path fill="#00267f" d="M0 0h213.3v480H0z"/>
        <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
      </g>
    </svg>`,
    'IN': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f93" d="M0 0h640v160H0z"/>
      <path fill="#fff" d="M0 160h640v160H0z"/>
      <path fill="#6c0" d="M0 320h640v160H0z"/>
      <circle cx="320" cy="240" r="48" fill="#008"/>
    </svg>`,
    'JP': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <circle cx="320" cy="240" r="120" fill="#bc002d"/>
    </svg>`,
    'SG': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <defs><clipPath id="a"><path fill-opacity=".7" d="M-85.3 0h682.6v512H-85.3z"/></clipPath></defs>
      <g clip-path="url(#a)" transform="translate(80) scale(.94)">
        <g stroke-width="1pt">
          <path fill="#012169" d="M-256 0H768v512H-256z"/>
          <path fill="#FFF" d="m-256 0 512 256L-256 512z"/>
          <path fill="#C8102E" d="m-256 0 512 256L-256 512z"/>
          <path fill="#FFF" d="M-256 0h512v512H-256z"/>
          <path fill="#C8102E" d="M-256 0h512v512H-256z"/>
        </g>
      </g>
    </svg>`,
    'NL': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#21468b" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M0 0h640v320H0z"/>
      <path fill="#ae1c28" d="M0 0h640v160H0z"/>
    </svg>`,
    'SE': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#006aa7" d="M0 0h640v480H0z"/>
      <path fill="#fecc00" d="M0 0h256v288H0z"/>
      <path fill="#fecc00" d="M0 0h96v480H0z"/>
    </svg>`,
    'CH': `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#d52b1e" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M240 0h160v480H240z"/>
      <path fill="#fff" d="M0 200h640v80H0z"/>
    </svg>`
  };

  const flagSvg = flagMap[countryCode];
  
  if (!flagSvg) {
    // Fallback to country code if flag not found
    return (
      <div 
        className={`bg-gray-200 rounded text-xs font-bold text-gray-600 flex items-center justify-center ${className}`}
        style={{ width: size, height: size * 0.75 }}
      >
        {countryCode}
      </div>
    );
  }

  return (
    <div 
      className={className}
      style={{ width: size, height: size * 0.75 }}
      dangerouslySetInnerHTML={{ __html: flagSvg }}
    />
  );
};

export default FlagIcon; 
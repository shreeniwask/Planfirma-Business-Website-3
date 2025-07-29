// Logo utility constants and functions
export const LOGOS = {
  light: "/images/logos/planfirma-logo.svg",
  dark: "/images/logos/planfirma-logo-dark.svg",
  fallback: {
    light: "/images/Header logo/planfirma-logo.svg",
    dark: "/images/placeholders/planfirma-logo-dark.svg"
  }
} as const;

// Inline SVG fallbacks as data URIs
export const INLINE_LOGOS = {
  light: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="20" fill="#2D993D"/>
      <circle cx="30" cy="30" r="12" fill="#ffffff" opacity="0.2"/>
      <circle cx="30" cy="30" r="6" fill="#ffffff"/>
      <text x="65" y="25" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1a1a1a">Planfirma</text>
      <text x="65" y="42" font-family="Arial, sans-serif" font-size="10" fill="#666666">Building Business Solutions</text>
    </svg>
  `)}`,
  dark: `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="20" fill="#2D993D"/>
      <circle cx="30" cy="30" r="12" fill="#ffffff" opacity="0.2"/>
      <circle cx="30" cy="30" r="6" fill="#ffffff"/>
      <text x="65" y="25" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Planfirma</text>
      <text x="65" y="42" font-family="Arial, sans-serif" font-size="10" fill="#cccccc">Building Business Solutions</text>
    </svg>
  `)}`
} as const;

export const getLogoForTheme = (isDark: boolean): string => {
  return isDark ? LOGOS.dark : LOGOS.light;
};

export const getFallbackLogoForTheme = (isDark: boolean): string => {
  return isDark ? LOGOS.fallback.dark : LOGOS.fallback.light;
};

export const getInlineLogoForTheme = (isDark: boolean): string => {
  return isDark ? INLINE_LOGOS.dark : INLINE_LOGOS.light;
};
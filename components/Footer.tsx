import { ScrollAnimatedCard, ScrollAnimatedSection } from './ScrollAnimatedCard';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
  theme?: 'light' | 'dark';
}

export default function Footer({ onNavigate, onNavigateToService, theme = 'dark' }: FooterProps) {
  const isDark = theme === 'dark';
  
  // Social media URLs
  const socialLinks = {
    website: 'https://planfirma.com/',
    linkedin: 'https://www.linkedin.com/company/planfirma-technologies-private-limited/',
    twitter: 'https://x.com/Planfirma_',
    instagram: 'https://www.instagram.com/planfirma_/'
  };

  const navigateToService = (serviceId: string) => {
    if (onNavigateToService) {
      onNavigateToService(serviceId);
    } else {
      // Fallback to services page if no callback provided
      onNavigate('services');
    }
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <ScrollAnimatedSection 
      animation="fade-up" 
      className={`${isDark ? 'bg-[#000000]' : 'bg-gray-50'} box-border content-stretch flex flex-col gap-4 sm:gap-6 md:gap-8 items-start justify-start pb-4 sm:pb-6 md:pb-8 pt-6 sm:pt-8 md:pt-12 px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20 relative w-full`}
    >
      {/* Divider Line */}
      <div className="h-0 relative w-full">
        <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 2">
            <g id="Frame">
              <path 
                d="M0 1H1504" 
                id="divider" 
                stroke={isDark ? "var(--stroke-0, #264E36)" : "var(--stroke-0, #E5E7EB)"} 
                strokeOpacity={isDark ? "0.2" : "0.3"} 
                strokeWidth="1.5" 
              />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="box-border content-stretch flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start justify-between w-full max-w-8xl mx-auto">
        
        {/* Left Column - Company Info */}
        <ScrollAnimatedCard animation="fade-right" delay={200} className="flex flex-col items-start justify-start space-y-4 sm:space-y-6 lg:max-w-md" hover={false}>
          {/* Logo */}
          <div>
            <img
              src={isDark ? "/images/logos/planfirma-logo-light.svg" : "/images/logos/planfirma-logo.svg"}
              alt="Planfirma Logo"
              className="h-10 md:h-12 w-auto cursor-pointer"
              onClick={() => onNavigate('landing')}
            />
          </div>
          
          {/* Company Description */}
          <div className="space-y-2 sm:space-y-3">
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? 'text-[#bfdbf7]' : 'text-gray-600'}`}>
              Building software that empowers businesses. We bring 14+ years of deep IT expertise to help businesses streamline infrastructure, lock down security, and drive real digital transformation.
            </p>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'}`}>
              Serving clients worldwide with innovative technology solutions.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-row gap-3 sm:gap-4 items-start justify-start">
            <div 
              className="relative shrink-0 size-8 social-hover cursor-pointer"
              onClick={() => openSocialLink(socialLinks.website)}
              title="Visit our website"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="website">
                  <path 
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" 
                    fill={isDark ? "#D2EADC" : "#6B7280"} 
                    fillOpacity={isDark ? "0.62" : "0.8"} 
                  />
                </g>
              </svg>
            </div>
            <div 
              className="relative shrink-0 size-8 social-hover cursor-pointer"
              onClick={() => openSocialLink(socialLinks.linkedin)}
              title="Follow us on LinkedIn"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="linkedin">
                  <path 
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
                    fill={isDark ? "#D2EADC" : "#6B7280"} 
                    fillOpacity={isDark ? "0.62" : "0.8"} 
                  />
                </g>
              </svg>
            </div>
            <div 
              className="relative shrink-0 size-8 social-hover cursor-pointer"
              onClick={() => openSocialLink(socialLinks.twitter)}
              title="Follow us on X (Twitter)"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="twitter">
                  <path 
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                    fill={isDark ? "#D2EADC" : "#6B7280"} 
                    fillOpacity={isDark ? "0.62" : "0.8"} 
                  />
                </g>
              </svg>
            </div>
            <div 
              className="relative shrink-0 size-8 social-hover cursor-pointer"
              onClick={() => openSocialLink(socialLinks.instagram)}
              title="Follow us on Instagram"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="instagram">
                  <path 
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
                    fill={isDark ? "#D2EADC" : "#6B7280"} 
                    fillOpacity={isDark ? "0.62" : "0.8"} 
                  />
                </g>
              </svg>
            </div>
          </div>
        </ScrollAnimatedCard>
        
        {/* Right Columns - Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-1 lg:justify-end">
          
          {/* Company Links */}
          <ScrollAnimatedCard animation="fade-left" delay={300} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 sm:gap-3 md:gap-4 items-start justify-start text-sm sm:text-base text-left min-w-[140px] sm:min-w-[160px]" hover={false}>
            <div className={`${isDark ? 'text-[#d7e4dc]' : 'text-gray-800'} mb-1 sm:mb-2`}>
              <h4 className="text-base sm:text-lg font-bold leading-[20px] sm:leading-[24px]">Company</h4>
            </div>
            <button onClick={() => onNavigate('about')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">About Us</p>
            </button>
            <button onClick={() => onNavigate('services')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">Services</p>
            </button>
            <button onClick={() => onNavigate('planfirma-ai')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">Planfirma.ai</p>
            </button>
            <button onClick={() => onNavigate('blogs')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">Blogs</p>
            </button>
          </ScrollAnimatedCard>
          
          {/* Services Links */}
          <ScrollAnimatedCard animation="fade-left" delay={400} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 sm:gap-3 md:gap-4 items-start justify-start text-sm sm:text-base text-left min-w-[140px] sm:min-w-[160px]" hover={false}>
            <div className={`${isDark ? 'text-[#d7e4dc]' : 'text-gray-800'} mb-1 sm:mb-2`}>
              <h4 className="text-base sm:text-lg font-bold leading-[20px] sm:leading-[24px]">Services</h4>
            </div>
            <button onClick={() => navigateToService('ai-machine-learning')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">AI & Machine Learning</p>
            </button>
            <button onClick={() => navigateToService('cybersecurity')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">Cybersecurity</p>
            </button>
            <button onClick={() => navigateToService('cloud-computing')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">Cloud Computing</p>
            </button>
            <button onClick={() => navigateToService('devsecops')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">DevSecOps</p>
            </button>
          </ScrollAnimatedCard>
          
          {/* Contact Links */}
          <ScrollAnimatedCard animation="fade-left" delay={500} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-2 sm:gap-3 md:gap-4 items-start justify-start text-sm sm:text-base text-left min-w-[140px] sm:min-w-[160px]" hover={false}>
            <div className={`${isDark ? 'text-[#d7e4dc]' : 'text-gray-800'} mb-1 sm:mb-2`}>
              <h4 className="text-base sm:text-lg font-bold leading-[20px] sm:leading-[24px]">Contact</h4>
            </div>
            <button onClick={() => onNavigate('contact')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">Contact Us</p>
            </button>
            <div className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">sales@planfirma.com</p>
            </div>
            <div className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} text-left`}>
              <p className="leading-[18px] sm:leading-[20px] md:leading-[24px]">+91 84510 53268</p>
            </div>
          </ScrollAnimatedCard>
        </div>
      </div>
      
      {/* Bottom Copyright Section */}
      <div className="w-full max-w-8xl mx-auto pt-4 sm:pt-6 md:pt-8 border-t border-gray-200/20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className={`text-xs sm:text-sm ${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'}`}>
            © 2025 Planfirma. All rights reserved.
          </div>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <button 
              onClick={() => onNavigate('privacy-policy')} 
              className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'} nav-hover`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms-of-service')} 
              className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'} nav-hover`}
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onNavigate('cookie-policy')} 
              className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'} nav-hover`}
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
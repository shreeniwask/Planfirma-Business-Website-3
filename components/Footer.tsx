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
    facebook: 'https://www.facebook.com/planfirma',
    instagram: 'https://www.instagram.com/planfirma',
    twitter: 'https://twitter.com/planfirma',
    linkedin: 'https://www.linkedin.com/company/planfirma'
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
      className={`${isDark ? 'bg-[#000000]' : 'bg-gray-50'} box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-12 items-start justify-start pb-6 sm:pb-8 md:pb-12 pt-12 sm:pt-16 md:pt-24 px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20 relative w-full`}
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
      <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start justify-between w-full max-w-8xl mx-auto">
        
        {/* Left Column - Company Info */}
        <ScrollAnimatedCard animation="fade-right" delay={200} className="flex flex-col items-start justify-start space-y-8 lg:max-w-md" hover={false}>
          {/* Logo */}
          <div>
            <img
              src="/images/logos/planfirma-logo.svg"
              alt="Planfirma Logo"
              className="h-10 md:h-12 w-auto cursor-pointer"
              onClick={() => onNavigate('landing')}
            />
          </div>
          
          {/* Company Description */}
          <div className="space-y-4">
            <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-[#bfdbf7]' : 'text-gray-600'}`}>
              Building software that empowers businesses. We bring 14+ years of deep IT expertise to help businesses streamline infrastructure, lock down security, and drive real digital transformation.
            </p>
            <p className={`text-sm ${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'}`}>
              Serving clients worldwide with innovative technology solutions.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-row gap-4 items-start justify-start">
            <div 
              className="relative shrink-0 size-8 social-hover cursor-pointer"
              onClick={() => openSocialLink(socialLinks.facebook)}
              title="Follow us on Facebook"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="facebook">
                  <path 
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" 
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
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551-.684-.939-.684-2.084 0-3.023.684-.939 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.939.684 2.084 0 3.023-.684.939-1.835 1.551-3.132 1.551zm7.119 0c-1.297 0-2.448-.611-3.132-1.551-.684-.939-.684-2.084 0-3.023.684-.939 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.939.684 2.084 0 3.023-.684.939-1.835 1.551-3.132 1.551z" 
                    fill={isDark ? "#D2EADC" : "#6B7280"} 
                    fillOpacity={isDark ? "0.62" : "0.8"} 
                  />
                </g>
              </svg>
            </div>
            <div 
              className="relative shrink-0 size-8 social-hover cursor-pointer"
              onClick={() => openSocialLink(socialLinks.twitter)}
              title="Follow us on Twitter"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="twitter">
                  <path 
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" 
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
                    fill={isDark ? "var(--fill-0, #D2EADC)" : "var(--fill-0, #6B7280)"} 
                    fillOpacity={isDark ? "0.62" : "0.8"} 
                  />
                </g>
              </svg>
            </div>
          </div>
        </ScrollAnimatedCard>
        
        {/* Right Columns - Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 flex-1 lg:justify-end">
          
          {/* Company Links */}
          <ScrollAnimatedCard animation="fade-left" delay={300} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-4 items-start justify-start text-base text-left min-w-[160px]" hover={false}>
            <div className={`${isDark ? 'text-[#d7e4dc]' : 'text-gray-800'} mb-2`}>
              <h4 className="text-lg font-bold leading-[24px]">Company</h4>
            </div>
            <button onClick={() => onNavigate('about')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">About Us</p>
            </button>
            <button onClick={() => onNavigate('services')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">Services</p>
            </button>
            <button onClick={() => onNavigate('planfirma-ai')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">Planfirma.ai</p>
            </button>
            <button onClick={() => onNavigate('blogs')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">Blogs</p>
            </button>
          </ScrollAnimatedCard>
          
          {/* Services Links */}
          <ScrollAnimatedCard animation="fade-left" delay={400} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-4 items-start justify-start text-base text-left min-w-[160px]" hover={false}>
            <div className={`${isDark ? 'text-[#d7e4dc]' : 'text-gray-800'} mb-2`}>
              <h4 className="text-lg font-bold leading-[24px]">Services</h4>
            </div>
            <button onClick={() => navigateToService('ai-machine-learning')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">AI & Machine Learning</p>
            </button>
            <button onClick={() => navigateToService('cybersecurity')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">Cybersecurity</p>
            </button>
            <button onClick={() => navigateToService('cloud-computing')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">Cloud Computing</p>
            </button>
            <button onClick={() => navigateToService('devsecops')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">DevSecOps</p>
            </button>
          </ScrollAnimatedCard>
          
          {/* Contact Links */}
          <ScrollAnimatedCard animation="fade-left" delay={500} className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium gap-4 items-start justify-start text-base text-left min-w-[160px]" hover={false}>
            <div className={`${isDark ? 'text-[#d7e4dc]' : 'text-gray-800'} mb-2`}>
              <h4 className="text-lg font-bold leading-[24px]">Contact</h4>
            </div>
            <button onClick={() => onNavigate('contact')} className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} nav-hover text-left`}>
              <p className="leading-[24px]">Contact Us</p>
            </button>
            <div className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} text-left`}>
              <p className="leading-[24px]">sales@planfirma.com</p>
            </div>
            <div className={`${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-600'} text-left`}>
              <p className="leading-[24px]">+91 84510 53268</p>
            </div>
          </ScrollAnimatedCard>
        </div>
      </div>
      
      {/* Bottom Copyright Section */}
      <div className="w-full max-w-8xl mx-auto pt-8 border-t border-gray-200/20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className={`text-sm ${isDark ? 'text-[rgba(210,234,220,0.62)]' : 'text-gray-500'}`}>
            © 2024 Planfirma. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
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
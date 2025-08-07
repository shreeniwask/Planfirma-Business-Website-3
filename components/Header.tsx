import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine if we should use dark theme (only for AI and Cloud pages)
  const isDark = currentPage === 'planfirma-ai' || currentPage === 'planfirma-cloud';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Services', page: 'services' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Blogs', page: 'blogs' as Page },
    { label: 'Contact', page: 'contact' as Page },
    { label: 'Planfirma.ai', page: 'planfirma-ai' as Page },
    { label: 'Planfirma.cloud', page: 'planfirma-cloud' as Page },
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark 
            ? isScrolled 
              ? 'bg-black/98 backdrop-blur-md shadow-xl border-b border-white/10' 
              : 'bg-black/90 backdrop-blur-sm'
            : isScrolled 
              ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200' 
              : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            
            {/* Logo */}
            <img
              src={`${isDark ? "/images/logos/planfirma-logo-light.svg" : "/images/logos/planfirma-logo.svg"}?v=4`}
              alt="Planfirma Logo"
              className="h-9 w-auto cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleNavigation('landing')}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`px-2 md:px-3 lg:px-4 py-1.5 rounded-md text-xs md:text-sm lg:text-base font-medium transition-colors ${
                    currentPage === item.page
                      ? isDark ? 'text-[#30b6d0]' : 'text-[#2D993D]'
                      : isDark ? 'text-white hover:text-[#30b6d0]' : 'text-gray-600 hover:text-[#2D993D]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Desktop CTA Button */}
              <button 
                onClick={() => handleNavigation('contact')}
                className="hidden md:flex group relative bg-[#2D993D] text-white items-center justify-center px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg md:rounded-xl font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2D993D]/40 transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight text-xs sm:text-xs md:text-sm lg:text-base">
                  Get Started
                </span>
                <div className="ml-1 sm:ml-1.5 md:ml-2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className={`md:hidden flex items-center justify-center p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'text-white hover:text-[#30b6d0] hover:bg-white/10' 
                    : 'text-gray-600 hover:text-[#2D993D] hover:bg-gray-50'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`md:hidden shadow-lg ${
            isDark 
              ? 'bg-black/95 backdrop-blur-md border-t border-white/10' 
              : 'bg-white backdrop-blur-md border-t border-gray-200'
          }`}>
            <div className="px-3 sm:px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
                    currentPage === item.page
                      ? isDark ? 'text-[#30b6d0]' : 'text-[#2D993D]'
                      : isDark ? 'text-white hover:text-[#30b6d0] hover:bg-white/10' : 'text-gray-600 hover:text-[#2D993D] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <button 
                onClick={() => handleNavigation('contact')}
                className="group relative bg-[#2D993D] text-white flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2D993D]/40 transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-0.5 active:translate-y-0 w-full"
              >
                <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight text-xs sm:text-sm">
                  Get Started
                </span>
                <div className="ml-1 sm:ml-1.5 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-12 sm:h-14 md:h-16" />
    </>
  );
}
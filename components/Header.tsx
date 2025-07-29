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

  // Determine if we should use dark theme (only for AI page)
  const isDark = currentPage === 'planfirma-ai';

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
    { label: 'Planfirma Cloud', page: 'planfirma-cloud' as Page },
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDark 
            ? isScrolled 
              ? 'bg-black/95 backdrop-blur-md shadow-xl border-b border-white/10' 
              : 'bg-transparent'
            : isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
              : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            
            {/* Logo */}
            <img
              src="/images/logos/planfirma-logo.svg"
              alt="Planfirma Logo"
              className="h-10 md:h-12 w-auto cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleNavigation('landing')}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`px-2 md:px-3 lg:px-4 py-2 rounded-md text-xs md:text-sm lg:text-base font-medium transition-colors ${
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
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleNavigation('contact')}
                className={`hidden sm:flex items-center justify-center px-3 md:px-4 lg:px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  isDark 
                    ? 'bg-[#30b6d0] text-black hover:bg-[#40c6e0]' 
                    : 'bg-[#2D993D] text-white hover:bg-[#3fab4a]'
                }`}
                style={!isDark ? { backgroundColor: 'hsl(var(--brand-500))' } : {}}
              >
                <span className="font-medium text-xs md:text-sm lg:text-base">Get Started</span>
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
                className={`w-full px-4 py-3 rounded-lg transition-colors font-medium text-base mt-4 ${
                  isDark 
                    ? 'bg-[#30b6d0] text-black hover:bg-[#40c6e0]' 
                    : 'bg-[#2D993D] text-white hover:bg-[#3fab4a]'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-14 sm:h-16 md:h-20" />
    </>
  );
}
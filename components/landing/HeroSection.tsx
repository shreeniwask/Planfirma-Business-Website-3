import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';
import type { Page } from '../../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <ScrollAnimatedSection animation="fade-up" className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-3 sm:px-6 md:px-8 lg:px-12 relative w-full">
          
          {/* Wider Hero Content Container */}
          <div className="max-w-8xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
              
              {/* Hero Content */}
              <ScrollAnimatedCard animation="fade-right" className="flex-1 max-w-3xl text-center lg:text-left order-1" hover={false}>
                <div className="box-border content-stretch flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center lg:items-start justify-start w-full">
                  <div className="relative w-full">
                    <h1 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold tracking-[-0.5px] leading-[1.1] mb-2 sm:mb-3">
                      <span className="text-gray-900">Building software that empowers </span>
                      <span className="text-[#2D993D]">businesses</span>
                    </h1>
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-700 tracking-[0.5px] leading-[1.6] max-w-2xl mb-2 sm:mb-3 px-2 sm:px-0">
                      We bring 14+ years of deep IT expertise to help businesses streamline infrastructure, 
                      lock down security, and drive real digital transformation—with no fluff, just results.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center lg:items-start justify-center lg:justify-start w-full">
                    <button 
                      onClick={() => onNavigate('contact')} 
                      className="group relative bg-[#2D993D] text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 w-full sm:w-auto lg:w-auto text-xs sm:text-sm md:text-base lg:text-lg tracking-wide transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-1 active:translate-y-0"
                    >
                      <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight">
                        Get Started
                      </span>
                      <div className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => onNavigate('services')} 
                      className="group relative bg-transparent border-2 border-[#2D993D] text-[#2D993D] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl font-bold shadow-lg hover:bg-[#2D993D] hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 w-full sm:w-auto lg:w-auto text-xs sm:text-sm md:text-base lg:text-lg tracking-wide transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                    >
                      <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-center tracking-[0.1px] leading-tight transition-colors duration-300">
                        Our Services
                      </span>
                      <div className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </ScrollAnimatedCard>
              
              {/* Hero Image */}
              <ScrollAnimatedCard animation="fade-left" className="flex-1 max-w-2xl lg:max-w-none order-2" hover={false}>
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[300px] xl:h-[380px]">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                    alt="Business team collaborating with technology solutions"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                </div>
              </ScrollAnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';
import type { Page } from '../../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <ScrollAnimatedSection animation="fade-up" className="relative w-full bg-white">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 relative w-full">
          
          {/* Wider Hero Content Container */}
          <div className="max-w-8xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
              
              {/* Hero Content */}
              <ScrollAnimatedCard animation="fade-right" className="flex-1 max-w-3xl text-center lg:text-left" hover={false}>
                <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center lg:items-start justify-start w-full">
                  <div className="relative w-full">
                    <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] xl:text-[76px] font-bold tracking-[-0.5px] leading-[1.1] mb-6 sm:mb-8">
                      <span className="text-gray-900">Building software that empowers </span>
                      <span className="text-[#2D993D]">businesses</span>
                    </h1>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 tracking-[0.5px] leading-[1.6] max-w-2xl mb-2 px-2 sm:px-0">
                      We bring 14+ years of deep IT expertise to help businesses streamline infrastructure, 
                      lock down security, and drive real digital transformation—with no fluff, just results.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center lg:items-start justify-center lg:justify-start w-full mt-2">
                    <button 
                      onClick={() => onNavigate('contact')} 
                      className="group relative bg-[#2D993D] text-white flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 w-full sm:w-[200px] lg:w-[220px] text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-1 active:translate-y-0"
                    >
                      <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight">
                        Get Started
                      </span>
                      <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => onNavigate('services')} 
                      className="group relative bg-transparent border-2 border-[#2D993D] text-[#2D993D] flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:bg-[#2D993D] hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 w-full sm:w-[200px] lg:w-[220px] text-sm sm:text-base tracking-wide transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                    >
                      <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-center tracking-[0.1px] leading-tight transition-colors duration-300">
                        Our Services
                      </span>
                      <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </ScrollAnimatedCard>
              
              {/* Hero Image */}
              <ScrollAnimatedCard animation="fade-left" className="flex-1 max-w-2xl lg:max-w-none" hover={false}>
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D993D]/20 to-[#3fab4a]/20 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl transform -rotate-2 scale-95"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl transform rotate-1 scale-98"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-[#2D993D] rounded-full opacity-20 animate-float"></div>
                  <div className="absolute bottom-8 right-6 w-12 h-12 bg-[#3fab4a] rounded-full opacity-30 animate-float-reverse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-full opacity-10 animate-float-alt"></div>
                  
                  {/* Main Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" fill="none" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Innovation</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600">Driving Digital Transformation</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';
import type { Page } from '../../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <ScrollAnimatedSection animation="fade-up" className="relative w-full bg-white">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 relative w-full">
          
          {/* Wider Hero Content Container */}
          <div className="max-w-8xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
              
              {/* Hero Content */}
              <ScrollAnimatedCard animation="fade-right" className="flex-1 max-w-3xl text-center lg:text-left" hover={false}>
                <div className="box-border content-stretch flex flex-col gap-8 lg:gap-10 items-center lg:items-start justify-start w-full">
                  <div className="relative w-full">
                    <h1 className="text-[42px] md:text-[56px] lg:text-[68px] xl:text-[76px] font-bold tracking-[-0.5px] leading-[1.1] mb-8">
                      <span className="text-gray-900">Building software that empowers </span>
                      <span className="text-[#2D993D]">businesses</span>
                    </h1>
                    <p className="text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 tracking-[0.5px] leading-[1.6] max-w-2xl mb-2">
                      We bring 14+ years of deep IT expertise to help businesses streamline infrastructure, 
                      lock down security, and drive real digital transformation—with no fluff, just results.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center lg:items-start justify-center lg:justify-start w-full">
                    <button 
                      onClick={() => onNavigate('contact')} 
                      className="group relative bg-[#2D993D] text-white flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-xl cursor-pointer shadow-lg w-full sm:w-auto min-w-[220px] max-w-[280px] font-semibold text-[14px] md:text-[16px] tracking-wide transition-all duration-300 hover:bg-[#24802f] hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                    >
                      <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight">
                        Get Started
                      </span>
                      <div className="ml-2 w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => onNavigate('services')} 
                      className="group relative bg-transparent border-2 border-[#2D993D] text-[#2D993D] flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-xl cursor-pointer w-full sm:w-auto min-w-[220px] max-w-[280px] font-semibold text-[14px] md:text-[16px] tracking-wide transition-all duration-300 hover:bg-[#2D993D] hover:text-white hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                    >
                      <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-center tracking-[0.1px] leading-tight transition-colors duration-300">
                        Check our services
                      </span>
                      <div className="ml-2 w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </ScrollAnimatedCard>
              
              {/* Hero Image - Business/Technology focused */}
              <ScrollAnimatedCard animation="fade-left" delay={200} className="flex-shrink-0 w-full lg:w-auto" hover={false}>
                <div className="relative rounded-2xl w-full max-w-lg mx-auto h-96 md:h-[420px] lg:h-[520px] lg:w-[520px] xl:w-[560px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                    alt="Business team collaborating with technology solutions"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  
                  {/* Optional: Add floating elements for tech feel */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-[#2D993D] opacity-20 rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#3fab4a] opacity-30 rounded-full"></div>
                </div>
              </ScrollAnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
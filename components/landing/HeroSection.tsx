import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';
import type { Page } from '../../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <ScrollAnimatedSection animation="fade-up" className="relative w-full bg-white py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          
          {/* Hero Content */}
          <ScrollAnimatedCard animation="fade-right" className="flex-1 text-center lg:text-left" hover={false}>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold tracking-tight leading-tight mb-4">
                  <span className="text-gray-900">Building software that empowers </span>
                  <span className="text-[#2D993D]">businesses</span>
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We bring 14+ years of deep IT expertise to help businesses streamline infrastructure, 
                  lock down security, and drive real digital transformation—with no fluff, just results.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start justify-center lg:justify-start">
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="group relative bg-[#2D993D] text-white flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 w-full sm:w-auto text-base sm:text-lg transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="font-semibold text-white text-center tracking-wide">
                    Get Started
                  </span>
                  <div className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
                
                <button 
                  onClick={() => onNavigate('services')} 
                  className="group relative bg-transparent border-2 border-[#2D993D] text-[#2D993D] flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:bg-[#2D993D] hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 w-full sm:w-auto text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="font-semibold text-center tracking-wide transition-colors duration-300">
                    Our Services
                  </span>
                  <div className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </ScrollAnimatedCard>
          
          {/* Hero Image */}
          <ScrollAnimatedCard animation="fade-left" className="flex-1 w-full lg:w-auto" hover={false}>
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] 2xl:h-[450px] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Business team collaborating with technology solutions"
                className="w-full h-full object-cover"
                onLoad={() => console.log('Landing hero image loaded successfully')}
                onError={(e) => {
                  console.log('Landing hero image failed to load');
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </ScrollAnimatedCard>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
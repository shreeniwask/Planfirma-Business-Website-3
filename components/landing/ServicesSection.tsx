import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import ServiceCard from './ServiceCard';
import type { Page } from '../../App';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  technologies: string[];
}

interface ServicesSectionProps {
  onNavigate: (page: Page, serviceId?: string) => void;
  servicesData: ServiceData[];
}

export default function ServicesSection({ onNavigate, servicesData }: ServicesSectionProps) {
  return (
    <ScrollAnimatedSection animation="fade-up" className="relative w-full bg-gray-50 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-12 relative w-full">
          
          {/* Content Container */}
          <div className="max-w-8xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              
              {/* Header */}
              <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto" hover={false}>
                <div className="space-y-2 sm:space-y-4">
                  <div className="bg-green-100 px-3 py-1.5 rounded-full text-[#2D993D] text-xs sm:text-sm font-semibold inline-block">
                    Our Services
                  </div>
                  <h2 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[42px] font-bold text-gray-900 leading-tight">
                    Our Services
                  </h2>
                </div>
              </ScrollAnimatedCard>
              
              {/* Services Grid */}
              <ScrollAnimatedSection animation="fade-up" delay={200} className="w-full max-w-8xl mx-auto">
                <ScrollAnimatedGrid
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
                  animation="card-slide-in"
                  staggerDelay={100}
                  hover={false}
                >
                  {servicesData.slice(0, 6).map((service, index) => (
                    <ScrollAnimatedCard 
                      key={service.id} 
                      animation="fade-up" 
                      delay={400 + (index * 100)}
                      className="h-full"
                      hover={false}
                    >
                      <ServiceCard service={service} onNavigate={onNavigate} />
                    </ScrollAnimatedCard>
                  ))}
                </ScrollAnimatedGrid>
              </ScrollAnimatedSection>
              
              {/* Call to Action */}
              <ScrollAnimatedCard animation="scale-in" delay={500} className="text-center max-w-lg mx-auto" hover={false}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button 
                    onClick={() => onNavigate('services')} 
                    className="bg-[#2D993D] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex-1 sm:flex-none btn-hover-primary"
                    style={{ backgroundColor: 'hsl(var(--brand-500))' }}
                  >
                    View All Services
                  </button>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="group relative bg-[#2D993D] text-white flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-1 active:translate-y-0"
                  >
                    <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight text-sm sm:text-base">
                      Get Started
                    </span>
                    <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </div>
              </ScrollAnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
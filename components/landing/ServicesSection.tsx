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
  // Select 6 key services to display
  const featuredServices = servicesData.filter(service => [
    'ai-machine-learning',
    'cybersecurity', 
    'cloud-computing',
    'devsecops',
    'business-intelligence',
    'mobile-app-development'
  ].includes(service.id));

  return (
    <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-white to-gray-50 relative w-full">
      <div className="flex flex-col justify-center relative size-full">
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 relative w-full">
          
          {/* Header */}
          <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto mb-10 md:mb-12 lg:mb-16" hover={false}>
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16">
              <p className="leading-tight">What we offer</p>
            </h2>
            <div className="text-[16px] md:text-[18px] text-gray-700 tracking-[0.5px]">
              <p className="leading-relaxed">
                Professional technology solutions to accelerate your digital transformation
              </p>
            </div>
          </ScrollAnimatedCard>
          
          {/* Services Grid - Using wider container */}
          <ScrollAnimatedSection animation="fade-up" delay={200} className="max-w-8xl mx-auto mb-10 md:mb-12 lg:mb-16">
            <ScrollAnimatedGrid
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
              animation="card-slide-in"
              staggerDelay={150}
              hover={false}
            >
              {featuredServices.map((service, index) => (
                <ServiceCard key={index} service={service} onNavigate={onNavigate} />
              ))}
            </ScrollAnimatedGrid>
          </ScrollAnimatedSection>
          
          {/* Call to Action */}
          <ScrollAnimatedCard animation="scale-in" delay={500} className="text-center max-w-lg mx-auto" hover={false}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => onNavigate('services')} 
                className="bg-[#2D993D] text-white px-10 py-5 rounded-lg font-semibold text-[16px] flex-1 sm:flex-none sm:px-12 btn-hover-primary"
                style={{ backgroundColor: 'hsl(var(--brand-500))' }}
              >
                View All Services
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="group relative bg-[#2D993D] text-white flex items-center justify-center px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-1 active:translate-y-0"
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
            </div>
          </ScrollAnimatedCard>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
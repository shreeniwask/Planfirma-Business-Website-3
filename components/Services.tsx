import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from './ScrollAnimatedCard';
import type { Page } from '../App';

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

interface ServicesProps {
  onNavigate: (page: Page, serviceId?: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  servicesData: ServiceData[];
  onBack: () => void;
}

function ServiceCard({ service, onNavigate }: { service: ServiceData; onNavigate: (page: Page, serviceId?: string) => void }) {
  const serviceImages: { [key: string]: string } = {
    'ai-machine-learning': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
    'cybersecurity': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    'cloud-computing': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    'devsecops': 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
    'business-intelligence': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    'mobile-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    'product-customization': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'web-custom-app-development': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    'new-product-development': 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop',
    'ui-ux-design': 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    'robotic-process-automation': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    're-engineering-optimization': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop'
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 cursor-pointer overflow-hidden group flex flex-col transition-refined hover:shadow-xl hover:border-[#2D993D] hover:-translate-y-2 h-72 md:h-96 lg:h-[420px]"
         onClick={() => onNavigate('service-detail', service.id)}>
      
      {/* Image Section - 60% of card height */}
      <div className="relative h-44 md:h-56 lg:h-60 bg-center bg-cover bg-no-repeat rounded-t-2xl overflow-hidden flex-shrink-0"
           style={{ backgroundImage: `url('${serviceImages[service.id] || 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop'}')` }}>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-refined" />
        <div className="absolute bottom-1 left-1 right-1 md:bottom-4 md:left-4 md:right-4 transform translate-y-4 group-hover:translate-y-0 transition-refined opacity-0 group-hover:opacity-100">
          <div className="glass-overlay rounded-xl p-1 md:p-4 shadow-2xl">
            <p className="text-white text-xs md:text-sm font-semibold text-center drop-shadow-lg">Click to learn more →</p>
          </div>
        </div>
      </div>
      
      {/* Content Section - 40% of card height */}
      <div className="p-3 md:p-6 flex-grow flex flex-col">
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[13px] md:text-[20px] lg:text-[24px] transition-refined leading-tight group-hover:text-[#2D993D] line-clamp-2">
            {service.title}
          </h3>
          <p className="font-['Roboto:Regular',_sans-serif] font-normal text-[11px] md:text-[14px] text-gray-600 tracking-[0.25px] leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}



export default function Services({ onNavigate, onNavigateToService, servicesData, onBack }: ServicesProps) {
  return (
    <div className="bg-white flex flex-col items-center justify-start relative min-h-screen w-full">
      <Header onNavigate={onNavigate} currentPage="services" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        onBack={onBack}
        currentPage="services" 
      />
      
      {/* Services Grid Section */}
      <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-white to-gray-50 relative w-full">
        <div className="flex flex-col justify-center relative w-full">
          <div className="px-2 sm:px-4 md:px-6 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 relative w-full">
            
            {/* Header */}
            <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10" hover={false}>
              <h2 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                <p className="leading-tight">All Our Services</p>
              </h2>
              <div className="text-[10px] sm:text-[11px] md:text-[14px] text-gray-700 tracking-[0.5px] px-2 sm:px-0">
                <p className="leading-relaxed">
                  Comprehensive technology solutions to accelerate your digital transformation
                </p>
              </div>
            </ScrollAnimatedCard>
            
            {/* Services Grid - Using wider container */}
            <ScrollAnimatedSection animation="fade-up" delay={200} className="max-w-8xl mx-auto mb-8 md:mb-10 lg:mb-12">
              <ScrollAnimatedGrid
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
                animation="card-slide-in"
                staggerDelay={150}
                hover={false}
              >
                {servicesData.map((service, index) => (
                  <ScrollAnimatedCard 
                    key={service.id} 
                    animation="fade-up" 
                    delay={800 + (index * 100)}
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="group relative bg-[#2D993D] text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2D993D]/40 transition-all duration-300 hover:bg-[#24802f] hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-white text-center tracking-[0.1px] leading-tight text-xs sm:text-sm md:text-base lg:text-lg">
                    Get Started
                  </span>
                  <div className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
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
      
      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="light" />
    </div>
  );
}
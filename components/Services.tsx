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
    <div className="bg-white rounded-2xl border border-gray-200 cursor-pointer overflow-hidden group services-page-card-height-mobile flex flex-col transition-refined hover:shadow-xl hover:border-[#2D993D] hover:-translate-y-2"
         onClick={() => onNavigate('service-detail', service.id)}>
      
      {/* Image Section */}
      <div className="relative h-32 md:h-56 lg:h-64 bg-center bg-cover bg-no-repeat rounded-t-2xl overflow-hidden flex-shrink-0"
           style={{ backgroundImage: `url('${serviceImages[service.id] || 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop'}')` }}>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-refined" />
        <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 transform translate-y-4 group-hover:translate-y-0 transition-refined opacity-0 group-hover:opacity-100">
          <div className="glass-overlay rounded-xl p-2 md:p-4 shadow-2xl">
            <p className="text-white text-xs md:text-sm font-semibold text-center drop-shadow-lg">Click to learn more →</p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 md:p-8 flex-grow flex flex-col">
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[16px] md:text-[24px] lg:text-[28px] transition-refined leading-tight group-hover:text-[#2D993D]">
            {service.title}
          </h3>
          <p className="font-['Roboto:Regular',_sans-serif] font-normal text-[12px] md:text-[16px] text-gray-600 tracking-[0.25px] leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}



export default function Services({ onNavigate, servicesData }: ServicesProps) {
  return (
    <div className="bg-white flex flex-col items-start justify-start relative min-h-screen w-full">
      <Header onNavigate={onNavigate} currentPage="services" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        currentPage="services" 
      />
      
      {/* Main Content */}
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 relative w-full">
          
          {/* Hero Section */}
          <ScrollAnimatedSection animation="fade-up" className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between mb-20 md:mb-24 lg:mb-28 w-full max-w-7xl mx-auto">
            <ScrollAnimatedCard animation="fade-right" className="flex-1 text-center lg:text-left" hover={false}>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-900 text-sm font-semibold inline-block mb-10">
                Our Services
              </div>
              <h1 className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[44px] md:text-[60px] lg:text-[72px] tracking-[-0.5px] leading-tight mb-8">
                Professional and highly dedicated services.
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 tracking-[0.5px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your business with our comprehensive suite of professional services designed to drive innovation and growth.
              </p>
            </ScrollAnimatedCard>
            <ScrollAnimatedCard animation="fade-left" delay={200} className="flex-shrink-0 w-full lg:w-auto" hover={false}>
              <div className="bg-gray-50 h-96 md:h-[420px] lg:h-[520px] lg:w-[520px] rounded-2xl flex items-center justify-center shadow-xl mx-auto border border-gray-200">
                <div className="text-center p-8 md:p-10">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-[var(--primary,#2D993D)] rounded-full mx-auto mb-8 md:mb-10 flex items-center justify-center">
                    <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Transform Your Business</h3>
                  <p className="text-base md:text-lg text-gray-600">With our comprehensive suite of professional services</p>
                </div>
              </div>
            </ScrollAnimatedCard>
          </ScrollAnimatedSection>

          {/* Services Grid */}
          <ScrollAnimatedSection animation="fade-up" delay={300} className="w-full max-w-8xl mx-auto">
            <ScrollAnimatedGrid
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"
              animation="card-slide-in"
              staggerDelay={120}
              hover={false}
            >
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} onNavigate={onNavigate} />
              ))}
            </ScrollAnimatedGrid>
          </ScrollAnimatedSection>

          {/* CTA Section */}
          <ScrollAnimatedCard 
            animation="scale-in" 
            delay={600}
            className="bg-[#2D993D] rounded-2xl p-10 md:p-14 lg:p-18 text-center w-full max-w-7xl mx-auto mt-20 md:mt-24 lg:mt-28 shadow-xl border border-gray-200"
            hover={false}
          >
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mb-8 md:mb-10">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive sustainable growth.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#2D993D] px-10 md:px-12 py-5 md:py-6 rounded-lg font-semibold text-[18px] md:text-[20px] btn-hover-primary"
              style={{ color: 'hsl(var(--brand-500))' }}
            >
              Get Started Today
            </button>
          </ScrollAnimatedCard>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} theme="light" />
    </div>
  );
}
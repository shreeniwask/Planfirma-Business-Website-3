import { getServiceIcon } from './constants';
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

interface ServiceCardProps {
  service: ServiceData;
  onNavigate: (page: Page, serviceId?: string) => void;
}

export default function ServiceCard({ service, onNavigate }: ServiceCardProps) {
  return (
    <div 
      className="group relative cursor-pointer transition-refined overflow-visible"
      onClick={() => onNavigate('service-detail', service.id)}
    >
      {/* Main card container */}
      <div className="relative service-card-height bg-white rounded-xl border border-gray-200 group-hover:border-[#2D993D] transition-refined ease-out group-hover:shadow-2xl group-hover:z-10 group-hover:transform group-hover:-translate-y-4 group-hover:scale-105 overflow-hidden">
        
        {/* Floating decorative elements */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#2D993D] opacity-10 rounded-full group-hover:scale-150 transition-refined"></div>
        <div className="absolute top-7 right-7 w-4 h-4 bg-[#2D993D] opacity-20 rounded-full group-hover:scale-125 transition-refined delay-100"></div>
        
        {/* Content container */}
        <div className="relative z-10 p-3 sm:p-4 md:p-5 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-lg flex items-center justify-center text-xl md:text-2xl transform group-hover:scale-110 transition-refined">
              {(() => {
                const Icon = getServiceIcon(service.id);
                return Icon ? <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" /> : '⚡';
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] group-hover:text-[#2D993D] transition-refined leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
          
          {/* Content that changes on hover */}
          <div className="flex-grow mb-2 sm:mb-3 md:mb-4 relative">
            {/* Default state - Description visible, features hidden */}
            <div className="group-hover:opacity-0 group-hover:transform group-hover:-translate-y-2 transition-refined ease-in-out">
              <p className="font-['Roboto:Regular',_sans-serif] font-normal text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
            
            {/* Hover state - Features visible, description hidden */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-refined ease-in-out">
              {/* Key Features */}
              <div>
                <h4 className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-gray-900 text-[12px] md:text-[13px] mb-2">
                  Key Features:
                </h4>
                <div className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#2D993D] rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="text-[10px] md:text-[11px] lg:text-[12px] text-gray-700 font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sticky Bottom CTA section */}
          <div className="flex-shrink-0 mt-auto group-hover:opacity-0 group-hover:transform group-hover:-translate-y-2 transition-refined">
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <span className="text-[#2D993D] text-[12px] md:text-[13px] lg:text-[14px] font-medium">
                Learn More →
              </span>
              <div className="w-6 h-6 bg-[#2D993D] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
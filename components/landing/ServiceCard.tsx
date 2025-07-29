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
      <div className="relative service-card-height bg-white rounded-xl border border-gray-200 group-hover:border-[#2D993D] transition-refined ease-out group-hover:shadow-2xl group-hover:z-50 group-hover:transform group-hover:-translate-y-4 group-hover:scale-105 overflow-hidden">
        
        {/* Floating decorative elements */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#2D993D] opacity-10 rounded-full group-hover:scale-150 transition-refined"></div>
        <div className="absolute top-7 right-7 w-4 h-4 bg-[#2D993D] opacity-20 rounded-full group-hover:scale-125 transition-refined delay-100"></div>
        
        {/* Content container */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-4 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-lg flex items-center justify-center text-2xl transform group-hover:scale-110 transition-refined">
              {(() => {
                const Icon = getServiceIcon(service.id);
                return Icon ? <Icon className="w-7 h-7 text-white" /> : '⚡';
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[18px] md:text-[20px] group-hover:text-[#2D993D] transition-refined leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
          
          {/* Content that changes on hover */}
          <div className="flex-grow mb-4 relative">
            {/* Default state - Description visible, features hidden */}
            <div className="group-hover:opacity-0 group-hover:transform group-hover:-translate-y-2 transition-refined ease-in-out">
              <p className="font-['Roboto:Regular',_sans-serif] font-normal text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
            
            {/* Hover state - Features visible, description hidden */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-refined ease-in-out">
              {/* Key Features */}
              <div className="mb-3">
                <h4 className="font-['Roboto:SemiBold',_sans-serif] font-semibold text-gray-900 text-[13px] mb-2">
                  Key Features:
                </h4>
                <div className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#2D993D] rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="text-[11px] md:text-[12px] text-gray-700 font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                  {service.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-green-50 text-[#2D993D] text-[9px] rounded-full font-medium border border-[#2D993D]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA section */}
          <div className="flex-shrink-0">
            {/* Default CTA - visible by default, hidden on hover */}
            <div className="flex items-center justify-between group-hover:opacity-0 group-hover:transform group-hover:-translate-y-2 transition-refined">
              <span className="text-[#2D993D] text-[14px] font-medium">
                Learn More →
              </span>
              <div className="w-6 h-6 bg-[#2D993D] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Enhanced CTA - visible on hover */}
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-refined ease-in-out">
              <div className="flex items-center justify-end pt-2 border-t border-gray-100">
                <div className="w-7 h-7 bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-full flex items-center justify-center icon-hover">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import { VALUE_ADDED_FEATURES } from './constants';

export default function ValueAddedSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" delay={900} className="relative w-full py-16 lg:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <ScrollAnimatedCard animation="fade-up" delay={1000} className="text-center mb-16 lg:mb-20" hover={false}>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold text-white leading-tight mb-6">
            <span style={{ textShadow: '0 4px 20px rgba(48, 182, 208, 0.3), 0 2px 10px rgba(0,0,0,0.8)' }}>
              Value That Sets Us Apart
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#bfdbf7] leading-relaxed max-w-4xl mx-auto">
            Experience the difference with AI solutions designed for real business impact
          </p>
        </ScrollAnimatedCard>

        {/* Enhanced 3x2 Grid Layout */}
        <ScrollAnimatedGrid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          animation="card-slide-in"
          staggerDelay={150}
        >
          {VALUE_ADDED_FEATURES.map((feature, index) => (
            <div key={index} className="group relative min-h-[320px] h-full overflow-hidden">
              
              {/* Floating Background Elements */}
              <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
                <div 
                  className="absolute top-4 right-4 w-8 h-8 bg-[#30b6d0]/20 rounded-full blur-sm group-hover:scale-150 transition-all duration-500" 
                  style={{ animationDelay: `${index * 200}ms` }}
                ></div>
                <div 
                  className="absolute bottom-6 left-6 w-6 h-6 bg-[#40c6e0]/25 rounded-full blur-xs group-hover:scale-125 transition-all duration-700" 
                  style={{ animationDelay: `${index * 300}ms` }}
                ></div>
                <div 
                  className="absolute top-1/2 left-4 w-3 h-3 bg-[#30b6d0]/30 rounded-full animate-pulse" 
                  style={{ animationDelay: `${index * 400}ms` }}
                ></div>
              </div>
              
              {/* Main Card */}
              <div className={`relative bg-white/8 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/15 shadow-2xl p-8 lg:p-10 overflow-hidden group-hover:bg-white/12 group-hover:border-white/25 group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col`}>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#30b6d0]/5 to-[#40c6e0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-[#30B6D0]/20 to-[#40c6e0]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <span className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#30b6d0]/20 rounded-full border border-[#30b6d0]/30">
                    <div className="w-2 h-2 bg-[#30b6d0] rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-[#30b6d0] uppercase tracking-wide">
                      {feature.stats}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#30b6d0] transition-colors duration-300">
                    <span style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                      {feature.title}
                    </span>
                  </h3>
                  
                  <p className="text-base sm:text-lg text-[#bfdbf7] leading-relaxed flex-1 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[#30b6d0] font-semibold text-sm uppercase tracking-wide">
                      Learn More
                    </span>
                    <div className="w-8 h-8 bg-gradient-to-r from-[#30b6d0] to-[#40c6e0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-gradient-to-r from-[#30b6d0]/20 to-[#40c6e0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </ScrollAnimatedGrid>

        {/* Bottom CTA Section */}
        <ScrollAnimatedCard animation="scale-in" delay={1200} className="text-center mt-16 lg:mt-20" hover={false}>
          <div className="bg-gradient-to-r from-[#30b6d0]/10 to-[#40c6e0]/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-[#bfdbf7] mb-8 max-w-2xl mx-auto">
              Join leading companies who have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#30b6d0] to-[#40c6e0] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="border-2 border-[#30b6d0] text-[#30b6d0] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#30b6d0] hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </ScrollAnimatedCard>
      </div>
    </ScrollAnimatedSection>
  );
}
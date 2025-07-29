import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import { FEATURES_DATA } from './constants';

export default function FeaturesSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" delay={600} className="space-y-12 lg:space-y-16">
      <ScrollAnimatedCard animation="fade-up" delay={700} className="text-center" hover={false}>
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold text-white leading-tight mb-4 lg:mb-6">
          <span style={{ textShadow: '0 4px 20px rgba(48, 182, 208, 0.3), 0 2px 10px rgba(0,0,0,0.8)' }}>
            AI Solutions That Make Sense
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#bfdbf7] leading-relaxed max-w-4xl mx-auto">
          We build AI tools that solve real business problems and integrate
          seamlessly with how you already work.
        </p>
      </ScrollAnimatedCard>

      {/* Centered Features Grid with Large Horizontal Padding */}
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-20 xl:px-24">
        <ScrollAnimatedGrid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          animation="card-slide-in"
          staggerDelay={200}
        >
          {FEATURES_DATA.map((feature, index) => (
            <div key={index} className="relative min-h-[320px] h-full overflow-hidden group">
              
              {/* Floating Bubbles for Each Card */}
              <div className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none">
                <div className={`absolute top-4 right-4 w-6 h-6 bg-[#30b6d0]/20 rounded-full animate-float blur-sm`} style={{ animationDelay: `${index * 500}ms` }}></div>
                <div className={`absolute bottom-6 left-6 w-4 h-4 bg-[#40c6e0]/25 rounded-full animate-float-reverse blur-sm`} style={{ animationDelay: `${index * 700}ms` }}></div>
                <div className={`absolute top-1/2 left-4 w-2 h-2 bg-[#30b6d0]/30 rounded-full animate-pulse`} style={{ animationDelay: `${index * 1000}ms` }}></div>
                <div className={`absolute top-8 right-12 w-3 h-3 bg-[#40c6e0]/20 rounded-full animate-float-alt blur-sm`} style={{ animationDelay: `${index * 600}ms` }}></div>
              </div>
              
              <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/20 shadow-xl bg-gradient-to-br ${feature.gradient} p-6 lg:p-8 overflow-hidden group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col`}>
                
                {/* Icon Container */}
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-[#30B6D0]/20 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#30B6D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4 group-hover:text-[#30b6d0] transition-colors duration-300">
                    <span style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                      {feature.title}
                    </span>
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-[#bfdbf7] mb-4 lg:mb-6 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  
                  {/* Feature Bullets */}
                  <ul className="space-y-2 lg:space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 text-sm sm:text-base lg:text-lg text-[#dbeafe]">
                        <div className="w-2 h-2 bg-[#30B6D0] rounded-full flex-shrink-0 mt-2"></div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </ScrollAnimatedGrid>
      </div>
    </ScrollAnimatedSection>
  );
}
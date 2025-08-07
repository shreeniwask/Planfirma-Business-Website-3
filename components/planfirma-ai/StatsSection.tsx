import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import { STATS_DATA } from './constants';

export default function StatsSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" className="relative w-full overflow-hidden bg-black">
      {/* Enhanced Background with Gradients and Textures */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top left, hsl(var(--brand-500) / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, hsl(var(--brand-500) / 0.08) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(15, 15, 25, 0.98) 50%, rgba(0, 0, 0, 0.95) 100%)
          `
        }}
      ></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 lg:w-2 lg:h-2" style={{ backgroundColor: 'hsl(var(--brand-500) / 0.3)' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1" style={{ backgroundColor: 'hsl(var(--brand-500) / 0.4)' }} />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5" style={{ backgroundColor: 'hsl(var(--brand-500) / 0.2)' }} />
        <div className="absolute top-1/6 right-1/3 w-1 h-1" style={{ backgroundColor: 'hsl(var(--brand-500) / 0.3)' }} />
      </div>

      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        
        {/* Results Section Header */}
        <ScrollAnimatedCard animation="fade-up" className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16" hover={false}>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-6">
            <span style={{ textShadow: '0 4px 20px rgba(48, 182, 208, 0.3), 0 2px 10px rgba(0,0,0,0.8)' }}>
              Real Results for Real Businesses
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#bfdbf7] leading-relaxed max-w-4xl mx-auto">
            Our clients see meaningful improvements in their operations within
            weeks, not months.
          </p>
        </ScrollAnimatedCard>

        {/* Enhanced Stats Cards with Floating Bubbles */}
        <ScrollAnimatedGrid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          animation="card-slide-in"
          staggerDelay={150}
        >
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] h-full overflow-hidden">
              
              {/* Floating Bubbles for Each Stats Card */}
              <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full animate-float blur-sm`} style={{ backgroundColor: 'hsl(var(--brand-500) / 0.2)', animationDelay: `${index * 300}ms` }}></div>
                <div className={`absolute bottom-6 left-4 w-6 h-6 rounded-full animate-float-reverse blur-sm`} style={{ backgroundColor: 'hsl(var(--brand-400) / 0.25)', animationDelay: `${index * 500}ms` }}></div>
                <div className={`absolute top-1/3 left-6 w-4 h-4 rounded-full animate-float-alt blur-sm`} style={{ backgroundColor: 'hsl(var(--brand-500) / 0.3)', animationDelay: `${index * 700}ms` }}></div>
                <div className={`absolute top-6 right-12 w-3 h-3 rounded-full animate-pulse`} style={{ backgroundColor: 'hsl(var(--brand-400) / 0.2)', animationDelay: `${index * 1200}ms` }}></div>
                <div className={`absolute bottom-1/3 right-6 w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: 'hsl(var(--brand-500) / 0.35)', animationDelay: `${index * 900}ms` }}></div>
              </div>
              
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-2xl lg:rounded-3xl">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        hsl(var(--background) / 0.15) 0%, 
                        hsl(var(--background) / 0.05) 50%, 
                        hsl(var(--brand-500) / 0.1) 100%
                      )
                    `
                  }}
                ></div>
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 backdrop-blur-xl border border-white/20 rounded-2xl lg:rounded-3xl shadow-2xl"></div>
                
                {/* Highlight Effects */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-500)/0.3)] to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 lg:p-8">
                  {/* Icon */}
                  <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    <span 
                      className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[52px] font-bold block"
                      style={{ 
                        color: '#30b6d0',
                        textShadow: '0 4px 20px #30b6d0, 0 2px 10px rgba(0,0,0,0.5)'
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  
                  {/* Title and Subtitle */}
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white">
                      <span style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                        {stat.title}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#bfdbf7]">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollAnimatedGrid>
      </div>
    </ScrollAnimatedSection>
  );
}
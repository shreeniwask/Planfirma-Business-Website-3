import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';
import { AI_IMAGES, VIDEO_SOURCES, HERO_FEATURES } from './constants';
import type { Page } from '../../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
  transforms: {
    video: string;
    overlay: string;
    content: string;
    scrollIndicator: string;
  };
  opacities: {
    overlay: number;
    scrollIndicator: number;
  };
  gradientBackground: string;
  videoBlur: string;
}

export default function HeroSection({ 
  onNavigate, 
  transforms, 
  opacities, 
  gradientBackground, 
  videoBlur 
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Parallax Video Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: transforms.video,
          transformOrigin: 'center center',
          willChange: 'transform'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          poster={VIDEO_SOURCES.poster}
          style={{
            filter: videoBlur,
            willChange: 'filter'
          }}
        >
          <source src={VIDEO_SOURCES.uhd} type="video/mp4" />
          <source src={VIDEO_SOURCES.hd} type="video/mp4" />
          <img
            src={VIDEO_SOURCES.poster}
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Parallax Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/70"
        style={{
          transform: transforms.overlay,
          opacity: opacities.overlay,
          willChange: 'transform, opacity'
        }}
      ></div>
      
      {/* Parallax Enhanced gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: gradientBackground,
          transform: transforms.overlay,
          willChange: 'transform'
        }}
      ></div>

      {/* Hero Content Container with Parallax */}
      <div 
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 xl:px-12"
        style={{
          transform: transforms.content,
          willChange: 'transform'
        }}
      >
        <ScrollAnimatedSection animation="fade-up" className="w-full max-w-8xl mx-auto text-center space-y-6 lg:space-y-8">
          
          {/* Badge */}
          <ScrollAnimatedCard animation="scale-in" delay={200} className="inline-flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-lg" hover={false}>
            <div className="w-6 h-6 flex-shrink-0">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
                <path d="M3 8l5 5 10-10" stroke="#30B6D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm lg:text-base tracking-wide drop-shadow-lg">
              Proven Results for Growing Businesses
            </span>
          </ScrollAnimatedCard>

          {/* Main Heading */}
          <ScrollAnimatedCard animation="fade-up" delay={400} className="space-y-4 lg:space-y-6 max-w-5xl mx-auto" hover={false}>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-bold text-white leading-[1.1] tracking-tight">
              <span style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
                Transform Your Business<br />
                with <span className="text-[#30b6d0]">Smart AI Solutions</span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              <span style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                Planfirma helps businesses of all sizes streamline operations, make
                better decisions, and grow faster with custom AI solutions that
                actually work.
              </span>
            </p>
          </ScrollAnimatedCard>

          {/* CTA Buttons */}
          <ScrollAnimatedCard animation="fade-up" delay={600} className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full max-w-lg mx-auto" hover={false}>
            <button
              onClick={() => onNavigate('contact')}
              className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 lg:py-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white font-semibold text-base lg:text-lg tracking-wide drop-shadow-lg btn-hover-primary"
            >
              <span>Schedule a consultation</span>
              <div className="w-5 h-5 lg:w-6 lg:h-6 transition-refined group-hover:translate-x-1">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="flex-1 group flex items-center justify-center gap-3 px-8 py-4 lg:py-5 bg-white/15 backdrop-blur-md rounded-xl border border-white/25 text-white font-semibold text-base lg:text-lg tracking-wide drop-shadow-lg btn-hover-secondary"
            >
              <div className="w-6 h-6 flex-shrink-0">
                <img
                  src={AI_IMAGES.avatar}
                  alt="Success stories avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span>View success stories</span>
            </button>
          </ScrollAnimatedCard>

          {/* Feature Icons */}
          <ScrollAnimatedCard animation="scale-in" delay={800} className="mt-8 lg:mt-12" hover={false}>
            <div className="inline-flex flex-wrap justify-center gap-6 lg:gap-8 p-6 lg:p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 shadow-xl">
              {HERO_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 px-4 py-2">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0">
                    <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#BFDBF7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm lg:text-base tracking-wide drop-shadow-lg whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollAnimatedCard>
        </ScrollAnimatedSection>
      </div>

      {/* Scroll Indicator with Parallax */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        style={{
          transform: transforms.scrollIndicator,
          opacity: opacities.scrollIndicator,
          willChange: 'transform, opacity'
        }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
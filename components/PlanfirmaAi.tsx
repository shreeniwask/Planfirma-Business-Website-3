import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import HeroSection from './planfirma-ai/HeroSection';
import StatsSection from './planfirma-ai/StatsSection';
import SmartAutomationSection from './planfirma-ai/SmartAutomationSection';
import FeaturesSection from './planfirma-ai/FeaturesSection';
import ValueAddedSection from './planfirma-ai/ValueAddedSection';
import { useParallaxScroll } from './planfirma-ai/hooks';
import type { Page } from '../App';

interface PlanfirmaAiProps {
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
  onBack: () => void;
}

export default function PlanfirmaAi({ onNavigate, onNavigateToService, onBack }: PlanfirmaAiProps) {
  const { transforms, opacities, gradientBackground, videoBlur } = useParallaxScroll();
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show breadcrumb after scrolling past 50% of the viewport height
      if (scrollY > windowHeight * 0.5) {
        setShowBreadcrumb(true);
      } else {
        setShowBreadcrumb(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black flex flex-col items-center justify-start relative min-h-screen w-full">
      <Header onNavigate={onNavigate} currentPage="planfirma-ai" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs - Only show after scrolling */}
      {showBreadcrumb && (
        <NavigationBar 
          onNavigate={onNavigate} 
          onBack={onBack}
          currentPage="planfirma-ai" 
        />
      )}
      
      <div className="w-full max-w-full">
        <HeroSection 
          onNavigate={onNavigate}
          transforms={transforms}
          opacities={opacities}
          gradientBackground={gradientBackground}
          videoBlur={videoBlur}
        />

        <StatsSection />

        <SmartAutomationSection />

        <FeaturesSection />

        <ValueAddedSection onNavigate={onNavigate} />
      </div>
      
      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="dark" />
    </div>
  );
}
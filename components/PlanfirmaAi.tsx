import Header from './Header';
import Footer from './Footer';
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
}

export default function PlanfirmaAi({ onNavigate, onNavigateToService }: PlanfirmaAiProps) {
  const { transforms, opacities, gradientBackground, videoBlur } = useParallaxScroll();

  return (
    <div className="bg-black flex flex-col items-center justify-start relative min-h-screen w-full">
      <Header onNavigate={onNavigate} currentPage="planfirma-ai" />
      
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
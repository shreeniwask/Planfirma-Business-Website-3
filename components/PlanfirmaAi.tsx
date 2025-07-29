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
  onNavigate: (page: Page, id?: string) => void;
  onBack: () => void;
}

export default function PlanfirmaAi({ onNavigate }: PlanfirmaAiProps) {
  const { transforms, opacities, gradientBackground, videoBlur } = useParallaxScroll();

  return (
    <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
      <Header onNavigate={onNavigate} currentPage="planfirma-ai" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        currentPage="planfirma-ai" 
      />
      
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

      <ValueAddedSection />
      
      <Footer onNavigate={onNavigate} theme="dark" />
    </div>
  );
}
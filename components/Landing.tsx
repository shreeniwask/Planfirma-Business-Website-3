import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./landing/HeroSection";
import ServicesSection from "./landing/ServicesSection";
import TestimonialsSection from "./landing/TestimonialsSection";
import ValuePropositionSection from "./landing/ValuePropositionSection";
import BrandsWeHelpedSection from "./landing/BrandsWeHelpedSection";
import type { Page } from "../App";

interface BlogData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorExperience: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

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

interface LandingProps {
  onNavigate: (page: Page, serviceId?: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  blogsData: BlogData[];
  servicesData: ServiceData[];
}

export default function Landing({
  onNavigate,
  onNavigateToService,
  servicesData,
}: LandingProps) {
  return (
    <div className="bg-[#ffffff] flex flex-col items-center justify-start relative w-full">
      <Header onNavigate={onNavigate} currentPage="landing" />

      <div className="w-full max-w-full">
        <HeroSection onNavigate={onNavigate} />

        <ServicesSection onNavigate={onNavigate} servicesData={servicesData} />

        <TestimonialsSection />

        <ValuePropositionSection />

        <BrandsWeHelpedSection />
      </div>
      <Footer
        onNavigate={onNavigate}
        onNavigateToService={onNavigateToService}
        theme="dark"
      />
    </div>
  );
}

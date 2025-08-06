import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import { valueProps } from './constants';
import { Lightbulb, Building2, Rocket, Settings, Globe, Shield } from 'lucide-react';

function getValuePropIcon(emojiIcon: string) {
  const iconMap: { [key: string]: any } = {
    "💡": Lightbulb,
    "🏗️": Building2, 
    "🚀": Rocket,
    "⚙️": Settings,
    "🌍": Globe,
    "🔒": Shield,
  };
  
  const Icon = iconMap[emojiIcon];
  if (!Icon) {
    // Fallback to displaying the emoji if no Lucide icon matches
    return <span className="text-5xl md:text-6xl">{emojiIcon}</span>;
  }
  
  return <Icon className="w-12 h-12 md:w-16 md:h-16 text-[#2D993D]" strokeWidth={1.5} />;
}

export default function ValuePropositionSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-white to-gray-50 relative w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 md:gap-12 items-center justify-center px-4 md:px-8 lg:px-16 relative w-full">
          
          {/* Value Proposition Heading */}
          <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto" hover={false}>
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-gray-900 mb-4 sm:mb-6">
              <p className="leading-tight">Cutting edge development</p>
            </h2>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedGrid
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-6xl mx-auto"
            animation="card-fade-up"
            staggerDelay={120}
          >
            {valueProps.map((item, index) => (
              <div key={index} className="bg-white relative rounded-2xl border border-gray-100 card-hover-subtle p-4 sm:p-6 md:p-8">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 h-full">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{getValuePropIcon(item.icon)}</div>
                  <div className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">
                    <p className="leading-tight">{item.title}</p>
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </ScrollAnimatedGrid>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
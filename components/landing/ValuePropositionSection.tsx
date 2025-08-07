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
    <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-white to-gray-50 relative w-full py-6 sm:py-8 md:py-10 lg:py-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-3 sm:gap-4 md:gap-6 items-center justify-center relative w-full">
          
          {/* Value Proposition Heading */}
          <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto mb-3 sm:mb-4 md:mb-6" hover={false}>
            <h2 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              <p className="leading-tight">Cutting edge development</p>
            </h2>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedGrid
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full max-w-6xl mx-auto"
            animation="card-fade-up"
            staggerDelay={120}
          >
            {valueProps.map((item, index) => (
                          <div key={index} className="bg-white relative rounded-2xl border border-gray-100 card-hover-subtle p-2 sm:p-3 md:p-4 lg:p-5">
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 h-full">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{getValuePropIcon(item.icon)}</div>
                <div className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px]">
                  <p className="leading-tight">{item.title}</p>
                </div>
                <p className="text-gray-600 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
            ))}
          </ScrollAnimatedGrid>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
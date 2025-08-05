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
    <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-white to-gray-50 relative w-full">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 md:gap-16 lg:gap-20 items-center justify-center px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 relative w-full">
          
          <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto" hover={false}>
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 mb-6 md:mb-8">
              <p className="leading-tight">Cutting edge development</p>
            </h2>
          </ScrollAnimatedCard>
          
          <ScrollAnimatedGrid
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-12 w-full max-w-8xl mx-auto"
            animation="card-fade-up"
            staggerDelay={120}
          >
            {valueProps.map((item, index) => (
              <div key={index} className="bg-white card-height-md relative rounded-2xl border border-gray-100 card-hover-subtle">
                <div className="flex flex-col justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-3 md:gap-6 h-full items-start justify-center px-4 md:px-8 lg:px-10 py-4 md:py-8 relative w-full">
                    <div className="text-3xl md:text-5xl">{getValuePropIcon(item.icon)}</div>
                    <div className="font-['Roboto:Bold',_sans-serif] font-bold text-gray-900 text-[16px] md:text-[24px] lg:text-[26px]">
                      <p className="leading-tight">{item.title}</p>
                    </div>
                    <p className="text-gray-600 text-[12px] md:text-[18px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollAnimatedGrid>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
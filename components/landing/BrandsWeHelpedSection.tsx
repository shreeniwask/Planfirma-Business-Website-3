import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from '../ScrollAnimatedCard';
import { brandsWeHelped, technicalPartners, stats } from './constants';
import NewsletterSubscription from '../NewsletterSubscription';

export default function BrandsWeHelpedSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" className="bg-gradient-to-b from-[#f8f9fa] to-[#ffffff] relative w-full">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 md:gap-12 lg:gap-14 items-center justify-center px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 relative w-full">
          
          <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto" hover={false}>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-4 md:mb-6">
              <p className="leading-tight">Delivering Results That Matter</p>
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 max-w-2xl mx-auto mt-4">
              Our track record speaks for itself - we make technology work for your business
            </p>
          </ScrollAnimatedCard>
          
          {/* Stats Section */}
          <ScrollAnimatedGrid
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full max-w-6xl mx-auto mb-12 md:mb-14"
            animation="card-fade-up"
            staggerDelay={100}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stats-card-height text-center bg-white p-4 md:p-5 lg:p-6 rounded-xl border border-gray-200 hover:border-[#2D993D] transition-refined stats-card-hover">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-[30px] md:text-[36px] lg:text-[42px] font-bold text-[#2D993D] mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] md:text-[11px] lg:text-[12px] text-gray-600 leading-tight text-center">
                    {stat.subLabel}
                  </div>
                </div>
              </div>
            ))}
          </ScrollAnimatedGrid>

          {/* Brands Section */}
          <ScrollAnimatedSection animation="fade-up" delay={200} className="w-full max-w-7xl mx-auto">
            <ScrollAnimatedCard animation="fade-up" className="text-center mb-8 md:mb-10" hover={false}>
              <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-gray-900 mb-3 md:mb-4">
                Trusted by Leading Organizations
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 max-w-xl mx-auto">
                Companies worldwide trust us to deliver exceptional technology solutions
              </p>
            </ScrollAnimatedCard>
            
            <ScrollAnimatedGrid
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-14"
              animation="card-fade-up"
              staggerDelay={80}
            >
              {brandsWeHelped.map((brand, index) => (
                <div key={index} className="flex items-center justify-center p-2 md:p-3 brand-logo-hover">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-12 md:h-14 lg:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full"
                  />
                </div>
              ))}
            </ScrollAnimatedGrid>
          </ScrollAnimatedSection>

          {/* Technical Partners Section */}
          <ScrollAnimatedSection animation="fade-up" delay={400} className="w-full max-w-6xl mx-auto">
            <ScrollAnimatedCard animation="fade-up" className="text-center mb-8 md:mb-10" hover={false}>
              <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-gray-900 mb-3 md:mb-4">
                Technology Partners
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-600 max-w-xl mx-auto">
                We leverage industry-leading platforms and tools to deliver robust solutions
              </p>
            </ScrollAnimatedCard>
            
            <ScrollAnimatedGrid
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mb-12 md:mb-14"
              animation="card-fade-up"
              staggerDelay={100}
            >
              {technicalPartners.map((partner, index) => (
                <div key={index} className="h-16 md:h-18 lg:h-20 flex items-center justify-center p-3 md:p-4 bg-white rounded-lg border border-gray-200 hover:border-[#2D993D] hover:shadow-md transition-refined brand-logo-hover">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-6 md:h-7 lg:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </ScrollAnimatedGrid>
          </ScrollAnimatedSection>

          {/* Newsletter Section */}
          <ScrollAnimatedCard animation="scale-in" delay={600} className="w-full max-w-3xl mx-auto mt-4 md:mt-6" hover={false}>
            <NewsletterSubscription />
          </ScrollAnimatedCard>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}

import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from './ScrollAnimatedCard';
import type { Page } from '../App';

interface AboutUsProps {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

const timelineData = [
  { year: "2011", title: "Company Inception", description: "Planfirma was founded, embarking on its mission to deliver innovative solutions." },
  { year: "2013", title: "National Expansion", description: "Expanded operations across various states in India, establishing a strong domestic presence." },
  { year: "2016", title: "Government Sector Engagement", description: "Began strategic collaborations and service delivery to government entities." },
  { year: "2018", title: "Achieving Client Success", description: "Celebrated serving over 100 satisfied customers, a testament to our commitment to excellence." },
  { year: "2022", title: "Global Reach & Partnerships", description: "Established a global presence and strategic partnerships worldwide, extending our international footprint." },
  { year: "2025", title: "Strategic Vertical Expansion", description: "Launched new, high-growth verticals in Artificial Intelligence (AI) and Cloud technologies." }
];

const teamMembers = [
  { name: "Arun Srivastav", position: "CEO", avatar: "👨‍💼" },
  { name: "Anuradha Srivastava", position: "CTO", avatar: "👩‍💻" },
  { name: "Swati Rao", position: "Finance Manager", avatar: "👩‍💼" },
  { name: "Kinjal Gandhi", position: "Product Manager", avatar: "👨‍💻" },
  { name: "Ravinder Singh", position: "Delivery Manager", avatar: "👨‍🔧" },
  { name: "Vinod Shirke", position: "Delivery Manager", avatar: "👨‍🔧" },
  { name: "Joji Varghese", position: "Project Manager", avatar: "👨‍💼" }
];

export default function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <div className="bg-[#ffffff] flex flex-col items-start justify-start relative min-h-screen w-full">
      <Header onNavigate={onNavigate} currentPage="about" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        currentPage="about" 
      />
      
      {/* Hero Section */}
      <ScrollAnimatedSection animation="fade-up" className="relative w-full">
        <div className="box-border content-stretch flex flex-col gap-12 md:gap-16 lg:gap-20 items-start justify-start px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 relative w-full">
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between w-full max-w-8xl mx-auto">
            
            {/* Content */}
            <ScrollAnimatedCard animation="fade-right" className="flex-1 text-center lg:text-left" hover={false}>
              <div className="bg-green-100 px-4 py-2 rounded-full text-[#2D993D] text-sm font-semibold inline-block mb-10">
                About Us
              </div>
              <h1 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] text-[44px] md:text-[60px] lg:text-[72px] tracking-[-0.5px] leading-tight mb-8">
                Expert Business Consulting Solutions
              </h1>
              <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[18px] md:text-[20px] lg:text-[22px] text-[#1c1c1c] tracking-[0.5px] leading-relaxed mb-10">
                <p className="mb-6">
                  We help businesses innovate, grow, and optimise operations with tailored solutions. Our expertise spans multiple industries, ensuring impactful results.
                </p>
                <p>
                  Partner with us to drive success and achieve sustainable growth.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('services')} 
                className="bg-[#2D993D] text-white px-10 md:px-12 py-5 md:py-6 rounded-lg font-['Roboto:SemiBold',_sans-serif] font-semibold text-[18px] md:text-[20px] btn-hover-primary"
              >
                Check our services
              </button>
            </ScrollAnimatedCard>
            
            {/* Hero Image Placeholder */}
            <ScrollAnimatedCard animation="fade-left" delay={200} className="flex-shrink-0 w-full lg:w-auto" hover={false}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 h-96 md:h-[420px] lg:h-[520px] lg:w-[520px] xl:w-[560px] rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
                <div className="text-center p-8 md:p-10">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-[#2D993D] rounded-full mx-auto mb-8 flex items-center justify-center">
                    <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-8">Expert Team</h3>
                  <p className="text-base md:text-lg text-gray-600">Building trust and growth through innovative solutions</p>
                </div>
              </div>
            </ScrollAnimatedCard>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Stats Section */}
      <ScrollAnimatedSection animation="fade-up" className="bg-gray-50 relative w-full">
        <div className="px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full max-w-8xl mx-auto">
            
            {/* Years of Experience Card */}
            <ScrollAnimatedCard animation="fade-up" delay={0} className="stats-card-height bg-white rounded-xl border border-gray-200 hover:border-[#2D993D] transition-refined stats-card-hover" hover={false}>
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#2D993D] text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-2">
                  14+
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[#1c1c1c] text-[14px] md:text-[16px] lg:text-[18px]">
                  Years of work experience
                </div>
              </div>
            </ScrollAnimatedCard>

            {/* Projects Completed Card */}
            <ScrollAnimatedCard animation="fade-up" delay={100} className="stats-card-height bg-white rounded-xl border border-gray-200 hover:border-[#2D993D] transition-refined stats-card-hover" hover={false}>
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#2D993D] text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-2">
                  150+
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[#1c1c1c] text-[14px] md:text-[16px] lg:text-[18px]">
                  Projects completed
                </div>
              </div>
            </ScrollAnimatedCard>

            {/* Satisfied Customers Card */}
            <ScrollAnimatedCard animation="fade-up" delay={200} className="stats-card-height bg-white rounded-xl border border-gray-200 hover:border-[#2D993D] transition-refined stats-card-hover" hover={false}>
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#2D993D] text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-2">
                  100+
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[#1c1c1c] text-[14px] md:text-[16px] lg:text-[18px]">
                  Satisfied customers
                </div>
              </div>
            </ScrollAnimatedCard>

            {/* Countries Served Card */}
            <ScrollAnimatedCard animation="fade-up" delay={300} className="stats-card-height bg-white rounded-xl border border-gray-200 hover:border-[#2D993D] transition-refined stats-card-hover" hover={false}>
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#2D993D] text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-2">
                  25+
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[#1c1c1c] text-[14px] md:text-[16px] lg:text-[18px]">
                  Countries served
                </div>
              </div>
            </ScrollAnimatedCard>

          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Timeline Section */}
      <ScrollAnimatedSection animation="fade-up" className="bg-green-50/30 relative w-full">
        <div className="flex flex-col justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-16 md:gap-20 items-center justify-center px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24 relative w-full">
            
            <ScrollAnimatedCard animation="fade-up" className="text-center max-w-4xl mx-auto" hover={false}>
              <h2 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#000000] text-[40px] md:text-[52px] lg:text-[60px] leading-tight mb-10">
                Smart and effective business solutions since 2011
              </h2>
            </ScrollAnimatedCard>
            
            {/* Vertical Alternating Timeline */}
            <ScrollAnimatedSection animation="fade-up" delay={200} className="w-full max-w-6xl mx-auto relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-[#2D993D] via-[#3fab4a] to-[#2D993D] h-full hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8 md:space-y-16">
                {timelineData.map((item, index) => (
                  <ScrollAnimatedCard 
                    key={index} 
                    animation="card-slide-in" 
                    delay={300 + (index * 150)} 
                    className={`flex items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    hover={false}
                  >
                    
                    {/* Timeline Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative timeline-card-hover">
                        
                        {/* Timeline Connector Arrow - Hidden on mobile */}
                        <div className={`absolute hidden md:block top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2D993D] rotate-45 ${
                          index % 2 === 0 ? '-right-2' : '-left-2'
                        }`}></div>
                        
                        <div className="space-y-4">
                          {/* Year Badge */}
                          <div className="inline-block bg-gradient-to-r from-[#2D993D] to-[#3fab4a] text-white px-4 py-2 rounded-full">
                            <span className="text-[18px] md:text-[20px] font-['Roboto:Bold',_sans-serif] font-bold">
                              {item.year}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-[#022b3a] text-[20px] md:text-[24px] font-['Roboto:Bold',_sans-serif] font-bold leading-tight">
                            {item.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-[14px] md:text-[16px] text-[rgba(28,28,28,0.7)] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Central Timeline Dot */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-full border-4 border-white shadow-lg z-10 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-full animate-pulse opacity-75"></div>
                      </div>
                    </div>
                    
                    {/* Empty Space for Alternating Layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </ScrollAnimatedCard>
                ))}
              </div>
              
              {/* Mobile Timeline Line */}
              <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-[#2D993D] via-[#3fab4a] to-[#2D993D] h-full md:hidden"></div>
              
              {/* Mobile Timeline Dots */}
              <div className="md:hidden">
                {timelineData.map((_, index) => (
                  <div key={index} className="absolute left-6 w-6 h-6 bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-full border-4 border-white shadow-lg" 
                       style={{ 
                         top: `${index * 160 + 80}px` 
                       }}>
                  </div>
                ))}
              </div>
            </ScrollAnimatedSection>
            
            {/* Team Section */}
            <ScrollAnimatedSection animation="fade-up" delay={800} className="w-full max-w-8xl mx-auto mt-20 md:mt-24 lg:mt-28">
              <ScrollAnimatedCard animation="fade-up" delay={900} className="text-center mb-16 md:mb-20" hover={false}>
                <h2 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] text-[40px] md:text-[52px] lg:text-[60px] leading-tight">
                  Committed staff are ready to help you
                </h2>
              </ScrollAnimatedCard>
              
              {/* First Row of Team Members */}
              <ScrollAnimatedGrid
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-14 mb-12 md:mb-16"
                animation="card-scale-fade"
                staggerDelay={100}
                hover={false}
              >
                {teamMembers.slice(0, 4).map((member, index) => (
                  <div key={index} className="flex flex-col items-center justify-center text-center team-member-hover">
                    <div className="bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-full w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 shadow-lg team-avatar-hover">
                      {member.avatar}
                    </div>
                    <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#000000] text-center">
                      <p className="text-[20px] md:text-[24px] lg:text-[28px] leading-tight mb-2">{member.name}</p>
                      <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-600">{member.position}</p>
                    </div>
                  </div>
                ))}
              </ScrollAnimatedGrid>
              
              {/* Second Row of Team Members */}
              <ScrollAnimatedGrid
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14 justify-center"
                animation="card-scale-fade"
                staggerDelay={120}
                hover={false}
              >
                {teamMembers.slice(4, 7).map((member, index) => (
                  <div key={index} className="flex flex-col items-center justify-center text-center team-member-hover">
                    <div className="bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-full w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 shadow-lg team-avatar-hover">
                      {member.avatar}
                    </div>
                    <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#000000] text-center">
                      <p className="text-[20px] md:text-[24px] lg:text-[28px] leading-tight mb-2">{member.name}</p>
                      <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-600">{member.position}</p>
                    </div>
                  </div>
                ))}
              </ScrollAnimatedGrid>
            </ScrollAnimatedSection>
          </div>
        </div>
      </ScrollAnimatedSection>

      <Footer onNavigate={onNavigate} theme="dark" />
    </div>
  );
}
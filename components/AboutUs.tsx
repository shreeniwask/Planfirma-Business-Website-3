
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { ScrollAnimatedCard, ScrollAnimatedSection, ScrollAnimatedGrid } from './ScrollAnimatedCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Page } from '../App';

interface AboutUsProps {
  onNavigate: (page: Page) => void;
  onNavigateToService?: (serviceId: string) => void;
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
  { 
    name: "Arun Srivastav", 
    position: "CEO", 
    avatar: "/images/team/arun-srivastav.webp",
    linkedin: "https://www.linkedin.com/in/arun-srivastav/"
  },
  { 
    name: "Anuradha Srivastava", 
    position: "CTO", 
    avatar: "/images/team/anuradha-srivastava.webp",
    linkedin: "https://www.linkedin.com/in/anuradha-srivastava-330b116/"
  },
  { 
    name: "Swati Rao", 
    position: "Finance Manager", 
    avatar: "/images/team/swati-rao.webp",
    linkedin: "https://www.linkedin.com/in/swati-rao-44089855/"
  },
  { 
    name: "Kinjal Gandhi", 
    position: "Product Manager", 
    avatar: "/images/team/kinjal-gandhi.webp",
    linkedin: "https://www.linkedin.com/in/gandhi-kinjal/"
  },
  { 
    name: "Ravinder Singh", 
    position: "Delivery Manager", 
    avatar: "/images/team/ravinder-singh.webp",
    linkedin: "https://www.linkedin.com/in/ravindersingh03/"
  },
  { 
    name: "Vinod Shirke", 
    position: "Delivery Manager", 
    avatar: "/images/team/vinod-shirke.webp",
    linkedin: "https://www.linkedin.com/in/vinodvshirke/"
  },
  { 
    name: "Joji Varghese", 
    position: "Project Manager", 
    avatar: "/images/team/joji-varghese.webp",
    linkedin: "https://www.linkedin.com/in/joji-george-varghese-2b062412/"
  }
];

export default function AboutUs({ onNavigate, onNavigateToService, onBack }: AboutUsProps) {
  return (
    <div className="bg-[#ffffff] flex flex-col items-center justify-start relative w-full">
      <Header onNavigate={onNavigate} currentPage="about" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={onNavigate} 
        onBack={onBack}
        currentPage="about" 
      />
      
      {/* Hero Section */}
      <ScrollAnimatedSection animation="fade-up" className="relative w-full max-w-full">
        <div className="box-border content-stretch flex flex-col gap-3 md:gap-6 lg:gap-8 items-start justify-start px-2 sm:px-4 md:px-6 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 relative w-full">
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between w-full max-w-8xl mx-auto">
            
            {/* Content */}
            <ScrollAnimatedCard animation="fade-right" className="flex-1 text-center lg:text-left order-1" hover={false}>
              <div className="bg-green-100 px-3 py-1.5 rounded-full text-[#2D993D] text-xs sm:text-sm font-semibold inline-block mb-3 md:mb-6">
                About Us
              </div>
              <h1 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px] xl:text-[48px] tracking-[-0.5px] leading-tight mb-2 md:mb-3">
                Expert Business Consulting Solutions
              </h1>
              <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#1c1c1c] tracking-[0.5px] leading-relaxed mb-2 md:mb-3">
                <p className="mb-1 md:mb-3">
                  We help businesses innovate, grow, and optimise operations with tailored solutions. Our expertise spans multiple industries, ensuring impactful results.
                </p>
                <p>
                  Partner with us to drive success and achieve sustainable growth.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('services')} 
                className="bg-[#2D993D] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-['Roboto:SemiBold',_sans-serif] font-semibold text-[14px] sm:text-[16px] md:text-[18px] btn-hover-primary"
              >
                Check our services
              </button>
            </ScrollAnimatedCard>
            
            {/* Hero Image Placeholder */}
            <ScrollAnimatedCard animation="fade-left" delay={200} className="flex-shrink-0 w-full lg:w-auto order-2" hover={false}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 h-64 sm:h-80 md:h-[240px] lg:h-[300px] lg:w-[300px] xl:w-[360px] rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
                <div className="text-center p-3 sm:p-4 md:p-6">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#2D993D] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">Transform Your Business</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">With our comprehensive suite of professional services</p>
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

            {/* Team Members Card */}
            <ScrollAnimatedCard animation="fade-up" delay={300} className="stats-card-height bg-white rounded-xl border border-gray-200 hover:border-[#2D993D] transition-refined stats-card-hover" hover={false}>
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#2D993D] text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-2">
                  25+
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[#1c1c1c] text-[14px] md:text-[16px] lg:text-[18px]">
                  Team members
                </div>
              </div>
            </ScrollAnimatedCard>

          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Timeline Section */}
      <ScrollAnimatedSection animation="fade-up" className="relative w-full">
        <div className="px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-8xl mx-auto">
            
            {/* Timeline Header */}
            <ScrollAnimatedCard animation="fade-up" delay={400} className="text-center mb-16 md:mb-20" hover={false}>
              <h2 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] text-[40px] md:text-[52px] lg:text-[60px] leading-tight">
                Our Journey
              </h2>
              <p className="font-['Roboto:Regular',_sans-serif] font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[rgba(28,28,28,0.7)] mt-6 md:mt-8">
                From startup to industry leader - our path to success
              </p>
            </ScrollAnimatedCard>
            
            {/* Timeline Content */}
            <div className="relative">
              {/* Desktop Timeline */}
              <div className="hidden md:block relative">
                {/* Desktop Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#2D993D] via-[#3fab4a] to-[#2D993D] h-full"></div>
                
                {timelineData.map((item, index) => (
                  <ScrollAnimatedCard 
                    key={index} 
                    animation="card-slide-in" 
                    delay={500 + (index * 150)} 
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
              
              {/* Mobile Timeline */}
              <div className="md:hidden relative">
                {timelineData.map((item, index) => (
                  <ScrollAnimatedCard 
                    key={index} 
                    animation="card-slide-in" 
                    delay={500 + (index * 150)} 
                    className="mb-8"
                    hover={false}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative ml-8">
                      <div className="space-y-4">
                        {/* Year Badge */}
                        <div className="inline-block bg-gradient-to-r from-[#2D993D] to-[#3fab4a] text-white px-4 py-2 rounded-full">
                          <span className="text-[18px] font-['Roboto:Bold',_sans-serif] font-bold">
                            {item.year}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-[#022b3a] text-[20px] font-['Roboto:Bold',_sans-serif] font-bold leading-tight">
                          {item.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-[14px] text-[rgba(28,28,28,0.7)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimatedCard>
                ))}
                
                {/* Mobile Timeline Line */}
                <div className="absolute left-8 top-0 w-1 bg-gradient-to-b from-[#2D993D] via-[#3fab4a] to-[#2D993D] h-full"></div>
                
                {/* Mobile Timeline Dots */}
                {timelineData.map((_, index) => (
                  <div key={index} className="absolute left-6 w-6 h-6 bg-gradient-to-r from-[#2D993D] to-[#3fab4a] rounded-full border-4 border-white shadow-lg" 
                       style={{ 
                         top: `${index * 120 + 60}px` 
                       }}>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Team Section */}
      <ScrollAnimatedSection animation="fade-up" delay={800} className="w-full max-w-8xl mx-auto mt-12 md:mt-16 lg:mt-20 pb-12 md:pb-16 lg:pb-20">
        <ScrollAnimatedCard animation="fade-up" delay={900} className="text-center mb-3 sm:mb-4 md:mb-6" hover={false}>
          <h2 className="font-['Roboto:Bold',_sans-serif] font-bold text-[#1c1c1c] text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
            Committed staff are ready to help you
          </h2>
        </ScrollAnimatedCard>
        
        {/* First Row of Team Members */}
        <ScrollAnimatedGrid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12"
          animation="card-scale-fade"
          staggerDelay={100}
          hover={false}
        >
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center team-member-hover">
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                aria-label={`View ${member.name}'s LinkedIn profile`}
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 md:mb-6 team-avatar-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:border-[#2D993D] transition-all duration-300">
                    <ImageWithFallback
                      src={member.avatar}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      category="team"
                    />
                  </div>
                  {/* LinkedIn icon overlay */}
                  <div className="absolute top-1 right-1 w-6 h-6 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#000000] text-center">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-tight mb-1">{member.name}</p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </ScrollAnimatedGrid>
        
        {/* Second Row of Team Members */}
        <ScrollAnimatedGrid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-center"
          animation="card-scale-fade"
          staggerDelay={120}
          hover={false}
        >
          {teamMembers.slice(4, 7).map((member, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center team-member-hover">
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                aria-label={`View ${member.name}'s LinkedIn profile`}
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 md:mb-6 team-avatar-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D993D] to-[#3fab4a] rounded-full"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:border-[#2D993D] transition-all duration-300">
                    <ImageWithFallback
                      src={member.avatar}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      category="team"
                    />
                  </div>
                  {/* LinkedIn icon overlay */}
                  <div className="absolute top-1 right-1 w-6 h-6 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="font-['Roboto:Bold',_sans-serif] font-bold text-[#000000] text-center">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-tight mb-1">{member.name}</p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </ScrollAnimatedGrid>
      </ScrollAnimatedSection>

      <Footer onNavigate={onNavigate} onNavigateToService={onNavigateToService} theme="light" />
    </div>
  );
}
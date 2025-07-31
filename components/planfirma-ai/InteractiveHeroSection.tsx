import { useState, useEffect } from 'react';
import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';

export default function InteractiveHeroSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      id: 'automation',
      title: 'Smart Automation',
      description: 'Automate complex workflows with AI-powered decision making',
      icon: '🤖',
      color: '#30b6d0'
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics',
      description: 'Gain insights from data patterns and predict future trends',
      icon: '📊',
      color: '#40c6e0'
    },
    {
      id: 'integration',
      title: 'Seamless Integration',
      description: 'Connect with existing systems without disruption',
      icon: '🔗',
      color: '#50d0f0'
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollAnimatedSection animation="fade-up" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(48, 182, 208, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(48, 182, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#30b6d0]/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#40c6e0]/30 rounded-full animate-float-reverse blur-lg"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-[#50d0f0]/25 rounded-full animate-float-alt blur-md"></div>
      </div>
      
      <div className="relative z-10 max-w-8xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <ScrollAnimatedCard animation="fade-right" className="space-y-12" hover={false}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#30b6d0]/20 text-[#30b6d0] px-4 py-2 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-[#30b6d0] rounded-full animate-pulse"></div>
              AI-Powered Platform
            </div>
            
            {/* Dynamic Title */}
            <div className="space-y-6">
              <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight">
                <span style={{ textShadow: '0 4px 20px rgba(48, 182, 208, 0.3), 0 2px 10px rgba(0,0,0,0.8)' }}>
                  The Future of
                </span>
                <br />
                <span 
                  className="transition-all duration-500 ease-in-out"
                  style={{ 
                    color: features[activeFeature].color,
                    textShadow: `0 4px 20px ${features[activeFeature].color}40, 0 2px 10px rgba(0,0,0,0.8)`
                  }}
                >
                  {features[activeFeature].title}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#bfdbf7] leading-relaxed max-w-2xl">
                {features[activeFeature].description}
              </p>
            </div>
            
            {/* Feature Tabs */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white/20 backdrop-blur-md border border-white/30 shadow-xl'
                      : 'bg-white/10 hover:bg-white/15 border border-white/20'
                  }`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white font-medium">{feature.title}</span>
                </button>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-[#30b6d0] to-[#40c6e0] text-white px-8 py-4 rounded-xl font-semibold text-sm lg:text-base w-full sm:w-auto min-w-[220px] max-w-[280px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                <span>Experience Demo</span>
                <div className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
              <button className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-sm lg:text-base w-full sm:w-auto min-w-[220px] max-w-[280px] transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                <span>Learn More</span>
                <div className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
            
          </ScrollAnimatedCard>
          
          {/* Right Interactive Demo */}
          <ScrollAnimatedCard animation="fade-left" delay={300} className="relative" hover={false}>
            
            {/* Main Demo Container */}
            <div className="relative">
              
              {/* Interactive Dashboard */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#30b6d0] to-[#40c6e0] rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{features[activeFeature].icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Planfirma.ai</h3>
                      <p className="text-[#bfdbf7] text-sm">AI Dashboard</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Dynamic Content Based on Active Feature */}
                <div className="space-y-6">
                  {activeFeature === 0 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#30b6d0]/20 rounded-xl p-4">
                          <div className="text-[#30b6d0] text-3xl font-bold">47</div>
                          <div className="text-white text-sm">Active Workflows</div>
                        </div>
                        <div className="bg-green-500/20 rounded-xl p-4">
                          <div className="text-green-400 text-3xl font-bold">99.8%</div>
                          <div className="text-white text-sm">Success Rate</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {['Invoice Processing', 'Customer Onboarding', 'Data Analysis'].map((task, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <div className="w-2 h-2 bg-[#30b6d0] rounded-full"></div>
                            <span className="text-white text-sm flex-1">{task}</span>
                            <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#30b6d0] rounded-full transition-all duration-2000"
                                style={{ width: `${Math.random() * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {activeFeature === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#40c6e0]/20 rounded-xl p-4">
                          <div className="text-[#40c6e0] text-3xl font-bold">84%</div>
                          <div className="text-white text-sm">Prediction Accuracy</div>
                        </div>
                        <div className="bg-purple-500/20 rounded-xl p-4">
                          <div className="text-purple-400 text-3xl font-bold">12</div>
                          <div className="text-white text-sm">Insights Generated</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-white text-sm mb-2">Market Trend Prediction</div>
                        <div className="h-16 bg-white/10 rounded-lg flex items-end justify-center gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i}
                              className="bg-[#40c6e0] rounded-sm flex-1"
                              style={{ height: `${Math.random() * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeFeature === 2 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#50d0f0]/20 rounded-xl p-4">
                          <div className="text-[#50d0f0] text-3xl font-bold">15</div>
                          <div className="text-white text-sm">Connected Systems</div>
                        </div>
                        <div className="bg-blue-500/20 rounded-xl p-4">
                          <div className="text-blue-400 text-3xl font-bold">100%</div>
                          <div className="text-white text-sm">Sync Status</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {['CRM System', 'ERP Platform', 'Database', 'Cloud Storage'].map((system, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <span className="text-white text-sm flex-1">{system}</span>
                            <span className="text-green-400 text-xs">Connected</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Floating Notification */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-white/20 max-w-[180px] animate-bounce">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-800 text-xs font-medium">AI Update</span>
                </div>
                <p className="text-gray-600 text-xs">Performance improved by 12%</p>
              </div>
            </div>
            
          </ScrollAnimatedCard>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
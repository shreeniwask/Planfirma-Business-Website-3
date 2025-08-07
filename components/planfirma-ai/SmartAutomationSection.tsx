import { ScrollAnimatedCard, ScrollAnimatedSection } from '../ScrollAnimatedCard';

export default function SmartAutomationSection() {
  return (
    <ScrollAnimatedSection animation="fade-up" className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Takes 3 columns */}
          <ScrollAnimatedCard animation="fade-right" className="lg:col-span-3 space-y-8" hover={false}>
            <div className="space-y-6">
              <div className="inline-block bg-[#30b6d0]/20 text-[#30b6d0] px-4 py-2 rounded-full text-sm font-semibold">
                Smart Automation
              </div>
              
              <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-white leading-tight">
                <span style={{ textShadow: '0 4px 20px rgba(48, 182, 208, 0.3), 0 2px 10px rgba(0,0,0,0.8)' }}>
                  Intelligent Workflow
                </span>
                <br />
                <span className="text-[#30b6d0]">Automation</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-[#bfdbf7] leading-relaxed">
                Transform your business processes with AI-powered automation that learns, adapts, and optimizes your workflows for maximum efficiency.
              </p>
            </div>
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: '🔄',
                  title: 'Adaptive Learning',
                  description: 'AI that learns from your processes and continuously improves performance'
                },
                {
                  icon: '⚡',
                  title: 'Real-time Processing',
                  description: 'Instant decision making and task execution without delays'
                },
                {
                  icon: '🎯',
                  title: 'Predictive Analytics',
                  description: 'Anticipate needs and prevent issues before they occur'
                },
                {
                  icon: '🛡️',
                  title: 'Secure Operations',
                  description: 'Enterprise-grade security with full audit trails'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#bfdbf7]">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimatedCard>
          
          {/* Right Visual - Takes 2 columns */}
          <ScrollAnimatedCard animation="fade-left" delay={300} className="lg:col-span-2 relative" hover={false}>
            <div className="relative">
              
              {/* Main Dashboard Mock */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#30b6d0] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#40c6e0] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#30b6d0] rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">Automation Dashboard</div>
                </div>
                
                <div className="space-y-4">
                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#30b6d0]/20 rounded-lg p-4">
                      <div className="text-[#30b6d0] text-2xl font-bold">98%</div>
                      <div className="text-white text-sm">Success Rate</div>
                    </div>
                    <div className="bg-[#40c6e0]/20 rounded-lg p-4">
                      <div className="text-[#40c6e0] text-2xl font-bold">24/7</div>
                      <div className="text-white text-sm">Uptime</div>
                    </div>
                  </div>
                  
                  {/* Process Flow */}
                  <div className="space-y-3">
                    <div className="text-white text-sm font-medium">Active Workflows</div>
                    {[
                      { name: 'Data Processing', progress: 85, status: 'Running' },
                      { name: 'Customer Onboarding', progress: 92, status: 'Complete' },
                      { name: 'Report Generation', progress: 67, status: 'Processing' }
                    ].map((workflow, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white text-sm">{workflow.name}</span>
                          <span className="text-[#30b6d0] text-xs">{workflow.status}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-[#30b6d0] h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${workflow.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#30b6d0]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#40c6e0]/40 rounded-full animate-pulse delay-1000"></div>
              
              {/* Notification Cards */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-white/20 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-[#30b6d0] rounded-full"></div>
                    <span className="text-gray-800 text-xs font-medium">Task Complete</span>
                  </div>
                  <p className="text-gray-600 text-xs">Invoice processed successfully</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-white/20 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-[#40c6e0] rounded-full"></div>
                    <span className="text-gray-800 text-xs font-medium">AI Learning</span>
                  </div>
                  <p className="text-gray-600 text-xs">Pattern recognition improved</p>
                </div>
              </div>
            </div>
          </ScrollAnimatedCard>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
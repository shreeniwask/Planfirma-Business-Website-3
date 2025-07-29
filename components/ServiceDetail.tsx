import { useState, useEffect } from 'react';
import type { Page } from '../App';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FileText, Repeat, BarChart2 } from 'lucide-react';

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

interface ServiceDetailProps {
  service: ServiceData;
  onNavigate: (page: Page, serviceId?: string) => void;
  onBack: () => void;
  servicesData: ServiceData[];
  onNavigateToService: (serviceId: string) => void;
}

export default function ServiceDetail({ service, onNavigate, servicesData, onNavigateToService }: ServiceDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'investment'>('overview');
  const [animatedStats, setAnimatedStats] = useState({ efficiency: 0, cost: 0, time: 0, satisfaction: 0 });

  // Wrapper for Header/NavBar to match their expected signature
  const handleNavigateSimple = (page: Page) => onNavigate(page);

  // Service-specific configurations using Planfirma brand colors
  const serviceConfigs: { [key: string]: any } = {
    'ai-machine-learning': {
      icon: '🤖',
      color: 'var(--brand-500, #1f7a8c)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 85, cost: 60, time: 70, satisfaction: 92 },
      processSteps: [
        { title: 'Data Assessment', description: 'Analyze your existing data and infrastructure', duration: '1-2 weeks' },
        { title: 'Model Development', description: 'Create and train custom AI models', duration: '4-6 weeks' },
        { title: 'Integration & Testing', description: 'Integrate models into your systems', duration: '2-3 weeks' },
        { title: 'Deployment & Monitoring', description: 'Launch and continuously optimize', duration: 'Ongoing' }
      ],
      investment: { setup: '$25,000 - $75,000', monthly: '$2,000 - $8,000', roi: '200-400%' }
    },
    'cybersecurity': {
      icon: '🔒',
      color: 'var(--brand-700, #1a6b7a)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 90, cost: 50, time: 80, satisfaction: 95 },
      processSteps: [
        { title: 'Security Audit', description: 'Comprehensive security assessment', duration: '1-2 weeks' },
        { title: 'Vulnerability Analysis', description: 'Identify and prioritize security gaps', duration: '1-2 weeks' },
        { title: 'Implementation', description: 'Deploy security measures and controls', duration: '3-6 weeks' },
        { title: 'Monitoring & Response', description: '24/7 security monitoring', duration: 'Ongoing' }
      ],
      investment: { setup: '$15,000 - $50,000', monthly: '$3,000 - $12,000', roi: '300-500%' }
    },
    'cloud-computing': {
      icon: '☁️',
      color: 'var(--brand-500, #30b6d0)',
      lightBg: 'var(--background, #f0fdff)',
      stats: { efficiency: 88, cost: 70, time: 85, satisfaction: 90 },
      processSteps: [
        { title: 'Cloud Strategy', description: 'Design optimal cloud architecture', duration: '1-2 weeks' },
        { title: 'Migration Planning', description: 'Plan seamless data and system migration', duration: '2-3 weeks' },
        { title: 'Implementation', description: 'Execute migration and setup', duration: '4-8 weeks' },
        { title: 'Optimization', description: 'Ongoing performance tuning', duration: 'Ongoing' }
      ],
      investment: { setup: '$20,000 - $60,000', monthly: '$1,500 - $6,000', roi: '150-300%' }
    },
    'devsecops': {
      icon: '🔧',
      color: 'var(--brand-500, #1f7a8c)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 92, cost: 55, time: 90, satisfaction: 88 },
      processSteps: [
        { title: 'Current State Analysis', description: 'Assess existing development processes', duration: '1-2 weeks' },
        { title: 'Pipeline Design', description: 'Design secure CI/CD pipelines', duration: '2-3 weeks' },
        { title: 'Tool Integration', description: 'Implement DevSecOps tools', duration: '3-5 weeks' },
        { title: 'Training & Adoption', description: 'Team training and process adoption', duration: '2-4 weeks' }
      ],
      investment: { setup: '$18,000 - $45,000', monthly: '$2,500 - $7,000', roi: '180-350%' }
    },
    'business-intelligence': {
      icon: '📊',
      color: 'var(--brand-600, #2a8a95)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 87, cost: 65, time: 75, satisfaction: 91 },
      processSteps: [
        { title: 'Data Discovery', description: 'Identify and catalog data sources', duration: '1-2 weeks' },
        { title: 'Dashboard Design', description: 'Create custom analytics dashboards', duration: '3-4 weeks' },
        { title: 'Integration & Testing', description: 'Connect systems and test reports', duration: '2-3 weeks' },
        { title: 'Training & Rollout', description: 'User training and system deployment', duration: '1-2 weeks' }
      ],
      investment: { setup: '$22,000 - $55,000', monthly: '$1,800 - $5,500', roi: '220-380%' }
    },
    'mobile-app-development': {
      icon: '📱',
      color: 'var(--brand-400, #40c6e0)',
      lightBg: 'var(--background, #f0fdff)',
      stats: { efficiency: 89, cost: 60, time: 88, satisfaction: 93 },
      processSteps: [
        { title: 'Design & Prototyping', description: 'Create user interface and experience', duration: '2-3 weeks' },
        { title: 'Development', description: 'Build native or cross-platform app', duration: '6-12 weeks' },
        { title: 'Testing & QA', description: 'Comprehensive testing across devices', duration: '2-3 weeks' },
        { title: 'Launch & Support', description: 'App store deployment and maintenance', duration: 'Ongoing' }
      ],
      investment: { setup: '$30,000 - $80,000', monthly: '$2,000 - $6,000', roi: '250-450%' }
    },
    'product-customization': {
      icon: '⚙️',
      color: 'var(--brand-700, #1a6b7a)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 86, cost: 58, time: 82, satisfaction: 89 },
      processSteps: [
        { title: 'Requirements Analysis', description: 'Understand business workflows and needs', duration: '1-2 weeks' },
        { title: 'Platform Assessment', description: 'Evaluate existing system capabilities', duration: '1-2 weeks' },
        { title: 'Customization Development', description: 'Build tailored features and integrations', duration: '4-8 weeks' },
        { title: 'Testing & Deployment', description: 'Quality assurance and go-live support', duration: '2-3 weeks' }
      ],
      investment: { setup: '$15,000 - $45,000', monthly: '$1,200 - $4,500', roi: '180-320%' }
    },
    'web-custom-app-development': {
      icon: '💻',
      color: 'var(--brand-500, #1f7a8c)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 84, cost: 62, time: 86, satisfaction: 87 },
      processSteps: [
        { title: 'Discovery & Planning', description: 'Define requirements and technical architecture', duration: '2-3 weeks' },
        { title: 'UI/UX Design', description: 'Create user interface and experience design', duration: '3-4 weeks' },
        { title: 'Development & Integration', description: 'Build application with system integrations', duration: '8-16 weeks' },
        { title: 'Testing & Launch', description: 'Quality assurance and production deployment', duration: '2-4 weeks' }
      ],
      investment: { setup: '$25,000 - $75,000', monthly: '$2,500 - $8,000', roi: '200-380%' }
    },
    'new-product-development': {
      icon: '🚀',
      color: 'var(--brand-500, #30b6d0)',
      lightBg: 'var(--background, #f0fdff)',
      stats: { efficiency: 91, cost: 68, time: 78, satisfaction: 94 },
      processSteps: [
        { title: 'Ideation & Validation', description: 'Market research and concept validation', duration: '2-4 weeks' },
        { title: 'MVP Development', description: 'Build minimum viable product', duration: '8-12 weeks' },
        { title: 'User Testing & Iteration', description: 'Gather feedback and refine product', duration: '4-6 weeks' },
        { title: 'Launch & Scale', description: 'Product launch and growth optimization', duration: 'Ongoing' }
      ],
      investment: { setup: '$35,000 - $100,000', monthly: '$3,000 - $10,000', roi: '250-500%' }
    },
    'ui-ux-design': {
      icon: '🎨',
      color: 'var(--brand-300, #a8d5ba)',
      lightBg: 'var(--background, #f0fdf4)',
      stats: { efficiency: 88, cost: 45, time: 85, satisfaction: 96 },
      processSteps: [
        { title: 'User Research', description: 'Understand user needs and behaviors', duration: '2-3 weeks' },
        { title: 'Design Systems', description: 'Create consistent design patterns', duration: '3-4 weeks' },
        { title: 'Prototyping & Testing', description: 'Build and test interactive prototypes', duration: '3-5 weeks' },
        { title: 'Implementation Support', description: 'Guide development and ensure quality', duration: '2-4 weeks' }
      ],
      investment: { setup: '$20,000 - $60,000', monthly: '$1,500 - $5,000', roi: '300-600%' }
    },
    'robotic-process-automation': {
      icon: '🤖',
      color: 'var(--brand-600, #2a8a95)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 93, cost: 72, time: 89, satisfaction: 90 },
      processSteps: [
        { title: 'Process Analysis', description: 'Identify automation opportunities', duration: '1-2 weeks' },
        { title: 'Bot Development', description: 'Create and configure automation bots', duration: '3-6 weeks' },
        { title: 'Testing & Optimization', description: 'Test bots and optimize performance', duration: '2-3 weeks' },
        { title: 'Deployment & Monitoring', description: 'Deploy bots and monitor operations', duration: 'Ongoing' }
      ],
      investment: { setup: '$18,000 - $50,000', monthly: '$2,000 - $6,000', roi: '400-800%' }
    },
    're-engineering-optimization': {
      icon: '🔄',
      color: 'var(--brand-700, #1a6b7a)',
      lightBg: 'var(--background, #f0f9ff)',
      stats: { efficiency: 87, cost: 65, time: 83, satisfaction: 88 },
      processSteps: [
        { title: 'System Assessment', description: 'Evaluate current system performance', duration: '2-3 weeks' },
        { title: 'Architecture Design', description: 'Plan modernized system architecture', duration: '3-4 weeks' },
        { title: 'Migration & Modernization', description: 'Execute system transformation', duration: '8-16 weeks' },
        { title: 'Optimization & Tuning', description: 'Performance optimization and monitoring', duration: 'Ongoing' }
      ],
      investment: { setup: '$30,000 - $80,000', monthly: '$2,500 - $7,500', roi: '180-350%' }
    }
  };

  // Get current service config or use defaults
  const currentConfig = serviceConfigs[service.id] || {
    icon: '⚡',
    color: 'var(--brand-500, #1f7a8c)',
    lightBg: 'var(--background, #f0f9ff)',
    stats: { efficiency: 85, cost: 60, time: 75, satisfaction: 90 },
    processSteps: [
      { title: 'Discovery', description: 'Understand your requirements', duration: '1-2 weeks' },
      { title: 'Planning', description: 'Create detailed implementation plan', duration: '1-2 weeks' },
      { title: 'Implementation', description: 'Execute the solution', duration: '4-8 weeks' },
      { title: 'Support', description: 'Ongoing maintenance and optimization', duration: 'Ongoing' }
    ],
    investment: { setup: '$20,000 - $60,000', monthly: '$2,000 - $8,000', roi: '200-400%' }
  };

  // Animate stats on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(currentConfig.stats);
    }, 500);
    return () => clearTimeout(timer);
  }, [service.id]);

  // Get current service index and calculate previous/next
  const currentIndex = servicesData.findIndex(s => s.id === service.id);
  const previousService = currentIndex > 0 ? servicesData[currentIndex - 1] : servicesData[servicesData.length - 1];
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : servicesData[0];

  const StatCard = ({ label, value, suffix = '%', delay = 0 }: { label: string; value: number; suffix?: string; delay?: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        const increment = value / 50;
        const interval = setInterval(() => {
          setCurrentValue(prev => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return Math.min(prev + increment, value);
          });
        }, 30);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }, [value, delay]);

    return (
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900" style={{ color: currentConfig.color }}>
            {Math.round(currentValue)}{suffix}
          </div>
          <div className="text-sm lg:text-base text-gray-600 font-medium">{label}</div>
        </div>
        <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${(currentValue / (suffix === '%' ? 100 : value)) * 100}%`,
              backgroundColor: currentConfig.color
            }}
          ></div>
        </div>
      </div>
    );
  };

  const ProcessStep = ({ step, index, isLast }: { step: any; index: number; isLast: boolean }) => (
    <div className="relative">
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            style={{ backgroundColor: currentConfig.color }}
          >
            {index + 1}
          </div>
          {!isLast && (
            <div className="w-0.5 h-16 bg-gray-300 mt-4"></div>
          )}
        </div>
        <div className="flex-1 pb-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4" style={{ borderLeftColor: currentConfig.color }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg lg:text-xl font-bold text-gray-800">{step.title}</h3>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                {step.duration}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ feature }: { feature: string; index: number }) => (
    <div className="group relative">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl"
            style={{ backgroundColor: currentConfig.color }}
          >
            ✓
          </div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
            {feature}
          </h3>
        </div>
        <div className="h-1 bg-gray-200 group-hover:bg-gray-300 transition-all duration-300"></div>
      </div>
    </div>
  );

  const TechBadge = ({ tech, index }: { tech: string; index: number }) => (
    <div 
      className="group relative px-6 py-3 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: currentConfig.color }}
        ></div>
        <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );

  const NavigationButton = ({ 
    direction, 
    targetService, 
    onClick 
  }: { 
    direction: 'previous' | 'next'; 
    targetService: ServiceData;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
    >
      {direction === 'previous' && (
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-full group-hover:scale-110 transition-transform"
          style={{ backgroundColor: currentConfig.color }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      )}
      
      <div className={`flex-1 ${direction === 'previous' ? 'text-left' : 'text-right'}`}>
        <div className="text-sm text-gray-500 mb-1 uppercase tracking-wide font-medium">
          {direction === 'previous' ? 'Previous Service' : 'Next Service'}
        </div>
        <div className="font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors">
          {targetService.title}
        </div>
      </div>
      
      {direction === 'next' && (
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-full group-hover:scale-110 transition-transform"
          style={{ backgroundColor: currentConfig.color }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </button>
  );

  // Debug: Check if service data is available
  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button 
            onClick={() => onNavigate('services')}
            className="bg-[#1f7a8c] text-white px-6 py-3 rounded-lg hover:bg-[#1a6b7a] transition-colors"
          >
            View All Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigateSimple} currentPage="service-detail" />
      
      {/* Navigation Bar with Back Button and Breadcrumbs */}
      <NavigationBar 
        onNavigate={handleNavigateSimple} 
        currentPage="service-detail" 
        serviceName={service.title}
      />
      
      {/* Enhanced Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: currentConfig.lightBg }}></div>
        <div className="relative w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Service Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div 
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center text-4xl lg:text-5xl shadow-2xl transform hover:scale-105 transition-transform"
                  style={{ backgroundColor: currentConfig.color }}
                >
                  {currentConfig.icon}
                </div>
                <div>
                  <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                  <div 
                    className="h-1 w-32 rounded-full mt-4"
                    style={{ backgroundColor: currentConfig.color }}
                  ></div>
                </div>
              </div>
              
              <div className="text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 leading-relaxed">
                <p>{service.fullDescription}</p>
              </div>
              
              {/* Key Metrics Preview */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Efficiency Gain" value={animatedStats.efficiency} delay={200} />
                <StatCard label="Cost Reduction" value={animatedStats.cost} delay={400} />
                <StatCard label="Time Savings" value={animatedStats.time} delay={600} />
                <StatCard label="Client Satisfaction" value={animatedStats.satisfaction} delay={800} />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6">
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="bg-[#2D993D] text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 text-[18px] flex-1 sm:flex-none shadow-lg"
                  style={{ backgroundColor: 'hsl(var(--brand-500))' }}
                >
                  Get Started Today
                </button>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="bg-white border-2 border-[var(--primary,#2D993D)] text-[var(--foreground,#111)] px-10 py-4 rounded-xl font-bold hover:border-[var(--primary,#2D993D)] hover:shadow-lg transition-all transform hover:scale-105 text-[18px] flex-1 sm:flex-none"
                >
                  Explore All Services
                </button>
              </div>
            </div>
            
            {/* Enhanced Service Visual */}
            <div className="relative">
              <div className="relative group">
                <div 
                  className="absolute inset-0 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"
                  style={{ backgroundColor: currentConfig.color }}
                ></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                          style={{ backgroundColor: currentConfig.color }}
                        >
                          ✓
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Enterprise Ready</div>
                          <div className="text-sm text-gray-600">Trusted by 100+ companies worldwide</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="relative w-full">
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
          
          {/* Enhanced Tab Navigation with Radio Button Style */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-50 rounded-2xl p-2 shadow-inner border border-gray-200">
              <div className="flex gap-4">
                {[
                  { id: 'overview', label: 'Service Overview', icon: <FileText className="w-5 h-5" /> },
                  { id: 'process', label: 'Implementation Process', icon: <Repeat className="w-5 h-5" /> },
                  { id: 'investment', label: 'Investment & ROI', icon: <BarChart2 className="w-5 h-5" /> }
                ].map((tab) => (
                  <label key={tab.id} className="relative cursor-pointer group">
                    <input
                      type="radio"
                      name="service-tabs"
                      value={tab.id}
                      checked={activeTab === tab.id}
                      onChange={() => setActiveTab(tab.id as any)}
                      className="sr-only"
                    />
                    <div
                      className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform relative overflow-hidden ${
                        activeTab === tab.id
                          ? 'text-white shadow-lg scale-105'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-102'
                      }`}
                      style={activeTab === tab.id ? {
                        backgroundColor: 'hsl(var(--brand-500))',
                        boxShadow: '0 8px 25px -5px hsl(var(--brand-500), 0.25)'
                      } : {}}
                    >
                      {/* Radio indicator */}
                      <div className="relative flex items-center justify-center">
                        <div 
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                            activeTab === tab.id 
                              ? 'border-white bg-white' 
                              : 'border-gray-300 group-hover:border-gray-400'
                          }`}
                          style={activeTab === tab.id ? { borderColor: 'hsl(var(--brand-500))' } : {}}
                        >
                          {activeTab === tab.id && (
                            <div 
                              className="w-2.5 h-2.5 rounded-full m-auto transition-all duration-300"
                              style={{ backgroundColor: 'hsl(var(--brand-500))' }}
                            ></div>
                          )}
                        </div>
                      </div>
                      
                      {/* Icon and Label */}
                      <span className="text-lg flex items-center">{tab.icon}</span>
                      <span className="hidden md:inline text-sm lg:text-base font-medium">
                        {tab.label}
                      </span>
                      
                      {/* Active state background effect */}
                      {activeTab === tab.id && (
                        <div 
                          className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
                          style={{ 
                            background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`
                          }}
                        ></div>
                      )}
                    </div>
                    
                    {/* Selection indicator line */}
                    <div 
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                        activeTab === tab.id ? 'w-8 opacity-100' : 'w-0 opacity-0'
                      }`}
                      style={{ backgroundColor: activeTab === tab.id ? 'hsl(var(--brand-500))' : 'transparent' }}
                    ></div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                
                {/* Features Section */}
                <div>
                  <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-8">
                    Key Features
                  </h2>
                  <div className="space-y-6">
                    {service.features && service.features.length > 0 ? (
                      service.features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                      ))
                    ) : (
                      <p className="text-gray-600">No features available for this service.</p>
                    )}
                  </div>
                </div>
                
                {/* Benefits Infographic */}
                <div>
                  <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-8">
                    Business Benefits
                  </h2>
                  <div className="space-y-4">
                    {service.benefits && service.benefits.length > 0 ? (
                      service.benefits.map((benefit, index) => (
                        <div key={index} className="group relative">
                          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200">
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                              style={{ backgroundColor: currentConfig.color }}
                            >
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {benefit}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">No benefits available for this service.</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-6">
                    Implementation Process
                  </h2>
                  <p className="text-[18px] md:text-[20px] text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Our proven methodology ensures smooth implementation and maximum value delivery
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  {currentConfig.processSteps.map((step: any, index: number) => (
                    <ProcessStep 
                      key={index}
                      step={step}
                      index={index}
                      isLast={index === currentConfig.processSteps.length - 1}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'investment' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-6">
                    Investment & ROI
                  </h2>
                  <p className="text-[18px] md:text-[20px] text-gray-700 leading-relaxed">
                    Transparent pricing with measurable returns on your investment
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Setup Investment</h3>
                    <div className="text-2xl font-bold mb-2" style={{ color: currentConfig.color }}>
                      {currentConfig.investment.setup}
                    </div>
                    <p className="text-gray-700">One-time implementation cost</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Support</h3>
                    <div className="text-2xl font-bold mb-2" style={{ color: currentConfig.color }}>
                      {currentConfig.investment.monthly}
                    </div>
                    <p className="text-gray-600">Ongoing maintenance & support</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Expected ROI</h3>
                    <div className="text-2xl font-bold mb-2" style={{ color: currentConfig.color }}>
                      {currentConfig.investment.roi}
                    </div>
                    <p className="text-gray-600">Within 12-18 months</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Calculate Your ROI?</h3>
                  <p className="text-gray-600 mb-6">Get a personalized assessment based on your specific requirements</p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                    style={{ backgroundColor: currentConfig.color }}
                  >
                    Request ROI Analysis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-[18px] md:text-[20px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We use cutting-edge technologies and industry best practices to deliver exceptional results
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies && service.technologies.length > 0 ? (
              service.technologies.map((tech, index) => (
                <TechBadge key={index} tech={tech} index={index} />
              ))
            ) : (
              <p className="text-gray-600">No technologies listed for this service.</p>
            )}
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NavigationButton 
              direction="previous"
              targetService={previousService}
              onClick={() => onNavigateToService(previousService.id)}
            />
            <NavigationButton 
              direction="next"
              targetService={nextService}
              onClick={() => onNavigateToService(nextService.id)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--primary, #2D993D)' }}>
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            {`Let's discuss how ${service.title.toLowerCase()} can drive your success and growth`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 text-[18px]"
              style={{ color: 'var(--primary, #2D993D)' }}
            >
              Start Your Project
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all transform hover:scale-105 text-[18px]"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} theme="dark" />
    </div>
  );
}
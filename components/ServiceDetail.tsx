import { useState, useEffect } from 'react';
import type { Page } from '../App';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './BackButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FileText, Repeat, BarChart2, Shield, Zap, Users, Settings, Database, Cloud, Lock, Smartphone, Globe, TrendingUp, DollarSign, Clock, Award, Target, Lightbulb, BarChart3, CheckCircle, Cpu, Wrench, Palette } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'process' | 'investment'>('overview');
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
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
            {Math.round(currentValue)}{suffix}
          </div>
          <div className="text-sm lg:text-base text-gray-800 font-medium">{label}</div>
        </div>
        <div className="mt-4 bg-gray-300 rounded-full h-2 overflow-hidden">
          <div 
            className="h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${(currentValue / (suffix === '%' ? 100 : value)) * 100}%`,
              backgroundColor: '#2D993D' 
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
            style={{ backgroundColor: '#2D993D' }}
          >
            {index + 1}
          </div>
          {!isLast && (
            <div className="w-0.5 h-16 bg-gray-300 mt-4"></div>
          )}
        </div>
        <div className="flex-1 pb-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4" style={{ borderLeftColor: '#2D993D' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">{step.title}</h3>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">
                {step.duration}
              </span>
            </div>
            <p className="text-gray-800 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Function to get appropriate icon for features with no duplicates
  const getFeatureIcon = (feature: string, index: number, usedIcons: Set<any>) => {
    const iconMap = [
      Shield, Zap, Users, Settings, Database, Cloud, Lock, Smartphone, 
      Globe, Cpu, Wrench, Palette, Target, Award, BarChart3
    ];
    
    // Try to match feature text to appropriate icon
    const featureLower = feature.toLowerCase();
    let selectedIcon;
    
    if (featureLower.includes('security') || featureLower.includes('secure')) selectedIcon = Shield;
    else if (featureLower.includes('performance') || featureLower.includes('fast') || featureLower.includes('speed')) selectedIcon = Zap;
    else if (featureLower.includes('user') || featureLower.includes('team') || featureLower.includes('collaboration')) selectedIcon = Users;
    else if (featureLower.includes('config') || featureLower.includes('setting') || featureLower.includes('management')) selectedIcon = Settings;
    else if (featureLower.includes('data') || featureLower.includes('database') || featureLower.includes('storage')) selectedIcon = Database;
    else if (featureLower.includes('cloud') || featureLower.includes('remote')) selectedIcon = Cloud;
    else if (featureLower.includes('mobile') || featureLower.includes('app')) selectedIcon = Smartphone;
    else if (featureLower.includes('web') || featureLower.includes('global') || featureLower.includes('worldwide')) selectedIcon = Globe;
    else if (featureLower.includes('process') || featureLower.includes('cpu') || featureLower.includes('computing')) selectedIcon = Cpu;
    else if (featureLower.includes('tool') || featureLower.includes('integration')) selectedIcon = Wrench;
    else if (featureLower.includes('design') || featureLower.includes('ui') || featureLower.includes('interface')) selectedIcon = Palette;
    else if (featureLower.includes('analytics') || featureLower.includes('report') || featureLower.includes('insight')) selectedIcon = BarChart3;
    
    // If matched icon is already used, find next available
    if (selectedIcon && !usedIcons.has(selectedIcon)) {
      usedIcons.add(selectedIcon);
      return selectedIcon;
    }
    
    // Find first unused icon from the map
    for (const icon of iconMap) {
      if (!usedIcons.has(icon)) {
        usedIcons.add(icon);
        return icon;
      }
    }
    
    // Fallback if all icons are used (shouldn't happen with 15 icons)
    return iconMap[index % iconMap.length];
  };

  // Generate feature description based on the feature text
  const getFeatureDescription = (feature: string) => {
    const featureLower = feature.toLowerCase();
    
    if (featureLower.includes('security') || featureLower.includes('secure')) 
      return "Advanced protection measures to safeguard your data and systems";
    if (featureLower.includes('performance') || featureLower.includes('fast') || featureLower.includes('speed')) 
      return "Optimized for high-speed operations and maximum efficiency";
    if (featureLower.includes('user') || featureLower.includes('team') || featureLower.includes('collaboration')) 
      return "Designed to enhance team productivity and user experience";
    if (featureLower.includes('config') || featureLower.includes('setting') || featureLower.includes('management')) 
      return "Flexible configuration options to match your specific needs";
    if (featureLower.includes('data') || featureLower.includes('database') || featureLower.includes('storage')) 
      return "Robust data handling with secure storage and easy access";
    if (featureLower.includes('cloud') || featureLower.includes('remote')) 
      return "Cloud-based solution for seamless remote access and scalability";
    if (featureLower.includes('mobile') || featureLower.includes('app')) 
      return "Mobile-optimized interface for productivity on the go";
    if (featureLower.includes('web') || featureLower.includes('global') || featureLower.includes('worldwide')) 
      return "Global accessibility with web-based deployment";
    if (featureLower.includes('analytics') || featureLower.includes('report') || featureLower.includes('insight')) 
      return "Comprehensive analytics and reporting for data-driven decisions";
    if (featureLower.includes('design') || featureLower.includes('ui') || featureLower.includes('interface')) 
      return "Intuitive design focused on user experience and usability";
    if (featureLower.includes('automation') || featureLower.includes('auto')) 
      return "Automated processes to reduce manual work and improve efficiency";
    if (featureLower.includes('integration') || featureLower.includes('connect')) 
      return "Seamless integration with your existing systems and workflows";
    
    return "Enhanced functionality designed to improve your business operations";
  };

  const FeatureCard = ({ feature, index, usedIcons }: { feature: string; index: number; usedIcons: Set<any> }) => {
    const IconComponent = getFeatureIcon(feature, index, usedIcons);
    const description = getFeatureDescription(feature);
    
    return (
      <div className="group relative h-full">
        <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 h-full flex flex-col text-center">
          <div 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform"
            style={{ backgroundColor: '#2D993D' }}
          >
            <IconComponent size={20} className="text-white md:w-8 md:h-8" />
          </div>
          <h3 className="text-sm md:text-lg font-bold text-gray-900 leading-tight mb-2 md:mb-3 group-hover:text-black transition-colors">
            {feature}
          </h3>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 group-hover:text-gray-800 transition-colors">
            {description}
          </p>
      </div>
    </div>
  );
  };

  const TechBadge = ({ tech, index }: { tech: string; index: number }) => (
    <div 
      className="group relative px-6 py-3 bg-gray-50 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: '#2D993D' }}
        ></div>
        <span className="font-semibold text-gray-900 group-hover:text-black transition-colors">
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
      className="group flex items-center gap-2 md:gap-4 p-3 md:p-6 bg-gray-50 rounded-lg md:rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
    >
      {direction === 'previous' && (
        <div 
          className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full group-hover:scale-110 transition-transform"
          style={{ backgroundColor: '#2D993D' }}
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      )}
      
      <div className={`flex-1 ${direction === 'previous' ? 'text-left' : 'text-right'}`}>
        <div className="text-xs md:text-sm text-gray-700 mb-1 uppercase tracking-wide font-medium">
          {direction === 'previous' ? 'Previous' : 'Next'}
          <span className="hidden sm:inline"> Service</span>
        </div>
        <div className="font-bold text-sm md:text-lg text-gray-900 group-hover:text-black transition-colors leading-tight">
          {targetService.title}
        </div>
      </div>
      
      {direction === 'next' && (
        <div 
          className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full group-hover:scale-110 transition-transform"
          style={{ backgroundColor: '#2D993D' }}
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="relative w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-24">
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
              
              <div className="text-[18px] md:text-[20px] lg:text-[22px] text-gray-900 leading-relaxed">
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
                  className="bg-gray-100 border-2 border-gray-400 text-gray-900 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 hover:border-gray-500 hover:shadow-lg transition-all transform hover:scale-105 text-[18px] flex-1 sm:flex-none"
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
                                            <div className="bg-gray-100/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                          style={{ backgroundColor: '#2D993D' }}
                        >
                          ✓
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Enterprise Ready</div>
                          <div className="text-sm text-gray-800">Trusted by 100+ companies worldwide</div>
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
        <div className="w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20">
          
          {/* Enhanced Tab Navigation with Radio Button Style */}
          <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
            <div className="bg-gray-50 rounded-2xl p-2 shadow-inner border border-gray-200">
              <div className="flex gap-1 md:gap-2 lg:gap-4">
                {[
                  { id: 'overview', label: 'Overview', fullLabel: 'Service Overview', icon: <FileText className="w-4 h-4 md:w-5 md:h-5" /> },
                  { id: 'benefits', label: 'Benefits', fullLabel: 'Business Benefits', icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" /> },
                  { id: 'process', label: 'Process', fullLabel: 'Implementation Process', icon: <Repeat className="w-4 h-4 md:w-5 md:h-5" /> },
                  { id: 'investment', label: 'ROI', fullLabel: 'Investment & ROI', icon: <BarChart2 className="w-4 h-4 md:w-5 md:h-5" /> }
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
                      className={`flex items-center gap-2 md:gap-3 px-2 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 rounded-xl font-semibold transition-all duration-300 transform relative overflow-hidden ${
                        activeTab === tab.id
                          ? 'text-white shadow-lg scale-105'
                          : 'text-gray-900 hover:text-black hover:bg-gray-200 hover:scale-102'
                      }`}
                      style={activeTab === tab.id ? {
                        backgroundColor: '#2D993D',
                        boxShadow: '0 8px 25px -5px rgba(45, 153, 61, 0.25)'
                      } : {}}
                    >
                      {/* Radio indicator */}
                      <div className="relative flex items-center justify-center">
                        <div 
                          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                            activeTab === tab.id 
                              ? 'border-white bg-white' 
                              : 'border-gray-400 group-hover:border-gray-500'
                          }`}
                          style={activeTab === tab.id ? { borderColor: '#2D993D' } : {}}
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
                      <span className="text-base md:text-lg flex items-center">{tab.icon}</span>
                      {/* Show label only for active tab on mobile, always show on desktop */}
                      <span className={`text-xs sm:text-sm md:text-base font-medium transition-all duration-200 ${
                        activeTab === tab.id ? 'block' : 'hidden md:block'
                      }`}>
                        <span className="md:hidden">{tab.label}</span>
                        <span className="hidden md:inline">{tab.fullLabel}</span>
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
          <div className="min-h-[400px] md:min-h-[500px]">
            {activeTab === 'overview' && (
                <div>
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-3 md:mb-4">
                    Key Features
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Essential capabilities designed to transform your business operations
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                    {service.features && service.features.length > 0 ? (
                    (() => {
                      const featureUsedIcons = new Set();
                      return service.features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} usedIcons={featureUsedIcons} />
                      ));
                    })()
                  ) : (
                    <p className="text-gray-600 col-span-full text-center">No features available for this service.</p>
                    )}
                  </div>
                </div>
            )}
                
            {activeTab === 'benefits' && (
                <div>
                <div className="text-center mb-6 md:mb-8 lg:mb-10">
                  <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-3 md:mb-4">
                    Business Benefits
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Measurable advantages and strategic value our solution brings to your business
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {service.benefits && service.benefits.length > 0 ? (
                    (() => {
                      const benefitUsedIcons = new Set();
                      
                      // Function to get appropriate icon for benefits with no duplicates
                      const getBenefitIcon = (benefit: string, index: number, usedIcons: Set<any>) => {
                        const benefitLower = benefit.toLowerCase();
                        const iconMap = [TrendingUp, DollarSign, Clock, Award, Target, Lightbulb, BarChart3, CheckCircle, Shield, Zap];
                        let selectedIcon;
                        
                        if (benefitLower.includes('growth') || benefitLower.includes('increase') || benefitLower.includes('improve')) selectedIcon = TrendingUp;
                        else if (benefitLower.includes('cost') || benefitLower.includes('save') || benefitLower.includes('reduce') || benefitLower.includes('budget')) selectedIcon = DollarSign;
                        else if (benefitLower.includes('time') || benefitLower.includes('faster') || benefitLower.includes('quick') || benefitLower.includes('speed')) selectedIcon = Clock;
                        else if (benefitLower.includes('quality') || benefitLower.includes('excellence') || benefitLower.includes('award') || benefitLower.includes('best')) selectedIcon = Award;
                        else if (benefitLower.includes('target') || benefitLower.includes('goal') || benefitLower.includes('objective') || benefitLower.includes('focus')) selectedIcon = Target;
                        else if (benefitLower.includes('innovation') || benefitLower.includes('creative') || benefitLower.includes('idea') || benefitLower.includes('smart')) selectedIcon = Lightbulb;
                        else if (benefitLower.includes('analytics') || benefitLower.includes('data') || benefitLower.includes('insight') || benefitLower.includes('report')) selectedIcon = BarChart3;
                        else if (benefitLower.includes('success') || benefitLower.includes('complete') || benefitLower.includes('achieve')) selectedIcon = CheckCircle;
                        else if (benefitLower.includes('security') || benefitLower.includes('protect') || benefitLower.includes('safe')) selectedIcon = Shield;
                        else if (benefitLower.includes('efficiency') || benefitLower.includes('performance') || benefitLower.includes('optimize')) selectedIcon = Zap;
                        
                        // If matched icon is already used, find next available
                        if (selectedIcon && !usedIcons.has(selectedIcon)) {
                          usedIcons.add(selectedIcon);
                          return selectedIcon;
                        }
                        
                        // Find first unused icon from the map
                        for (const icon of iconMap) {
                          if (!usedIcons.has(icon)) {
                            usedIcons.add(icon);
                            return icon;
                          }
                        }
                        
                        // Fallback if all icons are used
                        return iconMap[index % iconMap.length];
                      };

                      // Generate benefit description based on the benefit text
                      const getBenefitDescription = (benefit: string) => {
                        const benefitLower = benefit.toLowerCase();
                        
                        if (benefitLower.includes('growth') || benefitLower.includes('increase') || benefitLower.includes('improve')) 
                          return "Measurable improvements in key performance indicators and business outcomes";
                        if (benefitLower.includes('cost') || benefitLower.includes('save') || benefitLower.includes('reduce') || benefitLower.includes('budget')) 
                          return "Significant cost reductions through optimized processes and resource utilization";
                        if (benefitLower.includes('time') || benefitLower.includes('faster') || benefitLower.includes('quick') || benefitLower.includes('speed')) 
                          return "Accelerated workflows and reduced time-to-market for faster results";
                        if (benefitLower.includes('quality') || benefitLower.includes('excellence') || benefitLower.includes('award') || benefitLower.includes('best')) 
                          return "Enhanced quality standards and excellence in service delivery";
                        if (benefitLower.includes('target') || benefitLower.includes('goal') || benefitLower.includes('objective') || benefitLower.includes('focus')) 
                          return "Clear goal alignment and focused execution for strategic objectives";
                        if (benefitLower.includes('innovation') || benefitLower.includes('creative') || benefitLower.includes('idea') || benefitLower.includes('smart')) 
                          return "Innovative solutions that drive creative problem-solving and competitive advantage";
                        if (benefitLower.includes('analytics') || benefitLower.includes('data') || benefitLower.includes('insight') || benefitLower.includes('report')) 
                          return "Data-driven insights that enable informed decision-making and strategic planning";
                        if (benefitLower.includes('success') || benefitLower.includes('complete') || benefitLower.includes('achieve')) 
                          return "Proven track record of successful implementations and achievement of business goals";
                        if (benefitLower.includes('security') || benefitLower.includes('protect') || benefitLower.includes('safe')) 
                          return "Comprehensive security measures that protect your valuable data and assets";
                        if (benefitLower.includes('efficiency') || benefitLower.includes('performance') || benefitLower.includes('optimize')) 
                          return "Optimized performance that maximizes efficiency and productivity across operations";
                        
                        return "Strategic advantages that drive long-term business success and growth";
                      };
                      
                      return service.benefits.map((benefit, index) => {
                        const IconComponent = getBenefitIcon(benefit, index, benefitUsedIcons);
                        const description = getBenefitDescription(benefit);
                        
                        return (
                          <div key={index} className="group relative h-full">
                            <div className="bg-gray-50 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 h-full flex flex-col text-center">
                              <div 
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform"
                                style={{ backgroundColor: '#2D993D' }}
                              >
                                <IconComponent size={24} className="text-white md:w-8 md:h-8" />
                            </div>
                              <h4 className="text-sm md:text-lg font-bold text-gray-900 leading-tight mb-2 md:mb-3 group-hover:text-black transition-colors">
                                {benefit}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-700 leading-relaxed flex-1 group-hover:text-gray-800 transition-colors">
                                {description}
                              </p>
                            </div>
                          </div>
                        );
                      });
                    })()
                    ) : (
                    <p className="text-gray-600 col-span-full text-center">No benefits available for this service.</p>
                    )}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <div className="text-center mb-6 md:mb-8 lg:mb-10">
                  <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-3 md:mb-4">
                    Implementation Process
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
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
                <div className="text-center mb-6 md:mb-8 lg:mb-10">
                  <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-3 md:mb-4">
                    Investment & ROI
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Transparent pricing with measurable returns on your investment
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="bg-gray-50 rounded-2xl p-4 md:p-6 shadow-lg border border-gray-300 text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">💰</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Setup Investment</h3>
                    <div className="text-2xl font-bold mb-2 text-gray-900">
                      {currentConfig.investment.setup}
                    </div>
                    <p className="text-gray-800">One-time implementation cost</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-4 md:p-6 shadow-lg border border-gray-300 text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Monthly Support</h3>
                    <div className="text-2xl font-bold mb-2 text-gray-900">
                      {currentConfig.investment.monthly}
                    </div>
                    <p className="text-gray-800">Ongoing maintenance & support</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-4 md:p-6 shadow-lg border border-gray-300 text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">📈</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Expected ROI</h3>
                    <div className="text-2xl font-bold mb-2 text-gray-900">
                      {currentConfig.investment.roi}
                    </div>
                    <p className="text-gray-600">Within 12-18 months</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4 md:p-6 text-center">
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
          <div className="grid grid-cols-2 gap-4 md:gap-8">
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
      <section className="py-16 md:py-24 bg-[#2D993D]">
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
              className="bg-white text-[#2D993D] px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 text-[18px] btn-hover-primary"
              style={{ color: 'hsl(var(--brand-500))' }}
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
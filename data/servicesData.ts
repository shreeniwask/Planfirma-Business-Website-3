export interface ServiceData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  technologies: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Design and deploy custom AI models, predictive tools, and automation to enhance decision-making and user experiences.',
    fullDescription: 'Design and deploy custom AI models, predictive tools, and automation to enhance decision-making and user experiences. Our expertise spans natural language processing, computer vision, predictive analytics, and intelligent automation systems that transform how businesses operate and serve their customers.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
    features: ['Predictive Insights', 'Smart Automation', 'Data Intelligence', 'Continuous Learning'],
    benefits: ['Enhanced Decision Making', 'Improved User Experiences', 'Process Automation', 'Predictive Insights', 'Competitive Advantage', 'Scalable Intelligence'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Azure ML', 'OpenAI GPT']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital infrastructure with end-to-end security audits, penetration testing, and threat mitigation strategies.',
    fullDescription: 'Protect your digital infrastructure with end-to-end security audits, penetration testing, and threat mitigation strategies. Our comprehensive cybersecurity solutions safeguard your business assets, ensure regulatory compliance, and maintain business continuity against evolving cyber threats.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    features: ['Threat Detection', 'Data Protection', 'Risk Mitigation', 'Secure Access'],
    benefits: ['Enhanced Security Posture', 'Risk Mitigation', 'Regulatory Compliance', 'Business Continuity', 'Customer Trust', 'Data Protection'],
    technologies: ['SIEM Tools', 'Firewalls', 'IDS/IPS', 'Multi-factor Authentication', 'Encryption', 'Security Frameworks']
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Build scalable, cost-efficient infrastructure on AWS, Azure, or GCP with seamless migration and management.',
    fullDescription: 'Build scalable, cost-efficient infrastructure on AWS, Azure, or GCP with seamless migration and management. Our cloud experts help you leverage the full potential of cloud platforms to reduce costs, improve performance, and enhance global accessibility.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    features: ['Scalable Infrastructure', 'High Availability', 'Cost Efficiency', 'Cloud Migration'],
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Reliability', 'Global Accessibility', 'Faster Deployment', 'Better Performance'],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Integrate security into every stage of your development pipeline for safer, faster software delivery.',
    fullDescription: 'Integrate security into every stage of your development pipeline for safer, faster software delivery. Our DevSecOps approach ensures that security is built into your development process from the ground up, enabling rapid deployment without compromising safety.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
    features: ['Secure Pipelines', 'Continuous Delivery', 'Risk Reduction', 'Compliance Ready'],
    benefits: ['Faster Delivery', 'Enhanced Security', 'Reduced Risks', 'Better Collaboration', 'Cost Efficiency', 'Quality Assurance'],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'SonarQube', 'OWASP Tools']
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights through real-time dashboards and custom analytics solutions.',
    fullDescription: 'Transform raw data into actionable insights through real-time dashboards and custom analytics solutions. Our BI expertise helps organizations make data-driven decisions, optimize operations, and identify new growth opportunities through comprehensive analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    features: ['Actionable Reports', 'Real-Time Dashboards', 'Data Accuracy', 'Informed Decisions'],
    benefits: ['Data-Driven Decisions', 'Operational Insights', 'Performance Optimization', 'Growth Opportunities', 'Competitive Intelligence', 'Risk Management'],
    technologies: ['Power BI', 'Tableau', 'QlikView', 'SQL Server', 'Snowflake', 'Apache Spark']
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Deliver robust, user-friendly mobile apps across Android and iOS tailored for high performance and engagement.',
    fullDescription: 'Deliver robust, user-friendly mobile apps across Android and iOS tailored for high performance and engagement. Our mobile development team creates exceptional user experiences that drive customer engagement and business growth across all mobile platforms.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    features: ['Cross-Platform', 'Native Experience', 'Scalable Architecture', 'Smooth Performance'],
    benefits: ['Enhanced User Engagement', 'Broader Market Reach', 'Improved Customer Experience', 'Revenue Generation', 'Brand Visibility', 'Customer Loyalty'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
  },
  {
    id: 'product-customization',
    title: 'Product Customization',
    description: 'Adapt and enhance off-the-shelf platforms like Odoo or Zoho to fit your specific business workflows.',
    fullDescription: 'Adapt and enhance off-the-shelf platforms like Odoo or Zoho to fit your specific business workflows. Our customization services transform standard software solutions into tailored systems that perfectly align with your unique business requirements and processes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    features: ['Tailored Features', 'Flexible Modules', 'Seamless Integration', 'Business Alignment'],
    benefits: ['Perfect Business Fit', 'Improved Efficiency', 'Reduced Implementation Time', 'Cost Savings', 'Better User Adoption', 'Scalable Solutions'],
    technologies: ['Odoo', 'Zoho', 'Salesforce', 'SAP', 'Microsoft Dynamics', 'Custom APIs']
  },
  {
    id: 'web-custom-app-development',
    title: 'Web & Custom App Development',
    description: 'Build scalable, secure, and high-performance web applications tailored to your business needs.',
    fullDescription: 'Build scalable, secure, and high-performance web applications tailored to your business needs. Our development team creates robust web solutions that deliver exceptional user experiences while meeting your specific functional and performance requirements.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    features: ['Bespoke Solutions', 'Agile Build', 'System Integration', 'Scalable Codebase'],
    benefits: ['Business-Specific Solutions', 'Enhanced Performance', 'Improved Security', 'Better User Experience', 'Competitive Advantage', 'Future-Ready Technology'],
    technologies: ['React', 'Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'new-product-development',
    title: 'New Product Development',
    description: 'From ideation to MVP and beyond, we help bring your SaaS or enterprise software vision to life.',
    fullDescription: 'From ideation to MVP and beyond, we help bring your SaaS or enterprise software vision to life. Our comprehensive product development approach takes you from concept to market-ready solution, ensuring your product meets market demands and user expectations.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop',
    features: ['Fast Prototyping', 'Market Fit', 'Scalable MVP', 'Agile Execution'],
    benefits: ['Faster Time to Market', 'Reduced Development Risk', 'Market-Validated Products', 'Competitive Positioning', 'Revenue Generation', 'Scalable Foundation'],
    technologies: ['Agile Methodologies', 'Design Thinking', 'Lean Startup', 'Modern Tech Stacks', 'Cloud Platforms', 'Analytics Tools']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Craft intuitive, accessible, and conversion-optimized digital experiences across devices.',
    fullDescription: 'Craft intuitive, accessible, and conversion-optimized digital experiences across devices. Our design team creates user-centered interfaces that not only look beautiful but also drive user engagement, conversions, and business success.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    features: ['Intuitive Flow', 'Visual Clarity', 'User Engagement', 'Design Consistency'],
    benefits: ['Improved User Satisfaction', 'Higher Conversion Rates', 'Enhanced Accessibility', 'Better Brand Perception', 'Increased Engagement', 'Competitive Advantage'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer']
  },
  {
    id: 'robotic-process-automation',
    title: 'Robotic Process Automation',
    description: 'Automate repetitive workflows and back-office tasks to increase efficiency and reduce manual errors.',
    fullDescription: 'Automate repetitive workflows and back-office tasks to increase efficiency and reduce manual errors. Our RPA solutions streamline operations, eliminate human error, and free up valuable resources for more strategic, value-added activities.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    features: ['Workflow Automation', 'Manual Elimination', 'Speed & Accuracy', 'Cost Reduction'],
    benefits: ['Increased Efficiency', 'Reduced Manual Errors', 'Cost Savings', 'Improved Accuracy', 'Employee Productivity', 'Scalable Operations'],
    technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Microsoft Power Automate', 'Python', 'AI/ML Integration']
  },
  {
    id: 're-engineering-optimization',
    title: 'Re-Engineering (Optimization)',
    description: 'Modernize legacy systems with improved architecture, performance tuning, and updated technology stacks.',
    fullDescription: 'Modernize legacy systems with improved architecture, performance tuning, and updated technology stacks. Our re-engineering services breathe new life into outdated systems, improving performance, security, and maintainability while preserving critical business logic.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
    features: ['Legacy System Modernization', 'Architecture Improvement', 'Performance Tuning', 'Technology Stack Updates'],
    benefits: ['Improved Performance', 'Enhanced Security', 'Reduced Maintenance Costs', 'Better Scalability', 'Modern User Experience', 'Future-Proof Architecture'],
    technologies: ['Modern Frameworks', 'Cloud Platforms', 'Microservices', 'APIs', 'Database Optimization', 'Performance Tools']
  }
];
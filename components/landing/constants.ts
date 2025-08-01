// Landing page constants and data

import { Bot, Shield, Cloud, Wrench, BarChart2, Smartphone, Settings, Laptop, Rocket, Palette, RefreshCcw } from 'lucide-react';

export interface Brand {
  name: string;
  logo: string;
}

export interface TechnicalPartner {
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

export const brandsWeHelped: Brand[] = [
  {
    name: "Willis Tower Watson",
    logo: "/images/brands/willis-tower-watson-logo.svg"
  },
  {
    name: "Korn Ferry",
    logo: "/images/brands/korn-ferry-logo.jpg"
  },
  {
    name: "Spykar",
    logo: "/images/brands/spykar-logo.avif"
  },
  {
    name: "Ubqool",
    logo: "/images/brands/ubqool-logo.webp"
  },
  {
    name: "Astaguru",
    logo: "/images/brands/astaguru-logo.webp"
  },
  {
    name: "Ahli United Bank",
    logo: "/images/brands/ahli-united-bank-logo.png"
  },
  {
    name: "Ilantus",
    logo: "/images/brands/ilantus-logo.webp"
  },
  {
    name: "Investor Shoppe",
    logo: "/images/brands/investor-shoppe-logo.png"
  },
  {
    name: "Cruise Careers",
    logo: "/images/brands/cruise-careers.png"
  },
  {
    name: "Continental Belting",
    logo: "/images/brands/continental-belting-logo.webp"
  }
];

export const technicalPartners: TechnicalPartner[] = [
  {
    name: "AWS",
    logo: "/images/partners/aws-logo.png"
  },
  {
    name: "Azure",
    logo: "/images/partners/azure-logo.png"
  },
  {
    name: "Google Cloud Platform",
    logo: "/images/partners/gcp-logo.png"
  },
  {
    name: "Bitrix24",
    logo: "/images/partners/bitrix24-logo.png"
  },
  {
    name: "monday.com",
    logo: "/images/partners/monday-logo.png"
  },
  {
    name: "Acronis",
    logo: "/images/partners/Acronis-logo.png"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Planfirma's tablet-based platform streamlined training for thousands of agents, enhancing efficiency.",
    author: "Laazarus Dias",
    position: "Technology Director",
    company: "LDEA",
    avatar: "/images/testimonials/laazarus-dias.webp",
    rating: 5
  },
  {
    id: "2",
    quote: "Planfirma efficiently solves business challenges, delivering exceptional results with a tailored approach.",
    author: "Jaya Nagarmat",
    position: "Operations Manager",
    company: "Investor Shoppe",
    avatar: "/images/testimonials/jaya-nagarmat.webp",
    rating: 5
  },
  {
    id: "3",
    quote: "For almost a decade, Planfirma's agile team and portal have been key to our hiring success.",
    author: "Prasad Hariharan",
    position: "HR Director",
    company: "Carnival",
    avatar: "/images/testimonials/prasad-hariharan.webp",
    rating: 5
  }
];

export const valueProps = [
  { icon: "💡", title: "Client-First Engagement Model", description: "We prioritize your business needs and objectives" },
  { icon: "🏗️", title: "Scalable and Future Ready Architecture", description: "Built to grow with your business requirements" },
  { icon: "🚀", title: "Faster Go-to-Market and Rapid MVPS", description: "Quick deployment with maximum impact" },
  { icon: "⚙️", title: "End-to-End Tech Expertise", description: "Complete technology solutions under one roof" },
  { icon: "🌍", title: "Proven Global Delivery Experience", description: "Successfully serving clients worldwide" },
  { icon: "🔒", title: "Secure by Design from Day One", description: "Security integrated into every solution" }
];

export const stats = [
  {
    number: "100+",
    label: "Clients Served",
    subLabel: "across 10+ countries"
  },
  {
    number: "22%",
    label: "YoY Revenue Growth",
    subLabel: "average for our clients"
  },
  {
    number: "8-12",
    label: "Weeks to Market",
    subLabel: "MVPs & Launch"
  },
  {
    number: "86%",
    label: "Repeat Business Rate",
    subLabel: "client satisfaction"
  }
];

export function getServiceIcon(key: string) {
  switch (key) {
    case 'ai-machine-learning':
    case 'robotic-process-automation':
      return Bot;
    case 'cybersecurity':
      return Shield;
    case 'cloud-computing':
      return Cloud;
    case 'devsecops':
      return Wrench;
    case 'business-intelligence':
      return BarChart2;
    case 'mobile-app-development':
      return Smartphone;
    case 'product-customization':
      return Settings;
    case 'web-custom-app-development':
      return Laptop;
    case 'new-product-development':
      return Rocket;
    case 'ui-ux-design':
      return Palette;
    case 're-engineering-optimization':
      return RefreshCcw;
    default:
      return Bot;
  }
}
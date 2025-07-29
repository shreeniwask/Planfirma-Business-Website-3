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
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
  },
  {
    name: "Korn Ferry", 
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop"
  },
  {
    name: "Spykar",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop"
  },
  {
    name: "Ubqool",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop"
  },
  {
    name: "Astaguru",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop"
  },
  {
    name: "Ahli United Bank",
    logo: "/images/placeholders/placeholder-partner.jpg"
  },
  {
    name: "Ilantus",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop"
  },
  {
    name: "Investor Shoppe",
    logo: "/images/placeholders/placeholder-partner.jpg"
  },
  {
    name: "Cruise Careers",
    logo: "/images/placeholders/placeholder-partner.jpg"
  },
  {
    name: "Continental Belting",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop"
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
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMzIiIGZpbGw9IiMwMEI0RkYiLz4KPHBhdGggZD0iTTQwIDUwaDE1YzguMyAwIDEzIDYuNyAxNSAxNXMtNi43IDE1LTE1IDE1aC04djE1aC03VjUwem03IDIyaDhjNC40IDAgOC0zLjYgOC04cy0zLjYtOC04LThoLTh2MTZ6IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEwIDUwaDIybC0xMiAyMCAxMiAyMEgxMjhsLTgtMTMtOCAxM0g5MGwxMi0yMEw5MCA1MGgxM2w4IDEzIDgtMTN6IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
  },
  {
    name: "monday.com",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9Im1vbmRheS1ncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjNENzEiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNGRjZCOUQiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQzY0NEZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSI0MCIgZmlsbD0idXJsKCNtb25kYXktZ3JhZGllbnQpIi8+CjxwYXRoIGQ9Ik01MCA3MGMwLTExIDktMjAgMjAtMjBzMjAgOSAyMCAyMHY2MGMwIDExLTkgMjAtMjAgMjBzLTIwLTktMjAtMjBWNzB6IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEwIDcwYzAtMTEgOS0yMCAyMC0yMHMyMCA5IDIwIDIwdjYwYzAgMTEtOSAyMC0yMCAyMHMtMjAtOS0yMC0yMFY3MHoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K"
  },
  {
    name: "Acronis",
    logo: "/images/partners/acronis-logo.png"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Planfirma's tablet-based platform streamlined training for thousands of agents, enhancing efficiency.",
    author: "Laazarus Dias",
    position: "Technology Director",
    company: "LDEA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "2",
    quote: "Planfirma efficiently solves business challenges, delivering exceptional results with a tailored approach.",
    author: "Jaya Nagarmat",
    position: "Operations Manager",
    company: "Investor Shoppe",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "3",
    quote: "For almost a decade, Planfirma's agile team and portal have been key to our hiring success.",
    author: "Prasad Hariharan",
    position: "HR Director",
    company: "Carnival",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export const valueProps = [
  { icon: "💡", title: "Client-First Engagement Model", description: "We prioritize your business needs and objectives" },
  { icon: "🏗️", title: "Scalable and Future Ready Architecture", description: "Built to grow with your business requirements" },
  { icon: "🚀", title: "Faster Go-to-Market and Rapid MVPS", description: "Quick deployment with maximum impact" },
  { icon: "⏱️", title: "End-to-End Tech Expertise", description: "Complete technology solutions under one roof" },
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
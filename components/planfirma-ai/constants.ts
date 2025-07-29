// Constants for PlanfirmaAi component

export const AI_IMAGES = {
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  teamDiscussion: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  collaboration: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
  officeSpace: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
} as const;

export const STATS_DATA = [
  { value: "45%", title: "Less Manual Work", subtitle: "Average time savings", icon: "⚡", color: "from-blue-400/20 to-cyan-400/20" },
  { value: "60%", title: "Increased Efficiency", subtitle: "Improved workflow speed", icon: "📈", color: "from-green-400/20 to-emerald-400/20" },
  { value: "30%", title: "Enhanced Accuracy", subtitle: "Reduced error rates", icon: "🎯", color: "from-purple-400/20 to-pink-400/20" },
  { value: "3x", title: "Faster Results", subtitle: "Speed improvement", icon: "🚀", color: "from-orange-400/20 to-red-400/20" }
] as const;

export const FEATURES_DATA = [
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks and free up your team to focus on what matters most to your business.",
    bullets: ["Streamline daily workflows", "Reduce manual errors", "Save time and money"],
    gradient: "from-blue-400/10 to-cyan-400/10"
  },
  {
    title: "Data Insights",
    description: "Turn your business data into clear insights that help you make better decisions faster.",
    bullets: ["Easy-to-understand reports", "Spot trends early", "Make data-driven choices"],
    gradient: "from-green-400/10 to-emerald-400/10"
  },
  {
    title: "Customer Understanding",
    description: "Better understand your customers and deliver experiences that keep them coming back.",
    bullets: ["Understand customer needs", "Personalise experiences", "Increase satisfaction"],
    gradient: "from-purple-400/10 to-pink-400/10"
  }
] as const;

export const VALUE_ADDED_FEATURES = [
  {
    icon: "🎯",
    title: "Precision Targeting",
    description: "AI-powered algorithms identify and target your ideal customers with surgical accuracy.",
    stats: "94% accuracy rate"
  },
  {
    icon: "⚡",
    title: "Lightning Fast Deployment",
    description: "Get your AI solutions up and running in weeks, not months, with our rapid deployment framework.",
    stats: "3x faster setup"
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description: "Bank-grade security protocols ensure your data remains protected at every step.",
    stats: "99.9% uptime"
  },
  {
    icon: "📈",
    title: "Scalable Growth",
    description: "Solutions that grow with your business, handling increased load without performance degradation.",
    stats: "10x scale capacity"
  },
  {
    icon: "🤝",
    title: "24/7 Expert Support",
    description: "Round-the-clock support from AI specialists who understand your business needs.",
    stats: "< 1hr response"
  },
  {
    icon: "💡",
    title: "Continuous Innovation",
    description: "Regular updates and new features keep your AI solutions at the cutting edge.",
    stats: "Monthly updates"
  }
] as const;

export const VIDEO_SOURCES = {
  uhd: "https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4",
  hd: "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4",
  poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1440&h=956&fit=crop"
} as const;

export const HERO_FEATURES = [
  { icon: "p3d108500", text: "Secure & Reliable" },
  { icon: "pace200", text: "100+ Happy Clients" },
  { icon: "p1c312e00", text: "Quick Implementation" }
] as const;
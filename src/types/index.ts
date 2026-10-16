export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Landing Page' | 'Institucional' | 'E-commerce' | 'Página de Vendas';
  image: string;
  summary: string;
  description: string;
  deliveryTime: string;
  results: {
    metric: string;
    label: string;
  }[];
  features: string[];
  techStack: string[];
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  avatarText: string;
  content: string;
  impactMetric: string;
  deliveryMention: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  deliveryGuarantee: string;
  idealFor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  highlighted?: boolean;
  deliveryTime: string;
  description: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: number;
  client?: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: 'website' | 'ecommerce' | 'government' | 'cms' | 'infrastructure';
  featured?: boolean;
}

export interface Experience {
  year: number;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
  duration?: string;
  location?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'cms' | 'ecommerce' | 'infrastructure' | 'devops' | 'database' | 'ai' | 'security' | 'crawling' | 'localization';
  icon?: string;
  color?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  ogImage: string;
  twitterHandle?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  company?: string;
  phone: string;
  linkedin?: string;
  projects: string[];
  testimonial?: string;
  image?: string;
}

export interface Theme {
  name: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
} 
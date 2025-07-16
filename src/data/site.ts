import { SiteConfig, ContactInfo } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'Abdulrahman Al-Khulaifi - Web Developer Portfolio',
  description: 'Computer Engineer | Web Developer | Open Source Technologist with 20+ years of experience in Kuwait. Specializing in web development, CMS platforms, e-commerce solutions, and infrastructure management.',
  author: 'Abdulrahman Al-Khulaifi',
  url: 'https://yourusername.github.io/ak-portfolio',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@yourusername'
};

export const contactInfo: ContactInfo = {
  email: 'kuwaitman@gmail.com',
  phone: '+965 55951151',
  location: 'Kuwait',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdulrahman-al-khulaifi/',
    github: 'https://github.com/kuwaitman',
    website: 'https://yourdomain.com'
  }
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Contact', href: '/contact/' }
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: contactInfo.social.linkedin!,
    icon: 'linkedin',
    color: '#0077B5'
  },
  {
    name: 'GitHub',
    url: contactInfo.social.github!,
    icon: 'github',
    color: '#181717'
  }
];

export const stats = {
  yearsOfExperience: 23,
  projectsCompleted: 27,
  technologies: 74,
  clientsServed: 27
}; 
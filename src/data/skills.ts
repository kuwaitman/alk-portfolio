import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend Technologies
  {
    name: 'HTML',
    level: 95, // Expert Level (5+ years)
    category: 'frontend',
    icon: 'html5',
    color: '#E34F26'
  },
  {
    name: 'CSS',
    level: 90, // Expert Level (5+ years)
    category: 'frontend',
    icon: 'css3',
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    level: 85, // Advanced Level (3-5 years)
    category: 'frontend',
    icon: 'javascript',
    color: '#F7DF1E'
  },
  {
    name: 'React',
    level: 75, // Intermediate Level (1-3 years)
    category: 'frontend',
    icon: 'react',
    color: '#61DAFB'
  },
  {
    name: 'Next.js',
    level: 70, // Intermediate Level (1-3 years)
    category: 'frontend',
    icon: 'nextjs',
    color: '#000000'
  },
  {
    name: 'Flutter',
    level: 65, // Entry Level (6-12 months)
    category: 'frontend',
    icon: 'flutter',
    color: '#02569B'
  },

  // Backend Technologies
  {
    name: 'PHP',
    level: 95, // Expert Level (5+ years)
    category: 'backend',
    icon: 'php',
    color: '#777BB4'
  },
  {
    name: 'ASP.NET',
    level: 85, // Advanced Level (3-5 years)
    category: 'backend',
    icon: 'dotnet',
    color: '#512BD4'
  },
  {
    name: 'C#',
    level: 80, // Intermediate Level (1-3 years)
    category: 'backend',
    icon: 'csharp',
    color: '#239120'
  },

  // Content Management Systems
  {
    name: 'WordPress',
    level: 95, // Expert Level (5+ years)
    category: 'cms',
    icon: 'wordpress',
    color: '#21759B'
  },
  {
    name: 'Joomla',
    level: 90, // Expert Level (5+ years)
    category: 'cms',
    icon: 'joomla',
    color: '#5091CD'
  },
  {
    name: 'Drupal',
    level: 85, // Advanced Level (3-5 years)
    category: 'cms',
    icon: 'drupal',
    color: '#0678BE'
  },
  {
    name: 'Strapi',
    level: 75, // Intermediate Level (1-3 years)
    category: 'cms',
    icon: 'strapi',
    color: '#2F2E8B'
  },

  // E-commerce Platforms
  {
    name: 'OpenCart',
    level: 90, // Expert Level (5+ years)
    category: 'ecommerce',
    icon: 'opencart',
    color: '#FF6F61'
  },
  {
    name: 'WooCommerce',
    level: 85, // Advanced Level (3-5 years)
    category: 'ecommerce',
    icon: 'woocommerce',
    color: '#96588A'
  },
  {
    name: 'PrestaShop',
    level: 80, // Intermediate Level (1-3 years)
    category: 'ecommerce',
    icon: 'prestashop',
    color: '#DF0067'
  },

  // Infrastructure & DevOps
  {
    name: 'Docker',
    level: 80, // Intermediate Level (1-3 years)
    category: 'infrastructure',
    icon: 'docker',
    color: '#2496ED'
  },
  {
    name: 'Kubernetes',
    level: 75, // Intermediate Level (1-3 years)
    category: 'infrastructure',
    icon: 'kubernetes',
    color: '#326CE5'
  },
  {
    name: 'Proxmox VE',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'proxmox',
    color: '#E57000'
  },
  {
    name: 'VMware ESXi',
    level: 80, // Intermediate Level (1-3 years)
    category: 'infrastructure',
    icon: 'vmware',
    color: '#607078'
  },

  // Web Control Panels & Security
  {
    name: 'Virtualmin',
    level: 90, // Expert Level (5+ years)
    category: 'devops',
    icon: 'virtualmin',
    color: '#FF6B35'
  },
  {
    name: 'Webmin',
    level: 85, // Advanced Level (3-5 years)
    category: 'devops',
    icon: 'webmin',
    color: '#FF6B35'
  },
  {
    name: 'CSF Firewall',
    level: 85, // Advanced Level (3-5 years)
    category: 'devops',
    icon: 'firewall',
    color: '#FF4444'
  },

  // Billing & Hosting Automation
  {
    name: 'WHMCS',
    level: 80, // Intermediate Level (1-3 years)
    category: 'devops',
    icon: 'whmcs',
    color: '#5A9BD4'
  },

  // Mail Gateways
  {
    name: 'Mailcow',
    level: 75, // Intermediate Level (1-3 years)
    category: 'infrastructure',
    icon: 'mailcow',
    color: '#FF6B6B'
  },

  // DNS & CDN Management
  {
    name: 'Cloudflare',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'cloudflare',
    color: '#F38020'
  },

  // Database Systems
  {
    name: 'MySQL',
    level: 90, // Expert Level (5+ years)
    category: 'database',
    icon: 'mysql',
    color: '#4479A1'
  },
  {
    name: 'PostgreSQL',
    level: 75, // Intermediate Level (1-3 years)
    category: 'database',
    icon: 'postgresql',
    color: '#336791'
  },
  {
    name: 'SQL Server',
    level: 80, // Intermediate Level (1-3 years)
    category: 'database',
    icon: 'sqlserver',
    color: '#CC2927'
  },

  // Development Environments
  {
    name: 'Visual Studio Code',
    level: 90, // Expert Level (5+ years)
    category: 'frontend',
    icon: 'vscode',
    color: '#007ACC'
  },
  {
    name: 'Visual Studio',
    level: 85, // Advanced Level (3-5 years)
    category: 'backend',
    icon: 'visualstudio',
    color: '#5C2D91'
  },
  {
    name: 'Dreamweaver',
    level: 80, // Intermediate Level (1-3 years)
    category: 'frontend',
    icon: 'dreamweaver',
    color: '#FF61F6'
  },
  {
    name: 'Eclipse IDE',
    level: 75, // Intermediate Level (1-3 years)
    category: 'backend',
    icon: 'eclipse',
    color: '#2C2255'
  },

  // Core Technologies & Frameworks
  {
    name: 'Node.js',
    level: 80, // Intermediate Level (1-3 years)
    category: 'backend',
    icon: 'nodejs',
    color: '#339933'
  },
  {
    name: 'Express.js',
    level: 75, // Intermediate Level (1-3 years)
    category: 'backend',
    icon: 'express',
    color: '#000000'
  },
  {
    name: 'Redis',
    level: 75, // Intermediate Level (1-3 years)
    category: 'database',
    icon: 'redis',
    color: '#DC382D'
  },
  {
    name: 'Typesense',
    level: 70, // Entry Level (6-12 months)
    category: 'database',
    icon: 'search',
    color: '#FF6B35'
  },

  // Web Crawling & Data Extraction
  {
    name: 'Crawlee',
    level: 75, // Intermediate Level (1-3 years)
    category: 'crawling',
    icon: 'crawlee',
    color: '#FF6B35'
  },
  {
    name: 'Puppeteer',
    level: 70, // Entry Level (6-12 months)
    category: 'crawling',
    icon: 'puppeteer',
    color: '#40B5A4'
  },
  {
    name: 'ONNX Runtime',
    level: 65, // Entry Level (6-12 months)
    category: 'ai',
    icon: 'onnx',
    color: '#005CED'
  },
  {
    name: 'LayoutLMv2',
    level: 60, // Entry Level (6-12 months)
    category: 'ai',
    icon: 'ai',
    color: '#FF6B35'
  },

  // AI & Automation
  {
    name: 'NLP',
    level: 70, // Entry Level (6-12 months)
    category: 'ai',
    icon: 'ai',
    color: '#FF6B35'
  },
  {
    name: 'Entity Resolution',
    level: 65, // Entry Level (6-12 months)
    category: 'ai',
    icon: 'ai',
    color: '#FF6B35'
  },
  {
    name: 'Cursor IDE',
    level: 75, // Intermediate Level (1-3 years)
    category: 'frontend',
    icon: 'cursor',
    color: '#007ACC'
  },

  // Cloud & DevOps
  {
    name: 'Hetzner Cloud',
    level: 75, // Intermediate Level (1-3 years)
    category: 'infrastructure',
    icon: 'hetzner',
    color: '#D50F2C'
  },

  // Localization & Personalization
  {
    name: 'MaxMind GeoIP',
    level: 80, // Intermediate Level (1-3 years)
    category: 'localization',
    icon: 'geoip',
    color: '#FF6B35'
  },
  {
    name: 'i18n',
    level: 75, // Intermediate Level (1-3 years)
    category: 'localization',
    icon: 'i18n',
    color: '#FF6B35'
  },
  {
    name: 'RTL Layout',
    level: 70, // Entry Level (6-12 months)
    category: 'localization',
    icon: 'rtl',
    color: '#FF6B35'
  },
  {
    name: 'Currency Switching',
    level: 75, // Intermediate Level (1-3 years)
    category: 'localization',
    icon: 'currency',
    color: '#FF6B35'
  },

  // Security & OWASP
  {
    name: 'OWASP Top 10',
    level: 80, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'JWT',
    level: 75, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'jwt',
    color: '#000000'
  },
  {
    name: 'RBAC',
    level: 80, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'Input Validation',
    level: 85, // Advanced Level (3-5 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'HTTPS/TLS',
    level: 80, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'Let\'s Encrypt',
    level: 75, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'letsencrypt',
    color: '#003A70'
  },
  {
    name: 'HSTS',
    level: 70, // Entry Level (6-12 months)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },

  // Security Tools
  {
    name: 'Nmap',
    level: 70, // Entry Level (6-12 months)
    category: 'security',
    icon: 'nmap',
    color: '#FF6B35'
  },
  {
    name: 'OWASP ZAP',
    level: 75, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'zap',
    color: '#FF6B35'
  },
  {
    name: 'Fail2ban',
    level: 75, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'fail2ban',
    color: '#FF4444'
  },
  {
    name: 'UFW',
    level: 70, // Entry Level (6-12 months)
    category: 'security',
    icon: 'ufw',
    color: '#FF4444'
  },
  {
    name: 'FirewallD',
    level: 65, // Entry Level (6-12 months)
    category: 'security',
    icon: 'firewalld',
    color: '#FF4444'
  },
  {
    name: 'Rate Limiting',
    level: 80, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },

  // Web Application Firewalls (WAF)
  {
    name: 'Apache ModSecurity',
    level: 85, // Advanced Level (3-5 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'NGINX WAF',
    level: 75, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },

  // Website Vulnerability Assessment Tools
  {
    name: 'Burp Suite',
    level: 75, // Intermediate Level (1-3 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'OpenVAS',
    level: 70, // Entry Level (6-12 months)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },
  {
    name: 'Google Webmaster Tools',
    level: 85, // Advanced Level (3-5 years)
    category: 'security',
    icon: 'security',
    color: '#FF4444'
  },

  // Operating Systems
  {
    name: 'Ubuntu Server',
    level: 95, // Expert Level (5+ years)
    category: 'infrastructure',
    icon: 'server',
    color: '#E95420'
  },
  {
    name: 'CentOS',
    level: 95, // Expert Level (5+ years)
    category: 'infrastructure',
    icon: 'server',
    color: '#932279'
  },
  {
    name: 'Red Hat Enterprise',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'server',
    color: '#EE0000'
  },
  {
    name: 'FreeBSD',
    level: 75, // Intermediate Level (1-3 years)
    category: 'infrastructure',
    icon: 'server',
    color: '#AB2B28'
  },

  // Image Processing and Manipulation
  {
    name: 'GIMP',
    level: 95, // Expert Level (5+ years)
    category: 'frontend',
    icon: 'gimp',
    color: '#5C5543'
  },
  {
    name: 'Adobe Photoshop',
    level: 95, // Expert Level (5+ years)
    category: 'frontend',
    icon: 'photoshop',
    color: '#31A8FF'
  },
  {
    name: 'Adobe Fireworks',
    level: 85, // Advanced Level (3-5 years)
    category: 'frontend',
    icon: 'fireworks',
    color: '#FF6B35'
  },
  {
    name: 'Inkscape',
    level: 95, // Expert Level (5+ years)
    category: 'frontend',
    icon: 'inkscape',
    color: '#000000'
  },
  {
    name: 'Adobe Illustrator',
    level: 85, // Advanced Level (3-5 years)
    category: 'frontend',
    icon: 'illustrator',
    color: '#FF9A00'
  },

  // DNS Administration and Website Analytics
  {
    name: 'Linux DNS',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'dns',
    color: '#FF6B35'
  },
  {
    name: 'Domain DNS',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'dns',
    color: '#FF6B35'
  },
  {
    name: 'Google Analytics',
    level: 85, // Advanced Level (3-5 years)
    category: 'frontend',
    icon: 'analytics',
    color: '#F9AB00'
  },

  // Network Protocols
  {
    name: 'SSH',
    level: 95, // Expert Level (5+ years)
    category: 'infrastructure',
    icon: 'server',
    color: '#FF6B35'
  },
  {
    name: 'SFTP',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'server',
    color: '#FF6B35'
  },
  {
    name: 'SMTP',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'server',
    color: '#FF6B35'
  },
  {
    name: 'POP3',
    level: 85, // Advanced Level (3-5 years)
    category: 'infrastructure',
    icon: 'server',
    color: '#FF6B35'
  }
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  return skills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

export const getSkillsByLevel = (minLevel: number): Skill[] => {
  return skills.filter(skill => skill.level >= minLevel);
};

export const getSkillCategories = (): Skill['category'][] => {
  const categories = skills.map(skill => skill.category);
  return Array.from(new Set(categories));
}; 
import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    year: 2001,
    title: 'Web Developer',
    company: 'ATakamul School',
    description: 'Started web development journey with HTML-based school website.',
    technologies: ['HTML'],
    achievements: [
      'Built first website using HTML',
      'Learned fundamentals of web development',
      'Established foundation for future projects'
    ],
    duration: '2001',
    location: 'Kuwait'
  },
  {
    year: 2007,
    title: 'Freelance Web Developer',
    company: 'Various Clients',
    description: 'Developed multiple websites for local businesses and organizations.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Built alwaseetpools.com - Swimming pool company website',
      'Developed safatenergy.com - Energy company website',
      'Established client relationships and project management skills'
    ],
    duration: '2007',
    location: 'Kuwait'
  },
  {
    year: 2008,
    title: 'Web Developer',
    company: 'Multiple Clients',
    description: 'Expanded portfolio with diverse client projects.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Created tbox.com.kw - Technology solutions website',
      'Built expert.com.kw - Consulting services website',
      'Developed sweetncup.com - Cafe and dessert shop website',
      'Enhanced JavaScript skills and user experience design'
    ],
    duration: '2008',
    location: 'Kuwait'
  },
  {
    year: 2009,
    title: 'CMS Developer',
    company: 'Various Organizations',
    description: 'Transitioned to Content Management Systems for better scalability.',
    technologies: ['Joomla', 'Drupal', 'WordPress', 'PHP', 'MySQL'],
    achievements: [
      'Built origin.com.kw using Joomla CMS',
      'Developed aleslahwoman.org using Drupal CMS',
      'Created mideasta.com and al-nw.com using WordPress',
      'Mastered multiple CMS platforms and PHP development'
    ],
    duration: '2009',
    location: 'Kuwait'
  },
  {
    year: 2010,
    title: 'Full-Stack Developer',
    company: 'Multiple Clients',
    description: 'Comprehensive web development including CMS and e-commerce solutions.',
    technologies: ['WordPress', 'OpenCart', 'PHP', 'MySQL', 'E-commerce'],
    achievements: [
      'Developed 5 WordPress websites for various companies',
      'Built 3 OpenCart e-commerce platforms',
      'Specialized in e-commerce solutions and online stores',
      'Gained expertise in payment integration and inventory management'
    ],
    duration: '2010',
    location: 'Kuwait'
  },
  {
    year: 2012,
    title: 'Government Systems Consultant',
    company: 'CSB Kuwait',
    description: 'Provided security and maintenance for government systems.',
    technologies: ['ASP.NET', 'SQL Server', 'Security', 'Government Systems'],
    achievements: [
      'Implemented security measures for government systems',
      'Provided system maintenance and support',
      'Ensured compliance with government security standards',
      'Developed expertise in secure government infrastructure'
    ],
    duration: '2012',
    location: 'Kuwait'
  },
  {
    year: 2014,
    title: 'ASP.NET Consultant',
    company: 'Ministry of Health Kuwait',
    description: 'Consulted on ASP.NET development for Ministry of Health systems.',
    technologies: ['ASP.NET', 'C#', 'SQL Server', 'Government Systems'],
    achievements: [
      'Provided technical consultation for healthcare systems',
      'Developed and maintained critical government applications',
      'Ensured system reliability and security for healthcare data',
      'Collaborated with government IT teams on system architecture'
    ],
    duration: '2014',
    location: 'Kuwait'
  },
  {
    year: 2024,
    title: 'Web Systems Consultant',
    company: 'Independent Consultant',
    description: 'Providing comprehensive web development and infrastructure consulting services.',
    technologies: [
      'React', 'Next.js', 'Flutter',
      'WordPress', 'Joomla', 'Drupal', 'Strapi',
      'OpenCart', 'WooCommerce', 'PrestaShop',
      'Docker', 'Kubernetes', 'Proxmox VE',
      'WHMCS', 'Cloudflare', 'CSF Firewall'
    ],
    achievements: [
      '20+ years of web development experience',
      'Expertise in modern frontend frameworks',
      'Comprehensive knowledge of CMS platforms',
      'Advanced infrastructure and DevOps skills',
      'Government and enterprise system experience'
    ],
    duration: '2001-Present',
    location: 'Kuwait'
  }
];

export const getExperienceByYear = (year: number): Experience[] => {
  return experience.filter(exp => exp.year === year);
};

export const getExperienceByTechnology = (technology: string): Experience[] => {
  return experience.filter(exp => 
    exp.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getRecentExperience = (years: number = 5): Experience[] => {
  const currentYear = new Date().getFullYear();
  return experience.filter(exp => exp.year >= currentYear - years);
}; 
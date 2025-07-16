import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'meshari-al-duhaim',
    name: 'Meshari Al-Duhaim',
    position: 'Business Owner',
    company: 'Sweetncup & Expert Kuwait',
    phone: '+965 98822200',
    linkedin: 'https://www.linkedin.com/in/meshari-al-duhaim-1510b9b0/',
    projects: ['Sweetncup', 'Expert Kuwait'],
    testimonial: 'Abdulrahman delivered exceptional results for our projects. His expertise in web development and attention to detail exceeded our expectations.',
    image: '/images/testimonials/meshari-al-duhaim.jpg'
  },
  {
    id: 'hussain-karam',
    name: 'Hussain Karam',
    position: 'Business Owner',
    company: 'Doulstore',
    phone: '+965 96623333',
    projects: ['Doulstore'],
    testimonial: 'Professional service and excellent communication throughout the project. Highly recommended for any web development needs.',
    image: '/images/testimonials/hussain-karam.jpg'
  },
  {
    id: 'anwar-alfadhel',
    name: 'Anwar Alfadhel',
    position: 'CEO',
    company: 'Alfadhel Group',
    phone: '+965 94446677',
    linkedin: 'https://www.linkedin.com/in/anwar-alfadhel-414b0a72/',
    projects: ['Alfadhel Group'],
    testimonial: 'Outstanding work on our corporate website. Abdulrahman\'s technical skills and business understanding made the project a success.',
    image: '/images/testimonials/anwar-alfadhel.jpg'
  },
  {
    id: 'mohammed-almaghrabi',
    name: 'Mohammed AlMaghrabi',
    position: 'Managing Director',
    company: 'Alwaseet Pools & Safat Energy',
    phone: '+965 99400397',
    linkedin: 'https://www.linkedin.com/in/moalmughrabi/',
    projects: ['Alwaseet Pools', 'Safat Energy'],
    testimonial: 'Reliable, professional, and delivers quality results. Abdulrahman has been instrumental in our digital presence success.',
    image: '/images/testimonials/mohammed-almaghrabi.jpg'
  }
];

export const getTestimonialsByProject = (projectName: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.projects.some(project => 
      project.toLowerCase().includes(projectName.toLowerCase())
    )
  );
};

export const getFeaturedTestimonials = (limit: number = 4): Testimonial[] => {
  return testimonials.slice(0, limit);
}; 
# Customization Guide

This guide will help you customize your portfolio website to match your personal brand and preferences.

## 🎨 Design Customization

### Color Scheme

The portfolio uses a dark theme with customizable colors. To modify the color scheme:

#### 1. Update CSS Variables (`src/app/globals.css`)
```css
:root {
  /* Primary Colors */
  --primary: #6366f1;        /* Your main brand color */
  --primary-dark: #4f46e5;   /* Darker shade for hover states */
  --accent: #06b6d4;         /* Accent color for highlights */
  
  /* Background Colors */
  --bg-primary: #0a0a0a;     /* Main background */
  --bg-secondary: #111111;   /* Secondary background */
  --bg-tertiary: #1a1a1a;    /* Tertiary background */
  
  /* Text Colors */
  --text-primary: #ffffff;   /* Primary text */
  --text-secondary: #a1a1aa; /* Secondary text */
  --text-muted: #71717a;     /* Muted text */
}
```

#### 2. Update Tailwind Config (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  // Your primary color
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  // ... other colors
}
```

### Typography

#### 1. Change Fonts
Update `src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap');

html, body {
  font-family: 'YOUR_FONT', system-ui, sans-serif;
}
```

#### 2. Update Tailwind Config
```javascript
fontFamily: {
  sans: ['YOUR_FONT', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

## 📝 Content Customization

### Personal Information

#### 1. Update Site Configuration (`src/data/site.ts`)
```typescript
export const siteConfig: SiteConfig = {
  title: 'Your Name - Web Developer Portfolio',
  description: 'Your professional description',
  author: 'Your Name',
  url: 'https://yourusername.github.io/ak-portfolio',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@yourusername'
};

export const contactInfo: ContactInfo = {
  email: 'your-email@example.com',
  phone: '+965 XXXX XXXX',
  location: 'Kuwait',
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    website: 'https://yourdomain.com'
  }
};
```

#### 2. Update Statistics (`src/data/site.ts`)
```typescript
export const stats = {
  yearsOfExperience: 23,      // Your years of experience
  projectsCompleted: 25,      // Number of projects
  technologies: 30,           // Technologies you know
  clientsServed: 50           // Number of clients
};
```

### Projects Portfolio

#### 1. Add New Projects (`src/data/projects.ts`)
```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  description: 'Detailed project description',
  technologies: ['React', 'Node.js', 'MongoDB'],
  year: 2024,
  client: 'Client Name (optional)',
  liveUrl: 'https://project-url.com',
  githubUrl: 'https://github.com/username/project',
  image: '/images/projects/project-image.jpg',
  category: 'website', // 'website' | 'ecommerce' | 'government' | 'cms' | 'infrastructure'
  featured: true // Set to true for featured projects
}
```

#### 2. Project Categories
- `website`: General websites
- `ecommerce`: Online stores
- `government`: Government projects
- `cms`: Content Management Systems
- `infrastructure`: DevOps and infrastructure

### Experience Timeline

#### 1. Add Experience (`src/data/experience.ts`)
```typescript
{
  year: 2024,
  title: 'Job Title',
  company: 'Company Name',
  description: 'Job description',
  technologies: ['React', 'TypeScript', 'Node.js'],
  achievements: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3'
  ],
  duration: '2024-Present',
  location: 'Kuwait'
}
```

### Skills & Technologies

#### 1. Add Skills (`src/data/skills.ts`)
```typescript
{
  name: 'Skill Name',
  level: 85, // 1-100
  category: 'frontend', // 'frontend' | 'backend' | 'cms' | 'ecommerce' | 'infrastructure' | 'devops' | 'database'
  icon: 'skill-icon',
  color: '#FF6B6B'
}
```

#### 2. Skill Categories
- `frontend`: React, Vue, Angular, etc.
- `backend`: Node.js, Python, PHP, etc.
- `cms`: WordPress, Drupal, Joomla, etc.
- `ecommerce`: Shopify, WooCommerce, etc.
- `infrastructure`: Docker, Kubernetes, etc.
- `devops`: CI/CD, AWS, etc.
- `database`: MySQL, PostgreSQL, etc.

## 🖼️ Images and Assets

### Project Images

1. **Add project screenshots** to `/public/images/projects/`
2. **Recommended format**: WebP or optimized JPG
3. **Recommended size**: 1200x800 pixels
4. **File naming**: Use descriptive names like `project-name.jpg`

### Profile Images

1. **Profile photo**: `/public/images/profile.jpg`
2. **OG Image**: `/public/images/og-image.jpg` (1200x630px)
3. **Favicon**: `/public/favicon.ico`

### Icons

The portfolio uses Lucide React icons. To add custom icons:

1. **Install additional icon libraries**:
   ```bash
   npm install @heroicons/react
   ```

2. **Import and use icons**:
   ```typescript
   import { BeakerIcon } from '@heroicons/react/24/outline'
   ```

## 🎭 Animations and Interactions

### Custom Animations

#### 1. Add Animation Classes (`src/app/globals.css`)
```css
@keyframes yourAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.animate-your-animation {
  animation: yourAnimation 2s ease-in-out infinite;
}
```

#### 2. Add to Tailwind Config
```javascript
animation: {
  'your-animation': 'yourAnimation 2s ease-in-out infinite',
}
```

### Framer Motion Animations

#### 1. Page Transitions
```typescript
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

<motion.div
  initial="initial"
  animate="animate"
  exit="exit"
  variants={pageVariants}
>
  Your content
</motion.div>
```

## 📱 Responsive Design

### Custom Breakpoints

Update `tailwind.config.js`:
```javascript
theme: {
  screens: {
    'xs': '475px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

### Mobile-First Approach

Use Tailwind's responsive prefixes:
```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on tablet, third on desktop -->
</div>
```

## 🌐 Internationalization

### Arabic Support

#### 1. Add RTL Support
```css
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .rtl-flip {
  transform: scaleX(-1);
}
```

#### 2. Language Toggle Component
```typescript
const [language, setLanguage] = useState('en')

const toggleLanguage = () => {
  setLanguage(language === 'en' ? 'ar' : 'en')
  document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr'
  document.documentElement.lang = language
}
```

## 🔧 Advanced Customization

### Custom Components

#### 1. Create New Components
```typescript
// src/components/ui/custom-button.tsx
interface CustomButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md'
}) => {
  return (
    <button className={`btn-${variant} btn-${size}`}>
      {children}
    </button>
  )
}
```

#### 2. Add Custom Hooks
```typescript
// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
```

### SEO Optimization

#### 1. Dynamic Meta Tags
```typescript
// src/app/projects/[id]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id)
  
  return {
    title: `${project.title} - Portfolio Project`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image]
    }
  }
}
```

## 🚀 Performance Optimization

### Image Optimization

#### 1. Use Next.js Image Component
```typescript
import Image from 'next/image'

<Image
  src="/images/project.jpg"
  alt="Project description"
  width={800}
  height={600}
  priority={true} // For above-the-fold images
/>
```

#### 2. Lazy Loading
```typescript
const LazyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div className="spinner" />
})
```

### Bundle Optimization

#### 1. Code Splitting
```typescript
// Split large components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  ssr: false // Disable SSR for client-only components
})
```

#### 2. Tree Shaking
```typescript
// Import only what you need
import { motion } from 'framer-motion'
// Instead of: import * as FramerMotion from 'framer-motion'
```

## 📊 Analytics and Tracking

### Google Analytics

#### 1. Add Analytics Script
```typescript
// src/components/analytics/google-analytics.tsx
export const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}
```

### Custom Tracking

#### 1. Track User Interactions
```typescript
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

// Usage
<button onClick={() => trackEvent('project_view', { project_id: 'project-1' })}>
  View Project
</button>
```

## 🧪 Testing

### Component Testing

#### 1. Add Testing Library
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

#### 2. Test Components
```typescript
// src/components/__tests__/hero-section.test.tsx
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../sections/hero-section'

describe('HeroSection', () => {
  it('renders hero content', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Abdulrahman Al-Khulaifi/)).toBeInTheDocument()
  })
})
```

## 📝 Best Practices

### Code Organization

1. **Keep components small and focused**
2. **Use TypeScript for type safety**
3. **Follow naming conventions**
4. **Add proper comments and documentation**

### Performance

1. **Optimize images before adding**
2. **Use lazy loading for heavy components**
3. **Minimize bundle size**
4. **Monitor Core Web Vitals**

### Accessibility

1. **Use semantic HTML**
2. **Add proper ARIA labels**
3. **Ensure keyboard navigation**
4. **Test with screen readers**

---

**Remember**: Always test your changes locally before deploying to production! 
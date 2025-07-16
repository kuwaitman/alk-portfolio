# Abdulrahman Al-Khulaifi - Portfolio Website

A modern, dark-themed portfolio website showcasing 20+ years of web development experience. Built with Next.js, TypeScript, and Tailwind CSS, optimized for GitHub Pages hosting.

## 🚀 Features

- **Dark Theme Design** - Modern, professional dark theme with smooth animations
- **Responsive Layout** - Fully responsive design that works on all devices
- **Static Export** - Optimized for GitHub Pages hosting
- **Performance Optimized** - Fast loading with optimized assets
- **SEO Friendly** - Built-in SEO optimization and meta tags
- **Interactive Elements** - Smooth animations and transitions
- **Accessibility** - WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono
- **Deployment**: GitHub Pages / Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ak-portfolio.git
   cd ak-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ak-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── experience/     # Experience page
│   │   ├── projects/       # Projects page
│   │   ├── skills/         # Skills page
│   │   └── contact/        # Contact page
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   ├── data/              # Static data files
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── styles/            # Global styles
├── public/                # Static assets
├── .github/               # GitHub Actions workflows
└── docs/                  # Documentation
```

## 🚀 Deployment

### GitHub Pages Deployment (Recommended)

Your website is fully configured for GitHub Pages deployment with automatic CI/CD!

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: **GitHub Actions** (recommended)
   - The workflow in `.github/workflows/deploy.yml` will automatically build and deploy

3. **Your site will be available at**
   ```
   https://yourusername.github.io/ak-portfolio/
   ```

### Manual Deployment

```bash
# Build the project
npm run build

# The static files will be in the `out/` directory
# Upload these files to your hosting provider
```

### Deployment Configuration

Your website is configured with:
- ✅ Static export (`output: 'export'`)
- ✅ Base path for GitHub Pages (`/ak-portfolio`)
- ✅ Unoptimized images for static hosting
- ✅ `.nojekyll` file creation
- ✅ GitHub Actions workflow for automatic deployment

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#6366f1', // Your primary color
  },
  // ... other colors
}
```

### Content
Update your portfolio content in the `src/data/` directory:
- `projects.ts` - Your project portfolio
- `experience.ts` - Work experience timeline
- `skills.ts` - Skills and technologies

### Styling
Modify global styles in `src/app/globals.css`:
```css
:root {
  --primary: #6366f1;
  --bg-primary: #0a0a0a;
  /* ... other CSS variables */
}
```

## 📱 Pages

### Home (`/`)
- Hero section with introduction
- Quick navigation to other sections
- Featured projects preview

### About (`/about/`)
- Professional bio
- Personal information
- Download CV option

### Experience (`/experience/`)
- Interactive timeline
- Work history from 2001-2024
- Technology stack for each role

### Projects (`/projects/`)
- Portfolio showcase
- Filterable by technology/category
- Project details and links

### Skills (`/skills/`)
- Technology expertise
- Interactive skill visualization
- Categorized by domain

### Contact (`/contact/`)
- Contact form
- Social media links
- Location information

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

### Performance

- Static generation for all pages
- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size

## 📊 Analytics

The site includes Google Analytics integration. Update the tracking ID in `src/app/layout.tsx`:

```typescript
const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Your Google Analytics ID
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdulrahman Al-Khulaifi**
- Computer Engineer | Web Developer | Open Source Technologist
- 📍 Kuwait
- 💻 20+ Years of Experience
- 🌐 Web Systems Consultant

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion

---

**Built with ❤️ in Kuwait** 
# Deployment Guide - GitHub Pages

This guide will walk you through deploying your portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Git**: Git should be installed on your local machine
3. **Node.js**: Version 18 or higher

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `ak-portfolio`
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we'll push our existing code)
7. Click "Create repository"

## Step 2: Update Configuration

Before pushing to GitHub, update these files with your actual information:

### 1. Update `src/data/site.ts`
```typescript
export const siteConfig: SiteConfig = {
  title: 'Abdulrahman Al-Khulaifi - Web Developer Portfolio',
  description: '...',
  author: 'Abdulrahman Al-Khulaifi',
  url: 'https://YOUR_USERNAME.github.io/ak-portfolio', // Update this
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@YOUR_TWITTER' // Update this
};

export const contactInfo: ContactInfo = {
  email: 'your-email@example.com', // Update this
  phone: '+965 XXXX XXXX', // Update this
  location: 'Kuwait',
  social: {
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN', // Update this
    github: 'https://github.com/YOUR_USERNAME', // Update this
    twitter: 'https://twitter.com/YOUR_TWITTER', // Update this
    website: 'https://yourdomain.com' // Update this
  }
};
```

### 2. Update `next.config.js`
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/ak-portfolio' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/ak-portfolio/' : '',
```

### 3. Update `scripts/generate-sitemap.js`
```javascript
const baseUrl = 'https://YOUR_USERNAME.github.io/ak-portfolio';
```

### 4. Update `public/robots.txt`
```
Sitemap: https://YOUR_USERNAME.github.io/ak-portfolio/sitemap.xml
```

## Step 3: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

2. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ak-portfolio.git
   ```

3. **Add all files**:
   ```bash
   git add .
   ```

4. **Commit your changes**:
   ```bash
   git commit -m "Initial portfolio setup"
   ```

5. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **gh-pages** and **/(root)**
6. Click **Save**

## Step 5: Configure GitHub Actions

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. Build your Next.js project
2. Generate static files
3. Deploy to GitHub Pages

**Note**: The first deployment might take a few minutes.

## Step 6: Verify Deployment

1. Wait for the GitHub Actions workflow to complete
2. Go to your repository's **Actions** tab to monitor the deployment
3. Once complete, visit: `https://YOUR_USERNAME.github.io/ak-portfolio`

## Step 7: Custom Domain (Optional)

If you have a custom domain:

1. **Add CNAME file**:
   Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. **Configure DNS**:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub Pages IPs

3. **Update GitHub Pages settings**:
   - Go to repository Settings → Pages
   - Add your custom domain
   - Check "Enforce HTTPS"

## Troubleshooting

### Common Issues

1. **404 Error**:
   - Ensure `next.config.js` has correct `basePath`
   - Check that `trailingSlash: true` is set

2. **Images not loading**:
   - Ensure `images.unoptimized: true` in `next.config.js`
   - Check image paths are relative to `/public`

3. **Build fails**:
   - Check GitHub Actions logs
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript errors are fixed

4. **Styling issues**:
   - Ensure Tailwind CSS is properly configured
   - Check that CSS variables are defined

### Performance Optimization

1. **Optimize images**:
   - Use WebP format where possible
   - Compress images before adding to `/public`

2. **Bundle size**:
   - Monitor bundle size in build logs
   - Use dynamic imports for large components

3. **SEO**:
   - Run the sitemap generator: `node scripts/generate-sitemap.js`
   - Verify meta tags are correct

## Maintenance

### Regular Updates

1. **Content updates**:
   - Edit files in `src/data/`
   - Push changes to trigger automatic deployment

2. **Dependencies**:
   - Regularly update dependencies: `npm update`
   - Test locally before pushing

3. **Performance monitoring**:
   - Use GitHub Pages analytics
   - Monitor Core Web Vitals

### Backup

- Your code is safely stored in GitHub
- Consider backing up `/public` assets separately
- Keep local copy of important files

## Support

If you encounter issues:

1. Check GitHub Actions logs
2. Verify configuration files
3. Test locally with `npm run build`
4. Check GitHub Pages documentation

---

**Your portfolio will be live at**: `https://YOUR_USERNAME.github.io/ak-portfolio` 
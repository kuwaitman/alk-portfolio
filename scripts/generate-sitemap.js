const fs = require('fs');
const path = require('path');

const baseUrl = 'https://yourusername.github.io/ak-portfolio';

const pages = [
  '/',
  '/about/',
  '/experience/',
  '/projects/',
  '/skills/',
  '/contact/',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

// Ensure the public directory exists
const publicDir = path.dirname(sitemapPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully at:', sitemapPath); 
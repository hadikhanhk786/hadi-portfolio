// Post-build: GitHub Pages has no server routing, so write build/<route>/index.html for every page
// with its own title, description, Open Graph tags and canonical URL. Direct links and refresh then
// work, and link previews (LinkedIn, WhatsApp, Slack) show the right page. Also writes 404.html
// (unknown URLs still load the app, which shows the 404 page) and sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import { notFound, pages, SITE_URL } from '../src/data/seo.mjs';

const build = path.resolve('build');
const template = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function render({ title, description }, url, extraHead = '') {
  const set = (html, re, value) => {
    if (!re.test(html)) throw new Error(`prerender: tag not found in index.html: ${re}`);
    return html.replace(re, (_m, before, after) => `${before}${esc(value)}${after}`);
  };
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = set(html, /(<meta name="description" content=")[^"]*(")/, description);
  html = set(html, /(<meta property="og:title" content=")[^"]*(")/, title);
  html = set(html, /(<meta property="og:description" content=")[^"]*(")/, description);
  html = set(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  html = set(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  return extraHead ? html.replace('</head>', `${extraHead}</head>`) : html;
}

const urlFor = (route) => `${SITE_URL}${route === '/' ? '/' : route}`;
for (const [route, meta] of Object.entries(pages)) {
  const dir = route === '/' ? build : path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(meta, urlFor(route)));
}
fs.writeFileSync(path.join(build, '404.html'), render(notFound, `${SITE_URL}/404`, '<meta name="robots" content="noindex">'));

const today = new Date().toISOString().slice(0, 10);
const urls = Object.keys(pages).map((r) => `  <url><loc>${urlFor(r)}</loc><lastmod>${today}</lastmod></url>`).join('\n');
fs.writeFileSync(path.join(build, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`prerender: ${Object.keys(pages).length} pages, 404.html, sitemap.xml`);

import { useEffect } from 'react';
import { notFound, pages, SITE_URL } from '../data/seo.mjs';

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/** Title, description, canonical and Open Graph tags for the current route (client-side navigation). */
export function useMeta(path) {
  useEffect(() => {
    const meta = pages[path] || notFound;
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [path]);
}

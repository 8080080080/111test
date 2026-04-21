import productsData from "../data/products.json";
import siteData from "../data/site.json";

export const prerender = true;

const siteUrl = siteData.defaultSeo.siteUrl;
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: string;
}

const staticPages: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/products/", priority: "0.9", changefreq: "weekly" },
  { path: "/gallery/", priority: "0.7", changefreq: "monthly" },
  { path: "/about/", priority: "0.6", changefreq: "monthly" },
  { path: "/faq/", priority: "0.7", changefreq: "monthly" },
  { path: "/contact/", priority: "0.8", changefreq: "monthly" }
];

const productPages: SitemapEntry[] = (productsData as Array<{ slug: string }>).map((p) => ({
  path: `/products/${p.slug}/`,
  priority: "0.8",
  changefreq: "monthly"
}));

const enStaticPages: SitemapEntry[] = staticPages.map((p) => ({
  ...p,
  path: `/en${p.path}`,
  priority: String(Math.max(parseFloat(p.priority) - 0.1, 0.5))
}));

const enProductPages: SitemapEntry[] = productPages.map((p) => ({
  ...p,
  path: `/en${p.path}`,
  priority: "0.7"
}));

const allPages = [...staticPages, ...productPages, ...enStaticPages, ...enProductPages];

function buildUrl(entry: SitemapEntry): string {
  const loc = new URL(entry.path, siteUrl).toString();
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "  </url>"
  ].join("\n");
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...allPages.map(buildUrl),
  "</urlset>"
].join("\n");

export function GET() {
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}

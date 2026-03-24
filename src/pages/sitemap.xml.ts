import { getProducts, getSiteData } from "../lib/content";

export function GET() {
  const site = getSiteData();
  const staticPages = ["/", "/products/", "/gallery/", "/about/", "/faq/", "/contact/"];
  const productPages = getProducts().map((product) => `/products/${product.slug}/`);
  const pages = [...staticPages, ...productPages];
  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((path) => `  <url><loc>${new URL(path, site.defaultSeo.siteUrl).toString()}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}

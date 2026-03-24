import { getSiteData } from "../lib/content";

export function GET() {
  const site = getSiteData();
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${new URL("/sitemap.xml", site.defaultSeo.siteUrl).toString()}`
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}

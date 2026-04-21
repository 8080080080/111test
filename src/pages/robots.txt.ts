import { getSiteData } from "../lib/content";

export const prerender = true;

export function GET() {
  const site = getSiteData();
  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("/sitemap.xml", site.defaultSeo.siteUrl).toString()}`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

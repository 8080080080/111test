import { getSiteData } from "../lib/content";

const AI_CRAWLERS = [
  "Amazonbot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ClaudeBot",
  "Google-Extended",
  "GPTBot",
  "meta-externalagent",
];

export function GET() {
  const site = getSiteData();
  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_CRAWLERS.flatMap((bot) => [
      `User-agent: ${bot}`,
      "Disallow: /",
      "",
    ]),
    `Sitemap: ${new URL("/sitemap.xml", site.defaultSeo.siteUrl).toString()}`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

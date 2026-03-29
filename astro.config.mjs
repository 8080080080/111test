import { defineConfig } from "astro/config";
import frontman from "@frontman-ai/astro";
import siteData from "./src/data/site.json" with { type: "json" };

export default defineConfig({
  integrations: [frontman({ projectRoot: import.meta.dirname })],
  site: siteData.defaultSeo.siteUrl,
  image: {
    responsiveStyles: true
  },
  output: "static",
  trailingSlash: "always"
});

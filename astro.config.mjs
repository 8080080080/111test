import { defineConfig } from "astro/config";
import siteData from "./src/data/site.json" with { type: "json" };

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: siteData.defaultSeo.siteUrl,

  image: {
    responsiveStyles: true
  },

  output: "static",
  trailingSlash: "always",
  adapter: cloudflare()
});
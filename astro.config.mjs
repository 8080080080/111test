import { defineConfig } from "astro/config";
import siteData from "./src/data/site.json" with { type: "json" };

export default defineConfig({
  site: siteData.defaultSeo.siteUrl,
  image: {
    responsiveStyles: true
  },
  output: "static",
  trailingSlash: "always"
});

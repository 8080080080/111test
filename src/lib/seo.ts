import { getSiteData } from "./content";

const site = getSiteData();

type SeoImage = string;

export interface SeoInput {
  title?: string;
  description?: string;
  image?: SeoImage;
  pathname?: string;
  keywords?: string[];
}

export function toAbsoluteUrl(pathOrUrl?: SeoImage): string {
  const value = pathOrUrl || site.defaultSeo.defaultImage;
  return new URL(value, site.defaultSeo.siteUrl).toString();
}

export function getCanonicalUrl(pathname = "/"): string {
  return new URL(pathname, site.defaultSeo.siteUrl).toString();
}

export function getMetaTitle(title?: string): string {
  if (!title) {
    return site.defaultSeo.defaultTitle;
  }

  return site.defaultSeo.titleTemplate.replace("%s", title);
}

export function getMetaDescription(description?: string): string {
  return description || site.defaultSeo.defaultDescription;
}

export function getMetaKeywords(keywords: string[] = []): string[] {
  return Array.from(
    new Set([
      ...site.defaultSeo.georgianKeywords,
      ...site.defaultSeo.localIntentKeywords,
      ...keywords
    ])
  );
}

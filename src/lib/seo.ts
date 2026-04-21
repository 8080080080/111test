import type { Locale } from "./content";
import { getSiteData } from "./content";

const site = getSiteData();

type SeoImage = string;

export function toAbsoluteUrl(pathOrUrl?: SeoImage): string {
  const value = pathOrUrl || site.defaultSeo.defaultImage;
  return new URL(value, site.defaultSeo.siteUrl).toString();
}

export function getCanonicalUrl(pathname = "/"): string {
  return new URL(pathname, site.defaultSeo.siteUrl).toString();
}

export function getMetaTitle(title?: string, locale: Locale = "ka"): string {
  const s = getSiteData(locale);
  if (!title) {
    return s.defaultSeo.defaultTitle;
  }
  const trimmed = title.trim();
  // Title already includes the brand segment (e.g. "… | Winsome თბილისი" or "Winsome | …"); avoid "… | Winsome | Winsome".
  if (/\|\s*Winsome/i.test(trimmed) || /^\s*Winsome\s*\|/i.test(trimmed)) {
    return trimmed;
  }
  return s.defaultSeo.titleTemplate.replace("%s", trimmed);
}

export function getMetaDescription(description?: string, locale: Locale = "ka"): string {
  const s = getSiteData(locale);
  return description || s.defaultSeo.defaultDescription;
}

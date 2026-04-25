import type { Locale } from "./content";

export function localizePath(path: string, locale: Locale): string {
  if (locale !== "en" || !path.startsWith("/") || path === "/en" || path.startsWith("/en/")) {
    return path;
  }

  return `/en${path}`;
}

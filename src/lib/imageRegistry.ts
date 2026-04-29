const jpgAssetFolders = new Set([
  "demo",
  "farda-roleti-catalog",
  "gofrirebuli-bade-catalog",
  "horizontaluri-catalog",
  "plise-catalog",
  "zebra-catalog",
  "zugdidi-hospital"
]);

const webpAssetFolders = new Set(["pleated-colors"]);

const assetExtensions: Record<string, string> = {
  /** Raster logo (pixel-accurate brand asset). Bump ?v= when the file changes. */
  "branding/winsome-logo": "png?v=20260421"
};

/** JPG paths (under /assets/images/) known to have a matching .webp alongside (optional pipeline). */
const jpgKeysWithWebp = new Set<string>([
  // e.g. "demo/roller-living" after adding roller-living.webp next to .jpg
]);

export function getImageAsset(key: string): string {
  if (key in assetExtensions) {
    return `/assets/images/${key}.${assetExtensions[key]}`;
  }

  const [folder] = key.split("/");

  if (folder && jpgAssetFolders.has(folder)) {
    return `/assets/images/${key}.jpg`;
  }

  if (folder && webpAssetFolders.has(folder)) {
    return `/assets/images/${key}.webp`;
  }

  throw new Error(`Unknown image asset key: ${key}`);
}

/** WebP sibling URL for a resolved JPG public path, only when listed in jpgKeysWithWebp. */
export function getWebpVariantUrl(jpgPublicPath: string): string | undefined {
  const withoutQuery = jpgPublicPath.split("?")[0] ?? jpgPublicPath;
  const m = withoutQuery.match(/^\/assets\/images\/(.+)\.jpg$/i);
  if (!m) {
    return undefined;
  }
  const key = m[1];
  if (!jpgKeysWithWebp.has(key)) {
    return undefined;
  }
  return `/assets/images/${key}.webp`;
}

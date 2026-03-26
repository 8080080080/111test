const jpgAssetFolders = new Set([
  "demo",
  "farda-roleti-catalog",
  "gofrirebuli-bade-catalog",
  "plise-catalog",
  "zebra-catalog"
]);

const assetExtensions: Record<string, string> = {
  "branding/winsome-logo": "png?v=20260326"
};

export function getImageAsset(key: string): string {
  if (key in assetExtensions) {
    return `/assets/images/${key}.${assetExtensions[key]}`;
  }

  const [folder] = key.split("/");

  if (folder && jpgAssetFolders.has(folder)) {
    return `/assets/images/${key}.jpg`;
  }

  throw new Error(`Unknown image asset key: ${key}`);
}

const jpgAssetFolders = new Set([
  "demo",
  "farda-roleti-catalog",
  "gofrirebuli-bade-catalog",
  "plise-catalog",
  "zebra-catalog"
]);

const optimizedJpgAssetFolders = new Set(["demo"]);
const optimizedAssetVersion = "v=20260327";
const assetExtensions: Record<string, string> = {
  "branding/winsome-logo": `png?${optimizedAssetVersion}`
};

export function getImageAsset(key: string): string {
  if (key in assetExtensions) {
    return `/assets/images/optimized/${key}.${assetExtensions[key]}`;
  }

  const [folder] = key.split("/");

  if (folder && optimizedJpgAssetFolders.has(folder)) {
    return `/assets/images/optimized/${key}.jpg?${optimizedAssetVersion}`;
  }

  if (folder && jpgAssetFolders.has(folder)) {
    return `/assets/images/${key}.jpg`;
  }

  throw new Error(`Unknown image asset key: ${key}`);
}

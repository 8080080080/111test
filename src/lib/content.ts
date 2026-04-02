import productsData from "../data/products.json";
import productsEnData from "../data/products.en.json";
import siteData from "../data/site.json";
import siteEnData from "../data/site.en.json";
import { getImageAsset } from "./imageRegistry";
import type {
  Product,
  ProductColorCollection,
  ProductColorCollectionItem,
  ProductImage,
  RawProduct,
  RawProductColorCollection,
  RawProductColorCollectionItem,
  RawProductImage,
  RawSiteData,
  SiteData
} from "../types/content";

export type Locale = "ka" | "en";

function resolveProductImage(image: RawProductImage): ProductImage {
  return {
    src: getImageAsset(image.src),
    alt: image.alt,
    width: image.width,
    height: image.height
  };
}

function resolveProductColorCollectionItem(item: RawProductColorCollectionItem): ProductColorCollectionItem {
  return {
    ...resolveProductImage(item),
    code: item.code
  };
}

function resolveProductColorCollection(collection: RawProductColorCollection): ProductColorCollection {
  return {
    ...collection,
    items: collection.items.map(resolveProductColorCollectionItem)
  };
}

function resolveProduct(product: RawProduct): Product {
  return {
    ...product,
    images: product.images.map(resolveProductImage),
    colorGallery: product.colorGallery?.map(resolveProductImage),
    colorCatalog: product.colorCatalog?.map(resolveProductImage),
    colorCollections: product.colorCollections?.map(resolveProductColorCollection)
  };
}

function resolveSiteData(data: RawSiteData): SiteData {
  return {
    ...data,
    logoImage: getImageAsset(data.logoImage),
    defaultSeo: {
      ...data.defaultSeo,
      defaultImage: getImageAsset(data.defaultSeo.defaultImage)
    },
    hero: {
      ...data.hero,
      slides: data.hero.slides.map((slide) => ({
        ...slide,
        image: getImageAsset(slide.image)
      }))
    },
    gallery: data.gallery.map((item) => ({
      ...item,
      image: getImageAsset(item.image)
    })),
    contact: {
      ...data.contact,
      mapPlaceholderImage: getImageAsset(data.contact.mapPlaceholderImage)
    }
  };
}

const site = resolveSiteData(siteData as RawSiteData);
const siteEn = resolveSiteData(siteEnData as RawSiteData);
const products = (productsData as RawProduct[]).map(resolveProduct);
const productsEn = (productsEnData as RawProduct[]).map(resolveProduct);

export function getSiteData(locale: Locale = "ka"): SiteData {
  return locale === "en" ? siteEn : site;
}

export function getProducts(locale: Locale = "ka"): Product[] {
  return locale === "en" ? productsEn : products;
}

export function getProductBySlug(slug: string, locale: Locale = "ka"): Product | undefined {
  const list = locale === "en" ? productsEn : products;
  return list.find((product) => product.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3, locale: Locale = "ka"): Product[] {
  const list = locale === "en" ? productsEn : products;
  return list.filter((product) => product.slug !== currentSlug).slice(0, limit);
}

export function getPhoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function getWhatsAppHref(value: string): string {
  if (value.startsWith("http")) {
    const url = new URL(value);
    if (!url.pathname || url.pathname === "/") {
      return "";
    }
    return value;
  }

  const digits = value.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}


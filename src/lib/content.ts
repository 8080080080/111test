import productsData from "../data/products.json";
import siteData from "../data/site.json";
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
const products = (productsData as RawProduct[]).map(resolveProduct);

export function getSiteData(): SiteData {
  return site;
}

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  return products.filter((product) => product.slug !== currentSlug).slice(0, limit);
}

export function getPhoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function getWhatsAppHref(value: string): string {
  if (value.startsWith("http")) {
    return value;
  }

  return `https://wa.me/${value.replace(/\D/g, "")}`;
}


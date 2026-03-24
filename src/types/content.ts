export interface NavItem {
  label: string;
  href: string;
}

export interface RawHeroSlide {
  image: string;
  alt: string;
}

export interface HeroSlide {
  image: string;
  alt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface RichSectionItem {
  title: string;
  description: string;
}

export interface RawGalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  relatedProductSlug?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  relatedProductSlug?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface RawProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ProductColorCollectionLayout = "fabric" | "pattern" | "sheet";

export interface RawProductColorCollectionItem extends RawProductImage {
  code: string;
}

export interface ProductColorCollectionItem extends ProductImage {
  code: string;
}

export interface RawProductColorCollection {
  name: string;
  layout?: ProductColorCollectionLayout;
  items: RawProductColorCollectionItem[];
}

export interface ProductColorCollection {
  name: string;
  layout?: ProductColorCollectionLayout;
  items: ProductColorCollectionItem[];
}

export interface RawProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  colors: ProductColor[];
  materials: string[];
  images: RawProductImage[];
  colorGallery?: RawProductImage[];
  colorCatalog?: RawProductImage[];
  colorCollections?: RawProductColorCollection[];
  seoTitle: string;
  seoDescription: string;
  faqs: FaqItem[];
  keywords: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  colors: ProductColor[];
  materials: string[];
  images: ProductImage[];
  colorGallery?: ProductImage[];
  colorCatalog?: ProductImage[];
  colorCollections?: ProductColorCollection[];
  seoTitle: string;
  seoDescription: string;
  faqs: FaqItem[];
  keywords: string[];
}

export interface RawSiteData {
  businessName: string;
  logoImage: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  businessDescription: string;
  tagline: string;
  serviceAreas: string[];
  socialLinks: {
    facebook?: string;
    whatsapp?: string;
  };
  defaultSeo: {
    siteUrl: string;
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultImage: string;
    ogImageAlt: string;
    georgianKeywords: string[];
    localIntentKeywords: string[];
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    slides: RawHeroSlide[];
  };
  homeIntro: {
    eyebrow: string;
    title: string;
    description: string;
    stats: StatItem[];
  };
  whyChooseUs: RichSectionItem[];
  process: RichSectionItem[];
  gallery: RawGalleryItem[];
  homeFaqs: FaqItem[];
  about: {
    story: string[];
    values: RichSectionItem[];
  };
  footer: {
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonLabel: string;
    ctaButtonHref: string;
    description: string;
    productLinks: NavItem[];
    resourceLinks: NavItem[];
    companyLinks: NavItem[];
    bottomLinks: NavItem[];
    copyright: string;
  };
  contact: {
    hours: string;
    whatsappLabel: string;
    mapPlaceholderTitle: string;
    mapPlaceholderDescription?: string;
    mapPlaceholderImage: string;
  };
}

export interface SiteData {
  businessName: string;
  logoImage: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
  businessDescription: string;
  tagline: string;
  serviceAreas: string[];
  socialLinks: {
    facebook?: string;
    whatsapp?: string;
  };
  defaultSeo: {
    siteUrl: string;
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultImage: string;
    ogImageAlt: string;
    georgianKeywords: string[];
    localIntentKeywords: string[];
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    slides: HeroSlide[];
  };
  homeIntro: {
    eyebrow: string;
    title: string;
    description: string;
    stats: StatItem[];
  };
  whyChooseUs: RichSectionItem[];
  process: RichSectionItem[];
  gallery: GalleryItem[];
  homeFaqs: FaqItem[];
  about: {
    story: string[];
    values: RichSectionItem[];
  };
  footer: {
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonLabel: string;
    ctaButtonHref: string;
    description: string;
    productLinks: NavItem[];
    resourceLinks: NavItem[];
    companyLinks: NavItem[];
    bottomLinks: NavItem[];
    copyright: string;
  };
  contact: {
    hours: string;
    whatsappLabel: string;
    mapPlaceholderTitle: string;
    mapPlaceholderDescription?: string;
    mapPlaceholderImage: string;
  };
}



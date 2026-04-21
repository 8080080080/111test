import type { FaqItem, Product, SiteData } from "../types/content";
import { getCanonicalUrl, toAbsoluteUrl } from "./seo";

export function createLocalBusinessSchema(site: SiteData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.defaultSeo.siteUrl}#localbusiness`,
    name: site.businessName,
    description: site.businessDescription,
    telephone: site.phone,
    email: site.email,
    url: site.defaultSeo.siteUrl,
    image: toAbsoluteUrl(site.defaultSeo.defaultImage),
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(site.logoImage)
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 Kakheti Hwy",
      addressLocality: "Tbilisi",
      addressCountry: "GE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.6866,
      longitude: 44.8998
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00"
    },
    priceRange: "$$",
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "City",
      name: area
    })),
    sameAs: Object.values(site.socialLinks).filter((url) => url && url.length > 0 && !url.endsWith("wa.me/"))
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path)
    }))
  };
}

export function createProductSchema(product: Product, site: SiteData, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${getCanonicalUrl(path)}#product`,
    name: product.name,
    description: product.seoDescription,
    sku: product.id,
    image: product.images.map((image) => toAbsoluteUrl(image.src)),
    category: "Window blinds",
    brand: {
      "@type": "Brand",
      name: site.businessName
    },
    url: getCanonicalUrl(path),
    material: product.materials.join(", "),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Use cases",
        value: product.useCases.join(", ")
      },
      {
        "@type": "PropertyValue",
        name: "Benefits",
        value: product.benefits.join(", ")
      }
    ]
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

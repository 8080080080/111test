# SEO & Rich Results QA checklist (Winsome)

Use this after deploys or content changes. Validate on **live** or **preview** URLs (`https://winsome.ge/...`).

## 1. Where JSON-LD appears

- Every page using `BaseLayout` injects **LocalBusiness** (from [`src/lib/schema.ts`](../src/lib/schema.ts) via [`src/layouts/BaseLayout.astro`](../src/layouts/BaseLayout.astro)) plus page-specific schemas passed as `schemas`.
- **View source** or DevTools → Elements: search for `application/ld+json`.

## 2. Google Rich Results Test

1. Open [Rich Results Test](https://search.google.com/test/rich-results).
2. Test these URLs (adjust host if staging):

| Page            | Example URL                         | Expected types                          |
|-----------------|-------------------------------------|-----------------------------------------|
| Homepage (ka)   | `https://winsome.ge/`               | LocalBusiness, FAQPage (if on page)     |
| Products (ka)   | `https://winsome.ge/products/`      | LocalBusiness, BreadcrumbList           |
| Product detail  | `https://winsome.ge/products/farda-roleti/` | LocalBusiness, BreadcrumbList, Product, FAQPage |
| FAQ (ka)        | `https://winsome.ge/faq/`           | LocalBusiness, BreadcrumbList, FAQPage  |
| English mirror  | `/en/...` equivalents               | Same pattern                            |

3. Confirm **no critical errors** on JSON-LD parse.
4. **Product**: Rich product snippets often require **price + currency** in `Offer`; we intentionally omit price until pricing is published—expect “warnings” only, not necessarily full merchant rich results.

## 3. Manual HTML checks (any crawler)

- **One `<h1>`** per page on: `/products/`, `/en/products/`, `/faq/`, `/en/faq/`, `/contact/`, `/en/contact/`, and each product detail page.
- **Canonical** + **hreflang** (`ka`, `en`, `x-default`): see [`src/components/SEO.astro`](../src/components/SEO.astro).

## 4. Images

- Logo: raster asset [`public/assets/images/branding/winsome-logo.png`](../public/assets/images/branding/winsome-logo.png) (resolved via [`src/lib/imageRegistry.ts`](../src/lib/imageRegistry.ts)).
- Optional **WebP** siblings for JPGs: add the file next to the `.jpg` and register the asset key in `jpgKeysWithWebp` in `imageRegistry.ts`.

## 5. Search Console (when available)

- After each deploy, confirm the sitemap responds before submitting in GSC:

```bash
curl -sI https://winsome.ge/sitemap.xml
curl -sI https://winsome.ge/robots.txt
```

Expect **HTTP 200** for both. Then submit: `https://winsome.ge/sitemap.xml`

- Monitor **Coverage**, **Enhancements** (FAQ, breadcrumbs), and **Core Web Vitals**.

## 6. Post-change command (repo maintenance)

After editing source files, run from repo root:

```bash
graphify update .
```

See [`AGENTS.md`](../AGENTS.md).

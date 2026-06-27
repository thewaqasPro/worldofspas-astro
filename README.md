# World of Spas — Astro Rebuild

A multi-brand, multi-location Astro 5 rebuild for World of Spas. The project is intentionally data-driven so new brands, products, locations, and reusable sections can be added without duplicating page markup.

## What was rebuilt

- Multi-brand homepage with modern hero slider
- Full mega menu and dropdown navigation
- Dynamic location selector using `localStorage`, URL query parameters, synced form fields, product availability badges, and visible product counts
- Brand directory and generated brand detail pages
- Hot tub pages by brand: Master Spas, Cal Spas, Dynasty Spas, DreamMaker Spas, CozyPro
- Swim spa pages by brand: Master Spas, Dynasty Spas
- Product categories: hot tubs, swim spas, cold plunge tubs, saunas, gazebos, patio heaters, pizza ovens, massage chairs, chemicals and filters
- Location pages for Calgary, Kelowna, Edmonton, Red Deer, and Saskatoon
- Product-detail pages generated from typed inventory data
- Support centre, book appointment, parts and service, resources, financing, about, contact, legal, accessibility, thank-you, and 404 pages
- Component library at `/components`, with individual pages for each custom component and source-file links
- Original SVG product illustrations and custom brand mark
- Netlify-ready forms with hidden context fields and honeypot protection
- SEO metadata, canonical tags, Open Graph data, and JSON-LD

## Important files

- `src/data/inventory.ts` — product/category/availability source of truth
- `src/data/brands.ts` — brand routes and brand metadata
- `src/data/locations.ts` — showroom data and map coordinates
- `src/data/components.ts` — component library docs
- `src/components/Header.astro` — mega menu and mobile navigation
- `src/components/LocationSelector.astro` — reusable location selector
- `src/components/HeroSlider.astro` — homepage slider
- `src/components/ProductCard.astro` — location-aware product card
- `src/components/InventoryToolbar.astro` — filters and sorting
- `src/layouts/Layout.astro` — SEO shell and global location/filter script

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run check
npm run build
npm run preview
```

## Before launch

1. Replace the demo domain in `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml`.
2. Connect products and inventory availability to the real source of truth: CMS, ERP, Shopify, or custom API.
3. Replace conceptual product illustrations with approved manufacturer images where licensing allows.
4. Replace placeholder prices/specifications and confirm all manufacturer claims.
5. Connect financing text to lender-approved language.
6. Replace privacy/terms pages with reviewed legal copy.
7. Connect form submissions to CRM, email automation, and store-routing logic.
8. Add official brand logos only after asset/licensing approval.

## Tailwind CSS 4

The project now uses Tailwind CSS 4 with the official `@tailwindcss/vite` plugin. It follows a hybrid strategy: utilities and theme tokens for new reusable UI, plus named CSS for complex navigation, slider, animation, and product-rendering behavior. See `TAILWIND_GUIDE.md`.

## Updated navigation behavior

- Desktop mega menus and dropdowns are positioned against the viewport and clamped to side gutters.
- Mobile Shop, Products, and Support items open as horizontal drill-down panels.
- Every child panel includes a Back button that returns to the main menu.
- The mobile drawer occupies the remaining viewport and never extends sideways.

## Custom location selector

The former native location select has been replaced everywhere with `LocationSelector.astro`, an accessible custom listbox/popover. It synchronizes query parameters, local storage, product availability, forms, labels, and all selector instances.

# Implementation notes

This rebuild intentionally moves World of Spas from a single-page feel into a scalable, data-driven Astro architecture.

## Request coverage

### Mega menu and dropdown menus

Implemented in `src/components/Header.astro`.

- Large "Shop" mega menu with hot tub brands, swim spa brands, wellness categories, and embedded location selector
- Smaller Products and Support dropdown menus
- Mobile drawer navigation
- Keyboard/click support and hover/focus behavior

### Modern hero and brand sliders

Implemented in:

- `src/components/HeroSlider.astro`
- `src/components/BrandCarousel.astro`

The hero slider includes autoplay, arrows, dots, multiple CTAs, location selector panel, and reduced-motion handling. The brand carousel uses shared brand data and can be reused anywhere.

### Functional location selector

Implemented in:

- `src/components/LocationSelector.astro`
- `src/layouts/Layout.astro`
- `src/components/ProductCard.astro`
- `src/components/InventoryToolbar.astro`
- `src/components/InquiryForm.astro`

The selector syncs across the site through localStorage and URL parameters. It updates:

- Header and hero selectors
- Product card availability
- Product detail availability
- Inventory counts
- Form location fields
- Active location buttons and map pins

### More pages and scalable routing

The build generates 76 pages, including:

- Home
- Brand directory and 10 brand pages
- Hot tubs index and 5 brand-specific hot tub pages
- Swim spas index and 2 brand-specific swim spa pages
- Cold plunge and sauna landing pages
- Products index and 5 accessory category pages
- 16 product-detail pages
- Locations index and 5 location pages
- Support, appointment, parts/service, resources
- Financing, about, contact, legal, accessibility, thank-you, 404
- Component library and 12 component detail pages

### Reusable component links

The component library is available at `/components`. Individual component pages link each reusable block to its source file path.

## Production caution

The project includes original brand-card treatments and conceptual product drawings. It does not copy official manufacturer logos or product photography. Add approved logos, real photography, real specifications, and live inventory feeds before launch.

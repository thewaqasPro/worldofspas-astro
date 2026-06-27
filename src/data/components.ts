export interface ComponentDoc {
  slug: string;
  title: string;
  source: string;
  description: string;
  usage: string;
  reusableFor: string[];
}

export const componentDocs: ComponentDoc[] = [
  {
    slug: 'header-mega-menu',
    title: 'Header + Mega Menu',
    source: 'src/components/Header.astro',
    description:
      'Primary navigation with a full-width shop mega menu, smaller dropdown menus, mobile drawer, and embedded location selector.',
    usage: '<Header />',
    reusableFor: ['Primary navigation', 'Desktop mega menus', 'Mobile drill-down shopping flows'],
  },
  {
    slug: 'location-selector',
    title: 'Location Selector',
    source: 'src/components/LocationSelector.astro',
    description:
      'Reusable selector that syncs with localStorage, query parameters, forms, availability cards, and location labels.',
    usage: '<LocationSelector id="catalog-location" label="Shop by location" name="location" />',
    reusableFor: ['Header', 'Hero panel', 'Forms', 'Inventory filters'],
  },
  {
    slug: 'hero-slider',
    title: 'Hero Slider',
    source: 'src/components/HeroSlider.astro',
    description:
      'Modern homepage slider with image backgrounds, CTAs, dots, arrows, autoplay, and reduced-motion support.',
    usage: '<HeroSlider />',
    reusableFor: ['Home page', 'Campaign landing pages', 'Seasonal sale pages'],
  },
  {
    slug: 'brand-carousel',
    title: 'Brand Carousel',
    source: 'src/components/BrandCarousel.astro',
    description: 'CSS-powered featured brand rail with duplicated data for seamless marquee-style movement.',
    usage: '<BrandCarousel />',
    reusableFor: ['Homepage', 'Brand directory', 'Campaign pages'],
  },
  {
    slug: 'product-card',
    title: 'Product Card',
    source: 'src/components/ProductCard.astro',
    description:
      'Location-aware catalog card with conceptual product rendering, badges, specs, availability label, and detail link.',
    usage: '<ProductCard item={item} />',
    reusableFor: ['Catalog pages', 'Brand pages', 'Location pages', 'Related products'],
  },
  {
    slug: 'product-visual',
    title: 'Product Visual',
    source: 'src/components/ProductVisual.astro',
    description:
      'Original SVG product renderer that adapts to hot tubs, swim spas, cold tubs, saunas, and accessories.',
    usage: '<ProductVisual name={item.name} category={item.category} />',
    reusableFor: ['Product cards', 'Detail pages', 'Placeholder imagery'],
  },
  {
    slug: 'inventory-toolbar',
    title: 'Inventory Toolbar',
    source: 'src/components/InventoryToolbar.astro',
    description:
      'Filter bar for location-aware inventory pages with brand filter, sorting, visible counts, and reset control.',
    usage: '<InventoryToolbar resultLabel="products" />',
    reusableFor: ['Category pages', 'Brand pages', 'Location pages'],
  },
  {
    slug: 'location-map',
    title: 'Location Map',
    source: 'src/components/LocationMap.astro',
    description: 'Stylized Western Canada map panel using the shared locations data model.',
    usage: '<LocationMap active="calgary" />',
    reusableFor: ['Locations index', 'Location detail pages', 'Footer/local campaigns'],
  },
  {
    slug: 'inquiry-form',
    title: 'Inquiry Form',
    source: 'src/components/InquiryForm.astro',
    description:
      'Netlify-ready inquiry form with hidden context, preferred location sync, consent fields, and broad product-interest support.',
    usage: '<InquiryForm context="Product page" />',
    reusableFor: ['Contact', 'Appointment booking', 'Product details', 'Financing'],
  },
  {
    slug: 'category-tile',
    title: 'Category Tile',
    source: 'src/components/CategoryTile.astro',
    description: 'Reusable category link card for product families and support flows.',
    usage: '<CategoryTile label="Hot Tubs" href="/hot-tubs" />',
    reusableFor: ['Home page', 'Products index', 'Support index'],
  },
  {
    slug: 'section-heading',
    title: 'Section Heading',
    source: 'src/components/SectionHeading.astro',
    description: 'Consistent eyebrow, heading, and description block with alignment and light/dark themes.',
    usage: '<SectionHeading eyebrow="Shop" title="Browse products" />',
    reusableFor: ['Every landing page', 'Component docs'],
  },
  {
    slug: 'brand-mark',
    title: 'Brand Mark',
    source: 'src/components/BrandMark.astro',
    description: 'Original SVG brand mark and text treatment used in header and footer.',
    usage: '<BrandMark />',
    reusableFor: ['Header', 'Footer', 'Auth/print layouts'],
  },
];

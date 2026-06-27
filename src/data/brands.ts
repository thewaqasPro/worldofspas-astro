export type BrandSlug =
  | 'master-spas'
  | 'cal-spas'
  | 'dynasty-spas'
  | 'dreammaker-spas'
  | 'cozypro'
  | 'leisurecraft'
  | 'chilly-goat'
  | 'bull-bbq'
  | 'prism'
  | 'osaki';

export interface Brand {
  slug: BrandSlug;
  name: string;
  shortName: string;
  category: 'hot-tubs' | 'swim-spas' | 'saunas' | 'cold-plunge' | 'outdoor-living' | 'massage';
  tagline: string;
  description: string;
  color: string;
  textColor: string;
  featured?: boolean;
  authorizedNote?: string;
  routes: { label: string; href: string }[];
}

export const brands: Brand[] = [
  {
    slug: 'master-spas',
    name: 'Master Spas',
    shortName: 'Master',
    category: 'hot-tubs',
    tagline: 'Premium hot tubs and swim spas',
    description:
      'Premium hydrotherapy, performance swim spas, and comfort-focused designs for year-round ownership.',
    color: '#0b2d4d',
    textColor: '#ffffff',
    featured: true,
    authorizedNote: 'Authorized Master Spas dealer experience for Alberta shoppers.',
    routes: [
      { label: 'Hot tubs', href: '/hot-tubs/master-spas' },
      { label: 'Swim spas', href: '/swim-spas/master-spas' },
      { label: 'Cold plunge', href: '/cold-plunge-tubs' },
    ],
  },
  {
    slug: 'cal-spas',
    name: 'Cal Spas',
    shortName: 'Cal',
    category: 'hot-tubs',
    tagline: 'California-inspired relaxation',
    description: 'Comfortable hot tub models across lifestyle, family, and value-focused lineups.',
    color: '#5a1536',
    textColor: '#ffffff',
    featured: true,
    routes: [{ label: 'Hot tubs', href: '/hot-tubs/cal-spas' }],
  },
  {
    slug: 'dynasty-spas',
    name: 'Dynasty Spas',
    shortName: 'Dynasty',
    category: 'hot-tubs',
    tagline: 'Feature-rich comfort and value',
    description: 'Hot tubs and swim spas with extensive comfort features and strong model variety.',
    color: '#26313a',
    textColor: '#ffffff',
    featured: true,
    routes: [
      { label: 'Hot tubs', href: '/hot-tubs/dynasty-spas' },
      { label: 'Swim spas', href: '/swim-spas/dynasty-spas' },
    ],
  },
  {
    slug: 'dreammaker-spas',
    name: 'DreamMaker Spas',
    shortName: 'DreamMaker',
    category: 'hot-tubs',
    tagline: 'Durable, approachable hot tubs',
    description:
      'Accessible hot tubs with lightweight rotationally molded construction and everyday simplicity.',
    color: '#125f86',
    textColor: '#ffffff',
    featured: true,
    routes: [{ label: 'Hot tubs', href: '/hot-tubs/dreammaker-spas' }],
  },
  {
    slug: 'cozypro',
    name: 'CozyPro',
    shortName: 'CozyPro',
    category: 'hot-tubs',
    tagline: 'Compact comfort for smaller spaces',
    description: 'Comfort-first compact spas for patios, townhomes, cabins, and intimate backyard retreats.',
    color: '#30544a',
    textColor: '#ffffff',
    featured: true,
    routes: [{ label: 'Hot tubs', href: '/hot-tubs/cozypro' }],
  },
  {
    slug: 'leisurecraft',
    name: 'Leisurecraft',
    shortName: 'Leisurecraft',
    category: 'saunas',
    tagline: 'Canadian-made sauna experiences',
    description: 'Outdoor sauna and wellness structures for cold-weather relaxation and recovery routines.',
    color: '#6b3d22',
    textColor: '#ffffff',
    featured: true,
    routes: [{ label: 'Saunas', href: '/saunas' }],
  },
  {
    slug: 'chilly-goat',
    name: 'Chilly Goat',
    shortName: 'Chilly Goat',
    category: 'cold-plunge',
    tagline: 'Cold plunge recovery by Master Spas',
    description: 'Cold tubs for contrast therapy, post-training routines, and high-performance recovery.',
    color: '#0d5366',
    textColor: '#ffffff',
    featured: true,
    routes: [{ label: 'Cold plunge', href: '/cold-plunge-tubs' }],
  },
  {
    slug: 'bull-bbq',
    name: 'Bull BBQ',
    shortName: 'Bull',
    category: 'outdoor-living',
    tagline: 'Outdoor cooking upgrades',
    description: 'Pizza ovens and outdoor cooking accessories for finished backyard living spaces.',
    color: '#8a3324',
    textColor: '#ffffff',
    routes: [{ label: 'Pizza ovens', href: '/products/pizza-ovens' }],
  },
  {
    slug: 'prism',
    name: 'Prism Hardscapes',
    shortName: 'Prism',
    category: 'outdoor-living',
    tagline: 'Patio heat and ambience',
    description: 'Fire and patio-heating features that make outdoor spaces more useful in shoulder seasons.',
    color: '#3d2b26',
    textColor: '#ffffff',
    routes: [{ label: 'Patio heaters', href: '/products/patio-heaters' }],
  },
  {
    slug: 'osaki',
    name: 'Osaki',
    shortName: 'Osaki',
    category: 'massage',
    tagline: 'Massage chairs and recovery',
    description: 'Indoor recovery options that extend the showroom wellness experience beyond water.',
    color: '#403b63',
    textColor: '#ffffff',
    routes: [{ label: 'Massage chairs', href: '/products/massage-chairs' }],
  },
];

export const hotTubBrands = brands.filter((brand) =>
  ['master-spas', 'cal-spas', 'dynasty-spas', 'dreammaker-spas', 'cozypro'].includes(brand.slug),
);
export const swimSpaBrands = brands.filter((brand) => ['master-spas', 'dynasty-spas'].includes(brand.slug));
export const featuredBrands = brands.filter((brand) => brand.featured);
export const getBrand = (slug: string) => brands.find((brand) => brand.slug === slug);

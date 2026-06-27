export type LocationSlug = 'calgary' | 'kelowna' | 'edmonton' | 'red-deer' | 'saskatoon';

export interface StoreLocation {
  slug: LocationSlug;
  city: string;
  province: 'AB' | 'BC' | 'SK';
  region: string;
  phone: string;
  phoneHref: string;
  address: string;
  postalCode: string;
  hours: string;
  showroomSize: string;
  serviceNotes: string;
  coordinates: { x: number; y: number };
  highlights: string[];
}

export const locations: StoreLocation[] = [
  {
    slug: 'calgary',
    city: 'Calgary',
    province: 'AB',
    region: 'Southern Alberta',
    phone: '403-770-9564',
    phoneHref: 'tel:+14037709564',
    address: '6201 Centre Street South, Calgary, AB',
    postalCode: 'T2H 0C7',
    hours: 'Mon–Fri 10–6 · Sat 10–5 · Sun 11–4',
    showroomSize: 'Flagship showroom',
    serviceNotes:
      'Large display floor, water-care desk, delivery planning, and regional service centre access.',
    coordinates: { x: 39, y: 55 },
    highlights: ['Largest model display', 'Master Spas focus', 'Parts desk', 'Delivery planning'],
  },
  {
    slug: 'kelowna',
    city: 'Kelowna',
    province: 'BC',
    region: 'Okanagan',
    phone: '778-484-8989',
    phoneHref: 'tel:+17784848989',
    address: '101, 1889 Spall Road, Kelowna, BC',
    postalCode: 'V1W 2X7',
    hours: 'Mon–Fri 10–6 · Sat 10–5',
    showroomSize: 'Okanagan showroom',
    serviceNotes: 'Hot tubs, swim spas, saunas, seasonal backyard products, and local ownership support.',
    coordinates: { x: 27, y: 46 },
    highlights: ['Okanagan climate advice', 'Sauna planning', 'Wet-test appointments', 'Local service'],
  },
  {
    slug: 'edmonton',
    city: 'Edmonton',
    province: 'AB',
    region: 'Northern Alberta',
    phone: '780-436-7727',
    phoneHref: 'tel:+17804367727',
    address: '6120 99 Street NW, Edmonton, AB',
    postalCode: 'T6E 3P2',
    hours: 'Mon–Fri 10–6 · Sat 10–5 · Sun 12–4',
    showroomSize: 'Metro Edmonton showroom',
    serviceNotes: 'Cold-weather ownership guidance, service scheduling, and broad hot tub inventory.',
    coordinates: { x: 44, y: 29 },
    highlights: ['Cold-weather planning', 'Swim spa expertise', 'Service scheduling', 'Financing support'],
  },
  {
    slug: 'red-deer',
    city: 'Red Deer',
    province: 'AB',
    region: 'Central Alberta',
    phone: '403-358-6060',
    phoneHref: 'tel:+14033586060',
    address: '6013 48 Avenue #2, Red Deer, AB',
    postalCode: 'T4N 3V5',
    hours: 'Tue–Fri 10–6 · Sat 10–5',
    showroomSize: 'Central Alberta showroom',
    serviceNotes:
      'Central Alberta showroom with compact spas, family models, patio products, and service support.',
    coordinates: { x: 41, y: 43 },
    highlights: ['Central location', 'Compact models', 'Patio products', 'Owner education'],
  },
  {
    slug: 'saskatoon',
    city: 'Saskatoon',
    province: 'SK',
    region: 'Saskatchewan',
    phone: '306-664-8827',
    phoneHref: 'tel:+13066648827',
    address: '103 Marquis Dr Suite 118, Saskatoon, SK',
    postalCode: 'S7P 0C4',
    hours: 'Mon–Fri 10–6 · Sat 10–5',
    showroomSize: 'Saskatchewan showroom',
    serviceNotes: 'Saskatchewan showroom for hot tubs, swim spas, owner support, and backyard upgrades.',
    coordinates: { x: 62, y: 45 },
    highlights: ['Saskatchewan service', 'Family spas', 'Water-care support', 'Swim spas'],
  },
];

export const defaultLocation: LocationSlug = 'calgary';
export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);

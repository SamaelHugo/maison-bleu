import { Product, Collection } from './types'

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Cuisines',
    description: 'Cuisines faconnees a la main, definies par l\'usage. Cadres en bois massif, plans de travail en pierre naturelle, quincaillerie forgee en petites series.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    slug: 'cuisine',
  },
  {
    id: '2',
    name: 'Salle \u00e0 Manger',
    description: 'Tables et chaises construites pour les longues soirees. Chene, noyer et frene, assembles sans precipitation.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    slug: 'salle-a-manger',
  },
  {
    id: '3',
    name: 'Cabinets',
    description: 'Bureaux et bibliotheques en bois noble. Des pieces de travail pensees pour le calme et la concentration.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    slug: 'cabinets',
  },
]

export const products: Product[] = [
  {
    id: '1',
    slug: 'table-normandie',
    name: 'Table Normandie',
    price: 4200,
    category: 'salle-a-manger',
    description: 'A dining table in solid oak with hand-turned legs and a waxed finish. Seats eight comfortably. The grain of each tabletop is unique, selected for character.',
    materials: ['Solid oak', 'Natural wax finish', 'Forged iron stretchers'],
    dimensions: '220 x 100 x 76 cm',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    ],
  },
  {
    id: '2',
    slug: 'chaise-lyon',
    name: 'Chaise Lyon',
    price: 890,
    category: 'salle-a-manger',
    description: 'A dining chair with a curved backrest in steam-bent ash. The seat is woven in natural rush by a vanniere in the Loire Valley.',
    materials: ['Steam-bent ash', 'Natural rush seat', 'Oil finish'],
    dimensions: '45 x 52 x 82 cm',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    ],
  },
  {
    id: '3',
    slug: 'buffet-provence',
    name: 'Buffet Provence',
    price: 5800,
    category: 'salon',
    description: 'A sideboard in walnut with dovetailed drawers and hand-forged brass pulls. Two doors conceal adjustable shelving.',
    materials: ['Solid walnut', 'Brass hardware', 'Beeswax finish'],
    dimensions: '180 x 45 x 90 cm',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    ],
  },
  {
    id: '4',
    slug: 'cuisine-bastide',
    name: 'Cuisine Bastide',
    price: 18500,
    category: 'cuisine',
    description: 'A complete kitchen in brushed oak with honed limestone countertops. Every cabinet is built to order in our atelier.',
    materials: ['Brushed oak', 'Honed limestone', 'Brass fittings'],
    dimensions: 'Sur mesure',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: '5',
    slug: 'canape-riviera',
    name: 'Canape Riviera',
    price: 6400,
    category: 'salon',
    description: 'A sofa with a solid beech frame and cushions in washed linen. Deep seat, low back, proportions that invite rest.',
    materials: ['Solid beech frame', 'Washed linen upholstery', 'Down-feather cushions'],
    dimensions: '230 x 95 x 72 cm',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
  },
  {
    id: '6',
    slug: 'etagere-atelier',
    name: 'Etagere Atelier',
    price: 2100,
    category: 'salon',
    description: 'Open shelving in blackened steel and aged oak. Five shelves, each plank selected for its particular grain.',
    materials: ['Aged oak planks', 'Blackened steel frame', 'Wax finish'],
    dimensions: '120 x 35 x 200 cm',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80',
    ],
  },
]

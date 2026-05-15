export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  category: string
  badge?: string
  certifications: string[]
  description: string
  color: string
  emoji: string
  isNew?: boolean
  isBestseller?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Cloud Lounger Pro',
    price: 89,
    originalPrice: 119,
    rating: 4.9,
    reviewCount: 1243,
    category: 'Loungers',
    badge: 'Bestseller',
    certifications: ['CPSC', 'ASTM'],
    description: 'Ergonomic infant lounger with breathable organic cotton cover and kapok filling. Perfect for supervised tummy time.',
    color: 'from-sage-100 to-sage-200',
    emoji: '🌙',
    isBestseller: true,
  },
  {
    id: '2',
    name: 'DreamNest Head Support',
    price: 34,
    rating: 4.8,
    reviewCount: 876,
    category: 'Head & Neck',
    badge: 'New',
    certifications: ['CE', 'OEKO-TEX'],
    description: 'Gentle head and neck support cushion made from hypoallergenic memory foam with organic cotton shell.',
    color: 'from-blush-100 to-blush-200',
    emoji: '💫',
    isNew: true,
  },
  {
    id: '3',
    name: 'Serene Bumper Set',
    price: 67,
    originalPrice: 89,
    rating: 4.7,
    reviewCount: 542,
    category: 'Bed Bumpers',
    certifications: ['CPSC', 'EN71'],
    description: 'Breathable mesh bumper set with anti-roll design. Machine washable and designed for safety.',
    color: 'from-cream-100 to-cream-200',
    emoji: '🌿',
    isBestseller: false,
  },
  {
    id: '4',
    name: 'NestPillow Nursing Cushion',
    price: 54,
    rating: 4.9,
    reviewCount: 2104,
    category: 'Feeding',
    badge: 'Top Rated',
    certifications: ['CPSC', 'OEKO-TEX'],
    description: 'Multi-use nursing pillow that supports breastfeeding, bottle feeding, and tummy time. Ergonomic arc design.',
    color: 'from-sage-50 to-blush-100',
    emoji: '🤱',
    isBestseller: true,
  },
  {
    id: '5',
    name: 'SoftNest Travel Lounger',
    price: 72,
    rating: 4.6,
    reviewCount: 389,
    category: 'Loungers',
    certifications: ['ASTM', 'CE'],
    description: 'Ultra-portable, foldable lounger for travel. Quick-dry fabric, machine washable, and fits in any diaper bag.',
    color: 'from-blush-50 to-sage-100',
    emoji: '✈️',
    isNew: true,
  },
  {
    id: '6',
    name: 'ErgoWrap Swaddle Set',
    price: 42,
    originalPrice: 56,
    rating: 4.8,
    reviewCount: 731,
    category: 'Sleep',
    badge: 'Sale',
    certifications: ['OEKO-TEX', 'GOTS'],
    description: '3-pack organic cotton swaddle wraps. Easy velcro closure helps prevent startle reflex. 0–6 months.',
    color: 'from-cream-200 to-blush-100',
    emoji: '👶',
  },
]

export const categories = [
  { name: 'Loungers & Positioners', slug: 'loungers', emoji: '🌙', description: 'Supervised comfort for awake time', count: 24 },
  { name: 'Head & Neck Support', slug: 'head-neck', emoji: '💆', description: 'Gentle shaping prevention', count: 18 },
  { name: 'Bed Bumpers', slug: 'bumpers', emoji: '🛏️', description: 'Safe, breathable mesh options', count: 12 },
  { name: 'Feeding & Nursing', slug: 'feeding', emoji: '🤱', description: 'Support for every feeding moment', count: 31 },
]

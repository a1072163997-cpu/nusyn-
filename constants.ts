import { Category, Product } from './types';
import { ShieldCheck, CreditCard, Truck, Award, RefreshCw, Headphones, Gift, Clock } from 'lucide-react';

export const PRODUCTS: Product[] = [
  {
    id: 'ssd-pro-1',
    name: 'Nusyn Titan SSD Pro',
    tagline: 'Unbreakable Speed.',
    price: 199.99,
    category: Category.STORAGE,
    image: 'https://picsum.photos/800/800?random=1',
    specs: ['2000MB/s Read', 'IP67 Waterproof', 'Drop Resistant 3m', '2TB / 4TB'],
    rating: 4.9,
    reviews: 1240,
    featured: true
  },
  {
    id: 'ssd-mini-2',
    name: 'Nusyn Atom Drive',
    tagline: 'Storage that fits your pocket.',
    price: 89.99,
    category: Category.STORAGE,
    image: 'https://picsum.photos/800/800?random=2',
    specs: ['1050MB/s Read', 'Ultra Compact', 'USB-C 3.2', '1TB'],
    rating: 4.7,
    reviews: 850,
    featured: false
  },
  {
    id: 'dock-thunder-1',
    name: 'Nusyn Nexus Thunderbolt 4',
    tagline: 'The ultimate command center.',
    price: 299.99,
    category: Category.DOCK,
    image: 'https://picsum.photos/800/800?random=3',
    specs: ['16 Ports', '90W PD Charging', 'Dual 4K 60Hz', 'SD UHS-II'],
    rating: 4.8,
    reviews: 530,
    featured: true
  },
  {
    id: 'dock-travel-2',
    name: 'Nusyn Voyager Hub',
    tagline: 'Connect anywhere, instantly.',
    price: 59.99,
    category: Category.DOCK,
    image: 'https://picsum.photos/800/800?random=4',
    specs: ['7-in-1 Design', 'HDMI 4K', 'Pass-through Charging', 'Lightweight'],
    rating: 4.6,
    reviews: 2100,
    featured: false
  },
  {
    id: 'ssd-secure-3',
    name: 'Nusyn Vault Encrypted',
    tagline: 'Your data, locked down.',
    price: 149.99,
    category: Category.STORAGE,
    image: 'https://picsum.photos/800/800?random=5',
    specs: ['AES-256 Hardware Encryption', 'Keypad Unlock', 'Rugged Rubber Shell'],
    rating: 4.8,
    reviews: 320,
    featured: false
  },
  {
    id: 'dock-creative-3',
    name: 'Nusyn Canvas Station',
    tagline: 'Built for creators.',
    price: 179.99,
    category: Category.DOCK,
    image: 'https://picsum.photos/800/800?random=6',
    specs: ['CFexpress Slot', '10Gbps USB-C', 'DisplayPort 1.4', 'Magnetic Mount'],
    rating: 4.9,
    reviews: 410,
    featured: true
  }
];

export const NAV_LINKS = [
  { name: 'Products', href: '#products' },
  { name: 'Sale', href: '#sale', isSpecial: true },
  { name: 'About Nusyn', href: '#about' },
  { name: 'Support', href: '#support' },
];

export const ENDORSEMENTS = [
  {
    source: "TechRadar",
    quote: "The Apple of portable rugged storage. Nusyn redefines durability without sacrificing speed.",
    award: "Editor's Choice 2024"
  },
  {
    source: "Forbes",
    quote: "Finally, a docking station that doesn't look like a brick and performs like a beast.",
    award: "Best Accessory 2023"
  },
  {
    source: "The Verge",
    quote: "Essential gear for the modern digital nomad. It survived our drop tests with zero data loss.",
    award: "Rugged Certified"
  }
];

export const ADVANTAGES = [
  { icon: ShieldCheck, title: "Authenticity Guarantee", desc: "100% Genuine, Quality Assured" },
  { icon: CreditCard, title: "Secure Payment", desc: "Supports Multiple Payment Methods" },
  { icon: Clock, title: "Buy Now Pay Later", desc: "Flexible Installment Plans Available" },
  { icon: Truck, title: "Fast & Free Shipping", desc: "2-5 Business Days Fedex Shipping" },
  { icon: Gift, title: "Nusyn Membership", desc: "Earn Points, Redeem Benefits" },
  { icon: Award, title: "Free Automatic Warranty", desc: "Up to 5 Years Extended Warranty" },
  { icon: RefreshCw, title: "30-Day Price Guarantee", desc: "The best deal, guaranteed" },
  { icon: Headphones, title: "Customer Service", desc: "Professional Service Support" },
];

export const REVIEWS = [
  {
    id: 1,
    user: "Sarah Jenkins",
    role: "Professional Photographer",
    content: "I dropped my Titan SSD into a river during a shoot in Iceland. Fished it out, dried it off, and it worked perfectly. Absolutely insane build quality.",
    rating: 5,
    product: "Nusyn Titan SSD Pro"
  },
  {
    id: 2,
    user: "Marcus Chen",
    role: "Software Developer",
    content: "The Nexus dock handles my dual 4K monitors + charging my MacBook Pro without breaking a sweat. Finally, a one-cable solution that actually works.",
    rating: 5,
    product: "Nusyn Nexus Thunderbolt 4"
  },
  {
    id: 3,
    user: "Elena Rodriguez",
    role: "Travel Vlogger",
    content: "Small, fast, and indestructible. The Atom Drive is now a permanent part of my carry-on. Highly recommended for anyone traveling.",
    rating: 4,
    product: "Nusyn Atom Drive"
  }
];

export const TRADE_IN_VALUES = [
  { model: "Explorer 300", value: "Up to $80" },
  { model: "Explorer 500", value: "Up to $120" },
  { model: "Explorer 1000", value: "Up to $240" },
  { model: "Explorer 1500", value: "Up to $350" },
  { model: "Explorer 2000", value: "Up to $430" },
  { model: "Titan SSD v1", value: "Up to $40" },
];
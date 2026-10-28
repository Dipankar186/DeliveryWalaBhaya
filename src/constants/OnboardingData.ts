export interface OnboardingSlideItem {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  tagline: string;
  illustrationType: 'explore' | 'speed' | 'tracking' | 'payment';
  featureHighlights: string[];
}

export const ONBOARDING_DATA: OnboardingSlideItem[] = [
  {
    id: '1',
    stepNumber: '01 / 04',
    badge: '🍽️ CURATED VARIETY',
    title: 'Discover Top Food & Local Restaurants',
    description:
      'Craving Biryani, Pizza, or sweet treats? Find the highest-rated kitchens and street gems right in your neighborhood.',
    tagline: '5,000+ Handpicked Restaurants',
    illustrationType: 'explore',
    featureHighlights: ['Chef Specials', 'Hygiene Verified', 'Best Price'],
  },
  {
    id: '2',
    stepNumber: '02 / 04',
    badge: '⚡ FLASH DELIVERY',
    title: 'Superfast Delivery By DeliveryWala Bhaiya',
    description:
      'Hot and fresh meals delivered straight to your door in record time by our dedicated rider partners.',
    tagline: 'Hot & Fresh in 20-30 Mins',
    illustrationType: 'speed',
    featureHighlights: ['Insulated Bags', 'Zero Delay Guarantee', 'Contactless'],
  },
  {
    id: '3',
    stepNumber: '03 / 04',
    badge: '📍 LIVE GPS RADAR',
    title: 'Pinpoint Real-Time Order Tracking',
    description:
      'Watch your meal from the kitchen pan to your hands with real-time GPS map tracking and live minute-by-minute ETA.',
    tagline: 'Live Map & Rider Direct Call',
    illustrationType: 'tracking',
    featureHighlights: ['Live Map View', 'Rider Connect', 'Exact ETA'],
  },
  {
    id: '4',
    stepNumber: '04 / 04',
    badge: '💳 SAFE & REWARDING',
    title: 'Seamless Payments & Instant Discounts',
    description:
      'Pay smoothly via UPI (GPay, PhonePe, Paytm), Cards, Netbanking or Cash on Delivery. Enjoy exclusive daily discounts!',
    tagline: 'Up to 50% OFF on First 5 Orders',
    illustrationType: 'payment',
    featureHighlights: ['Instant UPI', 'Cash on Delivery', '100% Secure'],
  },
];


import type { PricingTier } from '../../../types';

export const pricingTiers: PricingTier[] = [
    {
        name: 'BASIC',
        price: 49,
        description: 'Perfect for the self-starter who needs access to top-tier equipment.',
        features: [
            '24/7 Gym Access',
            'Locker Room & Showers',
            'Free WiFi',
            '1 Intro PT Session',
            'Standard App Access'
        ],
        isPopular: false
    },
    {
        name: 'PREMIUM',
        price: 89,
        description: 'Access to classes and recovery amenities for serious athletes.',
        features: [
            'All Basic Features',
            'Unlimited Group Classes',
            'Sauna & Steam Room',
            '2 PT Sessions / Month',
            'Nutrition Planning App',
            'Guest Privileges'
        ],
        isPopular: true
    },
    {
        name: 'ELITE',
        price: 149,
        description: 'The ultimate package for complete transformation and support.',
        features: [
            'All Premium Features',
            'Weekly PT Session',
            'Custom Meal Prep Delivery',
            'Massage Therapy (1x/mo)',
            'Private Locker',
            'Priority Booking'
        ],
        isPopular: false
    }
];

import type { PricingTier } from '../../../types';

export interface PricingProps {
    className?: string;
}

export interface PricingCardProps {
    tier: PricingTier;
    index: number;
}

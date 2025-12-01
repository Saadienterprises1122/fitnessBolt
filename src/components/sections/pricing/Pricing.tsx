import type { PricingProps } from './PricingTypes';
import PricingCard from './PricingCard';
import { pricingTiers } from './pricingData';

const Pricing: React.FC<PricingProps> = ({ className = '' }) => {
    return (
        <section id="pricing" className={`py-24 bg-brand-black relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-3">Membership</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">CHOOSE YOUR TIER</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {pricingTiers.map((tier, index) => (
                        <PricingCard key={index} tier={tier} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

import { Check } from 'lucide-react';
import type { PricingCardProps } from './PricingTypes';

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
    const isPopular = tier.isPopular;

    if (isPopular) {
        return (
            <div className="bg-brand-yellow rounded-3xl p-8 transform scale-105 shadow-xl relative z-10">
                <div className="absolute top-0 right-0 bg-black text-brand-yellow text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                    Most Popular
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-2">{tier.name}</h4>
                <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-black text-brand-black">${tier.price}</span>
                    <span className="text-brand-black/70 ml-2">/month</span>
                </div>
                <p className="text-brand-black/80 text-sm mb-8">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-brand-black font-semibold">
                            <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center mr-3 shrink-0">
                                <Check className="w-3 h-3 text-brand-yellow" />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-black text-brand-yellow font-bold hover:bg-gray-900 transition-all shadow-lg">
                    SELECT PLAN
                </button>
            </div>
        );
    }

    return (
        <div className="bg-brand-gray rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all">
            <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
            <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black text-white">${tier.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">{tier.description}</p>
            <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand-yellow mr-3 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-brand-black transition-all">
                SELECT PLAN
            </button>
        </div>
    );
};

export default PricingCard;

import type { FeaturesProps } from './FeaturesTypes';
import FeatureCard from './FeatureCard';
import { features } from './featuresData';


const Features: React.FC<FeaturesProps> = ({ className = '' }) => {
    return (
        <section className={`py-24 bg-brand-black border-y border-white/5 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-3">Why Choose Bolt</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">THE BOLT STANDARD</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

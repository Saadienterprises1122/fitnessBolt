import type { HeroProps } from './HeroTypes';
import CTAButtons from './CTAButtons';
import ScrollIndicator from './ScrollIndicator';

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
    return (
        <div className={`relative h-screen flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Gym Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-brand-black/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <span className="inline-block animate-fade-in py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                    #1 Rated Gym in the City
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-6 animate-slide-up">
                    UNLEASH YOUR <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">POTENTIAL</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Stop waiting for motivation. Start building discipline. Join the community that pushes you past your limits.
                </p>

                <CTAButtons />
            </div>

            <ScrollIndicator />
        </div>
    );
};

export default Hero;

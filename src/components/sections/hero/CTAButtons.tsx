import { ArrowRight, PlayCircle } from 'lucide-react';
import type { CTAButtonsProps } from './HeroTypes';

const CTAButtons: React.FC<CTAButtonsProps> = ({ className = '' }) => {
    return (
        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up ${className}`} style={{ animationDelay: '0.4s' }}>
            <a href="#join" className="group relative px-8 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center">
                    START FREE TRIAL <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            <button className="flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all">
                <PlayCircle className="mr-2 h-5 w-5 text-brand-yellow" /> WATCH VIDEO
            </button>
        </div>
    );
};

export default CTAButtons;

import type { ScrollIndicatorProps } from './HeroTypes';

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '' }) => {
    return (
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block ${className}`}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                <div className="w-1.5 h-3 bg-brand-yellow rounded-full"></div>
            </div>
        </div>
    );
};

export default ScrollIndicator;

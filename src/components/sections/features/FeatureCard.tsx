import React from 'react';
import type { FeatureCardProps } from './FeaturesTypes';

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
    return (
        <div key={index} className="bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-yellow/50 transition-colors group">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-brand-yellow mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.text}</p>
        </div>
    );
};

export default FeatureCard;

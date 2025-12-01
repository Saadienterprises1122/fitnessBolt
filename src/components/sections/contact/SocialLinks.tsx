import { Instagram, Twitter, Facebook } from 'lucide-react';
import type { SocialLinksProps } from './ContactTypes';

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
    return (
        <div className={`mt-12 ${className}`}>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Follow Us</h4>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;

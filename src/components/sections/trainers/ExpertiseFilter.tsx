import { useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import type { ExpertiseFilterProps } from './TrainersTypes';

const ExpertiseFilter: React.FC<ExpertiseFilterProps> = ({ categories, filter, onFilterChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (category: string) => {
        onFilterChange(category);
        setIsDropdownOpen(false);
    };

    return (
        <div className="mt-6 md:mt-0 relative" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 bg-brand-black border border-white/20 hover:border-brand-yellow text-white px-6 py-3 rounded-xl transition-all w-64 justify-between group"
            >
                <div className="flex items-center">
                    <Filter className="w-4 h-4 text-brand-yellow mr-3" />
                    <span className="font-bold uppercase tracking-wide text-sm">{filter}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-brand-black border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleSelect(cat)}
                            className={`w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors border-b border-white/5 last:border-0 ${filter === cat
                                ? 'bg-brand-yellow text-brand-black'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExpertiseFilter;

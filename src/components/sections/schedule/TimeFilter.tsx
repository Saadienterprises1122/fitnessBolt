import type { TimeFilterProps } from './ScheduleTypes';

const TimeFilter: React.FC<TimeFilterProps> = ({ filter, onFilterChange }) => {
    const filters: ('All' | 'Morning' | 'Afternoon' | 'Evening')[] = ['All', 'Morning', 'Afternoon', 'Evening'];

    return (
        <div className="flex space-x-2 mt-6 md:mt-0 bg-brand-black p-1 rounded-lg border border-white/10">
            {filters.map((f) => (
                <button
                    key={f}
                    onClick={() => onFilterChange(f)}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${filter === f ? 'bg-brand-yellow text-brand-black' : 'text-gray-400 hover:text-white'
                        }`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};

export default TimeFilter;

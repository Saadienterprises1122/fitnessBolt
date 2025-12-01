import type { DaySelectorProps } from './ScheduleTypes';

const DaySelector: React.FC<DaySelectorProps> = ({ days, activeDay, onDayChange }) => {
    return (
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
            {days.map((day) => (
                <button
                    key={day}
                    onClick={() => onDayChange(day)}
                    className={`flex-shrink-0 px-6 py-3 rounded-full border text-sm font-bold uppercase tracking-wide transition-all ${activeDay === day
                            ? 'bg-white text-brand-black border-white'
                            : 'bg-transparent text-gray-400 border-white/10 hover:border-brand-yellow hover:text-brand-yellow'
                        }`}
                >
                    {day}
                </button>
            ))}
        </div>
    );
};

export default DaySelector;

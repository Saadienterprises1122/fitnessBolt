import { useState } from 'react';
import { Calendar } from 'lucide-react';
import type { ScheduleProps } from './ScheduleTypes';
import DaySelector from './DaySelector';
import TimeFilter from './TimeFilter';
import ClassCard from './ClassCard';
import { generateSchedule } from './scheduleData';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Schedule: React.FC<ScheduleProps> = ({ className = '' }) => {
    const [activeDay, setActiveDay] = useState(days[0]);
    const [filter, setFilter] = useState<'All' | 'Morning' | 'Afternoon' | 'Evening'>('All');

    const classes = generateSchedule(activeDay);

    const filteredClasses = classes.filter(c => {
        if (filter === 'All') return true;
        const hour = parseInt(c.time.split(':')[0]);
        const isPM = c.time.includes('PM');
        const time24 = (isPM && hour !== 12) ? hour + 12 : (hour === 12 && !isPM ? 0 : hour);

        if (filter === 'Morning') return time24 < 12;
        if (filter === 'Afternoon') return time24 >= 12 && time24 < 17;
        if (filter === 'Evening') return time24 >= 17;
        return true;
    });

    return (
        <section id="schedule" className={`py-24 bg-brand-gray relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-3">Class Timetable</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white">FIND YOUR RHYTHM</h3>
                    </div>

                    <TimeFilter filter={filter} onFilterChange={setFilter} />
                </div>

                <DaySelector days={days} activeDay={activeDay} onDayChange={setActiveDay} />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {filteredClasses.length > 0 ? (
                        filteredClasses.map((cls) => (
                            <ClassCard key={cls.id} classSession={cls} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-brand-black rounded-2xl border border-white/5 border-dashed">
                            <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 font-bold">No classes scheduled for this time slot.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Schedule;

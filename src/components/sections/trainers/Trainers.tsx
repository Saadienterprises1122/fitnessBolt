import { useState } from 'react';
import type { TrainersProps } from './TrainersTypes';
import TrainerCard from './TrainerCard';
import ExpertiseFilter from './ExpertiseFilter';
import { trainers } from './trainersData';

const Trainers: React.FC<TrainersProps> = ({ className = '' }) => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...Array.from(new Set(trainers.flatMap(t => t.expertise)))];

    const filteredTrainers = filter === 'All'
        ? trainers
        : trainers.filter(t => t.expertise.includes(filter));

    return (
        <section id="trainers" className={`py-24 bg-brand-gray border-t border-white/5 relative z-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-3">Expert Team</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white">MEET THE ELITE</h3>
                    </div>

                    <ExpertiseFilter categories={categories} filter={filter} onFilterChange={setFilter} />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredTrainers.map((trainer) => (
                        <TrainerCard key={trainer.id} trainer={trainer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;

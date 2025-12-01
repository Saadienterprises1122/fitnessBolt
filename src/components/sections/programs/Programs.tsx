import type { ProgramsProps } from './ProgramsTypes';
import ProgramCard from './ProgramCard';
import { programs } from './programsData';


const Programs: React.FC<ProgramsProps> = ({ className = '' }) => {
    return (
        <section id="programs" className={`py-24 bg-brand-black relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-3">What We Offer</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">ELITE TRAINING PROGRAMS</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => (
                        <ProgramCard key={index} program={program} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;

import { Clock } from 'lucide-react';
import type { ClassCardProps } from './ScheduleTypes';

const ClassCard: React.FC<ClassCardProps> = ({ classSession }) => {
    return (
        <div className="bg-brand-black border border-white/5 rounded-2xl p-6 hover:border-brand-yellow/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-xs font-bold text-white uppercase">{classSession.category}</span>
                <span className="text-brand-yellow font-mono font-bold">{classSession.time}</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">{classSession.name}</h4>
            <p className="text-sm text-gray-400 mb-4 font-semibold">with {classSession.instructor}</p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-white/5 pb-4">
                {classSession.description}
            </p>

            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{classSession.duration}</span>
                </div>
                <button className="text-white font-bold hover:text-brand-yellow transition-colors flex items-center">
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default ClassCard;

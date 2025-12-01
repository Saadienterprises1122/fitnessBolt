import ReactMarkdown from 'react-markdown';
import type { WorkoutDisplayProps } from './AICoachTypes';
import DumbbellIcon from './DumbbellIcon';

const WorkoutDisplay: React.FC<WorkoutDisplayProps> = ({ result, level, duration }) => {
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
            {result ? (
                <div className="animate-fade-in">
                    <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase mb-4">
                        <span className="bg-brand-yellow/20 text-brand-black px-2 py-1 rounded">{level}</span>
                        <span>•</span>
                        <span>{duration} Mins</span>
                    </div>
                    <div className="prose prose-sm max-w-none text-gray-700 prose-p:my-1 prose-strong:text-brand-black prose-strong:font-black prose-strong:uppercase prose-strong:text-lg prose-strong:block prose-strong:mb-2 prose-strong:mt-6 first:prose-strong:mt-0">
                        <ReactMarkdown>{result.replace(/\n/g, '  \n')}</ReactMarkdown>
                    </div>
                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 opacity-50">
                    <DumbbellIcon className="w-24 h-24 mb-4" />
                    <p className="font-bold text-xl">YOUR PLAN WILL APPEAR HERE</p>
                </div>
            )}
        </div>
    );
};

export default WorkoutDisplay;

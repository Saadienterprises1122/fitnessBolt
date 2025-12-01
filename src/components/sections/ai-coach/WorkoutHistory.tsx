import { History, Trash2, ChevronRight } from 'lucide-react';
import type { WorkoutHistoryProps } from './AICoachTypes';

const WorkoutHistory: React.FC<WorkoutHistoryProps> = ({ history, onLoadFromHistory, onClearHistory }) => {
    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black uppercase tracking-tight">Past Workouts</h3>
                {history.length > 0 && (
                    <button onClick={onClearHistory} className="text-red-500 hover:text-red-700 text-xs font-bold uppercase flex items-center">
                        <Trash2 className="w-3 h-3 mr-1" /> Clear
                    </button>
                )}
            </div>

            {history.length === 0 ? (
                <div className="text-center text-gray-400 py-12">
                    <History className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No history yet. Generate a workout!</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {history.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onLoadFromHistory(item)}
                            className="group bg-gray-50 border border-gray-100 hover:border-brand-yellow hover:bg-yellow-50 p-4 rounded-xl cursor-pointer transition-all flex items-center justify-between"
                        >
                            <div>
                                <h4 className="font-bold text-brand-black text-sm mb-1">{item.request.goal}</h4>
                                <div className="flex text-xs text-gray-500 space-x-2">
                                    <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span>{item.request.duration} min</span>
                                    <span>•</span>
                                    <span>{item.request.level}</span>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-yellow transition-colors" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkoutHistory;

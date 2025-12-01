import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { FitnessLevel, type FitnessLevelType, type WorkoutHistoryItem } from '../../../types';
import { generateWorkoutPlan } from '../../../services/geminiService';
import type { AICoachProps } from './AICoachTypes';
import WorkoutForm from './WorkoutForm';
import WorkoutDisplay from './WorkoutDisplay';
import WorkoutHistory from './WorkoutHistory';

const AICoach: React.FC<AICoachProps> = ({ className = '' }) => {
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState<FitnessLevelType>(FitnessLevel.BEGINNER);
    const [duration, setDuration] = useState('45');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState<WorkoutHistoryItem[]>([]);
    const [view, setView] = useState<'current' | 'history'>('current');

    useEffect(() => {
        const savedHistory = localStorage.getItem('workoutHistory');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    const saveToHistory = (plan: string, requestData: any) => {
        const newItem: WorkoutHistoryItem = {
            id: Date.now().toString(),
            timestamp: Date.now(),
            request: requestData,
            plan: plan
        };
        const updatedHistory = [newItem, ...history].slice(0, 10); // Keep last 10
        setHistory(updatedHistory);
        localStorage.setItem('workoutHistory', JSON.stringify(updatedHistory));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!goal) return;

        setLoading(true);
        setResult(null);
        setView('current');

        const plan = await generateWorkoutPlan({ goal, level, duration });

        setResult(plan);
        saveToHistory(plan, { goal, level, duration });
        setLoading(false);
    };

    const loadFromHistory = (item: WorkoutHistoryItem) => {
        setResult(item.plan);
        setGoal(item.request.goal);
        setLevel(item.request.level as FitnessLevelType);
        setDuration(item.request.duration);
        setView('current');
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('workoutHistory');
    };

    return (
        <section id="ai-coach" className={`py-24 bg-brand-gray relative overflow-hidden ${className}`}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div>
                        <div className="inline-flex items-center space-x-2 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full px-4 py-1.5 mb-6">
                            <Sparkles className="w-4 h-4 text-brand-yellow" />
                            <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest">Powered by Gemini AI</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            GET A CUSTOM <br />
                            <span className="text-brand-yellow">INSTANT WORKOUT</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Not sure what to do today? Let our AI Coach generate a personalized session for you in seconds. No credit card required.
                        </p>

                        <WorkoutForm
                            goal={goal}
                            level={level}
                            duration={duration}
                            loading={loading}
                            onGoalChange={setGoal}
                            onLevelChange={setLevel}
                            onDurationChange={setDuration}
                            onSubmit={handleSubmit}
                        />
                    </div>

                    <div className="h-[600px] flex flex-col bg-white text-brand-black rounded-3xl relative shadow-2xl overflow-hidden">
                        {/* Window Header */}
                        <div className="flex-none bg-gray-100 p-4 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex bg-gray-200 rounded-lg p-1 text-xs font-bold">
                                <button
                                    onClick={() => setView('current')}
                                    className={`px-3 py-1 rounded-md transition-all ${view === 'current' ? 'bg-white shadow-sm text-brand-black' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Current Plan
                                </button>
                                <button
                                    onClick={() => setView('history')}
                                    className={`px-3 py-1 rounded-md transition-all flex items-center ${view === 'history' ? 'bg-white shadow-sm text-brand-black' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    History
                                    <span className="ml-1 bg-gray-300 text-gray-600 px-1.5 rounded-full text-[10px]">{history.length}</span>
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        {view === 'current' ? (
                            <WorkoutDisplay result={result} level={level} duration={duration} />
                        ) : (
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                                <WorkoutHistory
                                    history={history}
                                    onLoadFromHistory={loadFromHistory}
                                    onClearHistory={clearHistory}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AICoach;

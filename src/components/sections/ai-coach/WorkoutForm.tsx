import { Sparkles, Loader2 } from 'lucide-react';
import { FitnessLevel, type FitnessLevelType } from '../../../types';
import type { WorkoutFormProps } from './AICoachTypes';

const WorkoutForm: React.FC<WorkoutFormProps> = ({
    goal,
    level,
    duration,
    loading,
    onGoalChange,
    onLevelChange,
    onDurationChange,
    onSubmit
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-6 bg-brand-black p-8 rounded-3xl border border-white/5 shadow-2xl">
            <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Your Goal</label>
                <input
                    type="text"
                    value={goal}
                    onChange={(e) => onGoalChange(e.target.value)}
                    placeholder="e.g. Build chest size, Lose belly fat, Run faster"
                    className="w-full bg-brand-gray border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Level</label>
                    <select
                        value={level}
                        onChange={(e) => onLevelChange(e.target.value as FitnessLevelType)}
                        className="w-full bg-brand-gray border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow appearance-none"
                    >
                        {Object.values(FitnessLevel).map((l) => (
                            <option key={l} value={l}>{l}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Time (Mins)</label>
                    <select
                        value={duration}
                        onChange={(e) => onDurationChange(e.target.value)}
                        className="w-full bg-brand-gray border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow appearance-none"
                    >
                        <option value="15">15 Mins</option>
                        <option value="30">30 Mins</option>
                        <option value="45">45 Mins</option>
                        <option value="60">60 Mins</option>
                        <option value="90">90 Mins</option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-yellow text-brand-black font-bold py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin mr-2" /> GENERATING PLAN...</>
                ) : (
                    <><Sparkles className="w-5 h-5 mr-2" /> GENERATE MY WORKOUT</>
                )}
            </button>
        </form>
    );
};

export default WorkoutForm;

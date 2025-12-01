import { type FitnessLevelType } from '../../../types';

export interface AICoachProps {
    className?: string;
}

export interface WorkoutFormProps {
    goal: string;
    level: FitnessLevelType;
    duration: string;
    loading: boolean;
    onGoalChange: (goal: string) => void;
    onLevelChange: (level: FitnessLevelType) => void;
    onDurationChange: (duration: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export interface WorkoutDisplayProps {
    result: string | null;
    level: FitnessLevelType;
    duration: string;
}

export interface WorkoutHistoryProps {
    history: any[];
    onLoadFromHistory: (item: any) => void;
    onClearHistory: () => void;
}

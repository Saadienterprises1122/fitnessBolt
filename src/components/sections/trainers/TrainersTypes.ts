import type { Trainer } from '../../../types';

export interface TrainersProps {
    className?: string;
}

export interface TrainerCardProps {
    trainer: Trainer;
}

export interface ExpertiseFilterProps {
    categories: string[];
    filter: string;
    onFilterChange: (category: string) => void;
}

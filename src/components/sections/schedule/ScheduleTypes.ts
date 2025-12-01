import type { ClassSession } from '../../../types';

export interface ScheduleProps {
    className?: string;
}

export interface DaySelectorProps {
    days: string[];
    activeDay: string;
    onDayChange: (day: string) => void;
}

export interface TimeFilterProps {
    filter: 'All' | 'Morning' | 'Afternoon' | 'Evening';
    onFilterChange: (filter: 'All' | 'Morning' | 'Afternoon' | 'Evening') => void;
}

export interface ClassCardProps {
    classSession: ClassSession;
}

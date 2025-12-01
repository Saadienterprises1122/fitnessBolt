import type { Program } from '../../../types';

export interface ProgramsProps {
    className?: string;
}

export interface ProgramCardProps {
    program: Program;
    index: number;
}

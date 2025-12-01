// Shared type definitions for Bolt Fitness

export interface Program {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export interface ClassSession {
    id: number;
    name: string;
    instructor: string;
    time: string;
    duration: string;
    category: 'Strength' | 'Cardio' | 'Mind/Body' | 'Combat';
    description: string;
}

export interface Trainer {
    id: number;
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    image: string;
    socials?: {
        instagram?: string;
        twitter?: string;
    };
}

export interface PricingTier {
    name: string;
    price: number;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
}

export interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    details: string;
}

// Fitness Level as const object
export const FitnessLevel = {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
} as const;

export type FitnessLevelType = typeof FitnessLevel[keyof typeof FitnessLevel];

export interface AIWorkoutRequest {
    goal: string;
    level: FitnessLevelType;
    duration: string;
}

export interface WorkoutHistoryItem {
    id: string;
    timestamp: number;
    request: AIWorkoutRequest;
    plan: string;
}

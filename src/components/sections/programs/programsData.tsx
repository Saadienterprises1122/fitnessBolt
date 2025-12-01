import { Activity, Dumbbell, Heart, Zap } from 'lucide-react';
import type { Program } from '../../../types';

export const programs: Program[] = [
    {
        icon: <Dumbbell className="h-8 w-8" />,
        title: "Strength & Conditioning",
        description: "Build raw power and endurance with our elite lifting programs tailored for all levels.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: <Zap className="h-8 w-8" />,
        title: "High Intensity Interval",
        description: "Torch calories and boost your metabolism with our signature HIIT classes.",
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop"
    },
    {
        icon: <Activity className="h-8 w-8" />,
        title: "Functional Fitness",
        description: "Move better in daily life. Improve mobility, agility, and core stability.",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
    },
    {
        icon: <Heart className="h-8 w-8" />,
        title: "Yoga & Recovery",
        description: "Balance the grind. Restore your body and mind with flow and meditation sessions.",
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop"
    }
];

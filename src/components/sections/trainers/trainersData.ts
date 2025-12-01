import type { Trainer } from '../../../types';

export const trainers: Trainer[] = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "Head Performance Coach",
        bio: "Former Olympian specializing in explosive power and athletic conditioning. Alex pushes you to break barriers you didn't know existed with scientific precision.",
        expertise: ["HIIT", "Strength", "Athletic Prep"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        socials: { instagram: "alex_lift", twitter: "arivera_coach" }
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Yoga & Mobility Specialist",
        bio: "Sarah bridges the gap between strength and flexibility. Her sessions focus on longevity, injury prevention, and mental clarity through flow.",
        expertise: ["Vinyasa Yoga", "Mobility", "Recovery"],
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1984&auto=format&fit=crop",
        socials: { instagram: "sarahflows" }
    },
    {
        id: 3,
        name: 'Marcus "Titan" King',
        role: "Strength Coach",
        bio: "A powerlifting champion who focuses on pure strength. Marcus teaches proper technique to help you lift heavier and safer than ever before.",
        expertise: ["Powerlifting", "Bodybuilding", "Nutrition"],
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
        socials: { instagram: "titan_lifts", twitter: "marcuskingstrong" }
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Endurance Coach",
        bio: "Triathlete and marathon runner. Elena helps members build cardiovascular engines that last for hours, not just minutes.",
        expertise: ["Running", "Cycling", "Endurance"],
        image: "https://images.unsplash.com/photo-1611672585731-fa1060a7a3c2?q=80&w=1974&auto=format&fit=crop",
        socials: { twitter: "elena_runs" }
    }
];

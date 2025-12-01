import type { ClassSession } from '../../../types';

export const generateSchedule = (day: string): ClassSession[] => {
    const baseClasses: ClassSession[] = [
        { id: 1, name: "Power Hour", instructor: "Mike T.", time: "06:00 AM", duration: "60 min", category: "Strength", description: "Heavy lifting focus to build raw power." },
        { id: 2, name: "Sunrise Yoga", instructor: "Sarah J.", time: "07:00 AM", duration: "45 min", category: "Mind/Body", description: "Awaken your body with gentle flows." },
        { id: 3, name: "HIIT Blast", instructor: "Alex R.", time: "09:00 AM", duration: "45 min", category: "Cardio", description: "High intensity interval training for max calorie burn." },
        { id: 4, name: "Box & Burn", instructor: "Tyson L.", time: "05:30 PM", duration: "60 min", category: "Combat", description: "Boxing fundamentals mixed with cardio conditioning." },
        { id: 5, name: "Spin City", instructor: "Elena D.", time: "06:30 PM", duration: "45 min", category: "Cardio", description: "Endurance cycling set to high-energy beats." },
        { id: 6, name: "Evening Flow", instructor: "Sarah J.", time: "08:00 PM", duration: "60 min", category: "Mind/Body", description: "Restorative yoga to wind down your day." },
    ];

    if (day === 'Saturday' || day === 'Sunday') {
        return [
            { id: 7, name: "Weekend Warrior", instructor: "Mike T.", time: "09:00 AM", duration: "90 min", category: "Strength", description: "Full body circuit challenge." },
            { id: 8, name: "Community Run", instructor: "Alex R.", time: "10:30 AM", duration: "60 min", category: "Cardio", description: "Outdoor group run, various paces." },
            { id: 9, name: "Open Gym", instructor: "Staff", time: "12:00 PM", duration: "4 hours", category: "Strength", description: "Supervised open floor time." },
        ];
    }

    return baseClasses;
};

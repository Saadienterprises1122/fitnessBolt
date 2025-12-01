import { Clock, Users, Trophy, Salad } from 'lucide-react';
import type { Feature } from '../../../types';

export const features: Feature[] = [
    { icon: <Clock />, title: "24/7 Access", text: "Train on your terms. We never close, so you never have an excuse." },
    { icon: <Users />, title: "Small Groups", text: "Personalized attention in a team setting. Push each other further." },
    { icon: <Trophy />, title: "Pro Trainers", text: "Learn from elite athletes and champions who walk the walk." },
    { icon: <Salad />, title: "Nutrition Guide", text: "Fuel your body right with expert meal plans included in every membership." }
];

import { MapPin, Phone, Mail } from 'lucide-react';
import type { ContactInfo } from '../../../types';

export const contactInfo: ContactInfo[] = [
    {
        icon: <MapPin className="w-6 h-6" />,
        title: 'Visit Us',
        details: '123 Iron Avenue, Muscle City, MC 90210'
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Call Us',
        details: '+1 (555) 123-4567'
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Us',
        details: 'hello@boltfitness.com'
    }
];

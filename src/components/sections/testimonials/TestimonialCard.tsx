import { Quote } from 'lucide-react';
import type { TestimonialCardProps } from './TestimonialsTypes';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-brand-black p-8 rounded-2xl relative border border-white/5">
            <Quote className="absolute top-8 right-8 text-brand-yellow/20 h-12 w-12" />
            <div className="flex items-center space-x-4 mb-6">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-yellow"
                />
                <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-brand-yellow text-xs font-semibold uppercase">{testimonial.role}</p>
                </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
        </div>
    );
};

export default TestimonialCard;

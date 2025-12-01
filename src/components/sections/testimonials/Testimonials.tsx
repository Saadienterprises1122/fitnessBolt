import type { TestimonialsProps } from './TestimonialsTypes';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialsData';

const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
    return (
        <section id="stories" className={`py-24 bg-brand-gray ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-3">Success Stories</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">REAL PEOPLE. REAL RESULTS.</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} testimonial={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

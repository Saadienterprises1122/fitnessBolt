import Hero from '../../components/sections/hero/Hero';
import Programs from '../../components/sections/programs/Programs';
import AICoach from '../../components/sections/ai-coach/AICoach';
import Features from '../../components/sections/features/Features';
import Schedule from '../../components/sections/schedule/Schedule';
import Trainers from '../../components/sections/trainers/Trainers';
import Pricing from '../../components/sections/pricing/Pricing';
import Testimonials from '../../components/sections/testimonials/Testimonials';
import Contact from '../../components/sections/contact/Contact';

const Home = () => {
    return (
        <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-black">
            <Hero />
            <Programs />
            <AICoach />
            <Features />
            <Schedule />
            <Trainers />
            <Pricing />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
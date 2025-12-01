import type { ContactProps } from './ContactTypes';
import ContactInfoItem from './ContactInfoItem';
import SignupForm from './SignupForm';
import SocialLinks from './SocialLinks';
import { contactInfo } from './contactData';


const Contact: React.FC<ContactProps> = ({ className = '' }) => {
    return (
        <section id="contact" className={`py-24 bg-brand-black relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-4xl font-black text-white mb-6 uppercase">Join the <span className="text-brand-yellow">Movement</span></h2>
                        <p className="text-gray-400 text-lg mb-10">
                            Ready to transform your life? Sign up for a free consultation or drop by for a tour. We're ready when you are.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <ContactInfoItem key={index} info={info} />
                            ))}
                        </div>

                        <SocialLinks />
                    </div>

                    <SignupForm />

                </div>
            </div>
        </section>
    );
};

export default Contact;

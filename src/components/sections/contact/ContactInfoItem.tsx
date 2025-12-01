import type { ContactInfoItemProps } from './ContactTypes';

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ info }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center shrink-0 text-brand-yellow">
                {info.icon}
            </div>
            <div>
                <h4 className="text-white font-bold text-lg">{info.title}</h4>
                <p className="text-gray-400">{info.details}</p>
            </div>
        </div>
    );
};

export default ContactInfoItem;

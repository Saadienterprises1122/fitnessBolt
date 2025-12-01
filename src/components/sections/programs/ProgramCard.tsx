import type { ProgramCardProps } from './ProgramsTypes';

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
    return (
        <div key={index} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
            <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>

            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="w-14 h-14 bg-brand-yellow text-brand-black rounded-xl flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {program.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {program.title}
                </h4>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-100 text-sm leading-relaxed">
                    {program.description}
                </p>
            </div>
        </div>
    );
};

export default ProgramCard;

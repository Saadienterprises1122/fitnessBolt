import { Instagram, Twitter } from 'lucide-react';
import type { TrainerCardProps } from './TrainersTypes';

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
    return (
        <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-xl bg-brand-black">
            {/* Background Image */}
            <img
                src={trainer.image}
                alt={trainer.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            {/* Default Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>

            {/* Sliding Content Panel */}
            <div className="absolute bottom-0 left-0 w-full bg-brand-black/95 backdrop-blur-md px-6 py-6 transform translate-y-[calc(100%-85px)] group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-white/10">

                {/* Always Visible Header Area */}
                <div className="mb-4">
                    <h4 className="text-xl font-bold text-white leading-tight mb-1">{trainer.name}</h4>
                    <p className="text-brand-yellow font-bold text-xs uppercase tracking-wide">{trainer.role}</p>
                </div>

                {/* Content Revealed on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex flex-col h-full">
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {trainer.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {trainer.expertise.map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase bg-white/10 text-white px-2 py-1 rounded-full border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex space-x-3">
                            {trainer.socials?.instagram && (
                                <a href={`https://instagram.com/${trainer.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                                    <Instagram size={18} />
                                </a>
                            )}
                            {trainer.socials?.twitter && (
                                <a href={`https://twitter.com/${trainer.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                                    <Twitter size={18} />
                                </a>
                            )}
                        </div>
                        <button className="bg-brand-yellow text-brand-black text-xs font-black uppercase px-4 py-2 rounded hover:bg-white transition-colors">
                            Book Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerCard;

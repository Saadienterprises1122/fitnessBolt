import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-block p-4 rounded-full bg-brand-yellow/10 mb-8 animate-pulse">
                    <span className="text-brand-yellow font-bold tracking-widest uppercase">Coming Soon</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                    WORK IN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">PROGRESS</span>
                </h1>

                <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                    We're currently crafting this page to bring you the best fitness experience.
                    Stay tuned for something amazing!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back Home</span>
                    </Link>

                    <a
                        href="https://wa.me/447393642179"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-8 py-4 rounded-full bg-brand-yellow hover:bg-white text-brand-black font-bold transition-all shadow-lg shadow-brand-yellow/20"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Hire Me</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

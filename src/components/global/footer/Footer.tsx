import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-black tracking-tighter text-white">BOLT<span className="text-brand-yellow">.FIT</span></span>
                    <p className="text-gray-500 text-sm mt-1">© 2024 Bolt Fitness. All rights reserved.</p>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-4">
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
                    </div>

                    <a
                        href="https://bysaad.lovable.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-brand-yellow text-sm transition-colors flex items-center gap-1"
                    >
                        Built by <span className="font-bold text-gray-300 hover:text-white">Muhammad Saad Satti</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
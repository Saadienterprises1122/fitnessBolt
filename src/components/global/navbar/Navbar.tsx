import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Programs', path: '/programs' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Trainers', path: '/trainers' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'AI Coach', path: '/ai-coach' },
    { label: 'Stories', path: '/stories' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="flex items-center space-x-2">
                            <Dumbbell className="h-8 w-8 text-brand-yellow" />
                            <span className="text-2xl font-black tracking-tighter text-white">BOLT<span className="text-brand-yellow">.FIT</span></span>
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-gray-300 hover:text-brand-yellow px-3 py-2 rounded-md text-sm font-semibold transition-colors uppercase tracking-wide"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a href="#join" className="bg-brand-yellow text-brand-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-colors">
                                JOIN NOW
                            </a>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden bg-brand-black border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-brand-yellow block px-3 py-2 rounded-md text-base font-bold"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a href="#join" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-bold">
                            JOIN NOW
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
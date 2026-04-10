import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logos.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out
                 ${scrolled
                    ? 'py-3 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                    : 'py-4 bg-transparent border-b border-white/[0.05]'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10 flex justify-between items-center">

                {/* Logo - Sized for balance */}
                <Link to="home" smooth={true} className="z-[110] cursor-pointer">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 md:h-20 w-auto object-contain transition-opacity hover:opacity-80"
                    />
                </Link>

                {/* Desktop Navigation - Refined Font Size */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            spy={true}
                            offset={-70}
                            activeClass="!text-white"
                            className="group relative text-[13px] tracking-[0.15em] font-medium text-white/50 hover:text-white transition-colors cursor-pointer"
                        >
                            {link.name.toUpperCase()}
                            {/* Subtle Underline */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[110] p-1.5 text-white/80 hover:text-white transition-transform active:scale-95"
                >
                    {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 w-full h-screen bg-black/60 backdrop-blur-3xl md:hidden z-[100] flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                                    key={link.name}
                                >
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-light tracking-tight text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Line */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-16 flex flex-col items-center gap-4 w-full"
                        >
                            <div className="h-[1px] w-8 bg-white/20" />
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                                © 2026 Zentiboo
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
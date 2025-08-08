
import React, { useState } from 'react';

const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-extrabold text-gray-900">
                    Spectra<span className="text-emerald-600">Dynamics</span>
                </a>
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#about" className="text-gray-600 hover:text-emerald-600 font-medium transition">About</a>
                    <a href="#products" className="text-gray-600 hover:text-emerald-600 font-medium transition">Products</a>
                    <a href="#contact" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition shadow-sm hover:shadow-lg">Contact Us</a>
                </div>
                <button onClick={toggleMobileMenu} className="md:hidden flex items-center p-2" aria-label="Open mobile menu">
                    <MenuIcon />
                </button>
            </nav>
            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-base font-medium text-gray-600 hover:bg-gray-50">About</a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-base font-medium text-gray-600 hover:bg-gray-50">Products</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 text-center">Contact Us</a>
            </div>
        </header>
    );
};

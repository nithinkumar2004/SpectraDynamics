
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="bg-cover bg-center text-white bg-[linear-gradient(rgba(0,58,112,0.8),_rgba(10,30,50,0.9)),url('https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=1920&auto=format&fit=crop')]">
            <div className="container mx-auto px-6 py-32 md:py-48 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Pioneering Medical Solutions for a Healthier India</h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">Spectra Dynamics is committed to manufacturing high-quality, accessible medical devices that empower healthcare professionals and enhance patient care across the nation.</p>
                <a href="#products" className="bg-emerald-600 text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-700 transition text-lg shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">Explore Our Product Range</a>
            </div>
        </section>
    );
};

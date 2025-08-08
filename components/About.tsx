
import React from 'react';

const QualityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const InnovationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const AccessibilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Core Principles</h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">We are driven by a mission to bridge the healthcare gap with quality, innovation, and affordability.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-5">
                            <QualityIcon />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Uncompromising Quality</h3>
                        <p className="text-gray-600">Adhering to the highest standards, including ISO 13485 and GMP, to ensure every product is safe, reliable, and effective.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-5">
                            <InnovationIcon />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Dynamic Innovation</h3>
                        <p className="text-gray-600">Continuously improving our processes and products to meet the evolving needs of the modern healthcare industry.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-5">
                           <AccessibilityIcon />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Accessible Solutions</h3>
                        <p className="text-gray-600">Leveraging local manufacturing to provide high-value products at accessible price points for healthcare providers of all sizes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

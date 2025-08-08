
import React, { useState, useMemo } from 'react';
import { products, categoryTitles, filterButtons } from '../constants';
import type { Product, ProductCategory } from '../types';

interface ProductsProps {
    onProductClick: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
    const [activeFilter, setActiveFilter] = useState<'all' | ProductCategory>('all');

    const filteredProducts = useMemo(() => {
        if (activeFilter === 'all') {
            return products;
        }
        return products.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const groupedProducts = useMemo(() => {
        return filteredProducts.reduce((acc, product) => {
            (acc[product.category] = acc[product.category] || []).push(product);
            return acc;
        }, {} as Record<ProductCategory, Product[]>);
    }, [filteredProducts]);

    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Product Spectrum</h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">A comprehensive range of medical devices designed for reliability. Click a product to ask our AI assistant for more details.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {filterButtons.map(({ label, filter }) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-full font-semibold transition ${activeFilter === filter ? 'bg-emerald-600 text-white shadow-md' : 'bg-white hover:bg-emerald-100'}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
                    {Object.keys(groupedProducts).length > 0 ? (
                        Object.entries(groupedProducts).map(([category, productsInCategory]) => (
                            <div key={category} className="mb-8 last:mb-0">
                                <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-emerald-500 pb-3 mb-4">
                                    {categoryTitles[category as ProductCategory]}
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 text-lg">
                                    {productsInCategory.map(product => (
                                        <li key={product.name}>
                                            <button onClick={() => onProductClick(product)} className="flex items-center text-left w-full p-2 rounded-md hover:bg-emerald-50 transition-colors group">
                                                <span className="text-emerald-600 mr-3 font-bold text-xl transition-transform group-hover:translate-x-1">&#8227;</span>
                                                <span className="flex-1">{product.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-8">No products found for this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

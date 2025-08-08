
import React, { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';
import { getProductInfo } from '../services/geminiService';

interface ProductAIModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
    </div>
);

export const ProductAIModal: React.FC<ProductAIModalProps> = ({ isOpen, onClose, product }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        // Reset state when a new product is selected or modal is closed
        if (isOpen) {
            setQuestion('');
            setAnswer('');
            setError('');
            setIsLoading(false);
        }
    }, [isOpen, product]);
    
    const handleAsk = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!product || !question.trim() || isLoading) return;

        setIsLoading(true);
        setError('');
        setAnswer('');
        
        const aiResponse = await getProductInfo(product.name, question);
        
        setAnswer(aiResponse);
        setIsLoading(false);

    }, [product, question, isLoading]);
    
    if (!isOpen || !product) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[100] transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6 md:p-8 transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        <p className="text-gray-500">AI Product Assistant</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition">&times;</button>
                </div>
                
                <div className="space-y-4">
                    <form onSubmit={handleAsk}>
                        <label htmlFor="question" className="font-semibold text-gray-700 block mb-2">Ask a question about this product:</label>
                        <div className="flex gap-2">
                             <input
                                id="question"
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="e.g., What is this used for?"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                disabled={isLoading}
                            />
                            <button 
                                type="submit" 
                                className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-700 transition disabled:bg-emerald-300"
                                disabled={isLoading || !question.trim()}
                            >
                                {isLoading ? '...' : 'Ask'}
                            </button>
                        </div>
                    </form>

                    {isLoading && <LoadingSpinner />}
                    {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}
                    {answer && (
                         <div className="prose prose-sm max-w-none bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4 max-h-60 overflow-y-auto">
                            <p dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, '<br />') }} />
                        </div>
                    )}
                </div>

                <button 
                    onClick={onClose} 
                    className="mt-6 w-full bg-gray-200 text-gray-800 font-bold py-2.5 px-4 rounded-lg hover:bg-gray-300 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};


import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProductAIModal } from './components/ProductAIModal';
import type { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Products onProductClick={handleProductClick} />
        <Contact />
      </main>
      <Footer />
      <ProductAIModal
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ContactModal from './ContactModal';

const CTABlock: React.FC = () => {
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setShowModal(true);
    }
  };

  return (
    <>
      <section className="bg-dark-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres saber si tu web aparece en la IA?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Introduce la URL de tu sitio y recibe tu análisis gratuito junto con una asesoría personalizada de 20 minutos.
          </p>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://tusitio.com (incluye https://)"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-military-green focus:ring-1 focus:ring-military-green"
                required
              />
              <button
                type="submit"
                className="w-full bg-military-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                aria-label="Obtener análisis gratuito de SEO para IA"
              >
                Obtener análisis gratuito
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        websiteUrl={url}
      />
    </>
  );
};

export default CTABlock;
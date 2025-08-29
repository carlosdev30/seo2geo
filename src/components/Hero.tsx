import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      setShowModal(true);
    }
  };

  return (
    <section id="hero" className="text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block sm:inline">SEO para</span> <span className="text-teal-green">Inteligencia Artificial</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
          Haz que tu empresa aparezca y destaque en ChatGPT, Gemini, Perplexity y los nuevos resúmenes de IA que ya integra Google.
        </p>

        {/* Formulario principal */}
        <div className="bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-gray-800 mb-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4" id="formulario-analisis">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://tusitio.com (incluye https://)"
              className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              aria-label="Obtener análisis gratuito de SEO para IA"
            >
              Obtener análisis gratuito
            </button>
          </form>
        </div>

        <div className="text-gray-400 text-sm leading-relaxed">
          Además de tu informe recibirás una asesoría gratuita de 20 minutos para revisar resultados y definir los próximos pasos.
        </div>
      </div>

      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        websiteUrl={url}
      />
    </section>
  );
};

export default Hero;
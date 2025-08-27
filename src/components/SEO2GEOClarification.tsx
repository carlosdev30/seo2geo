import React from 'react';
import { Zap } from 'lucide-react';

const SEO2GEOClarification: React.FC = () => {
  return (
    <section className="bg-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-gray p-8 rounded-lg border-2 border-military-green relative">
          {/* Main icon */}
          <div className="absolute top-6 left-6">
            <Zap className="w-8 h-8 text-military-green" />
          </div>
          
          <div className="ml-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              SEO2GEO no sustituye al SEO clásico, lo potencia
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-teal-green mr-4 flex-shrink-0 text-lg font-bold">✅</span>
                <p className="text-gray-300 text-lg">
                  Compatible al 100% con tu SEO actual.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-teal-green mr-4 flex-shrink-0 text-lg font-bold">➕</span>
                <p className="text-gray-300 text-lg">
                  No es "o una cosa u otra", es un más a más.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-teal-green mr-4 flex-shrink-0 text-lg font-bold">🚫</span>
                <p className="text-gray-300 text-lg">
                  No gestionamos SEO tradicional ni redes sociales.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="text-teal-green mr-4 flex-shrink-0 text-lg font-bold">🎯</span>
                <p className="text-gray-300 text-lg">
                  Nos centramos en lo que importa: que tu web aparezca en las respuestas de IA.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-600 pt-6">
              <p className="text-xl text-white font-medium italic leading-relaxed">
                Nos especializamos en crear y optimizar contenido, entidades y datos 
                estructurados para que tu web sea entendida y recomendada por ChatGPT, 
                Gemini, Perplexity y Google con IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEO2GEOClarification;
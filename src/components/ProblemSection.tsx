import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            El SEO tradicional ya no es suficiente
          </h2>
        </div>
        
        <p className="text-xl text-gray-300 leading-relaxed mb-4">
          Tus clientes ya no buscan en Google como antes. Preguntan a ChatGPT, Gemini, Perplexity o directamente a los resúmenes de Google con IA.
        </p>
        <p className="text-xl text-red-400 font-semibold">
          Si tu web no aparece en esas respuestas, no existes.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
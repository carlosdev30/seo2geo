import React, { useState } from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import ContactModal from './ContactModal';

const AnalysisSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <MessageCircle className="w-12 h-12 text-teal-green mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tu análisis + asesoría gratuita
          </h2>
        </div>
        
        <div className="bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-gray-800 mb-8 backdrop-blur-sm">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            No solo recibirás un informe sobre cómo aparece tu web en buscadores de IA como ChatGPT, Gemini, Perplexity y los resúmenes de Google.
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-teal-green mr-3" />
            <span className="text-xl font-semibold text-white">Además tendrás una sesión de 20 minutos con nuestro equipo</span>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            para revisar los resultados y definir los pasos más efectivos para mejorar tu posicionamiento.
          </p>

          <button
            onClick={() => window.location.href = '/#hero'}
            className="bg-teal-green hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            aria-label="Ir al inicio: Obtén tu análisis gratuito"
          >
            Obtener análisis gratuito
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-teal-green mb-3">📊 El informe incluye:</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Análisis de presencia en IA</li>
              <li>• Evaluación de datos estructurados</li>
              <li>• Oportunidades de mejora inmediata</li>
              <li>• Comparativa con competidores</li>
            </ul>
          </div>
          
          <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-teal-green mb-3">🎯 En la asesoría veremos:</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Prioridades</li>
              <li>• Estrategia personalizada</li>
              <li>• Primeros pasos concretos</li>
              <li>• Resolución de dudas técnicas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <p className="text-lg text-gray-300 italic leading-relaxed text-center">
          Con este informe tendrás claro qué debes mejorar y qué pasos seguir para aparecer en buscadores de IA.
        </p>
      </div>

      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        websiteUrl=""
      />
    </section>
  );
};

export default AnalysisSection;
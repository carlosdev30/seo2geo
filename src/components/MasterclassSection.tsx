import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Users } from 'lucide-react';

const MasterclassSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <PlayCircle className="w-12 h-12 text-teal-green mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Masterclass gratuita
          </h2>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-teal-green mb-8">
          Cómo posicionarte en la Inteligencia Artificial
        </h3>
        
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Accede a una Masterclass de 45 minutos donde aprenderás cómo preparar tu web y tu marca 
            para aparecer en ChatGPT, Gemini, Perplexity y los resúmenes de IA de Google.
          </p>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Te mostraremos los pasos prácticos para configurar tu entidad digital y empezar a ser 
            visible en el internet de la próxima década.
          </p>

          <Link
            to="/masterclass#top-masterclass"
            className="inline-block bg-teal-green hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg mt-10 mb-5"
            aria-label="Registrarse en la Masterclass gratuita de SEO para IA"
          >
            Registrarme en la Masterclass
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
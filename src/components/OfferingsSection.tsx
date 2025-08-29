import React from 'react';
import { Bot, FileText, Globe } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      icon: <Bot className="w-12 h-12 text-teal-green" />,
      title: "Optimización para IA",
      description: "Aparece en ChatGPT, Gemini, Perplexity y los nuevos resúmenes de IA que ya integra Google cuando los usuarios pregunten sobre tu sector."
    },
    {
      icon: <FileText className="w-12 h-12 text-teal-green" />,
      title: "Contenido inteligente",
      description: "Prompts y datos estructurados para que la IA recomiende tu marca como la mejor opción disponible."
    },
    {
      icon: <Globe className="w-12 h-12 text-teal-green" />,
      title: "Visibilidad local y global",
      description: "Posicionamiento geográfico en consultas conversacionales para captar clientes en tu zona y expandirte."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Qué ofrecemos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-gray-800 text-center hover:border-teal-green transition-colors duration-300 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                {offering.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {offering.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
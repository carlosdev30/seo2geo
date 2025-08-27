import React, { useState } from 'react';
import { Zap, CheckCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const ServiceSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="servicios" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-military-green p-8 rounded-lg border border-military-green">
          <div className="flex items-center mb-6">
            <Zap className="w-12 h-12 text-white mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-white">AI Visibility Boost: tu pasaporte al internet de la próxima década</h2>
            </div>
          </div>
          
          <div className="text-lg text-white mb-8 leading-relaxed space-y-4">
            <p>
              Y si quieres que lo hagamos por ti, ponemos en marcha AI Visibility Boost: nuestro servicio completo de implementación.
            </p>
            
            <p>
              En solo 4–6 semanas transformamos tu web para que aparezca en ChatGPT, Gemini, Perplexity y en los nuevos resúmenes de Google con IA. Detectamos los fallos, reestructuramos tu web y dejamos todo listo para que la IA recomiende tu marca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Auditoría técnica completa</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Datos estructurados JSON-LD</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Optimización de entidades</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Contenido para IA conversacional</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Presencia en GPTs personalizados</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Seguimiento y optimización</span>
              </div>
            </div>
          </div>

          {/* Integrated Compatibility Section */}
          <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-white border-opacity-20 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Compatible con tu SEO actual</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0 mt-2"></div>
                <p className="text-white">
                  Compatible al 100% con tu SEO actual.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0 mt-2"></div>
                <p className="text-white">
                  No es "o una cosa u otra", es un más a más.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0 mt-2"></div>
                <p className="text-white">
                  No gestionamos SEO clásico ni redes sociales, pero colaboramos como White Label para agencias que quieran ofrecer SEO para IA a sus clientes.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0 mt-2"></div>
                <p className="text-white">
                  Nos centramos en lo que importa: que tu web aparezca en las respuestas de IA.
                </p>
              </div>
            </div>
            
            <p className="text-white font-medium italic leading-relaxed">
              SEO2GEO complementa tu estrategia de SEO, no la sustituye. Te llevamos más allá: hacia la visibilidad en buscadores de IA.
            </p>
          </div>

          <a
            href="/servicios"
            className="block w-full bg-white hover:bg-gray-100 text-military-green font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg text-center"
            aria-label="Ir a la página de servicios para hablar con un especialista"
          >
            Hablar con un especialista
          </a>
        </div>
      </div>

      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        websiteUrl=""
      />
    </section>
  );
};

export default ServiceSection;
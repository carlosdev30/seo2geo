import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Zap, Users, Building, ShoppingCart, Briefcase } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import MasterclassModal from '../components/MasterclassModal';
import { useMasterclassModal } from '../hooks/useMasterclassModal';

const ServicesPage: React.FC = () => {
  const { isModalOpen, closeModal } = useMasterclassModal();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    website: ''
  });
  const [whitelabelData, setWhitelabelData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    website: '',
    clientes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWhitelabelSubmitted, setIsWhitelabelSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contacto especialista:', formData);
    setIsSubmitted(true);
  };

  const handleWhitelabelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contacto White Label:', whitelabelData);
    setIsWhitelabelSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhitelabelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setWhitelabelData({
      ...whitelabelData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      title: "Auditoría técnica y resolución de errores",
      description: "Identificamos y corregimos todos los problemas técnicos que impiden que la IA entienda tu web correctamente."
    },
    {
      title: "Reestructuración SEO técnico + IA",
      description: "Optimizamos la arquitectura de tu web para motores de búsqueda tradicionales y sistemas de IA conversacional."
    },
    {
      title: "Implementación de datos estructurados",
      description: "Configuramos JSON-LD y Schema.org para que la IA comprenda exactamente qué hace tu empresa y dónde opera."
    },
    {
      title: "Creación de contenidos optimizados para IA",
      description: "Desarrollamos contenido que responde preguntas naturales y posiciona tu marca como la mejor opción."
    },
    {
      title: "Presencia en GPTs personalizados",
      description: "Te incluimos en GPTs especializados de tu sector para aumentar tu visibilidad en consultas específicas."
    },
    {
      title: "Seguimiento + optimización",
      description: "Monitoreamos tu presencia en IA y optimizamos continuamente para mantener y mejorar tu posicionamiento."
    }
  ];

  const useCases = [
    {
      icon: <Building className="w-8 h-8 text-teal-green" />,
      title: "Empresa local",
      description: "Aparece cuando los usuarios pregunten \"restaurante cerca de mí\", \"abogado en Madrid\" o \"dentista recomendado\".",
      example: "Búsquedas conversacionales locales"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-teal-green" />,
      title: "Ecommerce",
      description: "Destaca en comparativas de IA como \"mejor portátil por menos de 1000 €\" o \"qué smartwatch comprar en 2025\".",
      example: "Comparativas y recomendaciones de productos"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-teal-green" />,
      title: "Profesionales y servicios",
      description: "Abogados, inmobiliarias, médicos, consultores. Aparece cuando busquen servicios profesionales en tu área.",
      example: "Servicios profesionales especializados"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Recibes tu informe gratuito",
      description: "Analizamos tu presencia actual en IA y te mostramos exactamente qué necesitas mejorar."
    },
    {
      number: "2", 
      title: "Contratas AI Visibility Boost",
      description: "Decidimos juntos la estrategia y comenzamos la implementación completa."
    },
    {
      number: "3",
      title: "En 4–6 semanas tu web aparece en buscadores de IA",
      description: "Tu marca se posiciona en ChatGPT, Gemini, Perplexity y los resúmenes de Google con IA."
    }
  ];

  return (
    <div id="top-servicios" className="min-h-screen bg-black text-white">
      <SEOHead 
        title="AI Visibility Boost - Servicios | SEO2GEO"
        description="Implementación completa de visibilidad en buscadores de IA. Aparece en ChatGPT, Gemini, Perplexity y Google con IA en 4-6 semanas."
        canonical="https://seo2geo.io/servicios"
      />
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-teal-green hover:text-opacity-80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-12 h-12 text-teal-green mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              AI Visibility Boost
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-teal-green mb-8">
            Implementación completa de visibilidad en buscadores de IA
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ya tienes claro qué falla. Ahora nosotros lo hacemos por ti.
          </p>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8 max-w-2xl mx-auto">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Hablar con un especialista
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                    required
                  />
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                    required
                  />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://tusitio.com (incluye https://)"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-teal-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Contactar especialista
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-teal-green mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-4">
                  ✅ Solicitud enviada
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nuestro equipo se pondrá en contacto contigo pronto para programar una consulta.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Qué incluye AI Visibility Boost
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-green transition-colors duration-300">
                <h3 className="text-xl font-bold text-teal-green mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Casos de uso
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 text-center hover:border-teal-green transition-colors duration-300">
                <div className="flex justify-center mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <p className="text-sm text-teal-green font-semibold">
                  {useCase.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proceso en 3 pasos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block mt-8">
                    <ArrowRight className="w-6 h-6 text-teal-green mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* White Label Section */}
        <div className="mb-16 bg-gray-900 p-12 rounded-lg border border-gray-800">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 text-teal-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Eres agencia?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Ofrece SEO para IA a tus clientes sin necesidad de desarrollarlo internamente. 
              Con nuestro modelo White Label, trabajamos contigo bajo tu marca para que amplíes 
              tu portafolio y generes más ingresos.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {!isWhitelabelSubmitted ? (
              <form onSubmit={handleWhitelabelSubmit} className="space-y-4">
                <input
                  type="text"
                  name="nombre"
                  value={whitelabelData.nombre}
                  onChange={handleWhitelabelChange}
                  placeholder="Nombre completo *"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={whitelabelData.email}
                  onChange={handleWhitelabelChange}
                  placeholder="Email *"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                  required
                />
                <input
                  type="text"
                  name="empresa"
                  value={whitelabelData.empresa}
                  onChange={handleWhitelabelChange}
                  placeholder="Empresa *"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                  required
                />
                <input
                  type="tel"
                  name="telefono"
                  value={whitelabelData.telefono}
                  onChange={handleWhitelabelChange}
                  placeholder="Teléfono *"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                  required
                />
                <input
                  type="url"
                  name="website"
                  value={whitelabelData.website}
                  onChange={handleWhitelabelChange}
                  placeholder="https://tusitio.com (incluye https://)"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                  required
                />
                <select
                  name="clientes"
                  value={whitelabelData.clientes}
                  onChange={handleWhitelabelChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                  required
                >
                  <option value="">Número aproximado de clientes *</option>
                  <option value="1-5">1-5 clientes</option>
                  <option value="6-20">6-20 clientes</option>
                  <option value="21-50">21-50 clientes</option>
                  <option value="50+">50+ clientes</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-teal-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Contáctanos
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-teal-green mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-4">
                  ✅ Solicitud White Label enviada
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nos pondremos en contacto contigo pronto para discutir las oportunidades de colaboración.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-military-green p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para aparecer en buscadores de IA?
          </h2>
          <p className="text-xl text-white mb-8">
            Comienza con tu análisis gratuito y descubre qué necesitas para posicionarte en ChatGPT, Gemini y Perplexity.
          </p>
          <div className="space-y-4">
            <Link
              to="/#hero"
              className="inline-block bg-white hover:bg-gray-100 text-military-green font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg mr-4"
              aria-label="Ir al inicio: Obtén tu análisis gratuito"
            >
              Obtener análisis gratuito
            </Link>
            <button
              onClick={() => {
                const form = document.querySelector('form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block bg-teal-green hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Hablar con un especialista ahora
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <MasterclassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ServicesPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABlock from '../components/CTABlock';

const MasterclassPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to October 9, 2025 at 18:00 Spain time
  useEffect(() => {
    const targetDate = new Date('2025-10-09T18:00:00+02:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro Masterclass:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const progressPercentage = Math.max(0, Math.min(100, 
    ((new Date('2025-10-09T18:00:00+02:00').getTime() - new Date().getTime()) / 
    (new Date('2025-10-09T18:00:00+02:00').getTime() - new Date('2025-01-01T00:00:00+02:00').getTime())) * 100
  ));

  return (
    <div className="min-h-screen text-white">
      <SEOHead 
        title="Masterclass gratuita — SEO para Inteligencia Artificial | SEO2GEO"
        description="Masterclass gratuita de 45 minutos para aprender cómo posicionarte en ChatGPT, Gemini, Perplexity y los resúmenes de IA de Google."
        canonical="https://seo2geo.io/masterclass"
      />
      <Header />
      
      <div id="top-masterclass" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-teal-green hover:text-opacity-80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Masterclass gratuita — SEO para Inteligencia Artificial
          </h1>
          <p className="text-xl text-gray-300">
            45 minutos para entender cómo aparecer en buscadores de IA y configurar tu entidad digital.
          </p>
        </div>

        {/* What you'll learn */}
        <div className="bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-gray-800 mb-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-teal-green mb-6 text-center">
            En esta Masterclass descubrirás…
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Qué diferencia hay entre SEO clásico y SEO para IA.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Cómo funcionan las entidades y los datos estructurados.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Qué hacer para que ChatGPT, Gemini, Perplexity y Google con IA te citen.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Los primeros pasos para implementar tu posicionamiento conversacional.
              </p>
            </div>
          </div>
        </div>

        {/* Urgency block */}
        <div className="bg-gradient-to-r from-military-green to-teal-green p-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Plazas limitadas
              </h3>
            </div>
            <p className="text-xl text-white mb-4">
              Próxima edición el <strong>9 de octubre de 2025 a las 18:00h (hora España)</strong>
            </p>
            
            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-black bg-opacity-30 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-gray-200">Días</div>
              </div>
              <div className="bg-black bg-opacity-30 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-gray-200">Horas</div>
              </div>
              <div className="bg-black bg-opacity-30 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-200">Min</div>
              </div>
              <div className="bg-black bg-opacity-30 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-200">Seg</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-black bg-opacity-30 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-1000"
                style={{ width: `${100 - progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Registration form */}
        <div className="bg-gray-900 bg-opacity-30 p-8 rounded-lg border border-gray-800 mb-8 backdrop-blur-sm">
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Regístrate gratis
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Reservar mi plaza gratuita
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-teal-green mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-4">
                ✅ Te has registrado en la Masterclass
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Recibirás en tu correo los detalles de acceso.
              </p>
            </div>
          )}
        </div>

        <CTABlock />

        {/* Final CTA */}
        {!isSubmitted && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const form = document.querySelector('form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-teal-green hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              aria-label="Reservar plaza gratuita en la Masterclass"
            >
              Reservar mi plaza gratuita
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MasterclassPage;
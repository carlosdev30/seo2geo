import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABlock from '../components/CTABlock';
import MasterclassModal from '../components/MasterclassModal';
import { useMasterclassModal } from '../hooks/useMasterclassModal';

const FAQPage: React.FC = () => {
  const { isModalOpen, closeModal } = useMasterclassModal();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿La asesoría de 20 minutos realmente es gratuita?',
      answer: 'Sí, completamente gratuita. Tras recibir tu análisis podrás agendar una sesión sin coste con nuestro equipo para entender tu informe y llevarte recomendaciones prácticas específicas para tu web.'
    },
    {
      question: '¿Qué es el SEO para Inteligencia Artificial?',
      answer: 'Es la optimización de tu web para que aparezca y sea recomendada por buscadores conversacionales como ChatGPT, Gemini, Perplexity y los nuevos resúmenes de IA que ya integra Google cuando los usuarios hacen preguntas sobre tu sector.'
    },
    {
      question: '¿En qué se diferencia del SEO tradicional?',
      answer: 'El SEO tradicional optimiza para motores como Google. El SEO para IA optimiza para que los sistemas conversacionales entiendan, encuentren y recomienden tu negocio en respuestas directas a usuarios.'
    },
    {
      question: '¿Cuánto tiempo tarda en verse resultados?',
      answer: 'Los primeros resultados suelen verse entre 4-8 semanas. Sin embargo, algunos cambios como la optimización de datos estructurados pueden tener impacto más inmediato en cómo la IA interpreta tu web.'
    },
    {
      question: '¿Qué incluye el análisis gratuito?',
      answer: 'Evaluamos cómo aparece tu web en ChatGPT, Gemini, Perplexity y los nuevos resúmenes de IA que ya integra Google, analizamos tus datos estructurados, identificamos oportunidades de mejora y comparamos tu presencia con competidores.'
    },
    {
      question: '¿Funciona para cualquier tipo de negocio?',
      answer: 'Sí, desde servicios profesionales hasta e-commerce. Cualquier negocio que quiera ser encontrado cuando los usuarios pregunten a la IA sobre su sector puede beneficiarse del SEO para IA.'
    },
    {
      question: '¿Qué pasa si mi web no aparece en ChatGPT?',
      answer: 'Es normal y muy común. La mayoría de webs no están optimizadas para IA. Nuestro análisis identificará exactamente qué necesitas implementar para empezar a aparecer en ChatGPT, Gemini, Perplexity y los nuevos resúmenes de IA que ya integra Google.'
    },
    {
      question: '¿El SEO para IA reemplaza al SEO tradicional?',
      answer: 'No, lo complementa. Una estrategia completa necesita ambos enfoques, pero el peso está cambiando hacia la optimización para IA conforme más usuarios adoptan buscadores conversacionales.'
    },
    {
      question: '¿Cómo miden los resultados?',
      answer: 'Monitoreamos menciones de tu marca en respuestas de IA, autoridad temática, aparición en consultas relevantes y calidad de las recomendaciones que hace la IA sobre tu negocio.'
    },
    {
      question: '¿Qué son los datos estructurados y por qué importan?',
      answer: 'Son código que ayuda a la IA a entender exactamente qué hace tu empresa, dónde opera y por qué es relevante. Sin ellos, la IA no puede interpretar correctamente tu contenido.'
    },
    {
      question: '¿Trabajáis con empresas internacionales?',
      answer: 'Sí, trabajamos con empresas de cualquier país. El SEO para IA es especialmente importante para empresas que quieren expandirse a nuevos mercados geográficos.'
    },
    {
      question: '¿Qué pasa después del análisis gratuito?',
      answer: 'Recibirás tu informe por email y podrás agendar tu asesoría gratuita de 20 minutos. Si decides trabajar con nosotros, te presentaremos una propuesta personalizada basada en tus necesidades específicas.'
    },
    {
      question: '¿Cuánto cuesta el servicio completo Visibility Boost?',
      answer: 'El servicio completo Visibility Boost tiene un coste de 1.997€ e incluye implementación completa en 4-6 semanas: auditoría técnica, datos estructurados, optimización de entidades, contenido para IA y seguimiento.'
    },
    {
      question: '¿Ofrecéis garantías de resultados?',
      answer: 'Garantizamos la implementación técnica correcta según las mejores prácticas. Los resultados dependen de múltiples factores, pero nuestros clientes suelen ver mejoras significativas en 4-8 semanas.'
    },
    {
      question: '¿Cómo sabéis qué pregunta la gente a la IA sobre mi sector?',
      answer: 'Utilizamos herramientas especializadas y análisis de patrones de consultas conversacionales para identificar las preguntas más frecuentes en tu sector y optimizar tu presencia para esas consultas.'
    },
    {
      question: '¿Qué pasa si mi competencia ya está optimizada para IA?',
      answer: 'Mejor empezar cuanto antes. Analizamos a tu competencia y desarrollamos estrategias para diferenciarte y posicionarte como la mejor opción en tu nicho específico.'
    },
    {
      question: '¿Trabajáis solo con webs grandes o también con pequeñas empresas?',
      answer: 'Trabajamos con empresas de todos los tamaños. De hecho, las pequeñas empresas pueden obtener ventajas competitivas significativas implementando SEO para IA antes que sus competidores más grandes.'
    },
    {
      question: '¿Necesito conocimientos técnicos para implementar vuestras recomendaciones?',
      answer: 'No necesariamente. Proporcionamos recomendaciones técnicas detalladas y, si trabajas con nosotros, implementamos todo directamente. También ofrecemos formación para tu equipo técnico.'
    },
    {
      question: '¿El SEO para IA funciona en todos los idiomas?',
      answer: 'Sí, aunque la efectividad puede variar según el idioma. Los sistemas de IA más avanzados funcionan mejor en inglés, pero también procesan español, francés, alemán y otros idiomas principales correctamente.'
    },
    {
      question: '¿Cómo afecta la IA a las búsquedas locales?',
      answer: 'La IA está transformando las búsquedas locales. Cuando alguien pregunta "¿dónde puedo encontrar X cerca de mí?", la IA necesita datos estructurados precisos para recomendarte. Optimizamos específicamente para esto.'
    },
    {
      question: '¿Qué herramientas utilizáis para el análisis?',
      answer: 'Utilizamos una combinación de herramientas propias y especializadas para monitorear presencia en IA, analizar datos estructurados, evaluar autoridad temática y comparar con competidores.'
    },
    {
      question: '¿Puedo cancelar el servicio en cualquier momento?',
      answer: 'El servicio Visibility Boost es un proyecto de implementación de 4-6 semanas, no una suscripción. Una vez completado, tienes la opción de contratar servicios de mantenimiento y optimización continua.'
    }
  ];

  const blogPosts = [
    {
      slug: 'seo-para-ia',
      title: 'SEO para IA: qué es y por qué cambia las reglas del juego'
    },
    {
      slug: 'seo-tradicional-vs-seo2geo',
      title: 'SEO tradicional vs SEO2GEO: diferencias prácticas'
    },
    {
      slug: 'estadisticas-posicionamiento-ia-2025',
      title: 'Estadísticas 2025: la importancia del posicionamiento en buscadores de IA'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="top-faq" className="min-h-screen bg-black text-white">
      <SEOHead 
        title="Preguntas Frecuentes | SEO2GEO"
        description="Resuelve todas tus dudas sobre SEO para Inteligencia Artificial. Preguntas frecuentes sobre optimización para ChatGPT, Gemini y buscadores de IA."
        canonical="https://seo2geo.io/faq"
      />
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-teal-green hover:text-opacity-80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-teal-green mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Preguntas Frecuentes
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Resolvemos tus dudas sobre SEO para Inteligencia Artificial
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <button
                className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
                aria-expanded={openFAQ === index ? "true" : "false"}
                aria-controls={`faq-${index}`}
                id={`q-faq-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-teal-green flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-green flex-shrink-0" />
                )}
              </button>
              
              <div 
                className="faq-panel px-6 pb-4"
                id={`faq-${index}`}
                role="region"
                aria-labelledby={`q-faq-${index}`}
                hidden={openFAQ !== index}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Section */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            ¿Quieres aprender más?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-white font-semibold text-sm">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <CTABlock />
      <Footer />
      <MasterclassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FAQPage;
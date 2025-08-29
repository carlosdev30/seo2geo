import React from 'react';
import { Search, TrendingUp, Users, BarChart3, Globe, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Search className="w-8 h-8 text-military-green" />,
      number: "~5.7 mil millones",
      label: "Visitas mensuales a ChatGPT en julio 2025",
      microExplanation: "Si tu web no aparece en estas respuestas, no existe para millones de usuarios.",
      source: {
        text: "Similarweb",
        url: "https://www.similarweb.com/blog/marketing/seo/chatgpt-monthly-visits/?utm_source=chatgpt.com"
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-military-green" />,
      number: "x25",
      label: "El tráfico desde ChatGPT hacia webs de noticias se multiplicó por 25 en un año",
      microExplanation: "Las webs visibles en IA están captando un flujo de tráfico explosivo.",
      source: {
        text: "TechCrunch",
        url: "https://techcrunch.com/2025/07/02/chatgpt-referrals-to-news-sites-are-growing-but-not-enough-to-offset-search-declines/?utm_source=chatgpt.com"
      }
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-military-green" />,
      number: "27%",
      label: "Casi 1 de cada 3 búsquedas ya muestra directamente un resumen en Google. Ahí es donde tu web debe aparecer… o se queda fuera.",
      microExplanation: "Casi 1 de cada 3 búsquedas nunca llega a tu web si no estás en ese resumen.",
      source: {
        text: "Search Engine Land",
        url: "https://searchengineland.com/zero-click-searches-up-organic-clicks-down-456660?utm_source=chatgpt.com"
      }
    },
    {
      icon: <Globe className="w-8 h-8 text-military-green" />,
      number: "43.5%",
      label: "En Europa, menos de la mitad de las búsquedas en Google generan un clic orgánico a una web",
      microExplanation: "Más de la mitad de las búsquedas en Google no generan tráfico orgánico.",
      source: {
        text: "Search Engine Land",
        url: "https://searchengineland.com/zero-click-searches-up-organic-clicks-down-456660?utm_source=chatgpt.com"
      }
    },
    {
      icon: <Users className="w-8 h-8 text-military-green" />,
      number: "60%",
      label: "El 60% de los adultos ya ha usado IA para informarse o resolver dudas",
      microExplanation: "Tu cliente ya está tomando decisiones con la IA, no solo con Google.",
      source: {
        text: "AP News",
        url: "https://apnews.com/article/229b665d10d057441a69f56648b973e1?utm_source=chatgpt.com"
      }
    },
    {
      icon: <Zap className="w-8 h-8 text-military-green" />,
      number: "70%",
      label: "7 de cada 10 búsquedas locales ('restaurante cerca de mí', 'abogado en Madrid') ya muestran resúmenes instantáneos en Google o IA",
      microExplanation: "Tus clientes encuentran opciones en IA antes de llegar a tu web.",
      source: {
        text: "Datos de mercado SEO",
        url: "#"
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Lo que está ocurriendo ya
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              La forma de buscar en internet ha cambiado. Estos son los números que lo demuestran.
            </p>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-900 bg-opacity-30 p-8 rounded-xl border border-gray-800 hover:border-military-green transition-all duration-300 hover:shadow-2xl hover:shadow-military-green/10 group backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-center mb-4">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-green-500 mb-3">
                  {stat.number}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed mb-6 min-h-[4rem] flex items-center justify-center text-sm md:text-base">
                {stat.label}
              </p>
              
              {/* Micro-explanation */}
              <p className="text-gray-400 text-center text-xs md:text-sm leading-relaxed mb-6 font-light italic">
                {stat.microExplanation}
              </p>
              
              {/* Source Link */}
              <div className="text-center">
                <a
                  href={stat.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-military-green underline transition-colors duration-200"
                >
                  Fuente: {stat.source.text}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Book } from 'lucide-react';

const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    {
      term: 'AEO (Answer Engine Optimization)',
      definition: 'Optimización específica para motores de respuesta como ChatGPT, Gemini y Perplexity.'
    },
    {
      term: 'Conversational SEO',
      definition: 'Estrategia de optimización para búsquedas en lenguaje natural y consultas conversacionales.'
    },
    {
      term: 'Datos Estructurados',
      definition: 'Código que ayuda a los motores de búsqueda y IA a entender el contenido de una página web.'
    },
    {
      term: 'E-E-A-T',
      definition: 'Experience, Expertise, Authoritativeness, Trustworthiness - criterios de calidad de Google.'
    },
    {
      term: 'Embeddings',
      definition: 'Representaciones vectoriales de texto que permiten a la IA entender significados y relaciones.'
    },
    {
      term: 'Entidad',
      definition: 'Concepto, persona, lugar u objeto que puede ser identificado y descrito de forma única.'
    },
    {
      term: 'Google Business Profile',
      definition: 'Perfil de empresa en Google que mejora la visibilidad local y en búsquedas de IA.'
    },
    {
      term: 'Grounding',
      definition: 'Proceso por el cual la IA conecta sus respuestas con fuentes de información verificables.'
    },
    {
      term: 'JSON-LD',
      definition: 'Formato de datos estructurados recomendado por Google para marcar contenido web.'
    },
    {
      term: 'Knowledge Graph',
      definition: 'Base de datos de entidades y sus relaciones utilizada por Google y otros buscadores.'
    },
    {
      term: 'Large Language Model (LLM)',
      definition: 'Modelo de IA entrenado en grandes cantidades de texto para generar respuestas coherentes.'
    },
    {
      term: 'Natural Language Processing (NLP)',
      definition: 'Tecnología que permite a las máquinas entender y procesar el lenguaje humano.'
    },
    {
      term: 'Optimización Semántica',
      definition: 'Técnica que se enfoca en el significado y contexto del contenido, no solo en palabras clave.'
    },
    {
      term: 'Prompt',
      definition: 'Instrucción o pregunta que se le da a un sistema de IA para obtener una respuesta específica.'
    },
    {
      term: 'RAG (Retrieval-Augmented Generation)',
      definition: 'Técnica que combina búsqueda de información con generación de texto para respuestas precisas.'
    },
    {
      term: 'Schema.org',
      definition: 'Vocabulario estándar para marcar contenido web con datos estructurados.'
    },
    {
      term: 'Semantic Search',
      definition: 'Búsqueda que entiende la intención y contexto, no solo las palabras exactas.'
    },
    {
      term: 'SERP (Search Engine Results Page)',
      definition: 'Página de resultados de un motor de búsqueda tradicional como Google.'
    },
    {
      term: 'Topic Clustering',
      definition: 'Agrupación de contenido relacionado para establecer autoridad temática.'
    },
    {
      term: 'Vector Database',
      definition: 'Base de datos optimizada para almacenar y buscar representaciones vectoriales de información.'
    },
    {
      term: 'Voice Search',
      definition: 'Búsquedas realizadas mediante comandos de voz, precursoras de las consultas conversacionales.'
    },
    {
      term: 'Zero-Click Search',
      definition: 'Búsquedas que se resuelven sin hacer clic en ningún resultado, directamente en la interfaz.'
    },
    {
      term: 'AI Overviews',
      definition: 'Respuestas generadas por IA que aparecen en la parte superior de los resultados de Google.'
    },
    {
      term: 'Contextual Relevance',
      definition: 'Relevancia basada en el contexto completo de la consulta, no solo en palabras clave.'
    },
    {
      term: 'Entity Salience',
      definition: 'Importancia relativa de una entidad dentro de un texto o contexto específico.'
    },
    {
      term: 'Featured Snippets',
      definition: 'Fragmentos destacados que aparecen en la parte superior de los resultados de búsqueda.'
    },
    {
      term: 'Intent Matching',
      definition: 'Proceso de hacer coincidir el contenido con la intención real del usuario.'
    },
    {
      term: 'Knowledge Panel',
      definition: 'Panel informativo que aparece en Google con datos sobre entidades específicas.'
    },
    {
      term: 'Long-tail Keywords',
      definition: 'Frases de búsqueda más específicas y largas, importantes para consultas conversacionales.'
    },
    {
      term: 'Multi-modal Search',
      definition: 'Búsquedas que combinan texto, imágenes, voz y otros tipos de entrada.'
    }
  ];

  // Show only first 6 terms for preview
  const previewTerms = glossaryTerms.slice(0, 6);

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Book className="w-12 h-12 text-teal-green mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Glosario SEO para IA
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Términos esenciales para entender el SEO en la era de la Inteligencia Artificial
          </p>
          
          <p className="text-gray-400">
            Vista previa de los términos más importantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {previewTerms.map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-green transition-colors duration-300">
              <h3 className="text-lg font-bold text-teal-green mb-3">
                {item.term}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/glosario"
            className="inline-block bg-teal-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Ver más términos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlossarySection;
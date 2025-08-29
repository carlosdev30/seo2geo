import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABlock from '../components/CTABlock';
import MasterclassModal from '../components/MasterclassModal';
import { useMasterclassModal } from '../hooks/useMasterclassModal';

interface BlogPostData {
  title: string;
  content: string;
  date: string;
  author: string;
  description: string;
}

const blogPosts: Record<string, BlogPostData> = {
  'seo-para-ia': {
    title: 'SEO para IA: qué es y por qué cambia las reglas del juego',
    description: 'Descubre cómo el SEO para Inteligencia Artificial está revolucionando la forma en que las empresas se posicionan online.',
    date: '15 de enero, 2025',
    author: 'Equipo SEO2GEO',
    content: `
      <p>La Inteligencia Artificial está transformando radicalmente la forma en que los usuarios buscan información online. Ya no se limitan a escribir palabras clave en Google; ahora hacen preguntas completas y naturales a ChatGPT, Gemini, Perplexity y otros buscadores conversacionales.</p>

      <h2>¿Qué es el SEO para IA?</h2>
      <p>El SEO para IA es la optimización de contenido y estructura web para que los modelos de lenguaje encuentren, comprendan y recomienden tu negocio cuando los usuarios hacen consultas conversacionales. A diferencia del SEO tradicional, que se enfoca en palabras clave, el SEO para IA se centra en entidades, contexto y comprensión semántica.</p>

      <h2>Las nuevas reglas del juego</h2>
      <p>Los buscadores de IA no funcionan como Google. No muestran 10 enlaces azules; dan respuestas directas y recomendaciones específicas. Si tu empresa no está optimizada para estos sistemas, simplemente no existirás en las respuestas que reciben millones de usuarios diariamente.</p>

      <h3>Diferencias clave:</h3>
      <ul>
        <li><strong>Búsquedas conversacionales:</strong> Los usuarios preguntan como hablarían con un experto</li>
        <li><strong>Respuestas directas:</strong> La IA proporciona información específica, no listas de enlaces</li>
        <li><strong>Contexto semántico:</strong> Importa más el significado que las palabras exactas</li>
        <li><strong>Autoridad temática:</strong> La IA valora la expertise y especialización</li>
      </ul>

      <h2>Por qué es urgente adaptarse</h2>
      <p>Las estadísticas son claras: más del 70% de los usuarios ya utilizan herramientas de IA para investigar compras y tomar decisiones. Si tu competencia aparece en ChatGPT cuando preguntan sobre tu sector y tú no, estás perdiendo clientes potenciales cada día.</p>

      <p>El SEO para IA no es el futuro; es el presente. Las empresas que se adapten ahora tendrán una ventaja competitiva significativa sobre las que esperen.</p>
    `
  },
  'seo-tradicional-vs-seo2geo': {
    title: 'SEO tradicional vs SEO2GEO: diferencias prácticas',
    description: 'Comparativa detallada entre las técnicas de SEO tradicional y las nuevas estrategias de SEO2GEO para buscadores de IA.',
    date: '12 de enero, 2025',
    author: 'Equipo SEO2GEO',
    content: `
      <p>El mundo del posicionamiento web está viviendo su mayor transformación desde la llegada de Google. Mientras el SEO tradicional sigue siendo importante, el SEO2GEO representa la evolución necesaria para mantenerse visible en la era de la Inteligencia Artificial.</p>

      <h2>SEO Tradicional: Lo que conocemos</h2>
      <p>El SEO tradicional se ha centrado durante décadas en optimizar para motores de búsqueda como Google, Bing o Yahoo. Sus pilares fundamentales incluyen:</p>

      <ul>
        <li><strong>Palabras clave:</strong> Investigación y optimización para términos específicos</li>
        <li><strong>Enlaces:</strong> Construcción de autoridad a través de backlinks</li>
        <li><strong>Contenido:</strong> Creación de contenido optimizado para rankings</li>
        <li><strong>Técnico:</strong> Optimización de velocidad, estructura y crawlability</li>
      </ul>

      <h2>SEO2GEO: La nueva frontera</h2>
      <p>SEO2GEO va más allá del SEO tradicional, optimizando específicamente para buscadores conversacionales y sistemas de IA. Sus características distintivas son:</p>

      <h3>Enfoque en entidades, no palabras clave</h3>
      <p>Mientras el SEO tradicional se obsesiona con palabras clave exactas, SEO2GEO se centra en entidades y relaciones semánticas. La IA comprende conceptos, no solo términos.</p>

      <h3>Datos estructurados avanzados</h3>
      <p>SEO2GEO utiliza esquemas JSON-LD complejos que ayudan a la IA a entender exactamente qué hace tu empresa, dónde opera y por qué es relevante.</p>

      <h3>Contenido conversacional</h3>
      <p>En lugar de contenido keyword-stuffed, SEO2GEO crea contenido que responde preguntas naturales como las que haría un usuario a ChatGPT.</p>

      <h2>Comparativa práctica</h2>
      <table>
        <tr>
          <th>Aspecto</th>
          <th>SEO Tradicional</th>
          <th>SEO2GEO</th>
        </tr>
        <tr>
          <td>Objetivo</td>
          <td>Ranking en SERPs</td>
          <td>Recomendación por IA</td>
        </tr>
        <tr>
          <td>Métricas</td>
          <td>Posiciones, CTR, tráfico</td>
          <td>Menciones en IA, autoridad temática</td>
        </tr>
        <tr>
          <td>Contenido</td>
          <td>Optimizado para keywords</td>
          <td>Conversacional y contextual</td>
        </tr>
        <tr>
          <td>Estructura</td>
          <td>HTML semántico básico</td>
          <td>JSON-LD avanzado, entidades</td>
        </tr>
      </table>

      <h2>¿Reemplaza uno al otro?</h2>
      <p>No. SEO2GEO complementa y amplifica el SEO tradicional. Una estrategia completa necesita ambos enfoques, pero el peso está cambiando hacia la optimización para IA.</p>

      <p>Las empresas que implementen SEO2GEO ahora tendrán ventaja competitiva cuando la adopción de buscadores de IA se generalice completamente.</p>
    `
  },
  'estadisticas-posicionamiento-ia-2025': {
    title: 'Estadísticas 2025: la importancia del posicionamiento en buscadores de IA',
    description: 'Datos actualizados sobre el crecimiento de los buscadores de IA y su impacto en el comportamiento de búsqueda de los usuarios.',
    date: '10 de enero, 2025',
    author: 'Equipo SEO2GEO',
    content: `
      <p>Los números no mienten: la Inteligencia Artificial está redefiniendo cómo las personas buscan información y toman decisiones de compra. Las estadísticas de 2025 revelan una transformación acelerada que ninguna empresa puede ignorar.</p>

      <h2>El crecimiento explosivo de los buscadores de IA</h2>
      <p>Según datos de Similarweb, las plataformas de IA generativa procesaron más de 2.4 mil millones de consultas mensuales en 2024, una cifra que se espera que se duplique en 2025.</p>

      <h3>Distribución por plataforma:</h3>
      <ul>
        <li><strong>ChatGPT:</strong> 1.8 mil millones de consultas mensuales</li>
        <li><strong>Google Bard/Gemini:</strong> 400 millones de consultas mensuales</li>
        <li><strong>Perplexity:</strong> 150 millones de consultas mensuales</li>
        <li><strong>Otros (Claude, Bing Chat):</strong> 50 millones de consultas mensuales</li>
      </ul>

      <h2>Cambio en el comportamiento de búsqueda</h2>
      <p>Un estudio de Gartner Research revela que el 73% de los usuarios ya utilizan herramientas de IA para investigar compras tanto B2B como B2C. Este porcentaje aumenta al 85% en usuarios menores de 35 años.</p>

      <h3>Tipos de consultas más frecuentes:</h3>
      <ul>
        <li>Comparativas de productos/servicios (45%)</li>
        <li>Recomendaciones personalizadas (32%)</li>
        <li>Explicaciones técnicas (28%)</li>
        <li>Búsquedas locales (25%)</li>
      </ul>

      <h2>El impacto en el tráfico orgánico tradicional</h2>
      <p>SparkToro reporta una caída del 65% en clics orgánicos debido al aumento de búsquedas "zero-click" - consultas que se resuelven directamente en la interfaz de IA sin visitar sitios web.</p>

      <h3>Sectores más afectados:</h3>
      <ul>
        <li><strong>Servicios profesionales:</strong> -72% en clics orgánicos</li>
        <li><strong>E-commerce:</strong> -58% en clics orgánicos</li>
        <li><strong>Contenido informativo:</strong> -81% en clics orgánicos</li>
        <li><strong>Servicios locales:</strong> -45% en clics orgánicos</li>
      </ul>

      <h2>Oportunidades emergentes</h2>
      <p>Aunque el panorama parece desafiante, las empresas optimizadas para IA están viendo resultados extraordinarios:</p>

      <ul>
        <li><strong>Aumento del 340%</strong> en menciones de marca en respuestas de IA</li>
        <li><strong>Mejora del 180%</strong> en calidad de leads provenientes de consultas conversacionales</li>
        <li><strong>Incremento del 220%</strong> en conversiones de usuarios que llegan via recomendaciones de IA</li>
      </ul>

      <h2>Predicciones para 2025</h2>
      <p>Los expertos predicen que para finales de 2025:</p>

      <ul>
        <li>El 60% de todas las búsquedas serán conversacionales</li>
        <li>Las empresas sin optimización para IA perderán el 40% de su visibilidad online</li>
        <li>Los buscadores tradicionales integrarán respuestas de IA como estándar</li>
        <li>El SEO para IA se convertirá en una necesidad, no una ventaja competitiva</li>
      </ul>

      <h2>Conclusión</h2>
      <p>Las estadísticas son claras: la transformación ya está aquí. Las empresas que se adapten ahora al SEO para IA no solo sobrevivirán al cambio, sino que prosperarán en el nuevo ecosistema digital.</p>

      <p>No se trata de si tu empresa necesita SEO para IA, sino de cuándo vas a empezar a implementarlo.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { isModalOpen, closeModal } = useMasterclassModal();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
          <Link to="/" className="text-green-600 hover:text-green-500">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <SEOHead 
        title={`${post.title} | SEO2GEO Blog`}
        description={post.description}
        canonical={`https://seo2geo.io/blog/${slug}`}
        type="article"
      />
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/#blog" 
          className="inline-flex items-center text-teal-green hover:text-opacity-80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        <div 
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </article>

      <CTABlock />
      <Footer />
      <MasterclassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BlogPost;
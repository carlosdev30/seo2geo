import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      slug: 'seo-para-ia',
      title: 'SEO para IA: qué es y por qué cambia las reglas del juego',
      excerpt: 'Descubre cómo el SEO para Inteligencia Artificial está revolucionando la forma en que las empresas se posicionan online.',
      date: '15 de enero, 2025',
      readTime: '5 min'
    },
    {
      slug: 'seo-tradicional-vs-seo2geo',
      title: 'SEO tradicional vs SEO2GEO: diferencias prácticas',
      excerpt: 'Comparativa detallada entre las técnicas de SEO tradicional y las nuevas estrategias para buscadores de IA.',
      date: '12 de enero, 2025',
      readTime: '7 min'
    },
    {
      slug: 'estadisticas-posicionamiento-ia-2025',
      title: 'Estadísticas 2025: la importancia del posicionamiento en buscadores de IA',
      excerpt: 'Datos actualizados sobre el crecimiento de los buscadores de IA y su impacto en el comportamiento de búsqueda.',
      date: '10 de enero, 2025',
      readTime: '6 min'
    }
  ];

  return (
    <section id="blog" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog SEO2GEO
          </h2>
          <p className="text-xl text-gray-300">
            Insights y estrategias sobre SEO para Inteligencia Artificial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-black bg-opacity-30 rounded-lg border border-gray-800 overflow-hidden hover:border-green-600 transition-colors duration-300 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-teal-green hover:text-opacity-80 font-semibold transition-colors"
                >
                  Leer artículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/#blog"
            className="inline-block bg-teal-green hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            aria-label="Explorar más artículos del blog"
          >
            Explorar más artículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
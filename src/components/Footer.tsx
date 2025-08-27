import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-4">
              <a href="/#hero" aria-label="Ir al inicio">
                <img 
                  src="/1.png" 
                  alt="SEO2GEO Logo" 
                  className="w-16 h-16"
                />
              </a>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              SEO2GEO — La primera agencia en España especializada en SEO para Inteligencia Artificial.
            </p>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2 text-teal-green" />
              <a 
                href="mailto:hello@seo2geo.io" 
                className="hover:text-white transition-colors"
              >
                hello@seo2geo.io
              </a>
            </div>
          </div>

          {/* Enlaces principales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir al inicio"
                >
                  Inicio
                </a>
              </li>
              <li>
                <Link 
                  to="/servicios" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Servicios"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <a 
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir al Blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link 
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Preguntas Frecuentes"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link 
                  to="/glosario"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Glosario"
                >
                  Glosario
                </Link>
              </li>
              <li>
                <a 
                  href="/masterclass"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Masterclass"
                >
                  Masterclass
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/legal" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Aviso Legal (inicio)"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacidad" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Política de Privacidad (inicio)"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Ir a Contacto (inicio)"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SEO2GEO S.L. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <span className="text-white text-sm">
              📅 Próxima Masterclass: Posicionamiento en Inteligencia Artificial
            </span>
            <a
              href="/masterclass"
              className="bg-military-green hover:bg-opacity-80 text-white text-sm font-semibold py-1 px-4 rounded transition-colors duration-200"
            >
              Reserva tu plaza
            </a>
          </div>
        </div>
      </div>
      
      <header className="bg-black bg-opacity-20 border-b border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href="/#hero" aria-label="Ir al inicio">
              <img 
                src="/1.png" 
                alt="SEO2GEO Logo" 
                className="w-16 h-16"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Ir al inicio"
            >
              Inicio
            </a>
            <a 
              href="/servicios" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Ir a Servicios"
            >
              Servicios
            </a>
            <a 
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Ir al Blog"
            >
              Blog
            </a>
            <a 
              href="/faq" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Ir a Preguntas Frecuentes"
            >
              Preguntas Frecuentes
            </a>
            <a 
              href="/masterclass" 
              className="text-military-green hover:text-opacity-80 font-semibold transition-colors"
              aria-label="Ir a Masterclass (inicio)"
            >
              Masterclass
            </a>
            <a 
              href="/contacto" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Ir a Contacto (inicio)"
            >
              Contacto
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-800 z-50 md:hidden transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <img 
                    src="/1.png" 
                    alt="SEO2GEO Logo" 
                    className="w-12 h-12"
                  />
                  <button
                    onClick={closeMobileMenu}
                    className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/servicios"
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Servicios
                    </Link>
                    <Link
                      to="/blog"
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/faq"
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Preguntas Frecuentes
                    </Link>
                    <Link
                      to="/masterclass"
                      onClick={closeMobileMenu}
                      className="block text-lg text-military-green hover:text-opacity-80 font-semibold transition-colors py-2"
                    >
                      Masterclass
                    </Link>
                    <Link
                      to="/contacto"
                      onClick={closeMobileMenu}
                      className="block text-lg text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Contacto
                    </Link>
                  </div>
                </nav>
                
                {/* Footer */}
                <div className="p-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 text-center">
                    SEO para Inteligencia Artificial
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
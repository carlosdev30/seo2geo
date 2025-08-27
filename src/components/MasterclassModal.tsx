import React, { useState, useEffect, useRef } from 'react';
import { X, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MasterclassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MasterclassModal: React.FC<MasterclassModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Block body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus trap
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusableRef.current) {
              e.preventDefault();
              lastFocusableRef.current?.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastFocusableRef.current) {
              e.preventDefault();
              firstFocusableRef.current?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      // Focus first element
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleReserveClick = () => {
    // Mark as seen and close
    sessionStorage.setItem('mc_seen', 'true');
    onClose();
  };

  const handleCloseClick = () => {
    // Mark as seen and close
    sessionStorage.setItem('mc_seen', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        ref={modalRef}
        className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 border border-gray-700 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={firstFocusableRef}
          onClick={handleCloseClick}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-green"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="pr-12">
          {/* Title */}
          <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Masterclass gratuita: Posicionamiento en IA
          </h2>
          
          {/* Date and time */}
          <div className="flex items-center text-teal-green font-semibold mb-6">
            <Clock className="w-5 h-5 mr-2" />
            <span>9 de octubre, 18:00h España</span>
          </div>

          {/* Subtitle */}
          <p id="modal-description" className="text-xl text-gray-300 mb-8 leading-relaxed">
            Aprende cómo aparecer en ChatGPT, Gemini, Perplexity y los resúmenes de Google con IA.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Qué cambia y cómo adaptarte ya</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Caso práctico con checklist de acciones</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-teal-green mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Enfoque legal y operativo listo para aplicar</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            {/* Primary CTA */}
            <Link
              to="/masterclass?utm_source=popup&utm_medium=site&utm_campaign=mc_promo"
              onClick={handleReserveClick}
              className="w-full bg-teal-green hover:bg-opacity-80 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Reservar mi plaza gratuita
            </Link>

            {/* Secondary CTA */}
            <button
              ref={lastFocusableRef}
              onClick={handleCloseClick}
              className="w-full text-gray-400 hover:text-white transition-colors text-center py-2 focus:outline-none focus:ring-2 focus:ring-teal-green rounded"
            >
              Quiero verlo más tarde
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterclassModal;
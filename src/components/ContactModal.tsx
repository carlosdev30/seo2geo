import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, websiteUrl }) => {
  const [formData, setFormData] = useState({
    websiteUrl: websiteUrl,
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos
    console.log('Datos enviados:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Completa tu solicitud</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Web de tu empresa (incluye https://) *
              </label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://tusitio.com (incluye https://)"
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                ref={firstInputRef}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
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
                className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-green focus:ring-1 focus:ring-teal-green"
                required
              />
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
                Número de teléfono *
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
              Enviar solicitud
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-teal-green mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-4">¡Solicitud enviada!</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              ✅ Hemos recibido tu solicitud. Te enviaremos tu informe junto con la asesoría gratuita de 20 minutos.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-teal-green hover:bg-opacity-80 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
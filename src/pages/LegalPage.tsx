import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABlock from '../components/CTABlock';
import MasterclassModal from '../components/MasterclassModal';
import { useMasterclassModal } from '../hooks/useMasterclassModal';

interface LegalPageProps {
  type: 'legal' | 'privacy' | 'contact';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { isModalOpen, closeModal } = useMasterclassModal();

  const getContent = () => {
    switch (type) {
      case 'legal':
        return {
          title: 'Aviso Legal',
          content: `
            <h2>Información General</h2>
            <p><strong>Denominación social:</strong> SEO2GEO S.L.</p>
            <p><strong>Domicilio social:</strong> [Dirección completa]</p>
            <p><strong>CIF:</strong> [Número de CIF]</p>
            <p><strong>Email:</strong> hello@seo2geo.io</p>
            
            <h2>Objeto</h2>
            <p>El presente aviso legal regula el uso del sitio web seo2geo.io, del que es titular SEO2GEO S.L.</p>
            
            <h2>Condiciones de Uso</h2>
            <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones generales de uso.</p>
            
            <h2>Propiedad Intelectual</h2>
            <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a SEO2GEO S.L.</p>
          `
        };
      case 'privacy':
        return {
          title: 'Política de Privacidad',
          content: `
            <h2>Responsable del Tratamiento</h2>
            <p><strong>Identidad:</strong> SEO2GEO S.L.</p>
            <p><strong>Dirección postal:</strong> [Dirección completa]</p>
            <p><strong>Email:</strong> hello@seo2geo.io</p>
            
            <h2>Finalidades del Tratamiento</h2>
            <p>Los datos personales que nos proporciones serán tratados con las siguientes finalidades:</p>
            <ul>
              <li>Gestionar tu solicitud de análisis gratuito</li>
              <li>Contactarte para programar la asesoría gratuita</li>
              <li>Enviarte información comercial sobre nuestros servicios</li>
            </ul>
            
            <h2>Base Legal</h2>
            <p>El tratamiento de tus datos se basa en tu consentimiento expreso al completar el formulario.</p>
            
            <h2>Derechos del Usuario</h2>
            <p>Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerte al mismo y a la portabilidad de tus datos. Puedes ejercer estos derechos enviando un email a hello@seo2geo.io.</p>
            
            <h2>Conservación de Datos</h2>
            <p>Conservaremos tus datos mientras mantengas tu consentimiento y durante los plazos legalmente establecidos.</p>
          `
        };
      case 'contact':
        return {
          title: 'Contacto',
          content: `
            <h2>Información de Contacto</h2>
            <p><strong>Email:</strong> hello@seo2geo.io</p>
            <p><strong>Empresa:</strong> SEO2GEO S.L.</p>
            <p><strong>Especialidad:</strong> SEO para Inteligencia Artificial</p>
            
            <h2>Horario de Atención</h2>
            <p>Lunes a Viernes: 9:00 - 18:00 (CET)</p>
            
            <h2>Solicitar Información</h2>
            <p>Para solicitar información sobre nuestros servicios o agendar tu análisis gratuito, utiliza el formulario en nuestra página principal o envíanos un email directamente.</p>
            
            <h2>Asesoría Gratuita</h2>
            <p>Recuerda que ofrecemos una asesoría gratuita de 20 minutos junto con tu análisis. Durante esta sesión revisaremos juntos los resultados y te daremos recomendaciones específicas para mejorar tu posicionamiento en buscadores de IA.</p>
          `
        };
      default:
        return { title: '', content: '' };
    }
  };

  const { title, content } = getContent();

  return (
    <div id={`top-${type === 'legal' ? 'legal' : type === 'privacy' ? 'privacy' : 'contacto'}`} className="min-h-screen bg-black text-white">
      <SEOHead 
        title={`${title} | SEO2GEO`}
        description={`${title} de SEO2GEO - Agencia especializada en SEO para Inteligencia Artificial`}
        canonical={`https://seo2geo.io/${type === 'legal' ? 'aviso-legal' : type === 'privacy' ? 'privacidad' : 'contacto'}`}
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

        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        
        {type === 'contact' ? (
          <div className="max-w-2xl">
            <p className="text-xl text-gray-300 mb-8">
              Escríbenos y te responderemos pronto.
            </p>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Email de contacto</h2>
              <a 
                href="mailto:hello@seo2geo.io"
                className="text-2xl text-teal-green hover:text-opacity-80 transition-colors font-semibold"
              >
                hello@seo2geo.io
              </a>
            </div>
            
            <CTABlock />
          </div>
        ) : (
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>

      <Footer />
      <MasterclassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LegalPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "SEO2GEO — SEO para Inteligencia Artificial (ChatGPT, Gemini)",
  description = "Agencia pionera en SEO para buscadores de IA. Haz que tu marca aparezca en ChatGPT, Gemini, Perplexity y los nuevos resúmenes de IA que ya integra Google. Análisis + asesoría gratuita.",
  canonical = "https://seo2geo.io",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://seo2geo.io/#organization",
        "name": "SEO2GEO",
        "url": "https://seo2geo.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://seo2geo.io/logo.png"
        },
        "description": "La primera agencia en España especializada en SEO para Inteligencia Artificial",
        "email": "hello@seo2geo.io",
        "foundingDate": "2024",
        "knowsAbout": [
          "SEO para Inteligencia Artificial",
          "Optimización para ChatGPT",
          "SEO conversacional",
          "Datos estructurados",
          "Optimización para Gemini"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://seo2geo.io/#website",
        "url": "https://seo2geo.io",
        "name": "SEO2GEO",
        "description": description,
        "publisher": {
          "@id": "https://seo2geo.io/#organization"
        },
        "inLanguage": "es-ES"
      },
      {
        "@type": "Service",
        "name": "Visibility Boost",
        "description": "Implementación completa de SEO para IA en 4-6 semanas",
        "provider": {
          "@id": "https://seo2geo.io/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "1997",
          "priceCurrency": "EUR",
          "description": "Incluye auditoría técnica, datos estructurados, entidades de marca, contenido optimizado y presencia en GPTs/agents especializados"
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="SEO2GEO" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="SEO2GEO" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
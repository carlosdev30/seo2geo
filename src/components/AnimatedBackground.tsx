import React, { useEffect } from 'react';
import './AnimatedBackground.css';

interface StarConfig {
  size: number;
  top: string;
  left: string;
  delay: string;
}

const AnimatedBackground: React.FC = () => {
  // Forzar el background del body al montar
  useEffect(() => {
    const applyBackground = () => {
      document.body.style.background = 'radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%)';
      document.documentElement.style.background = 'radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%)';

      // También aplicar al root si existe
      const root = document.getElementById('root');
      if (root) {
        root.style.background = 'radial-gradient(ellipse at center, #0a1a0a 0%, #000000 70%)';
      }
    };

    applyBackground();

    // Reaplicar después de un pequeño delay para asegurar que Tailwind no lo sobreescriba
    const timeout = setTimeout(applyBackground, 100);

    return () => clearTimeout(timeout);
  }, []);

  // Configuración de estrellas
  const starsConfig: StarConfig[] = [
    { size: 1, top: '20%', left: '10%', delay: '0s' },
    { size: 3, top: '10%', left: '30%', delay: '1s' },
    { size: 2, top: '30%', left: '60%', delay: '2s' },
    { size: 1, top: '50%', left: '20%', delay: '3s' },
    { size: 2, top: '60%', left: '80%', delay: '1.5s' },
    { size: 1, top: '80%', left: '40%', delay: '2.5s' },
    { size: 3, top: '15%', left: '85%', delay: '0.5s' },
    { size: 2, top: '70%', left: '15%', delay: '3.5s' },
    { size: 1, top: '40%', left: '90%', delay: '1s' },
    { size: 1, top: '90%', left: '70%', delay: '2s' },
    { size: 2, top: '5%', left: '50%', delay: '4s' },
    { size: 1, top: '35%', left: '5%', delay: '2.8s' },
    { size: 3, top: '75%', left: '95%', delay: '1.2s' },
    { size: 1, top: '85%', left: '25%', delay: '3.7s' },
    { size: 2, top: '45%', left: '75%', delay: '0.8s' }
  ];

  return (
    <div className="hero-background" data-testid="animated-background">

      {/* Capa de estrellas */}
      <div className="stars">
        {starsConfig.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              width: `${star.size * 3}px`, /* Tamaño 3x para que sean visibles pero no gigantes */
              height: `${star.size * 3}px`, /* Tamaño 3x para que sean visibles pero no gigantes */
              top: star.top,
              left: star.left,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Triángulos geométricos */}
      <div className="triangle-1" />
      <div className="triangle-2" />
      <div className="triangle-3" />

      {/* Cuadrados geométricos */}
      <div className="square-1" />
      <div className="square-2" />
      <div className="square-3" />

      {/* Orbes móviles */}
      <div className="moving-orb" />
      <div className="modern-orb-1" />
      <div className="modern-orb-2" />

      {/* Overlay adicional para asegurar el background */}
      <div className="background-overlay" />
    </div>
  );
};

export default AnimatedBackground;
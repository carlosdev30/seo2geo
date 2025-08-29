import React, { useEffect, useRef, useCallback } from 'react';

interface FloatingCosmosBackgroundProps {
  density?: number;
  speed?: number;
  parallax?: number;
  connect?: boolean;
  seed?: number;
  hues?: string[];
}

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'square' | 'triangle';
  color: string;
  layer: number;
}

interface Halo {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
}

const FloatingCosmosBackground: React.FC<FloatingCosmosBackgroundProps> = ({
  density = 140,
  speed = 1,
  parallax = 0.035,
  connect = true,
  seed = 42,
  hues = ['var(--shape-1)', 'var(--shape-2)', 'var(--shape-3)']
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const halosRef = useRef<Halo[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const isVisibleRef = useRef(true);
  const resizeTimeoutRef = useRef<NodeJS.Timeout>();

  // Seeded random number generator
  const seededRandom = useCallback((seed: number) => {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }, []);

  // Initialize particles
  const initializeParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const halos: Halo[] = [];
    let currentSeed = seed;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion ? Math.min(24, density * 0.2) : density;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const layer = Math.floor(seededRandom(currentSeed++) * 3);
      const type = ['circle', 'square', 'triangle'][Math.floor(seededRandom(currentSeed++) * 3)] as Particle['type'];
      
      particles.push({
        x: seededRandom(currentSeed++) * canvas.width,
        y: seededRandom(currentSeed++) * canvas.height,
        size: 10 + seededRandom(currentSeed++) * 38,
        alpha: 0.12 + seededRandom(currentSeed++) * 0.16,
        vx: (seededRandom(currentSeed++) - 0.5) * 0.6 * speed,
        vy: (seededRandom(currentSeed++) - 0.5) * 0.6 * speed,
        rotation: seededRandom(currentSeed++) * Math.PI * 2,
        rotationSpeed: (seededRandom(currentSeed++) - 0.5) * 0.08,
        type,
        color: hues[Math.floor(seededRandom(currentSeed++) * hues.length)],
        layer
      });
    }

    // Create halos (3-5 large orbs)
    const haloCount = prefersReducedMotion ? 2 : 3 + Math.floor(seededRandom(currentSeed++) * 3);
    for (let i = 0; i < haloCount; i++) {
      halos.push({
        x: seededRandom(currentSeed++) * canvas.width,
        y: seededRandom(currentSeed++) * canvas.height,
        size: 280 + seededRandom(currentSeed++) * 240,
        alpha: 0.04 + seededRandom(currentSeed++) * 0.06,
        vx: (seededRandom(currentSeed++) - 0.5) * 0.1 * speed,
        vy: (seededRandom(currentSeed++) - 0.5) * 0.1 * speed
      });
    }

    particlesRef.current = particles;
    halosRef.current = halos;
  }, [density, speed, seed, hues]);

  // Draw particle
  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle, parallaxFactor: number) => {
    ctx.save();
    ctx.globalAlpha = particle.alpha;
    
    // Apply parallax offset
    const offsetX = mouseRef.current.x * parallaxFactor + scrollRef.current.x * parallaxFactor * 0.5;
    const offsetY = mouseRef.current.y * parallaxFactor + scrollRef.current.y * parallaxFactor * 0.5;
    
    ctx.translate(particle.x + offsetX, particle.y + offsetY);
    ctx.rotate(particle.rotation);
    
    // Set color
    const color = getComputedStyle(document.documentElement).getPropertyValue(particle.color.replace('var(', '').replace(')', '')) || particle.color;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    const halfSize = particle.size / 2;

    switch (particle.type) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, halfSize, 0, Math.PI * 2);
        ctx.fill();
        break;
      
      case 'square':
        ctx.fillRect(-halfSize, -halfSize, particle.size, particle.size);
        break;
      
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -halfSize);
        ctx.lineTo(-halfSize, halfSize);
        ctx.lineTo(halfSize, halfSize);
        ctx.closePath();
        ctx.fill();
        break;
    }
    
    ctx.restore();
  }, []);

  // Draw connections between nearby particles
  const drawConnections = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    if (!connect) return;

    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--brand-glow') || '#22C55E';
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          const alpha = (1 - distance / 110) * 0.1;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
  }, [connect]);

  // Animation loop
  const animate = useCallback((currentTime: number) => {
    if (!isVisibleRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Update and draw halos (deepest layer)
      halosRef.current.forEach(halo => {
        halo.x += halo.vx * deltaTime;
        halo.y += halo.vy * deltaTime;

        // Wrap around
        if (halo.x < -halo.size) halo.x = canvas.width + halo.size;
        if (halo.x > canvas.width + halo.size) halo.x = -halo.size;
        if (halo.y < -halo.size) halo.y = canvas.height + halo.size;
        if (halo.y > canvas.height + halo.size) halo.y = -halo.size;

        // Draw halo
        ctx.save();
        ctx.globalAlpha = halo.alpha;
        const gradient = ctx.createRadialGradient(halo.x, halo.y, 0, halo.x, halo.y, halo.size / 2);
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--brand-glow') || '#22C55E');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(halo.x - halo.size / 2, halo.y - halo.size / 2, halo.size, halo.size);
        ctx.restore();
      });

      // Update and draw particles by layer
      const layers = [0.02, 0.035, 0.05];
      
      for (let layer = 0; layer < 3; layer++) {
        const layerParticles = particlesRef.current.filter(p => p.layer === layer);
        
        layerParticles.forEach(particle => {
          // Update position
          particle.x += particle.vx * deltaTime;
          particle.y += particle.vy * deltaTime;
          particle.rotation += particle.rotationSpeed * deltaTime;

          // Wrap around
          if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
          if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
          if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
          if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        });

        // Draw connections for this layer
        if (layer === 1) { // Middle layer connections
          drawConnections(ctx, layerParticles);
        }

        // Draw particles
        layerParticles.forEach(particle => {
          drawParticle(ctx, particle, layers[layer] * parallax);
        });
      }
    } else {
      // Static render for reduced motion
      particlesRef.current.forEach(particle => {
        drawParticle(ctx, particle, 0);
      });
      
      halosRef.current.forEach(halo => {
        ctx.save();
        ctx.globalAlpha = halo.alpha * 0.5;
        const gradient = ctx.createRadialGradient(halo.x, halo.y, 0, halo.x, halo.y, halo.size / 2);
        gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue('--brand-glow') || '#22C55E');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(halo.x - halo.size / 2, halo.y - halo.size / 2, halo.size, halo.size);
        ctx.restore();
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticle, drawConnections, parallax]);

  // Handle resize
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      initializeParticles(canvas);
    }, 100);
  }, [initializeParticles]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX - window.innerWidth / 2) * 0.01;
    mouseRef.current.y = (e.clientY - window.innerHeight / 2) * 0.01;
  }, []);

  // Handle scroll
  const handleScroll = useCallback(() => {
    scrollRef.current.x = window.scrollX * 0.001;
    scrollRef.current.y = window.scrollY * 0.001;
  }, []);

  // Handle visibility change
  const handleVisibilityChange = useCallback(() => {
    isVisibleRef.current = !document.hidden;
    if (isVisibleRef.current && !animationRef.current) {
      lastTimeRef.current = performance.now();
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  useEffect(() => {
    const canvas = canvasRef.current || document.getElementById('cosmos-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    // Initial setup
    handleResize();
    
    // Event listeners
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start animation
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [animate, handleResize, handleMouseMove, handleScroll, handleVisibilityChange]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -2 }}
      aria-hidden="true"
    />
  );
};

export default FloatingCosmosBackground;
'use client';

import React, { useEffect, useRef } from 'react';

type Props = {
  density?: number;   // nº de formas (sin contar halos)
  speed?: number;     // escala global 0.6–1.6
  parallax?: number;  // 0.02–0.06 recomendado
  connect?: boolean;  // líneas entre puntos cercanos
  seed?: number;      // reproducibilidad
  hues?: string[];    // colores de formas
};

type ShapeType = 'circle' | 'square' | 'triangle';
type Particle = {
  t: ShapeType;
  x: number; y: number;
  vx: number; vy: number;
  s: number;           // size
  a: number;           // alpha
  d: number;           // depth (0..1)
  r: number;           // rotation
  rs: number;          // rotation speed
  c: string;           // color
};

function rng(seed: number) {
  // mulberry32
  let a = seed >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

export default function FloatingCosmosBackground({
  density = 150,
  speed = 1,
  parallax = 0.035,
  connect = true,
  seed = 42,
  hues,
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const stopRef = useRef(false);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    const dprLimit = 1.5;

    const css = getComputedStyle(document.documentElement);
    const colors = (hues && hues.length ? hues : [
      css.getPropertyValue('--shape-1').trim() || '#22C55E',
      css.getPropertyValue('--shape-2').trim() || '#60A5FA',
      css.getPropertyValue('--shape-3').trim() || '#A78BFA',
    ]);

    let width = 0, height = 0, dpr = 1;
    let raf = 0;
    let last = performance.now();
    let hidden = document.hidden;
    let pointerX = 0.5, pointerY = 0.5; // normalizados

    const rnd = rng(seed);
    const parts: Particle[] = [];
    const halos: { x: number; y: number; r: number; a: number }[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, dprLimit);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      parts.length = 0;
      halos.length = 0;

      // partículas
      for (let i = 0; i < density; i++) {
        const t: ShapeType = (['circle', 'square', 'triangle'] as const)[Math.floor(rnd() * 3)];
        const x = rnd() * width;
        const y = rnd() * height;
        const s = 10 + rnd() * 38; // 10–48px
        const a = 0.12 + rnd() * 0.16;
        const d = 0.2 + rnd() * 0.8; // profundidad
        const sp = (0.05 + rnd() * 0.25) * speed; // px/ms
        const ang = rnd() * Math.PI * 2;
        const vx = Math.cos(ang) * sp;
        const vy = Math.sin(ang) * sp;
        const r = rnd() * Math.PI * 2;
        const rs = (t === 'circle' ? 0 : (0.00002 + rnd() * 0.00006)) * (rnd() < 0.5 ? -1 : 1);
        const c = colors[Math.floor(rnd() * colors.length)];
        parts.push({ t, x, y, vx, vy, s, a, d, r, rs, c });
      }

      // halos profundos (3–5)
      const haloCount = 3 + Math.floor(rnd() * 3);
      for (let i = 0; i < haloCount; i++) {
        halos.push({
          x: rnd() * width,
          y: rnd() * height,
          r: 280 + rnd() * 320,
          a: 0.08 + rnd() * 0.08,
        });
      }
    }

    function drawGridGlow() {
      // vignette / gradiente base muy suave
      const g = ctx.createRadialGradient(
        width * 0.65, height * 0.3, 0,
        width * 0.65, height * 0.3, Math.max(width, height) * 0.9
      );
      const brandGlow = css.getPropertyValue('--brand-glow').trim() || 'rgba(34,197,94,1)';
      g.addColorStop(0, `${brandGlow}11`);
      g.addColorStop(0.6, '#00000000');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // halos
      for (const h of halos) {
        const gg = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, h.r);
        const c = (css.getPropertyValue('--brand-primary').trim() || '#16A34A');
        gg.addColorStop(0, `${c}22`);
        gg.addColorStop(1, '#00000000');
        ctx.globalAlpha = h.a;
        ctx.fillStyle = gg;
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function wrap(p: Particle) {
      if (p.x < -p.s) p.x = width + p.s;
      else if (p.x > width + p.s) p.x = -p.s;
      if (p.y < -p.s) p.y = height + p.s;
      else if (p.y > height + p.s) p.y = -p.s;
    }

    function drawParticle(p: Particle, px: number, py: number) {
      const offx = (px - 0.5) * parallax * p.d * width;
      const offy = (py - 0.5) * parallax * p.d * height;
      const x = p.x + offx;
      const y = p.y + offy;

      ctx.save();
      ctx.translate(x, y);
      if (p.rs) ctx.rotate(p.r);

      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.c;

      if (p.t === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.s * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.t === 'square') {
        const half = p.s * 0.5;
        const r = 6;
        const w = p.s, h = p.s;
        ctx.beginPath();
        ctx.moveTo(-half + r, -half);
        ctx.lineTo(half - r, -half);
        ctx.quadraticCurveTo(half, -half, half, -half + r);
        ctx.lineTo(half, half - r);
        ctx.quadraticCurveTo(half, half, half - r, half);
        ctx.lineTo(-half + r, half);
        ctx.quadraticCurveTo(-half, half, -half, half - r);
        ctx.lineTo(-half, -half + r);
        ctx.quadraticCurveTo(-half, -half, -half + r, -half);
        ctx.closePath();
        ctx.fill();
      } else {
        // triángulo equilátero
        const s = p.s;
        const h = (Math.sqrt(3) / 2) * s;
        ctx.beginPath();
        ctx.moveTo(0, -h / 2);
        ctx.lineTo(-s / 2, h / 2);
        ctx.lineTo(s / 2, h / 2);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }

    function drawConnections(px: number, py: number) {
      const cell = 110;
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);
      const grid: number[][] = Array.from({ length: cols * rows }, () => []);

      // indexar
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const offx = (px - 0.5) * parallax * p.d * width;
        const offy = (py - 0.5) * parallax * p.d * height;
        const x = p.x + offx;
        const y = p.y + offy;
        const cx = Math.max(0, Math.min(cols - 1, Math.floor(x / cell)));
        const cy = Math.max(0, Math.min(rows - 1, Math.floor(y / cell)));
        grid[cy * cols + cx].push(i);
      }

      ctx.lineWidth = 1;
      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const bucket = grid[cy * cols + cx];
          if (!bucket.length) continue;
          // vecinos de 9 celdas
          for (let ny = -1; ny <= 1; ny++) {
            for (let nx = -1; nx <= 1; nx++) {
              const bx = cx + nx, by = cy + ny;
              if (bx < 0 || by < 0 || bx >= cols || by >= rows) continue;
              const bucket2 = grid[by * cols + bx];
              for (const i of bucket) {
                for (const j of bucket2) {
                  if (j <= i) continue;
                  const pi = parts[i], pj = parts[j];
                  const offix = (px - 0.5) * parallax * pi.d * width;
                  const offiy = (py - 0.5) * parallax * pi.d * height;
                  const offjx = (px - 0.5) * parallax * pj.d * width;
                  const offjy = (py - 0.5) * parallax * pj.d * height;
                  const xi = pi.x + offix, yi = pi.y + offiy;
                  const xj = pj.x + offjx, yj = pj.y + offjy;
                  const dx = xi - xj, dy = yi - yj;
                  const dist2 = dx * dx + dy * dy;
                  const max = 110;
                  if (dist2 < max * max) {
                    const alpha = 0.08 * (1 - Math.sqrt(dist2) / max);
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = '#A7F3D0'; // verde muy claro
                    ctx.beginPath();
                    ctx.moveTo(xi, yi);
                    ctx.lineTo(xj, yj);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (hidden || stopRef.current) return;

      const dt = Math.min(32, now - last); // cap
      last = now;

      // clear
      ctx.clearRect(0, 0, width, height);

      // fondo suave + halos
      drawGridGlow();

      // update + draw
      const px = pointerX, py = pointerY;
      for (const p of parts) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.r += p.rs * dt;
        wrap(p);
        drawParticle(p, px, py);
      }

      if (connect) drawConnections(px, py);
    }

    function onPointer(e: PointerEvent) {
      const nx = Math.min(1, Math.max(0, e.clientX / width));
      const ny = Math.min(1, Math.max(0, e.clientY / height));
      // easing
      pointerX += (nx - pointerX) * 0.08;
      pointerY += (ny - pointerY) * 0.08;
    }

    function onVisibility() {
      hidden = document.hidden;
    }

    // bootstrap
    resize();
    init();

    if (prefersReducedMotion()) {
      // solo dibuja una composición estática
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      drawGridGlow();
      for (const p of parts.slice(0, 22)) drawParticle(p, 0.5, 0.5);
      return () => {};
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    raf = requestAnimationFrame((t) => { last = t; frame(t); });

    return () => {
      stopRef.current = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density, speed, parallax, connect, seed, JSON.stringify(hues)]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
'use client';

export default function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg,
            rgba(255,255,255,0.5) 0px,
            rgba(255,255,255,0.5) 1px,
            transparent 1px,
            transparent 80px),
          repeating-linear-gradient(90deg,
            rgba(255,255,255,0.5) 0px,
            rgba(255,255,255,0.5) 1px,
            transparent 1px,
            transparent 80px)
        `,
        mixBlendMode: 'soft-light',
      }}
    />
  );
}
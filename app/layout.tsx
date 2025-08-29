import type { Metadata } from "next";
import "./globals.css";
import FloatingCosmosBackground from "./components/FloatingCosmosBackground";
import GridOverlay from "./components/GridOverlay";

export const metadata: Metadata = { title: "SEO2GEO" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="text-white antialiased">
        {/* Fondo dinámico */}
        <div className="fixed inset-0 -z-10">
          <FloatingCosmosBackground density={150} parallax={0.035} connect={true} />
          <GridOverlay />
          {/* glow extra para el hero */}
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_400px_at_65%_30%,color-mix(in_oklab,var(--brand-glow) 18%,transparent),transparent_70%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
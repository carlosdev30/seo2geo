import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingCosmosBackground from './components/FloatingCosmosBackground';
import GridOverlay from './components/GridOverlay';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogPost from './pages/BlogPost';
import LegalPage from './pages/LegalPage';
import FAQPage from './pages/FAQPage';
import GlossaryPage from './pages/GlossaryPage';
import MasterclassPage from './pages/MasterclassPage';

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Fondo dinámico */}
      <div className="fixed inset-0 -z-10">
        <FloatingCosmosBackground density={150} parallax={0.035} connect={true} />
        <GridOverlay />
        {/* glow extra para el hero */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(600px 400px at 65% 30%, rgba(34, 197, 94, 0.18), transparent 70%)'
        }} />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/glosario" element={<GlossaryPage />} />
          <Route path="/masterclass" element={<MasterclassPage />} />
          <Route path="/legal" element={<LegalPage type="legal" />} />
          <Route path="/privacidad" element={<LegalPage type="privacy" />} />
          <Route path="/contacto" element={<LegalPage type="contact" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
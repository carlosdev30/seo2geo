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
    <>
      <FloatingCosmosBackground />
      <GridOverlay />
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
    </>
  );
}

export default App;
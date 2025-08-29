import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogPost from './pages/BlogPost';
import LegalPage from './pages/LegalPage';
import FAQPage from './pages/FAQPage';
import GlossaryPage from './pages/GlossaryPage';
import MasterclassPage from './pages/MasterclassPage';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Components */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
        <div className="cosmos-base-bg w-full h-full" />
        <div className="grid-overlay fixed inset-0" style={{ zIndex: -9 }} />
        <canvas 
          id="cosmos-canvas" 
          className="fixed inset-0 w-full h-full"
          style={{ zIndex: -8 }}
        />
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
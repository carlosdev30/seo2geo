import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import MasterclassModal from '../components/MasterclassModal';
import { useMasterclassModal } from '../hooks/useMasterclassModal';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import ServiceSection from '../components/ServiceSection';
import StatsSection from '../components/StatsSection';
import OfferingsSection from '../components/OfferingsSection';
import AnalysisSection from '../components/AnalysisSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const { isModalOpen, closeModal } = useMasterclassModal();

  return (
    <div className="min-h-screen relative" style={{ zIndex: 1 }}>
      <SEOHead />
      <Header />
      <Hero />
      <ProblemSection />
      <StatsSection />
      <AnalysisSection />
      <OfferingsSection />
      <ServiceSection />
      <Footer />
      <MasterclassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePage;
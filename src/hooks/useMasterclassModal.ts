import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useMasterclassModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show on masterclass page
    if (location.pathname === '/masterclass') {
      return;
    }

    // Check if already seen in this session
    if (sessionStorage.getItem('mc_seen') === 'true') {
      return;
    }

    // Respect Do Not Track
    if (navigator.doNotTrack === '1') {
      return;
    }

    // Only show on specific pages
    const allowedPages = ['/', '/servicios', '/faq', '/contacto', '/privacidad', '/legal'];
    const isBlogPost = location.pathname.startsWith('/blog/');
    
    if (!allowedPages.includes(location.pathname) && !isBlogPost) {
      return;
    }

    let hasShown = false;
    let scrollTriggered = false;
    let timeTriggered = false;

    // Timer trigger (8 seconds)
    const timer = setTimeout(() => {
      if (!hasShown && !scrollTriggered) {
        timeTriggered = true;
        hasShown = true;
        setIsModalOpen(true);
      }
    }, 8000);

    // Scroll trigger (50%)
    const handleScroll = () => {
      if (hasShown || timeTriggered) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50) {
        scrollTriggered = true;
        hasShown = true;
        setIsModalOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShown || timeTriggered || scrollTriggered) return;
      
      // Only trigger if mouse is moving towards top of screen rapidly
      if (e.clientY <= 5 && e.movementY < -50) {
        hasShown = true;
        setIsModalOpen(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Only add mouse leave on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [location.pathname]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    closeModal
  };
};
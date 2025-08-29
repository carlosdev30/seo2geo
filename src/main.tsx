import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import FloatingCosmosBackground from './components/FloatingCosmosBackground';
import App from './App.tsx';
import './index.css';

// Disable automatic scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Handle page loading and scrolling
window.addEventListener('DOMContentLoaded', () => {
  // Handle hash on page load
  const hash = window.location.hash || '';
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
});

// Handle smooth scrolling for hash links
document.addEventListener('DOMContentLoaded', () => {
  // Handle hash link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"], a[href^="#"]') as HTMLAnchorElement;
    
    // Don't handle FAQ accordion buttons
    if (target.closest('.faq-trigger') || target.closest('.faq-item')) {
      return;
    }
    
    if (link && (link.getAttribute('href')?.includes('#'))) {
      const href = link.getAttribute('href') || '';
      
      // Allow normal navigation but force scroll after route change
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    // Force scroll to top if no hash
    window.scrollTo(0, 0);
  }

  // Handle hash link clicks
  }, true);

  // FAQ Accordion functionality
  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest('.faq-trigger, .faq-accordion a') as HTMLElement;
    if (!trigger) return;
    
    // Si está dentro del FAQ, nunca cambiar hash ni hacer navegación
    if (trigger.closest('.faq-accordion')) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Toggle accesible si es un .faq-trigger
    if (trigger.classList && trigger.classList.contains('faq-trigger')) {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;
      
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
    }
  }, true);

  // Si hay listener global que hace scroll en anchors, ignorar los que estén dentro del FAQ
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[href^="#"], a[href^="/"]') as HTMLAnchorElement;
    if (!a) return;
    if (a.closest('.faq-accordion')) return; // NO actuar en FAQ
    
    // Resto de lógica global para otros enlaces
    const href = a.getAttribute('href') || '';
    if (href.includes('#')) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, true);
});

// Initialize cosmos background after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const cosmosContainer = document.createElement('div');
  cosmosContainer.id = 'cosmos-root';
  document.body.appendChild(cosmosContainer);
  
  const cosmosRoot = createRoot(cosmosContainer);
  cosmosRoot.render(<FloatingCosmosBackground />);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

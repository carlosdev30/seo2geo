import React from 'react';

const GridOverlay: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none grid-overlay"
      style={{ zIndex: -9 }}
      aria-hidden="true"
    />
  );
};

export default GridOverlay;
import React from 'react';

const DebugBackground: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px'
    }}>
      <div>Background Status:</div>
      <div>✅ Component Loaded</div>
      <div style={{ color: '#00ff7f' }}>🌟 Stars Active</div>
      <div style={{ color: '#00ff7f' }}>🔮 Orbs Moving</div>
      <div style={{ color: '#ffff00' }}>👀 Debug Mode ON</div>
    </div>
  );
};

export default DebugBackground;
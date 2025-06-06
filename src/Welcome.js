import React, { useState } from 'react';

// Add floaty animation keyframes to the document if not present
if (typeof document !== 'undefined' && !document.getElementById('floaty-keyframes')) {
  const style = document.createElement('style');
  style.id = 'floaty-keyframes';
  style.innerHTML = `
    @keyframes floaty {
      0% { transform: translateY(0) scale(1); }
      100% { transform: translateY(-30px) scale(1.18); }
    }
    @keyframes flask-bounce {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-12px) scale(1.08); }
    }
    @keyframes borderGlowSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .welcome-flask-anim {
      animation: flask-bounce 2.6s infinite cubic-bezier(.7,0,.3,1.1);
      filter: drop-shadow(0 4px 24px #38bdf8cc);
    }
  `;
  document.head.appendChild(style);
}


export default function Welcome({ onNext }) {
  const [showUpdateLog, setShowUpdateLog] = useState(false);
  const [showCreditsLog, setShowCreditsLog] = useState(false);
  return (
    <div className="center-container fade-in slide-up" style={{ position: 'relative', overflow: 'hidden', width: '100vw', minHeight: '100vh' }}>
      <div className="global-bg-glow" />
      {/* Floating chemistry icons - now direct children */}
      <span className="floating-chem-icon" style={{ left: '8vw', top: '12vh', fontSize: '3.5em', animationDelay: '0s' }}>🧪</span>
      <span className="floating-chem-icon" style={{ left: '80vw', top: '18vh', fontSize: '2.7em', animationDelay: '2s' }}>⚗️</span>
      <span className="floating-chem-icon" style={{ left: '20vw', top: '70vh', fontSize: '3.2em', animationDelay: '1.5s' }}>🧫</span>
      <span className="floating-chem-icon" style={{ left: '65vw', top: '80vh', fontSize: '2.9em', animationDelay: '3s' }}>🧬</span>
      
      <div className="glass-card pop-in" style={{ position: 'relative', zIndex: 2, background: 'rgba(36, 28, 54, 0.93)', margin: 'auto' }}>
          {/* Border glow animation */}
        <div style={{ position: 'absolute', top: -8, left: -8, right: -8, bottom: -8, borderRadius: 44, zIndex: 4, pointerEvents: 'none', background: 'conic-gradient(from 0deg, #38bdf8, #a5b4fc, #ff5ca7, #38bdf8)', filter: 'blur(14px) brightness(1.5)', opacity: 0.35, animation: 'borderGlowSpin 7s linear infinite' }} />
        <div className="welcome-flask-anim" style={{ fontSize: '4.2em', marginBottom: 10 }}>🧪</div>
        <h2 className="ptable-title">Welcome to AcingChem!</h2>
        <div style={{ fontSize: '1.13em', margin: '12px 0 28px 0', color: '#a5b4fc', fontWeight: 600, textShadow: '0 1px 8px #38bdf8aa', letterSpacing: 1 }}>
            <span role="img" aria-label="sparkle" style={{ marginRight: 6 }}>✨</span>
            Where chemistry comes alive with color and clarity!
          </div>
        <button className="glow-btn" onClick={onNext}>
            <span role="img" aria-label="start" style={{ marginRight: 10, filter: 'drop-shadow(0 2px 6px #ff5ca7)' }}>🚀</span>
            Start Learning
          </button>
        <button className="glow-btn" style={{ marginTop: 22, background: 'linear-gradient(90deg, #a5b4fc 0%, #38bdf8 100%)', color: '#fff', fontWeight: 700, fontSize: '1.06em', letterSpacing: 1.1, border: 'none', borderRadius: 18, boxShadow: '0 2px 18px #38bdf8cc, 0 1px 0 #fff', padding: '13px 32px', cursor: 'pointer', transition: 'background 0.2s', outline: 'none', filter: 'drop-shadow(0 2px 12px #a5b4fc99)', zIndex: 10 }} onClick={() => setShowUpdateLog(true)}>
            <span role="img" aria-label="log" style={{ marginRight: 9, filter: 'drop-shadow(0 2px 6px #38bdf8)' }}>📝</span>
            Update Log
          </button>
        <button className="glow-btn" style={{ marginTop: 12, background: 'linear-gradient(90deg, #86efac 0%, #3b82f6 100%)', color: '#fff', fontWeight: 700, fontSize: '1.06em', letterSpacing: 1.1, border: 'none', borderRadius: 18, boxShadow: '0 2px 18px #3b82f6cc, 0 1px 0 #fff', padding: '13px 32px', cursor: 'pointer', transition: 'background 0.2s', outline: 'none', filter: 'drop-shadow(0 2px 12px #86efac99)', zIndex: 10 }} onClick={() => setShowCreditsLog(true)}>
            <span role="img" aria-label="credits" style={{ marginRight: 9, filter: 'drop-shadow(0 2px 6px #3b82f6)' }}>🌟</span>
            Credits
          </button>
      </div>
      {showUpdateLog && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(24, 30, 48, 0.75)', backdropFilter: 'blur(8px) saturate(1.2)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.3s', overflowY: 'auto' }} onClick={() => setShowUpdateLog(false)}>
          <div style={{ background: 'linear-gradient(135deg, #1e293b 60%, #0f172a 100%)', borderRadius: 24, boxShadow: '0 8px 32px #a259ec55', padding: '32px 24px', maxWidth: 420, width: '90vw', color: '#fff', position: 'relative', animation: 'popIn 0.5s var(--bubbly)' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ color: '#a5b4fc', fontWeight: 800, fontSize: '1.3em', marginBottom: 12 }}>Update Log</h3>
            <div style={{ fontSize: '1.05em', lineHeight: 1.5 }}>
              <b>Recent Updates (Post-June Major Update):</b><br />
              - Limiting Reactant Activity: Fixed stability issues and improved question generation behavior (May 2025).<br />
              - Mole-to-Mole Activity: Significantly expanded question pool with diverse chemical equations and conversion types for a more challenging and less repetitive experience.<br />
              - Mole-to-Mole Feedback: Enhanced feedback system – messages now persist until 'Next Question', detailed explanations are clearer, and the UI is more polished.<br />
              - Mole-to-Mole Feedback: Themed feedback box to align with the website's dark UI aesthetic.<br />
              <br />
              <b>2024-06:</b> Major update!<br />
              - Complete UI redesign: bubbly, animated, and mobile-first.<br />
              - Added full Electron Configuration activities (longhand & shorthand practice).<br />
              - New chemistry icons and floating effects.<br />
              - Smoother transitions and new animations.<br />
              - Performance improvements and bug fixes.<br />
              - Improved mobile experience and layout fixes.<br />
            </div>
            <button className="ptable-btn" style={{ marginTop: 18 }} onClick={() => setShowUpdateLog(false)}>Close</button>
          </div>
        </div>
      )}
      {showCreditsLog && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(24, 30, 48, 0.75)', backdropFilter: 'blur(8px) saturate(1.2)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.3s', overflowY: 'auto' }} onClick={() => setShowCreditsLog(false)}>
          <div style={{ background: 'linear-gradient(135deg, #1e293b 60%, #0f172a 100%)', borderRadius: 24, boxShadow: '0 8px 32px #a259ec55', padding: '32px 24px', maxWidth: 420, width: '90vw', color: '#fff', position: 'relative', animation: 'popIn 0.5s var(--bubbly)' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ color: '#a5b4fc', fontWeight: 800, fontSize: '1.3em', marginBottom: 12 }}>Credits</h3>
            <div style={{ fontSize: '1.05em', lineHeight: 1.6, textAlign: 'left' }}>
              <p style={{ marginBottom: '10px' }}><strong>Owner/Founder:</strong> Adonis Yanez</p>
              <p style={{ marginTop: '15px', marginBottom: '5px', color: '#86efac', fontWeight: 'bold' }}>Huge Help:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}>
                <li>Jose Pavon</li>
                <li>Melba Munguia</li>
                <li>Katherine Quijada</li>
              </ul>
            </div>
            <button className="ptable-btn" style={{ marginTop: 22 }} onClick={() => setShowCreditsLog(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
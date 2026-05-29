import { useState } from 'react';
import { COLORS as C } from '../data';

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);

  return (
    <div style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 300,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      {hover && (
        <div className="animate-fadeUp" style={{
          background: C.bgCard, border: `1px solid ${C.border}`,
          borderRadius: 12, padding: '10px 16px',
          color: C.text, fontSize: 13,
          boxShadow: '0 8px 32px #000',
          whiteSpace: 'nowrap',
        }}>
          Chat with us on WhatsApp
        </div>
      )}
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: 54, height: 54, borderRadius: '50%',
          background: '#25D366', border: 'none',
          fontSize: 26, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px #25D36660',
          transition: 'transform 0.2s',
          transform: hover ? 'scale(1.1)' : 'scale(1)',
        }}
      >💬</button>
    </div>
  );
}

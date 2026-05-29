import { useState } from 'react';
import { COLORS as C } from '../data';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) setSent(true);
  };

  return (
    <section style={{ padding: '0 5% 80px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{
          background: C.bgCard, border: `1px solid ${C.border}`,
          borderRadius: 24, padding: '48px 40px', textAlign: 'center',
        }}>
          <div style={{ fontSize: 36, marginBottom: 14 }}>📬</div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 10 }}>Stay in the Loop</h3>
          <p style={{ color: C.muted, fontSize: 13, marginBottom: 28, lineHeight: 1.8 }}>
            New flavours, exclusive deals, and Nairobi-only drops. No spam, ever.
          </p>
          {sent ? (
            <div style={{ color: C.green, fontSize: 15 }}>
              ✓ You're subscribed! Welcome to the Agrinama family.
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 10, maxWidth: 400, margin: '0 auto' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                style={{
                  flex: 1, background: C.bgCard3,
                  border: `1px solid ${C.border}`, borderRadius: 50,
                  padding: '12px 18px', color: C.text, fontSize: 13,
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = C.green}
                onBlur={e => e.target.style.borderColor = C.border}
              />
              <button onClick={handleSubmit} style={{
                background: C.green, color: '#000', border: 'none',
                borderRadius: 50, padding: '12px 22px',
                fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap',
              }}>Subscribe</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

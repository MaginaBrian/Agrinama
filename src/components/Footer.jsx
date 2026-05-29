import { COLORS as C, FOOTER_LINKS } from '../data';

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 30, height: 30, borderRadius: '50%',
        background: `conic-gradient(${C.green}, ${C.amber}, ${C.green})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
      }}>🌱</div>
      <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>
        agri<span style={{ color: C.green }}>nama</span>
      </span>
    </div>
  );
}

export default function Footer() {
  const socials = [
    { icon: '📘', label: 'Facebook' },
    { icon: '📷', label: 'Instagram' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '💬', label: 'WhatsApp' },
  ];

  return (
    <footer style={{ background: '#040609', borderTop: `1px solid ${C.border}`, padding: '60px 5% 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 44, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ maxWidth: 260 }}>
            <Logo />
            <p style={{ color: C.muted, fontSize: 12, lineHeight: 1.8, margin: '14px 0 16px' }}>
              Kenya's premium tobacco-free nicotine pouches. Modern, discreet, and powerful —
              designed for the next generation of nicotine users.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map(s => (
                <div key={s.label} title={s.label} style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: C.bgCard, border: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, cursor: 'pointer', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = C.green}
                  onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
                >{s.icon}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, items]) => (
            <div key={col}>
              <div style={{ color: C.text, fontWeight: 700, fontSize: 11, marginBottom: 14, letterSpacing: '0.8px' }}>
                {col.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(l => (
                  <a key={l} href="#" style={{ color: C.muted, fontSize: 12, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = C.green}
                    onMouseLeave={e => e.target.style.color = C.muted}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment badges */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ color: C.muted, fontSize: 11 }}>We accept:</span>
          {['💳 Visa', '💳 Mastercard', '📱 M-Pesa', '🏧 PayPal', '🏦 Bank Transfer'].map(p => (
            <span key={p} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '4px 12px', fontSize: 11, color: C.muted,
            }}>{p}</span>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${C.border}`, paddingTop: 22,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 11, color: C.muted + '90' }}>
            © 2025 Agrinama. All Rights Reserved. Registered in Kenya.
          </div>
          <div style={{
            fontSize: 10, color: C.dimmer,
            background: `${C.rose}12`, border: `1px solid ${C.rose}20`,
            borderRadius: 8, padding: '5px 12px',
          }}>
            ⚠️ 18+ ONLY · Nicotine is addictive · Keep away from children
          </div>
        </div>
      </div>
    </footer>
  );
}

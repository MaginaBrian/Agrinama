import { COLORS as C } from '../data';

export default function Wholesale() {
  return (
    <section id="wholesale" style={{ padding: '0 5% 90px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          background: `linear-gradient(135deg, ${C.amber}18 0%, ${C.green}10 60%, ${C.blue}12 100%)`,
          border: `1px solid ${C.amber}30`, borderRadius: 28,
          padding: '62px 52px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 40,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', right: -50, top: -50, width: 260, height: 260, borderRadius: '50%', background: `${C.amber}08`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', left: -30, bottom: -50, width: 200, height: 200, borderRadius: '50%', background: `${C.green}08`, pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 500 }}>
            <div style={{ fontSize: 11, color: C.amber, letterSpacing: 3, marginBottom: 14 }}>WHOLESALE PROGRAMME</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 700, color: C.text, marginBottom: 14, letterSpacing: '-0.5px' }}>
              Stock Agrinama.<br />
              <em style={{ color: C.amber, fontStyle: 'italic' }}>Grow Your Business.</em>
            </h2>
            <p style={{ color: C.muted, fontSize: 14, maxWidth: 420, lineHeight: 1.75, marginBottom: 24 }}>
              Special pricing for retailers, kiosks, and distributors across Kenya.
              Minimum order from just 10 tins. Fast restocking, dedicated WhatsApp support.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['Competitive bulk pricing', 'Fast restocking', 'Dedicated support', 'Custom branding options'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: C.green }}>✓</span>
                  <span style={{ color: C.text, fontSize: 13 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, zIndex: 1, minWidth: 220 }}>
            <button style={{
              background: C.amber, color: '#000', border: 'none',
              borderRadius: 50, padding: '16px 32px', fontSize: 14, fontWeight: 700,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.boxShadow = `0 0 28px ${C.amber}60`; }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}
            >Apply for Wholesale →</button>
            <button style={{
              background: 'transparent', color: C.text,
              border: `1px solid ${C.borderMd}`, borderRadius: 50,
              padding: '14px 32px', fontSize: 13,
            }}>📱 WhatsApp Us</button>
            <div style={{ fontSize: 12, color: C.muted, textAlign: 'center' }}>
              Or call: <strong style={{ color: C.text }}>+254 700 000 000</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

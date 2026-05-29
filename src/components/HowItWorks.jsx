import { COLORS as C, HOW_STEPS } from '../data';

export default function HowItWorks() {
  return (
    <section id="how" style={{
      padding: '90px 5%',
      background: `linear-gradient(180deg, ${C.bg} 0%, #060810 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${C.green}07 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, color: C.green, letterSpacing: 3, marginBottom: 10 }}>HOW IT WORKS</div>
          <h2 style={{ fontSize: 'clamp(30px,4.5vw,50px)', fontWeight: 700, color: C.text, letterSpacing: '-1px', marginBottom: 12 }}>
            Simple as <em style={{ color: C.amber, fontStyle: 'italic' }}>1-2-3-4</em>
          </h2>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            No fire, no app, no hassle. Just slip in a pouch and feel the difference.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 18, marginBottom: 20 }}>
          {HOW_STEPS.map((s, i) => (
            <div key={i} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderRadius: 20, padding: 28, position: 'relative',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.color + '50';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}14`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                position: 'absolute', top: 16, right: 18,
                fontSize: 11, color: s.color, fontWeight: 700,
                letterSpacing: 1, opacity: 0.6,
              }}>{s.n}</div>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${s.color}15`, border: `1px solid ${s.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 16,
              }}>{s.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Info bar */}
        <div style={{
          background: C.bgCard, border: `1px solid ${C.border}`,
          borderRadius: 18, padding: '22px 26px',
          display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
        }}>
          <div style={{ fontSize: 28 }}>⏱️</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>
              How long should I keep the pouch in?
            </div>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
              Each pouch provides <strong style={{ color: C.text }}>30–60 minutes</strong> of nicotine release.
              Do not chew or swallow. After use, fold and deposit it in the dedicated waste pocket inside the tin lid.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { C } from '../data/theme'

export default function AgeGate({ onConfirm }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(4,6,8,0.97)', backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        background: C.bgCard, border: `1px solid ${C.borderMd}`,
        borderRadius: 24, padding: '52px 44px', maxWidth: 420,
        width: '90%', textAlign: 'center',
        boxShadow: '0 40px 120px #000',
        animation: 'fadeUp .4s ease',
      }}>
        <div style={{ fontSize: 52, marginBottom: 14 }}>🌱</div>
        <div style={{ fontSize: 11, color: C.green, letterSpacing: 3, marginBottom: 12 }}>
          AGRINAMA
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26, fontWeight: 700,
          color: C.text, margin: '0 0 12px', letterSpacing: '-.5px',
        }}>Age Verification</h2>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.75, margin: '0 0 32px' }}>
          Nicotine products are strictly for adults aged{' '}
          <strong style={{ color: C.text }}>18 years and above</strong>.
          By continuing you confirm you meet this requirement.
        </p>
        <button
          onClick={onConfirm}
          style={{
            width: '100%', background: C.green, color: '#000',
            border: 'none', borderRadius: 50, padding: '14px 0',
            fontSize: 15, fontWeight: 700, marginBottom: 10,
            transition: 'transform .2s',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        >
          Yes, I am 18 or older →
        </button>
        <button
          onClick={() => alert('Access denied. This site is for adults only.')}
          style={{
            width: '100%', background: 'transparent', color: C.muted,
            border: `1px solid ${C.border}`, borderRadius: 50,
            padding: '13px 0', fontSize: 14,
          }}
        >
          No, I am under 18
        </button>
        <p style={{ fontSize: 11, color: C.dimmer, marginTop: 20 }}>
          ⚠️ Nicotine is addictive. Keep away from children.
        </p>
      </div>
    </div>
  )
}

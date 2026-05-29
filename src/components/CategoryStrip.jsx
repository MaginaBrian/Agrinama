import { COLORS as C, CATEGORY_CARDS } from '../data';

export default function CategoryStrip() {
  return (
    <section style={{ padding: '0 5% 80px', background: C.bg }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: 16,
      }}>
        {CATEGORY_CARDS.map(cat => (
          <a key={cat.label} href="#products" style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            borderRadius: 18, padding: '26px 22px',
            display: 'flex', alignItems: 'center', gap: 18,
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = cat.color + '50';
              e.currentTarget.style.background = C.bgCard2;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.background = C.bgCard;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: 50, height: 50, borderRadius: 13,
              background: `${cat.color}15`, border: `1px solid ${cat.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, flexShrink: 0,
            }}>{cat.icon}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 3 }}>{cat.label}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{cat.sub}</div>
            </div>
            <div style={{ marginLeft: 'auto', color: cat.color, fontSize: 18 }}>→</div>
          </a>
        ))}
      </div>
    </section>
  );
}

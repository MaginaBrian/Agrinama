import { useState } from 'react';
import { COLORS as C, PRODUCTS, CATEGORIES } from '../data';

function StrengthDots({ mg, color }) {
  const filled = Math.min(5, Math.ceil(parseInt(mg) / 5));
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} style={{
          width: 5, height: 5, borderRadius: '50%',
          background: i < filled ? color : C.dimmer,
        }} />
      ))}
    </div>
  );
}

function ProductCard({ p, onAdd }) {
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? C.bgCard2 : C.bgCard,
        border: `1px solid ${hover ? p.color + '45' : C.border}`,
        borderRadius: 20, padding: 22,
        display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'all 0.3s ease',
        transform: hover ? 'translateY(-5px)' : 'none',
        boxShadow: hover ? `0 24px 64px ${p.color}18` : 'none',
      }}
    >
      {/* Visual */}
      <div style={{
        height: 148, borderRadius: 14, position: 'relative',
        background: `radial-gradient(circle at 35% 35%, ${p.color}22 0%, ${p.color}07 55%, transparent 80%), ${C.bgCard3}`,
        border: `1px solid ${p.color}20`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          width: 86, height: 86, borderRadius: '50%',
          border: `2.5px solid ${p.color}`,
          background: `radial-gradient(circle, ${p.color}18 0%, transparent 70%)`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 3,
          boxShadow: `0 0 ${hover ? 40 : 20}px ${p.color}30`,
          transition: 'box-shadow 0.3s',
        }}>
          <div style={{ fontSize: 26 }}>{p.icon}</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: p.color }}>{p.mg}</div>
        </div>

        <div style={{
          position: 'absolute', top: 10, left: 10,
          background: p.tagBg, color: p.color,
          fontSize: 9, fontWeight: 800, padding: '3px 9px',
          borderRadius: 50, letterSpacing: 0.8,
          border: `1px solid ${p.color}30`,
        }}>{p.tag}</div>

        <div style={{ position: 'absolute', bottom: 10, right: 12 }}>
          <StrengthDots mg={p.mg} color={p.color} />
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 9, color: p.color, letterSpacing: 1.5, marginBottom: 4 }}>
          {p.flavor.toUpperCase()}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 5 }}>{p.name}</div>
        <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.55 }}>{p.desc}</div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{p.price}</div>
          <div style={{ fontSize: 10, color: C.muted }}>per tin · 20 pouches</div>
        </div>
        <button onClick={handleAdd} style={{
          background: added ? '#00E87A' : p.color,
          color: '#000', border: 'none', borderRadius: 50,
          padding: '9px 18px', fontSize: 12, fontWeight: 700,
          transition: 'all 0.3s ease', whiteSpace: 'nowrap',
        }}>
          {added ? '✓ Added!' : '+ Add'}
        </button>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <div style={{ fontSize: 11, color: C.green, letterSpacing: 3, marginBottom: 10 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(30px,4.5vw,50px)', fontWeight: 700, color: C.text, letterSpacing: '-1px', marginBottom: 12 }}>{title}</h2>
      {sub && <p style={{ color: C.muted, fontSize: 14, maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>{sub}</p>}
    </div>
  );
}

export default function Products({ onAdd }) {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  return (
    <section id="products" style={{ padding: '90px 5%', background: C.bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="OUR COLLECTION"
          title={<>Find Your <em style={{ color: C.green, fontStyle: 'italic' }}>Perfect Pouch</em></>}
          sub="Premium tobacco-free nicotine pouches in 10+ flavours. From gentle mint to maximum strength."
        />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 44, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setFilter(cat.id)} style={{
              background: filter === cat.id ? C.green : 'transparent',
              color: filter === cat.id ? '#000' : C.muted,
              border: `1px solid ${filter === cat.id ? C.green : C.border}`,
              borderRadius: 50, padding: '10px 22px', fontSize: 13,
              transition: 'all 0.25s ease',
              fontWeight: filter === cat.id ? 700 : 400,
            }}>{cat.label}</button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {shown.map(p => <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  );
}

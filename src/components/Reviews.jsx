import { Fragment } from 'react';
import { COLORS as C, REVIEWS } from '../data';

function Stars({ n }) {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < n ? C.amber : C.dimmer, fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '90px 5%', background: C.bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, color: C.green, letterSpacing: 3, marginBottom: 10 }}>CUSTOMER REVIEWS</div>
          <h2 style={{ fontSize: 'clamp(30px,4.5vw,50px)', fontWeight: 700, color: C.text, letterSpacing: '-1px', marginBottom: 12 }}>
            Loved Across <em style={{ color: C.purple, fontStyle: 'italic' }}>Kenya</em>
          </h2>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Real stories from real people making the smoke-free switch.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: 16, marginBottom: 40,
        }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderRadius: 18, padding: 24, transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = r.color + '40';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ marginBottom: 12 }}><Stars n={r.stars} /></div>
              <p style={{
                color: C.text, fontSize: 13, lineHeight: 1.75,
                margin: '0 0 18px', fontStyle: 'italic',
              }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: `${r.color}20`, border: `1.5px solid ${r.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: r.color,
                }}>{r.avatar}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: C.muted }}>{r.loc}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 9, color: r.color, letterSpacing: 0.5 }}>✓ VERIFIED</div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate stats */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          {[
            { n: '4.9', label: 'Average Rating', color: C.green, stars: true },
            { n: '5,000+', label: 'Happy Customers', color: C.amber },
            { n: '98%', label: 'Would Recommend', color: C.blue },
          ].map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <div style={{ width: 1, height: 56, background: C.border }} />}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 700, color: s.color }}>{s.n}</div>
                {s.stars && <div style={{ color: C.amber, fontSize: 16, margin: '4px 0' }}>★★★★★</div>}
                <div style={{ fontSize: 12, color: C.muted, marginTop: s.stars ? 0 : 4 }}>{s.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

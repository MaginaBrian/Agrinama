import { useState, useEffect } from 'react';
import { COLORS as C, HERO_SLIDES } from '../data';

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 3200);
    return () => clearInterval(t);
  }, []);

  const sl = HERO_SLIDES[slide];

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '90px 5% 60px', position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse 90% 70% at 55% 45%, ${sl.color}10 0%, transparent 68%), ${C.bg}`,
      transition: 'background 1.2s ease',
    }}>
      {/* Decorative rings */}
      {[280, 400, 520].map((r, i) => (
        <div key={r} style={{
          position: 'absolute',
          right: `calc(9% - ${r / 3}px)`,
          top: '50%', transform: 'translateY(-50%)',
          width: r, height: r, borderRadius: '50%',
          border: `1px solid ${sl.color}${['18', '10', '07'][i]}`,
          transition: 'border-color 1.2s ease',
          pointerEvents: 'none',
        }} />
      ))}

      {/* Circle visual */}
      <div style={{
        position: 'absolute', right: '9%', top: '50%', transform: 'translateY(-50%)',
        width: 340, height: 340, borderRadius: '50%',
        background: `radial-gradient(circle at 40% 40%, ${sl.color}22 0%, ${sl.color}06 60%, transparent 100%)`,
        border: `2px solid ${sl.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 1.2s ease', pointerEvents: 'none',
      }}>
        <div style={{
          width: 180, height: 180, borderRadius: '50%',
          background: `radial-gradient(circle, ${sl.color}30 0%, transparent 80%)`,
          border: `2px solid ${sl.color}50`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 6,
          transition: 'all 1.2s ease',
        }}>
          <div style={{ fontSize: 50 }}>{sl.emoji}</div>
          <div style={{
            fontSize: 10, color: sl.color, letterSpacing: 2,
            textAlign: 'center', transition: 'color 1.2s',
          }}>{sl.sub}</div>
        </div>
        <div className="animate-spin" style={{ position: 'absolute', top: 22, right: 22, fontSize: 20, opacity: 0.5 }}>🌿</div>
        <div style={{
          position: 'absolute', bottom: 28, left: 26, fontSize: 16, opacity: 0.4,
          animation: 'spinReverse 12s linear infinite',
        }}>✦</div>
      </div>

      {/* Text content */}
      <div style={{ maxWidth: 620, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: `${sl.color}14`, border: `1px solid ${sl.color}35`,
          borderRadius: 50, padding: '6px 16px', marginBottom: 28,
          fontSize: 12, color: sl.color, letterSpacing: 1,
          transition: 'all 1.2s ease',
        }}>
          <span className="animate-blink" style={{
            width: 7, height: 7, borderRadius: '50%',
            background: sl.color, display: 'inline-block',
          }} />
          Tobacco-Free · Smoke-Free · Kenya-Wide Delivery
        </div>

        <h1 style={{
          fontSize: 'clamp(44px, 7.5vw, 84px)',
          fontWeight: 700, color: C.text,
          lineHeight: 1.03, marginBottom: 8, letterSpacing: '-2px',
        }}>
          Pure Nicotine.<br />
          <em style={{ color: sl.color, fontStyle: 'italic', transition: 'color 1.2s ease' }}>
            {sl.emoji} {sl.label.replace(sl.emoji + ' ', '')}
          </em>
        </h1>

        <p style={{
          fontSize: 17, color: C.muted, margin: '22px 0 38px',
          lineHeight: 1.8, maxWidth: 500,
        }}>
          Premium nicotine pouches crafted for modern Kenyan lifestyles.
          No smoke, no tobacco, no compromise.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#products" style={{
            background: sl.color, color: '#000',
            borderRadius: 50, padding: '15px 34px',
            fontSize: 15, fontWeight: 700, display: 'inline-block',
            transition: 'transform .2s, box-shadow .2s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.boxShadow = `0 0 28px ${sl.color}60`; }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}
          >Shop Now →</a>
          <a href="#how" style={{
            background: 'transparent', color: C.text,
            border: `1px solid ${C.borderMd}`, borderRadius: 50,
            padding: '15px 34px', fontSize: 15, display: 'inline-block',
            transition: 'border-color .2s',
          }}
            onMouseEnter={e => e.target.style.borderColor = sl.color}
            onMouseLeave={e => e.target.style.borderColor = C.borderMd}
          >How It Works</a>
        </div>

        <div style={{ display: 'flex', gap: 36, marginTop: 52 }}>
          {[{ n: '10+', l: 'Flavours' }, { n: '5k+', l: 'Customers' }, { n: '100%', l: 'Tobacco-Free' }, { n: '24hr', l: 'Delivery' }].map(s => (
            <div key={s.l}>
              <div style={{ fontSize: 26, fontWeight: 700, color: sl.color, transition: 'color 1.2s' }}>{s.n}</div>
              <div style={{ fontSize: 11, color: C.muted, letterSpacing: '0.5px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div style={{ position: 'absolute', right: '5%', bottom: 40, display: 'flex', gap: 8 }}>
        {HERO_SLIDES.map((_, i) => (
          <div key={i} onClick={() => setSlide(i)} style={{
            width: i === slide ? 28 : 8, height: 8, borderRadius: 4,
            background: i === slide ? sl.color : C.border,
            cursor: 'pointer', transition: 'all 0.4s ease',
          }} />
        ))}
      </div>
    </section>
  );
}

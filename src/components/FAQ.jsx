import { useState } from 'react';
import { COLORS as C, FAQS } from '../data';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{
      padding: '90px 5%',
      background: `linear-gradient(180deg, ${C.bg} 0%, #050709 100%)`,
    }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, color: C.green, letterSpacing: 3, marginBottom: 10 }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(30px,4.5vw,50px)', fontWeight: 700, color: C.text, letterSpacing: '-1px', marginBottom: 12 }}>
            Common <em style={{ color: C.blue, fontStyle: 'italic' }}>Questions</em>
          </h2>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 440, margin: '0 auto', lineHeight: 1.75 }}>
            Everything you need to know before your first pouch.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{
              background: C.bgCard,
              border: `1px solid ${open === i ? C.blue + '40' : C.border}`,
              borderRadius: 16, overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 22px', background: 'transparent',
                border: 'none', color: C.text, fontSize: 14,
                fontWeight: 600, textAlign: 'left', gap: 14,
              }}>
                <span>{f.q}</span>
                <span style={{
                  flexShrink: 0, fontSize: 22, color: C.blue,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s', display: 'inline-block',
                }}>+</span>
              </button>
              {open === i && (
                <div className="animate-fadeUp" style={{
                  padding: '0 22px 22px',
                  color: C.muted, fontSize: 13, lineHeight: 1.75,
                }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

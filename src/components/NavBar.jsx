import { useState, useEffect } from 'react';
import { COLORS as C } from '../data';

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: `conic-gradient(${C.green}, ${C.amber}, ${C.green})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
      }}>🌱</div>
      <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', color: C.text }}>
        agri<span style={{ color: C.green }}>nama</span>
      </span>
    </div>
  );
}

export default function NavBar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    ['Products',    '#products'],
    ['How It Works','#how'],
    ['Reviews',     '#reviews'],
    ['FAQ',         '#faq'],
    ['Wholesale',   '#wholesale'],
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      padding: '0 5%', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 70,
      background: scrolled ? 'rgba(7,9,13,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
      transition: 'all 0.4s ease',
    }}>
      <a href="#hero"><Logo /></a>

      <div style={{ display: 'flex', gap: 28 }}>
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} style={{
            color: C.muted, fontSize: 13, letterSpacing: '0.3px',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = C.green}
            onMouseLeave={e => e.target.style.color = C.muted}
          >{label}</a>
        ))}
      </div>

      <button style={{
        background: C.green, color: '#000', border: 'none',
        borderRadius: 50, padding: '10px 22px', fontWeight: 700,
        fontSize: 13, display: 'flex', alignItems: 'center', gap: 8,
      }}>
        🛒 Cart
        {cartCount > 0 && (
          <span style={{
            background: '#000', color: C.green, borderRadius: '50%',
            width: 18, height: 18, display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 10, fontWeight: 800,
          }}>{cartCount}</span>
        )}
      </button>
    </nav>
  );
}

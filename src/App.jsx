import { useState, useCallback } from 'react';
import AgeGate        from './components/AgeGate';
import NavBar         from './components/NavBar';
import Hero           from './components/Hero';
import CategoryStrip  from './components/CategoryStrip';
import Products       from './components/Products';
import HowItWorks     from './components/HowItWorks';
import Reviews        from './components/Reviews';
import FAQ            from './components/FAQ';
import Wholesale      from './components/Wholesale';
import Newsletter     from './components/Newsletter';
import Footer         from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [ageOk, setAgeOk]   = useState(false);
  const [cart, setCart]      = useState(0);
  const addToCart = useCallback(() => setCart(c => c + 1), []);

  return (
    <div style={{ background: '#07090D', minHeight: '100vh', overflowX: 'hidden' }}>
      {!ageOk && <AgeGate onConfirm={() => setAgeOk(true)} />}
      <NavBar cartCount={cart} />
      <Hero />
      <CategoryStrip />
      <Products onAdd={addToCart} />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Wholesale />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

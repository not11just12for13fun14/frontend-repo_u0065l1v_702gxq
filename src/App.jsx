import React from 'react';
import NavbarHero from './components/NavbarHero';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div dir="rtl" className="font-sans text-gray-900 antialiased">
      <NavbarHero />
      <MenuSection />
      <ReservationSection />
      <DeliverySection />
      <Footer />
    </div>
  );
}

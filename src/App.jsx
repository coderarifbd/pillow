import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ScienceSection } from './components/ScienceSection';
import { ComparisonTable } from './components/ComparisonTable';
import { ProductDetailsView } from './components/ProductDetailsView';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderSuccessView } from './components/OrderSuccessView';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ToastNotification } from './components/ToastNotification';

const AppContent = () => {
  const { activePage } = useShop();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {activePage === 'checkout' ? (
        <CheckoutPage />
      ) : activePage === 'success' ? (
        <OrderSuccessView />
      ) : (
        <>
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <FeaturesGrid />
            <ScienceSection />
            <ComparisonTable />
            <ProductDetailsView />
            <ReviewsSection />
            <FaqSection />
          </main>
          <Footer />
        </>
      )}

      <CartDrawer />
      <LegalModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

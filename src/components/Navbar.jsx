import React, { useState } from 'react';
import { ShoppingBag, Moon, ShieldCheck, Menu, X, Star, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const { totalItemCount, setIsCartOpen, activePage, navigateTo } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-900 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-3 shadow-sm border-b border-indigo-500/20">
        <span className="flex items-center gap-1.5 bg-indigo-500/30 px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-semibold text-indigo-200 border border-indigo-400/30">
          <Moon className="w-3 h-3 text-indigo-300 fill-indigo-300" /> Flash Offer
        </span>
        <span>Save <strong>$40 OFF</strong> Today + Free Shipping & 30-Night Risk-Free Trial</span>
        <button 
          onClick={() => handleNavClick('product-buy')}
          className="underline hover:text-indigo-200 transition hidden md:inline-flex items-center gap-0.5 ml-2 font-bold"
        >
          Shop Now <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 glass-panel border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Brand Logo */}
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-slate-900 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Moon className="w-5 h-5 text-indigo-400 fill-indigo-400/30 transform group-hover:rotate-12 transition duration-300" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-outfit">
                  Somna<span className="text-indigo-400 font-normal">Form</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono font-medium">
                  Cervical Contour
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <button 
                onClick={() => handleNavClick('benefits')}
                className="hover:text-indigo-400 transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => handleNavClick('science')}
                className="hover:text-indigo-400 transition-colors"
              >
                Ergonomic Science
              </button>
              <button 
                onClick={() => handleNavClick('specs')}
                className="hover:text-indigo-400 transition-colors"
              >
                Specs & Comparison
              </button>
              <button 
                onClick={() => handleNavClick('reviews')}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                Reviews
                <span className="flex items-center text-amber-400 text-xs bg-amber-400/10 px-1.5 py-0.5 rounded-full border border-amber-400/20">
                  <Star className="w-3 h-3 fill-amber-400" /> 4.9
                </span>
              </button>
              <button 
                onClick={() => handleNavClick('faqs')}
                className="hover:text-indigo-400 transition-colors"
              >
                FAQs
              </button>
            </nav>

            {/* Right Action Icons & Cart */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-all duration-200 group shadow-md"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition duration-200" />
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-inner">
                  {totalItemCount}
                </span>
              </button>

              {/* Quick Buy CTA */}
              <button
                onClick={() => handleNavClick('product-buy')}
                className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200"
              >
                <span>Shop Pillow - $79</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <button
              onClick={() => handleNavClick('benefits')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800/80 font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => handleNavClick('science')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800/80 font-medium"
            >
              Ergonomic Science
            </button>
            <button
              onClick={() => handleNavClick('specs')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800/80 font-medium"
            >
              Specs & Comparison
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800/80 font-medium flex items-center justify-between"
            >
              <span>Customer Reviews</span>
              <span className="text-amber-400 font-semibold text-xs">4.9 ★ (2,480)</span>
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800/80 font-medium"
            >
              FAQs
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('product-buy');
                }}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-center shadow-lg shadow-indigo-600/30"
              >
                Shop SomnaForm Pillow - $79.00
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, Award, CheckCircle2, ArrowRight, Sparkles, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const HeroSection = () => {
  const { addToCart, navigateTo } = useShop();
  const [activeImage, setActiveImage] = useState('/images/hero.jpg');

  const heroThumbnails = [
    { src: '/images/hero.jpg', label: 'Studio View' },
    { src: '/images/spine.jpg', label: 'Cervical Support' },
    { src: '/images/bamboo.jpg', label: 'Bamboo Cover' },
    { src: '/images/bedroom.jpg', label: 'Bedroom' }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Rating & Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-200">
                4.9 / 5.0 Rating
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-indigo-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> 2,480+ Verified Buyers
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-outfit">
                Deep Rest, <br />
                <span className="text-gradient-indigo">Zero Neck Strain.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                The orthopedically contoured memory foam pillow engineered to align your cervical spine, relieve shoulder tension, and unlock uninterrupted, pain-free sleep.
              </p>
            </div>

            {/* Price & Value Callouts */}
            <div className="flex flex-wrap items-baseline gap-4 pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-white font-outfit">$79.00</span>
                <span className="text-xl text-slate-500 line-through font-medium">$119.00</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                  Save $40 Today
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('product-buy')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-lg shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Shop SomnaForm Pillow - $79</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-200" />
              </button>

              <button
                onClick={() => navigateTo('checkout')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-base transition-all duration-200 cursor-pointer"
              >
                <span>Express Checkout</span>
              </button>
            </div>

            {/* Key Trust Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <RotateCcw className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">30-Night Trial</h4>
                  <p className="text-[11px] text-slate-400">Risk-free returns</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Truck className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Free Shipping</h4>
                  <p className="text-[11px] text-slate-400">Fast 3-5 day delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">10-Year Warranty</h4>
                  <p className="text-[11px] text-slate-400">Sag-proof foam core</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Award className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">CertiPUR-US®</h4>
                  <p className="text-[11px] text-slate-400">Non-toxic memory foam</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Product Gallery Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 glass-card shadow-2xl border border-slate-700/60 group">
              
              {/* Highlight Badge */}
              <div className="absolute top-6 left-6 z-10 bg-indigo-900/90 backdrop-blur-md border border-indigo-500/40 text-indigo-200 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Patented Ergonomic Contour</span>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={activeImage}
                  alt="SomnaForm Ergonomic Contour Memory Foam Pillow"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
                
                {/* Visual Overlay Detail */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">In Stock & Ready to Ship</span>
                  </div>
                  <button 
                    onClick={() => scrollToSection('product-buy')}
                    className="text-indigo-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Details
                  </button>
                </div>
              </div>

              {/* Angle Thumbnails Bar */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {heroThumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(thumb.src)}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                      activeImage === thumb.src
                        ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/30'
                        : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                    }`}
                  >
                    <img src={thumb.src} alt={thumb.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

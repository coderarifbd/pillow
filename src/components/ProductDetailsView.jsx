import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingBag, Zap, Check, Eye, Heart, Share2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ProductDetailsView = () => {
  const { product, addToCart, navigateTo, showToast } = useShop();
  const [selectedImage, setSelectedImage] = useState(product.images[0].src);
  const [quantity, setQuantity] = useState(1);
  const [selectedBundle, setSelectedBundle] = useState('single'); // 'single' or 'dual'
  const [liked, setLiked] = useState(false);

  const bundlePricing = {
    single: {
      price: 79.00,
      original: 119.00,
      label: 'Single SomnaForm Pillow',
      savings: 'Save $40'
    },
    dual: {
      price: 139.00,
      original: 238.00,
      label: 'Dual Pack (2x Pillows)',
      savings: 'Save $99 - Best Value'
    }
  };

  const currentPricing = bundlePricing[selectedBundle];

  const handleAddToCart = () => {
    const variantName = selectedBundle === 'dual' 
      ? 'Dual Pack (2x Standard Contour 24" x 15")' 
      : 'Single Standard Contour (24" x 15")';
    
    addToCart(
      { ...product, price: currentPricing.price / (selectedBundle === 'dual' ? 2 : 1) }, 
      quantity * (selectedBundle === 'dual' ? 2 : 1), 
      variantName
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigateTo('checkout');
  };

  return (
    <section id="product-buy" className="py-16 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-slate-800 group">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* Top Action Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    Best Seller
                  </span>
                  <span className="bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    30-Night Trial
                  </span>
                </div>

                <button
                  onClick={() => {
                    setLiked(!liked);
                    showToast(liked ? 'Removed from wishlist' : 'Saved to wishlist!');
                  }}
                  className={`absolute top-4 right-4 p-2.5 rounded-full glass-panel border border-slate-700 transition ${
                    liked ? 'text-rose-500 fill-rose-500' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-rose-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img.src)}
                  className={`relative rounded-xl overflow-hidden aspect-4/3 border-2 transition ${
                    selectedImage === img.src
                      ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                      : 'border-slate-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Quick Spec Tags */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1">
                <span className="text-slate-400 block">Core Foam Density</span>
                <span className="text-white font-bold">CertiPUR-US® Memory Foam</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1">
                <span className="text-slate-400 block">Outer Casing</span>
                <span className="text-white font-bold">3D Air-Weave Bamboo Slip</span>
              </div>
            </div>
          </div>

          {/* Right Product Buy Console Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Rating */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">4.9 / 5.0</span>
                <span className="text-xs text-slate-400">(2,480+ Reviews)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
                {product.name}
              </h1>

              <p className="text-slate-300 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Bundle Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Select Package & Save:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Single */}
                <button
                  onClick={() => setSelectedBundle('single')}
                  className={`p-4 rounded-2xl border text-left transition relative ${
                    selectedBundle === 'single'
                      ? 'bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">1x SomnaForm Pillow</span>
                    <span className="text-xs bg-slate-800 text-indigo-300 px-2 py-0.5 rounded font-semibold">
                      Save $40
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-outfit">$79.00</div>
                  <span className="text-xs text-slate-400 line-through">$119.00 MSRP</span>
                </button>

                {/* Dual Pack */}
                <button
                  onClick={() => setSelectedBundle('dual')}
                  className={`p-4 rounded-2xl border text-left transition relative ${
                    selectedBundle === 'dual'
                      ? 'bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow">
                    Best Value
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">2x Pillows (Couple Pack)</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-outfit">$139.00</div>
                  <span className="text-xs text-emerald-400 font-semibold">$69.50 / pillow (Save $99)</span>
                </button>
              </div>
            </div>

            {/* Quantity Controls & Actions */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Quantity:
                </label>
                <div className="inline-flex items-center rounded-xl bg-slate-900 border border-slate-800">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-slate-400 hover:text-white focus:outline-none"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-bold text-white text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-slate-400 hover:text-white focus:outline-none"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-indigo-500/40 text-white font-bold text-base transition duration-200 shadow-md group"
                >
                  <ShoppingBag className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition duration-200"
                >
                  <Zap className="w-5 h-5 fill-white" />
                  <span>Buy Now - ${currentPricing.price * quantity}</span>
                </button>
              </div>
            </div>

            {/* Value Guarantees list */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <RotateCcw className="w-4 h-4 text-indigo-400 shrink-0" />
                <span><strong>30-Night Risk-Free Trial:</strong> Sleep on it or get 100% money back.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span><strong>Free Express US Shipping:</strong> Delivered in 3-5 business days.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span><strong>10-Year Warranty:</strong> Full core memory foam shape guarantee.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useShop } from '../context/ShopContext';

export const Footer = () => {
  const { setActiveModal, navigateTo, activePage } = useShop();

  const handleNavClick = (sectionId) => {
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
    <footer className="bg-black text-slate-300 pt-16 pb-12 border-t border-slate-900 font-sans relative overflow-hidden">
      {/* Top subtle glow accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4 Columns Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          
          {/* Column 1: Ridgewell Supply Co LLC Branding & Intro */}
          <div className="lg:col-span-4 space-y-5">
            {/* Ridgewell Logo */}
            <div 
              onClick={() => handleNavClick('benefits')}
              className="flex items-center gap-3 group cursor-pointer w-fit"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-6 bg-cyan-400 rounded-sm inline-block group-hover:scale-110 transition duration-300" />
                <span className="w-2.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-sm inline-block transform -skew-x-12 group-hover:skew-x-0 transition duration-300" />
              </div>
              <div className="leading-none">
                <span className="text-2xl font-bold text-white tracking-tight font-outfit block group-hover:text-cyan-300 transition">
                  Ridgewell
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider block font-mono font-medium">
                  Supply Co. LLC
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ridgewell Supply Co., LLC is committed to delivering comfortable sleep products that help eliminate neck pain, including the <strong>Super-Cooling Memory Foam Pillow</strong>.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base font-outfit tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button 
                  onClick={() => handleNavClick('benefits')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Benefits & Ergonomics</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('science')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Spine Alignment Science</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('specs')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Specs & Comparison</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('reviews')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Verified Reviews</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('faqs')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>FAQs & Support</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Rules */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base font-outfit tracking-wide">
              Legal & Rules
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button 
                  onClick={() => setActiveModal('tos')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal('privacy')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal('returns')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Refund & Return Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal('shipping')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Shipping & Delivery Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveModal('legal')} 
                  className="cursor-pointer text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition" />
                  <span>Legal Notice & Registration</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base font-outfit tracking-wide">
              Contact & Verification
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-bold text-white text-base">Ridgewell Supply Co., LLC</p>
              <p className="text-slate-400">1908 Thomes Ave STE 12130</p>
              <p className="text-slate-400">Cheyenne, WY, 82001</p>
              <p className="text-slate-400">EIN: 35-2900976</p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-900/90 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          
          {/* Left Copyright */}
          <div className="text-slate-400 text-center sm:text-left">
            © 2026 Ridgewell Supply Co., LLC. All Rights Reserved.
          </div>

          {/* Right Official Domain Cyan Link */}
          <div className="text-slate-400 font-medium">
            Official Domain:{' '}
            <a
              href="https://ridgewellsupplycollc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-cyan-400 hover:text-cyan-300 hover:underline font-bold transition"
            >
              ridgewellsupplycollc.com
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ComparisonTable = () => {
  const { addToCart } = useShop();

  const comparisonData = [
    {
      feature: 'Ergonomic Cervical Contour',
      somnaform: true,
      feather: false,
      flatFoam: false,
      detail: 'Molded dual-elevation contour cradles neck & maintains natural alignment.'
    },
    {
      feature: 'Spinal Alignment Support',
      somnaform: 'Clinical Grade',
      feather: 'Sags / Shifts',
      flatFoam: 'Too Stiff',
      detail: 'Keeps cervical vertebrae aligned in side, back, & stomach sleep positions.'
    },
    {
      feature: 'CertiPUR-US® Memory Foam Core',
      somnaform: true,
      feather: false,
      flatFoam: false,
      detail: 'Non-toxic, high-density foam core engineered never to flatten.'
    },
    {
      feature: '3D Breathable Bamboo Slip Cover',
      somnaform: true,
      feather: false,
      flatFoam: false,
      detail: 'Organic bamboo weave dissipates heat 3x faster than standard cotton.'
    },
    {
      feature: '30-Night Risk-Free Sleep Trial',
      somnaform: true,
      feather: false,
      flatFoam: false,
      detail: 'Sleep on it for 30 nights. If your neck does not feel relieved, get 100% refund.'
    },
    {
      feature: '10-Year Sag-Proof Warranty',
      somnaform: true,
      feather: false,
      flatFoam: '1 Year Only',
      detail: 'Full replacement guarantee if foam loses shape or firmness.'
    }
  ];

  return (
    <section id="specs" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Feature Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
            Why SomnaForm Outperforms Traditional Pillows
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how our orthopedically contoured memory foam compares to old-fashioned feather stuffed or flat foam pillows.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80">
                  <th className="p-6 text-sm font-bold text-slate-300 w-2/5">
                    Feature & Spec Comparison
                  </th>
                  <th className="p-6 text-center w-1/5 bg-indigo-950/50 border-x border-indigo-500/30">
                    <div className="inline-block">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">Recommended</span>
                      <span className="text-xl font-extrabold text-white font-outfit block">SomnaForm™</span>
                      <span className="text-xs font-semibold text-emerald-400">$79.00</span>
                    </div>
                  </th>
                  <th className="p-6 text-center w-1/5">
                    <span className="text-base font-bold text-slate-400 font-outfit block">Standard Feather</span>
                    <span className="text-xs text-slate-500">$35 - $60</span>
                  </th>
                  <th className="p-6 text-center w-1/5">
                    <span className="text-base font-bold text-slate-400 font-outfit block">Flat Block Foam</span>
                    <span className="text-xs text-slate-500">$25 - $45</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition">
                    
                    {/* Feature Title */}
                    <td className="p-6">
                      <div className="font-bold text-white mb-1 font-outfit text-base">{row.feature}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{row.detail}</div>
                    </td>

                    {/* SomnaForm Column */}
                    <td className="p-6 text-center bg-indigo-950/30 border-x border-indigo-500/20 font-bold text-indigo-200">
                      {typeof row.somnaform === 'boolean' ? (
                        row.somnaform ? (
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                            <Check className="w-5 h-5 stroke-[3]" />
                          </div>
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-emerald-400 font-extrabold text-sm">{row.somnaform}</span>
                      )}
                    </td>

                    {/* Feather Pillow Column */}
                    <td className="p-6 text-center text-slate-400 font-medium">
                      {typeof row.feather === 'boolean' ? (
                        row.feather ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
                            <X className="w-4 h-4" />
                          </div>
                        )
                      ) : (
                        <span className="text-slate-400 text-xs">{row.feather}</span>
                      )}
                    </td>

                    {/* Flat Foam Column */}
                    <td className="p-6 text-center text-slate-400 font-medium">
                      {typeof row.flatFoam === 'boolean' ? (
                        row.flatFoam ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
                            <X className="w-4 h-4" />
                          </div>
                        )
                      ) : (
                        <span className="text-slate-400 text-xs">{row.flatFoam}</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Footer inside comparison table */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              <span className="font-semibold text-white">30-Night Sleep Trial Included</span> — Backed by our 100% money-back satisfaction guarantee.
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('product-buy');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition duration-200 cursor-pointer"
            >
              Get SomnaForm Pillow - $79
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

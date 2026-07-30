import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the 30-Night Home Trial work?',
      a: 'Sleep on this pillow at home for 30 nights. If you do not love it or if your neck does not feel great, simply let us know and we will give you a 100% full refund with zero hassle.'
    },
    {
      q: 'Will this pillow fit my pillowcases?',
      a: 'Yes! It measures 24.5" x 15", which fits easily inside all standard pillowcases.'
    },
    {
      q: 'How do I wash the pillow cover?',
      a: 'Just unzip the soft outer cover and toss it in your washing machine on gentle. It dries quickly and comes out smelling fresh and clean.'
    },
    {
      q: 'Is the foam safe and clean?',
      a: 'Yes, 100%! The foam is non-toxic, clean, and completely safe for children, adults, and seniors.'
    },
    {
      q: 'How long does shipping take?',
      a: 'Shipping is completely FREE! Your pillow will arrive at your front door in just 3 to 5 business days.'
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
            Everything You Need To Know
          </h2>
          <p className="text-slate-300 text-base">
            Have questions before ordering? We have answers.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 transition duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4 focus:outline-none hover:text-indigo-300 font-outfit text-lg"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 text-indigo-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-600 text-white border-indigo-500' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

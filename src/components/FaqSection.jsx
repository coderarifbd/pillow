import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the 30-Night Risk-Free Sleep Trial work?',
      a: 'We invite you to sleep on SomnaForm in your own bed for up to 30 nights. It often takes 3-7 nights for muscles accustomed to poor alignment to adapt to true orthopedic neck support. If you are not experiencing deeper, pain-free sleep, simply contact our support team at Ridgewell Supply Co LLC for a 100% full refund with free return shipping.'
    },
    {
      q: 'What are the dimensions and contour elevation heights?',
      a: 'SomnaForm measures 24.5" Length x 15.0" Width. It features dual elevation contours: the High Ergonomic Contour is 4.8" (ideal for side sleepers and broad shoulders), while the Low Ergonomic Contour is 3.8" (ideal for back sleepers and smaller frames).'
    },
    {
      q: 'How do I care for and wash the pillow?',
      a: 'The outer bamboo air-weave slip cover features a smooth hidden zip. Simply un-zip, remove the outer cover, and machine wash in warm or cold water on gentle cycle. Tumble dry on low heat. The inner memory foam core should only be spot-cleaned with a damp cloth if necessary.'
    },
    {
      q: 'Is the memory foam certified safe and odorless?',
      a: 'Yes! SomnaForm is 100% CertiPUR-US® certified memory foam. It contains zero PBDEs, TDCPP or TCEP flame retardants, mercury, lead, heavy metals, or formaldehyde. Any faint fresh foam scent dissipates completely within 2-4 hours of unboxing.'
    },
    {
      q: 'What are your shipping timeline and warranty terms?',
      a: 'All orders placed today qualify for FREE Standard Shipping (estimated delivery 3-5 business days across the US). Every pillow is backed by our 10-Year Sag-Proof Warranty managed by Ridgewell Supply Co LLC.'
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

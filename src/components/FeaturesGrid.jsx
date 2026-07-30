import React from 'react';
import { Layers, Wind, ShieldCheck, RefreshCw, Sparkles, CheckCircle } from 'lucide-react';

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Layers,
      title: 'Hugs Your Head Gently',
      subtitle: 'No More Stiff Necks',
      description: 'The curved center cradles your head while supporting your neck, keeping your spine straight whether you sleep on your side or back.',
      badge: 'Perfect Neck Support',
      image: './images/spine.jpg'
    },
    {
      icon: Wind,
      title: 'Stays Ice-Cool All Night',
      subtitle: 'Fresh & Sweat-Free',
      description: 'Made with a breezy cooling fabric and side air vents that draw away heat so you never wake up sweaty again.',
      badge: 'Stays Cool 24/7',
      image: './images/bamboo.jpg'
    },
    {
      icon: ShieldCheck,
      title: 'Soft & Never Flattens',
      subtitle: 'Premium Memory Foam',
      description: 'Super comfortable memory foam that cushions your head without going flat. Bounces back softly every morning.',
      badge: '10-Year Guarantee',
      image: './images/hero.jpg'
    },
    {
      icon: RefreshCw,
      title: 'Super Easy to Wash',
      subtitle: 'Zip-Off Clean Cover',
      description: 'Just unzip the soft cover and throw it in the washing machine whenever you want a fresh, clean bed.',
      badge: 'Machine Washable',
      image: './images/bedroom.jpg'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Sleep Better Every Night
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
            4 Reasons Why You Will Fall in Love With This Pillow
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Regular pillows flatten out, trap heat, and hurt your neck. This pillow fixes all three so you sleep soundly till morning.
          </p>
        </div>

        {/* 4 Pillar Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Background Image Accent on Hover */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition duration-500 pointer-events-none overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-700/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition duration-300 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                      {feature.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
                      {feature.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-outfit">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Clinically Backed Comfort Specification</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

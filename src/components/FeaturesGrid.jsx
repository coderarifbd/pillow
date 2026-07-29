import React from 'react';
import { Layers, Wind, ShieldCheck, RefreshCw, Sparkles, CheckCircle } from 'lucide-react';

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Layers,
      title: 'Ergonomic Dual Contour',
      subtitle: 'Orthopedic Neck Relief',
      description: 'Features high and low profile contours (4.8" and 3.8") tailored for both side and back sleepers to gently cradle the head while maintaining natural spinal curve.',
      badge: 'Dual Height Design',
      image: './images/spine.jpg'
    },
    {
      icon: Wind,
      title: 'Breathable Bamboo Cover',
      subtitle: 'Air-Weave Thermal Control',
      description: 'Woven with organic bamboo fibers and 3D mesh side panels to dissipate body heat 3x faster than standard cotton, keeping you cool all night.',
      badge: 'Cooling Technology',
      image: './images/bamboo.jpg'
    },
    {
      icon: ShieldCheck,
      title: 'CertiPUR-US® Memory Foam',
      subtitle: 'Zero Sag & Non-Toxic Core',
      description: 'Certified premium slow-rebound memory foam manufactured without ozone depleters, mercury, lead, or formaldehyde. Guaranteed not to flatten for 10 years.',
      badge: 'Certified Safe',
      image: './images/hero.jpg'
    },
    {
      icon: RefreshCw,
      title: 'Washable Zip Slip Cover',
      subtitle: 'Easy Cleaning & Hygiene',
      description: 'Includes a smooth hidden zipper to effortlessly remove the outer bamboo casing for machine washing in warm water. Hypoallergenic & dust-mite resistant.',
      badge: 'Easy Maintenance',
      image: './images/bedroom.jpg'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Engineered For Restorative Sleep
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
            Designed to Solve The 4 Main Sleep Disturbers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Standard pillows push your neck out of alignment, trap body heat, and flatten over time. SomnaForm delivers targeted anatomical engineering.
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

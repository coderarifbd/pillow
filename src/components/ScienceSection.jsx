import React, { useState } from 'react';
import { Activity, ShieldAlert, CheckCircle2, Moon, Sparkles } from 'lucide-react';

export const ScienceSection = () => {
  const [activeTab, setActiveTab] = useState('side');

  const sleepingPositions = {
    side: {
      title: 'Side Sleeping Alignment',
      height: '4.8 Inch High Contour',
      cervicalBenefit: 'Fills the space between your ear and shoulder, maintaining a straight horizontal spine.',
      commonMistake: 'Flat pillows cause the head to tilt downwards, pinching cervical nerves and straining shoulder joints.',
      pressureReduction: '72% Lower Shoulder Pressure',
      alignmentAngle: '180° Neutral Cervical Line'
    },
    back: {
      title: 'Back Sleeping Support',
      height: '3.8 Inch Low Contour',
      cervicalBenefit: 'Cradles the natural lordotic curve of the neck while supporting the occipital base of the skull.',
      commonMistake: 'Overly thick feather pillows push the chin toward the chest, obstructing airways and causing snoring.',
      pressureReduction: '84% Airway Opening Optimization',
      alignmentAngle: 'Natural 35° Cervical Curve'
    },
    stomach: {
      title: 'Stomach / Transition Sleeping',
      height: 'Low Recessed Center Contour',
      cervicalBenefit: 'Ultra-gentle slope minimizes neck rotation twist, preventing morning stiffness.',
      commonMistake: 'High pillows force hyper-extension of the cervical spine, causing chronic upper back tension.',
      pressureReduction: '65% Less Rotation Strain',
      alignmentAngle: 'Minimal Spine Distortion'
    }
  };

  const current = sleepingPositions[activeTab];

  return (
    <section id="science" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-indigo-400" /> Biomechanical Sleep Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
            The Orthopedic Science Behind Cervical Alignment
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Select your primary sleeping posture to see how SomnaForm dynamically adapts to maintain anatomical spine neutrality.
          </p>
        </div>

        {/* Sleeping Position Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 space-x-2">
            {[
              { id: 'side', label: 'Side Sleeper' },
              { id: 'back', label: 'Back Sleeper' },
              { id: 'stomach', label: 'Stomach Sleeper' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Breakdown Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Diagram Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                <img
                  src="./images/spine.jpg"
                  alt="Cervical Spine Medical Alignment"
                  className="w-full h-auto object-cover"
                />
                
                {/* Glowing Overlay Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-950/90 backdrop-blur-md p-4 rounded-xl border border-indigo-500/40 text-center space-y-1 shadow-2xl">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" /> Anatomical Neutrality
                  </div>
                  <span className="text-white text-lg font-extrabold block font-outfit">
                    {current.alignmentAngle}
                  </span>
                  <span className="text-slate-400 text-[11px]">C1-C7 Cervical Vertebrae Supported</span>
                </div>
              </div>
            </div>

            {/* Scientific Details Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1 font-mono">
                  Recommended Elevation: {current.height}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                  {current.title}
                </h3>
              </div>

              {/* Benefit Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> How SomnaForm Helps
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {current.cervicalBenefit}
                </p>
              </div>

              {/* Warning/Mistake Box */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4 text-rose-400" /> The Problem with Regular Pillows
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {current.commonMistake}
                </p>
              </div>

              {/* Key Metric Stat */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Verified Ergonomic Impact</span>
                  <span className="text-xl font-bold text-indigo-300 font-outfit">{current.pressureReduction}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">Memory Foam Rebound</span>
                  <span className="text-xl font-bold text-emerald-300 font-outfit">3-5 Seconds Response</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquare, Filter, ShieldCheck } from 'lucide-react';

export const ReviewsSection = () => {
  const [filter, setFilter] = useState('all');
  const [helpfulCounts, setHelpfulCounts] = useState({});

  const reviews = [
    {
      id: 1,
      name: 'Dr. Marcus Vance, D.C.',
      role: 'Chiropractor & Sleep Specialist',
      location: 'Austin, TX',
      rating: 5,
      date: '2 days ago',
      title: 'I recommend this to 80% of my cervical patients',
      comment: 'As a practicing chiropractor, neck stiffness is the #1 complaint I treat. SomnaForm’s dual contour design provides the exact cervical arch support needed to allow spinal muscles to disengage and repair during sleep.',
      verified: true,
      category: 'expert',
      helpful: 84
    },
    {
      id: 2,
      name: 'Sarah L.',
      role: 'Side Sleeper',
      location: 'Seattle, WA',
      rating: 5,
      date: '1 week ago',
      title: 'Woke up without a pinched nerve for the first time in 3 years!',
      comment: 'I used to wake up every morning with a burning shoulder ache and stiff neck. The high contour side on SomnaForm supports my neck perfectly without squishing my ears. The bamboo cover stays noticeably cool too.',
      verified: true,
      category: 'side',
      helpful: 42
    },
    {
      id: 3,
      name: 'David K.',
      role: 'Back Sleeper',
      location: 'Chicago, IL',
      rating: 5,
      date: '2 weeks ago',
      title: 'My wife says my snoring stopped completely',
      comment: 'The lower contour center keeps my head slightly elevated without tilting my chin down. It opened up my airway so much that my wife noticed the difference on Night 1.',
      verified: true,
      category: 'back',
      helpful: 61
    },
    {
      id: 4,
      name: 'Elena R.',
      role: 'Verified Buyer',
      location: 'Miami, FL',
      rating: 5,
      date: '3 weeks ago',
      title: 'Worth every single penny of $79',
      comment: 'I was hesitant to spend $79 on a pillow, but after trying 4 different cheap pillows from Target, I decided to take advantage of the 30-night trial. I am NEVER sending this back.',
      verified: true,
      category: 'verified',
      helpful: 29
    }
  ];

  const handleHelpful = (id) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === filter || (filter === 'verified' && r.verified));

  return (
    <section id="reviews" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Header */}
        <div className="glass-card rounded-3xl p-8 mb-12 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Main Score Box */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
              <div className="text-5xl font-extrabold text-white font-outfit mb-2">4.9 / 5.0</div>
              <div className="flex justify-center md:justify-start text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-300">Based on 2,480+ Customer Reviews</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center justify-center md:justify-start gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Verified Buyer Reviews
              </div>
            </div>

            {/* Star Distribution Bars */}
            <div className="md:col-span-8 space-y-2">
              {[
                { stars: '5 Stars', pct: '92%', count: 2281 },
                { stars: '4 Stars', pct: '6%', count: 148 },
                { stars: '3 Stars', pct: '1%', count: 32 },
                { stars: '2 Stars', pct: '<1%', count: 12 },
                { stars: '1 Star', pct: '<1%', count: 7 }
              ].map((bar, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <span className="w-14 font-semibold text-slate-300">{bar.stars}</span>
                  <div className="flex-1 h-2.5 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      style={{ width: bar.pct }}
                    />
                  </div>
                  <span className="w-12 text-slate-400 text-right">{bar.pct}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h3 className="text-2xl font-bold text-white font-outfit">Verified Customer Experiences</h3>
          
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'expert', label: 'Chiropractor Recommended' },
              { id: 'side', label: 'Side Sleepers' },
              { id: 'back', label: 'Back Sleepers' },
              { id: 'verified', label: 'Verified Buyers' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === f.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{rev.date}</span>
                </div>

                <h4 className="text-lg font-bold text-white font-outfit">
                  "{rev.title}"
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">{rev.role} • {rev.location}</span>
                </div>

                <button
                  onClick={() => handleHelpful(rev.id)}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 transition"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpful + (helpfulCounts[rev.id] || 0)})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

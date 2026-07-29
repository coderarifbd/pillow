import React from 'react';
import { CheckCircle2, PackageCheck, Truck, ArrowRight, Download, Printer, ShieldCheck, Home } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const OrderSuccessView = () => {
  const { latestOrder, navigateTo } = useShop();

  if (!latestOrder) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="glass-card rounded-3xl p-8 max-w-md text-center space-y-4">
          <h2 className="text-xl font-bold text-white font-outfit">No active order found</h2>
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Success Card Header */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 text-center space-y-6 shadow-2xl mb-8">
          
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20 animate-pulse-glow">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              Payment Successful & Verified
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Thank You For Your Order!
            </h1>
            <p className="text-slate-300 text-base max-w-lg mx-auto">
              We've received your order and sent a confirmation email receipt to{' '}
              <strong className="text-indigo-300">{latestOrder.customer.email}</strong>.
            </p>
          </div>

          {/* Order ID Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Order Reference ID:</span>
            <span className="text-lg font-mono font-extrabold text-indigo-400">{latestOrder.orderId}</span>
          </div>

        </div>

        {/* Visual Delivery Timeline Tracker */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 mb-8 space-y-6">
          <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
            <Truck className="w-5 h-5 text-indigo-400" />
            Estimated Delivery: {latestOrder.estimatedDelivery}
          </h3>

          <div className="relative pt-4">
            <div className="h-2 bg-slate-900 rounded-full overflow-hidden mb-6 border border-slate-800">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 w-1/4 rounded-full" />
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="space-y-1">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 font-bold mx-auto flex items-center justify-center text-[10px]">✓</div>
                <span className="font-bold text-white block">Confirmed</span>
                <span className="text-[10px] text-slate-400">Just Now</span>
              </div>
              <div className="space-y-1 opacity-70">
                <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700 mx-auto" />
                <span className="font-semibold text-slate-300 block">Quality Check</span>
                <span className="text-[10px] text-slate-500">Preparing</span>
              </div>
              <div className="space-y-1 opacity-50">
                <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700 mx-auto" />
                <span className="font-semibold text-slate-300 block">Dispatched</span>
                <span className="text-[10px] text-slate-500">FedEx / UPS</span>
              </div>
              <div className="space-y-1 opacity-50">
                <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-700 mx-auto" />
                <span className="font-semibold text-slate-300 block">Delivered</span>
                <span className="text-[10px] text-slate-500">At Doorstep</span>
              </div>
            </div>
          </div>
        </div>

        {/* Receipt & Order Summary Box */}
        <div id="printable-receipt" className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6 mb-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white font-outfit">Order Receipt Summary</h3>
              <p className="text-xs text-slate-400">Date: {latestOrder.date}</p>
            </div>
            <button
              onClick={handlePrintReceipt}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>Print / Save Receipt</span>
            </button>
          </div>

          {/* Customer & Address Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="font-bold text-white block mb-1">Shipping Address:</span>
              <p className="font-semibold text-slate-200">{latestOrder.customer.firstName} {latestOrder.customer.lastName}</p>
              <p>{latestOrder.customer.address}</p>
              <p>{latestOrder.customer.city}, {latestOrder.customer.state} {latestOrder.customer.zip}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="font-bold text-white block mb-1">Merchant & Fulfillment:</span>
              <p className="font-semibold text-indigo-300">Operated by Ridgewell Supply Co LLC</p>
              <p>Support: https://ridgewellsupplycollc.com/</p>
              <p className="text-[11px] text-emerald-400 font-semibold pt-1">30-Night Risk-Free Trial Period Active</p>
            </div>
          </div>

          {/* Purchased Items List */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Items Purchased:</span>
            {latestOrder.items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-slate-400">{item.variant} (Qty: {item.quantity})</p>
                  </div>
                </div>
                <span className="font-extrabold text-white text-sm font-outfit">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Financial Breakdown */}
          <div className="space-y-1.5 text-xs text-slate-300 pt-4 border-t border-slate-800 max-w-xs ml-auto">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-white">${latestOrder.subtotal.toFixed(2)}</span>
            </div>
            {latestOrder.discountAmount > 0 && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Promo Discount</span>
                <span>-${latestOrder.discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-400">
              <span>Shipping</span>
              <span>{latestOrder.shippingCost === 0 ? 'FREE' : `$${latestOrder.shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Estimated Tax</span>
              <span>${latestOrder.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800 font-outfit">
              <span>Total Paid</span>
              <span className="text-indigo-400">${latestOrder.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition"
          >
            <Home className="w-5 h-5" />
            <span>Return to SomnaForm Homepage</span>
          </button>
        </div>

      </div>
    </div>
  );
};

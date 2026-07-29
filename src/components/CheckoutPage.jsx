import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowLeft, Loader2, Sparkles, Truck, HelpCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CheckoutPage = () => {
  const {
    cart,
    subtotal,
    shippingCost,
    taxAmount,
    grandTotal,
    discountAmount,
    shippingMethod,
    processOrder,
    navigateTo
  } = useShop();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: 'CA',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardName: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');

  // Handle Form Autofill for fast testing
  const handleDemoAutofill = () => {
    setFormData({
      email: 'alex.morgan@example.com',
      firstName: 'Alex',
      lastName: 'Morgan',
      address: '742 Evergreen Terrace',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      cardNumber: '4242 4242 4242 4242',
      expiry: '12/28',
      cvc: '789',
      cardName: 'ALEX MORGAN'
    });
    setErrors({});
  };

  // Inline formatting for credit card
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();
    setFormData((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setFormData((prev) => ({ ...prev, expiry: value }));
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.firstName) newErrors.firstName = 'First name required';
    if (!formData.lastName) newErrors.lastName = 'Last name required';
    if (!formData.address) newErrors.address = 'Street address required';
    if (!formData.city) newErrors.city = 'City required';
    if (!formData.zip || formData.zip.length < 5) newErrors.zip = 'Valid ZIP code required';
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = '16-digit card number required';
    if (!formData.expiry || !formData.expiry.includes('/')) newErrors.expiry = 'MM/YY required';
    if (!formData.cvc || formData.cvc.length < 3) newErrors.cvc = 'CVC required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    setProcessingStep('Encrypting 256-Bit SSL Payment...');

    setTimeout(() => {
      setProcessingStep('Authorizing Card with Secure Gateway...');
    }, 1000);

    setTimeout(() => {
      setIsProcessing(false);
      processOrder(formData);
    }, 2200);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="glass-card rounded-3xl p-8 max-w-md text-center space-y-4 border border-slate-800">
          <h2 className="text-2xl font-bold text-white font-outfit">Your cart is empty</h2>
          <p className="text-sm text-slate-400">Add SomnaForm pillow to your cart before proceeding to checkout.</p>
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg"
          >
            Return to Product Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 relative">
      {/* Processing Loader Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl p-8 max-w-md w-full text-center space-y-6 border border-indigo-500/30 shadow-2xl animate-pulse-glow">
            <div className="w-16 h-16 rounded-full bg-indigo-600/20 border-2 border-indigo-500 flex items-center justify-center mx-auto text-indigo-400">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-outfit">Processing Secure Order</h3>
              <p className="text-xs text-indigo-300 font-mono animate-pulse">{processingStep}</p>
            </div>
            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ridgewell Supply Co LLC Gateway</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to SomnaForm
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white font-outfit">
              Somna<span className="text-indigo-400">Form</span> Checkout
            </span>
          </div>

          <button
            onClick={handleDemoAutofill}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-950 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-bold transition shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Auto-Fill Demo Test Data
          </button>
        </div>

        {/* Main 2-Column Checkout Layout */}
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form Input Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Contact Info */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">1</div>
                <h3 className="text-xl font-bold text-white font-outfit">Contact Information</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Email Address (For Order Tracking Receipt)</label>
                <input
                  type="email"
                  placeholder="alex.morgan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none ${
                    errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                  }`}
                />
                {errors.email && <span className="text-rose-400 text-xs mt-1 block">{errors.email}</span>}
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">2</div>
                  <h3 className="text-xl font-bold text-white font-outfit">Shipping Address</h3>
                </div>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Free Shipping Qualified
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Alex"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none ${
                      errors.firstName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Morgan"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none ${
                      errors.lastName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Street Address</label>
                <input
                  type="text"
                  placeholder="742 Evergreen Terrace"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none ${
                    errors.address ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                  }`}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Los Angeles"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">State</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="CA">California (CA)</option>
                    <option value="NY">New York (NY)</option>
                    <option value="TX">Texas (TX)</option>
                    <option value="FL">Florida (FL)</option>
                    <option value="WA">Washington (WA)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">ZIP Code</label>
                  <input
                    type="text"
                    placeholder="90001"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white focus:outline-none ${
                      errors.zip ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Credit Card Payment Details */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">3</div>
                  <h3 className="text-xl font-bold text-white font-outfit">Payment Method</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" /> 256-Bit SSL
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="ALEX MORGAN"
                  value={formData.cardName}
                  onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white uppercase focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Credit Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    className={`w-full pl-4 pr-12 py-3 rounded-xl bg-slate-900 border text-sm text-white font-mono focus:outline-none ${
                      errors.cardNumber ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  <CreditCard className="w-5 h-5 absolute right-4 top-3.5 text-indigo-400" />
                </div>
                {errors.cardNumber && <span className="text-rose-400 text-xs mt-1 block">{errors.cardNumber}</span>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Expiry Date (MM/YY)</label>
                  <input
                    type="text"
                    placeholder="12/28"
                    value={formData.expiry}
                    onChange={handleExpiryChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white font-mono focus:outline-none ${
                      errors.expiry ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">CVC / Security Code</label>
                  <input
                    type="password"
                    maxLength={3}
                    placeholder="789"
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value.replace(/\D/g, '').slice(0, 3) })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white font-mono focus:outline-none ${
                      errors.cvc ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Card data is processed via encrypted PCI-DSS Compliant Gateway.</span>
              </div>
            </div>

          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 sticky top-24 space-y-6">
              
              <h3 className="text-xl font-bold text-white font-outfit border-b border-slate-800 pb-4">
                Order Summary ({cart.reduce((s, i) => s + i.quantity, 0)} items)
              </h3>

              {/* Items List */}
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover bg-slate-900" />
                    <div className="flex-1 text-xs space-y-0.5">
                      <h4 className="font-bold text-white font-outfit">{item.name}</h4>
                      <p className="text-slate-400">{item.variant}</p>
                      <span className="text-indigo-300 font-semibold">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-bold text-white text-sm font-outfit">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount Code Applied</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-400">
                  <span>Shipping ({shippingMethod === 'express' ? 'Express' : 'Standard'})</span>
                  <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Sales Tax (7%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-extrabold text-white pt-3 border-t border-slate-800 font-outfit">
                  <span>Total Due</span>
                  <span className="text-indigo-400">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-lg shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                <span>Place Order (${grandTotal.toFixed(2)})</span>
              </button>

              <div className="space-y-2 text-[11px] text-slate-400 text-center">
                <p>30-Night Money-Back Guarantee Included</p>
                <p className="text-[10px] text-slate-500">Operated by Ridgewell Supply Co LLC</p>
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

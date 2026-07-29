import React from 'react';
import { X, ShieldCheck, FileText, Lock, RotateCcw, Truck, Building2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const LegalModal = () => {
  const { activeModal, setActiveModal } = useShop();

  if (!activeModal) return null;

  const modalContent = {
    tos: {
      title: 'Terms of Service',
      icon: FileText,
      updated: 'July 2026',
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Welcome to SomnaForm. These Terms of Service govern your access to and use of the SomnaForm web application and product offerings operated by <strong>Ridgewell Supply Co LLC</strong> (https://ridgewellsupplycollc.com/).
          </p>
          <h4 className="font-bold text-white text-sm">1. Acceptance of Terms</h4>
          <p>By placing an order or browsing our website, you agree to be bound by these terms. If you do not agree to all terms, you may not access our services.</p>
          <h4 className="font-bold text-white text-sm">2. Product Pricing & Intellectual Property</h4>
          <p>All prices for the SomnaForm Ergonomic Contour Memory Foam Pillow are stated in USD ($79.00). All trademarks, patent designs, images, and content are the exclusive property of Ridgewell Supply Co LLC.</p>
          <h4 className="font-bold text-white text-sm">3. Limitation of Liability</h4>
          <p>SomnaForm products are designed for general ergonomic sleep comfort and cervical alignment. They are not intended to diagnose, treat, or cure medical conditions. Consult your orthopedic physician if you suffer from severe spinal conditions.</p>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: Lock,
      updated: 'July 2026',
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            At SomnaForm (operated by <strong>Ridgewell Supply Co LLC</strong>), we take your privacy seriously. This policy outlines how we collect, store, and protect your information.
          </p>
          <h4 className="font-bold text-white text-sm">1. Information Collection</h4>
          <p>We collect essential order information including your name, email address, shipping destination, and payment token required to process transactions and fulfill shipment delivery.</p>
          <h4 className="font-bold text-white text-sm">2. SSL Encryption & PCI Compliance</h4>
          <p>All credit card transactions are processed through 256-bit SSL encrypted payment gateways. We never store raw credit card numbers or CVC codes on our servers.</p>
          <h4 className="font-bold text-white text-sm">3. Data Usage</h4>
          <p>Your personal data will never be sold, rented, or shared with unauthorized third parties. Data is strictly utilized for shipping updates, customer support, and essential order receipts.</p>
        </div>
      )
    },
    returns: {
      title: 'Refund & 30-Night Return Guarantee',
      icon: RotateCcw,
      updated: 'July 2026',
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            We offer an industry-leading <strong>30-Night Risk-Free Sleep Trial</strong> on every SomnaForm pillow order.
          </p>
          <h4 className="font-bold text-white text-sm">1. 30-Night Sleep Guarantee</h4>
          <p>You have 30 calendar days from the date of delivery to test your pillow in your own bed. If your neck does not feel significantly relieved, you are entitled to a 100% full refund.</p>
          <h4 className="font-bold text-white text-sm">2. How to Initiate a Return</h4>
          <p>To start a return, contact our support team at Ridgewell Supply Co LLC via https://ridgewellsupplycollc.com/. We will provide a pre-paid shipping label.</p>
          <h4 className="font-bold text-white text-sm">3. Refund Processing</h4>
          <p>Once the return shipment is inspected at our warehouse, your original payment method will be credited within 2-4 business days.</p>
        </div>
      )
    },
    shipping: {
      title: 'Shipping & Delivery Policy',
      icon: Truck,
      updated: 'July 2026',
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            We ship SomnaForm pillows nationwide with fast, trackable carrier partners (FedEx, UPS, USPS).
          </p>
          <h4 className="font-bold text-white text-sm">1. Standard Free Shipping</h4>
          <p>All orders qualify for Standard Free Shipping. Orders are dispatched from our warehouse within 24 hours and arrive in 3-5 business days.</p>
          <h4 className="font-bold text-white text-sm">2. Express Insured Shipping ($9.99)</h4>
          <p>Express shipments receive priority queue processing and expedited 1-2 business day air delivery with full loss and damage coverage.</p>
        </div>
      )
    },
    legal: {
      title: 'Legal Notice & Corporate Info',
      icon: Building2,
      updated: 'July 2026',
      content: (
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200">
            <h4 className="font-bold text-white text-sm mb-1">Corporate Ownership Statement</h4>
            <p>
              SomnaForm is a registered brand managed and operated by <strong>Ridgewell Supply Co LLC</strong>.
            </p>
            <p className="mt-1">
              Official Website: <a href="https://ridgewellsupplycollc.com/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-indigo-400">https://ridgewellsupplycollc.com/</a>
            </p>
          </div>
          <h4 className="font-bold text-white text-sm">Compliance & Certification</h4>
          <p>SomnaForm memory foam cores are officially certified by CertiPUR-US® for safety, emissions, and environmental standards.</p>
        </div>
      )
    }
  };

  const current = modalContent[activeModal] || modalContent.tos;
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-800 relative shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-outfit">{current.title}</h3>
              <span className="text-[10px] text-slate-400">Last updated: {current.updated}</span>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          {current.content}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] text-slate-500">Operated by Ridgewell Supply Co LLC</span>
          <button
            onClick={() => setActiveModal(null)}
            className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};

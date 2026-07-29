import React from 'react';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastNotification = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="glass-panel px-5 py-3.5 rounded-2xl border border-indigo-500/40 text-white text-xs font-bold shadow-2xl flex items-center gap-3 bg-slate-900/90 backdrop-blur-md">
        <div className="w-7 h-7 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const ShopContext = createContext();

export const DEFAULT_PRODUCT = {
  id: 'somnaform-contour-pillow',
  name: 'SomnaForm Ergonomic Contour Memory Foam Pillow',
  shortName: 'SomnaForm Ergonomic Pillow',
  price: 79.00,
  originalPrice: 119.00,
  rating: 4.9,
  reviewsCount: 2480,
  sku: 'SF-PLW-01',
  description: 'Engineered by orthopedists and sleep scientists to eliminate cervical neck tension, optimize spinal alignment, and deliver deep restorative REM sleep night after night.',
  image: './images/hero.jpg',
  images: [
    { src: './images/hero.jpg', alt: 'SomnaForm Ergonomic Contour Pillow Studio View' },
    { src: './images/spine.jpg', alt: 'Cervical Spine Medical Alignment Diagram' },
    { src: './images/bamboo.jpg', alt: 'Ultra-Breathable Bamboo Air-Weave Fabric' },
    { src: './images/bedroom.jpg', alt: 'SomnaForm Pillow in Modern Bedroom Setting' }
  ],
  specs: [
    { label: 'Core Material', value: 'CertiPUR-US® High-Density Memory Foam' },
    { label: 'Cover Fabric', value: '3D Breathable Organic Bamboo Slip' },
    { label: 'Dimensions', value: '24.5" L x 15.0" W x 4.8"/3.8" H (Dual Height)' },
    { label: 'Trial Period', value: '30 Nights Risk-Free' },
    { label: 'Warranty', value: '10-Year Full Replacement Guarantee' }
  ]
};

export const ShopProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('home'); // 'home', 'product', 'checkout', 'success'
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'tos', 'privacy', 'returns', 'shipping', 'legal'
  const [toastMessage, setToastMessage] = useState(null);

  // Cart State
  const [cart, setCart] = useState([
    {
      id: DEFAULT_PRODUCT.id,
      name: DEFAULT_PRODUCT.name,
      price: DEFAULT_PRODUCT.price,
      quantity: 1,
      image: DEFAULT_PRODUCT.image,
      variant: 'Standard Contour (24" x 15")'
    }
  ]);

  // Order & Discount State
  const [shippingMethod, setShippingMethod] = useState('standard'); // 'standard' ($0) or 'express' ($9.99)
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState('');
  const [latestOrder, setLatestOrder] = useState(null);

  // Toast handler
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Scroll to top on page change
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart actions
  const addToCart = (product = DEFAULT_PRODUCT, quantity = 1, variant = 'Standard Contour (24" x 15")') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id && item.variant === variant);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image || DEFAULT_PRODUCT.image,
        variant
      }];
    });
    showToast(`Added ${quantity}x ${product.shortName || 'SomnaForm Pillow'} to cart!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)));
    showToast('Item removed from cart');
  };

  const updateQuantity = (id, variant, delta) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id && item.variant === variant) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = cart.length === 0 ? 0 : (shippingMethod === 'express' ? 9.99 : 0);
  const taxAmount = (subtotal - discountAmount) > 0 ? (subtotal - discountAmount) * 0.07 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost + taxAmount);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Apply Coupon
  const handleApplyPromo = (code) => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'SLEEP10') {
      const discount = 10.00;
      setDiscountAmount(discount);
      setAppliedPromo('SLEEP10 (-$10.00 Off)');
      showToast('Promo code SLEEP10 applied! Saved $10.00');
    } else if (formatted === 'FREESHIP') {
      setShippingMethod('standard');
      setAppliedPromo('FREESHIP (Free Express Shipping)');
      showToast('Free Express Shipping applied!');
    } else {
      showToast('Invalid promo code. Try "SLEEP10"');
    }
  };

  // Trigger Order Completion
  const processOrder = (customerData) => {
    const orderId = 'SF-' + Math.floor(10000 + Math.random() * 90000);
    const orderDetails = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      customer: customerData,
      items: [...cart],
      subtotal,
      discountAmount,
      shippingCost,
      taxAmount,
      grandTotal,
      estimatedDelivery: '3 to 5 Business Days'
    };

    setLatestOrder(orderDetails);
    setCart([]);
    setIsCartOpen(false);
    
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }

    navigateTo('success');
  };

  return (
    <ShopContext.Provider value={{
      product: DEFAULT_PRODUCT,
      cart,
      activePage,
      isCartOpen,
      activeModal,
      toastMessage,
      shippingMethod,
      promoCode,
      discountAmount,
      appliedPromo,
      subtotal,
      shippingCost,
      taxAmount,
      grandTotal,
      totalItemCount,
      latestOrder,
      setIsCartOpen,
      setActiveModal,
      setShippingMethod,
      setPromoCode,
      navigateTo,
      addToCart,
      removeFromCart,
      updateQuantity,
      handleApplyPromo,
      processOrder,
      showToast
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

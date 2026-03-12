'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import OrderSummary from '@/components/OrderSummary';
import { CreditCard, CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculating Bill
  const subtotal = state.cartItems.reduce(
    (sum, item) => sum + (item.product_price * item.quantity), 
    0
  );
  const grandTotal = subtotal + state.shipping_fee - state.discount_applied;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setIsSuccess(true);
    
    // Reset cart after successful payment
    setTimeout(() => {
      dispatch({ type: 'RESET_CART' });
      router.push('/');
    }, 3000);
  };

  // Showing success message
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="bg-white rounded-lg shadow-md p-12">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <div className="animate-pulse text-gray-500">
            Redirecting to home...
          </div>
        </div>
      </div>
    );
  }

  // Redirect if no address
  if (!state.address) {
    router.push('/checkout/address');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Complete Payment</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div>
          <OrderSummary 
            items={state.cartItems}
            subtotal={subtotal}
            shipping={state.shipping_fee}
            discount={state.discount_applied}
            grandTotal={grandTotal}
          />
        </div>

        {/* Address & Payment */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="space-y-1 text-gray-600">
              <p className="font-medium text-gray-900">{state.address.fullName}</p>
              <p>{state.address.email}</p>
              <p>{state.address.phone}</p>
              <p>{state.address.city}, {state.address.state} - {state.address.pinCode}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              {isProcessing ? 'Processing...' : `Pay Securely ₹${grandTotal}`}
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              This is a demo - no actual payment will be processed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
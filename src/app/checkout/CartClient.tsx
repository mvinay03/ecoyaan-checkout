'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartData } from '@/types';
import { ShoppingBag, Truck } from 'lucide-react';

interface Props {
  initialData: CartData;
  initialTotals: { subtotal: number; grandTotal: number };
}

export default function CartClient({ initialData, initialTotals }: Props) {
  const { state, dispatch } = useCart();

  // Load the server data into our cart state
  useEffect(() => {
    dispatch({ type: 'SET_CART_DATA', payload: initialData });
  }, [dispatch, initialData]);

  return (
    <>
      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {state.cartItems.map((item) => (
          <div key={item.product_id} className="flex items-center py-4 border-b last:border-0">
            <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden">
  {item.image.includes('placeholder') ? (
    
    // Placeholder is throwing timed out error so fixed it with First Letter of Product Name

    <div className="w-full h-full flex items-center justify-center bg-teal-100 text-teal-700 font-bold text-xl">
      {item.product_name.charAt(0)}
    </div>
  ) : (
    <Image 
      src={item.image} 
      alt={item.product_name}
      fill
      className="object-cover rounded"
    />
  )}
</div>
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.product_name}</h3>
              <p className="text-gray-600">₹{item.product_price} x {item.quantity}</p>
            </div>
            <div className="font-bold">
              ₹{item.product_price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{initialTotals.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1">
              <Truck size={16} /> Shipping
            </span>
            <span>₹{state.shipping_fee}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total</span>
              <span>₹{initialTotals.grandTotal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <Link 
        href="/checkout/address"
        className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg hover:bg-teal-700 transition"
      >
        Proceed to Checkout
      </Link>
    </>
  );
}
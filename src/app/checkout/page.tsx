import { mockCartData } from '@/lib/mockData';
import CartClient from './CartClient';

// THIS IS THE SSR PART - runs on server before sending to browser
export default async function CheckoutPage() {
  // Get data on the server
  const cartData = mockCartData;
  
  // Calculate totals
  const subtotal = cartData.cartItems.reduce(
    (sum, item) => sum + (item.product_price * item.quantity), 
    0
  );
  const grandTotal = subtotal + cartData.shipping_fee - cartData.discount_applied;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {/* Pass server data to client component */}
      <CartClient 
        initialData={cartData} 
        initialTotals={{ subtotal, grandTotal }}
      />
    </div>
  );
}
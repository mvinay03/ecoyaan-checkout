import { CartItem } from '@/types';

interface Props {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  grandTotal: number;
}

export default function OrderSummary({ items, subtotal, shipping, discount, grandTotal }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
        {items.map(item => (
          <div key={item.product_id} className="flex justify-between text-sm">
            <span className="text-gray-600">
              {item.product_name} x{item.quantity}
            </span>
            <span className="font-medium">₹{item.product_price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>₹{shipping}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
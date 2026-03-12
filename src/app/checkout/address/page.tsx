    'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import AddressForm from '@/components/AddressForm';
import { Address } from '@/types';

export default function AddressPage() {
  const router = useRouter();
  const { state, dispatch } = useCart();

  const handleAddressSubmit = (address: Address) => {
    dispatch({ type: 'SET_ADDRESS', payload: address });
    router.push('/checkout/payment');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shipping Address</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <AddressForm 
          initialValues={state.address}
          onSubmit={handleAddressSubmit}
        />
      </div>
    </div>
  );
}
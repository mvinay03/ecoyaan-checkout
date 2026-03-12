'use client';

import { useForm } from 'react-hook-form';
import { Address } from '@/types';

interface Props {
  initialValues?: Address;
  onSubmit: (data: Address) => void;
}

export default function AddressForm({ initialValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Address>({
    defaultValues: initialValues || {
      fullName: '',
      email: '',
      phone: '',
      pinCode: '',
      city: '',
      state: ''
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name *</label>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
          placeholder="Vinayak Mithare"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
          placeholder="vinayak@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number *</label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Must be 10 digits'
            }
          })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
          placeholder="9876543210"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* PIN Code and City */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">PIN Code *</label>
          <input
            {...register('pinCode', { required: 'PIN code is required' })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
            placeholder="530001"
          />
          {errors.pinCode && (
            <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">City *</label>
          <input
            {...register('city', { required: 'City is required' })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
            placeholder="Visakhapatnam"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium mb-1">State *</label>
        <input
          {...register('state', { required: 'State is required' })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
          placeholder="Andhra Pradesh"
        />
        {errors.state && (
          <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50"
      >
        Continue to Payment
      </button>
    </form>
  );
}
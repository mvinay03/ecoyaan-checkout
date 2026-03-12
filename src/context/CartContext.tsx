'use client';

// This file manages all our app's data across different pages
import { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartData, Address } from '@/types';

// Define what our cart state looks like
interface CartState extends CartData {
  address?: Address;
  currentStep: 'cart' | 'address' | 'payment';
}

// Define all possible actions we can do
type CartAction =
  | { type: 'SET_CART_DATA'; payload: CartData }
  | { type: 'SET_ADDRESS'; payload: Address }
  | { type: 'SET_STEP'; payload: CartState['currentStep'] }
  | { type: 'RESET_CART' };

// Starting state
const initialState: CartState = {
  cartItems: [],
  shipping_fee: 0,
  discount_applied: 0,
  currentStep: 'cart'
};

// How state changes based on actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_CART_DATA':
      return { ...state, ...action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
};

// Create context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

// Provider component - wraps our app to give all components access to cart data
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart data easily
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
import { NextResponse } from 'next/server';
import { mockCartData } from '@/lib/mockData';

// This is like a mini backend - when someone visits /api/cart, they get this data
export async function GET() {
  // Wait a tiny bit to simulate real network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({
    data: mockCartData,
    message: "Cart data fetched successfully"
  });
}
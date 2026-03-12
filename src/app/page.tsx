import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">🌱 Ecoyaan Checkout Demo</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        A simplified checkout flow demonstrating Next.js Server-Side Rendering, 
        Context API state management, and form validation with React Hook Form.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">🛒 Cart Review</h3>
          <p className="text-sm text-gray-600">SSR-fetched product data with order summary</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">📝 Address Form</h3>
          <p className="text-sm text-gray-600">Validated shipping details with real-time feedback</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">💳 Payment</h3>
          <p className="text-sm text-gray-600">Simulated payment with success state</p>
        </div>
      </div>

      <Link 
        href="/checkout"
        className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition text-lg"
      >
        Start Shopping →
      </Link>
    </div>
  );
}
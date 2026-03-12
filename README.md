# Ecoyaan Checkout Flow Demo

A simplified e-commerce checkout flow built for Ecoyaan, demonstrating Next.js Server-Side Rendering, state management, and responsive UI components.

## Deliverables

- **GitHub Repository**: https://github.com/mvinay03/ecoyaan-checkout
- **Live Demo**: https://ecoyaan-checkout.vercel.app
- **Documentation**: This README file

## Project Overview

This project implements a 3-step checkout flow:

1. **Cart Review** - Display products with SSR-fetched data
2. **Shipping Address** - Form with validation
3. **Payment Simulation** - Order confirmation with success state

## Technology Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Context API with useReducer
- Lucide React Icons

## Architectural Decisions

### Server-Side Rendering
The cart page uses a Server Component to fetch mock data during SSR. This demonstrates Next.js data fetching patterns and provides fast initial page loads with SEO benefits.

### State Management
Context API combined with useReducer manages the global cart state across all three checkout steps. This approach was chosen for its simplicity and because it is built into React, avoiding external dependencies while maintaining clean state transitions.

### Form Validation
React Hook Form handles address collection with validation rules including required fields, email format validation via regex, and 10-digit phone number verification. Real-time error messages provide immediate user feedback without page reloads.

### Styling Approach
Tailwind CSS enables rapid UI development with a mobile-first responsive design. The utility-first approach keeps the CSS bundle minimal while maintaining consistency across components.

### Mock Data Strategy
Static JSON data simulates a backend API response. An API route at /api/cart is also available to demonstrate API route functionality, though the main implementation uses direct data import for SSR.

## Project Structure
ecoyaan-checkout/
├── src/
│ ├── app/
│ │ ├── api/
│ │ │ └── cart/
│ │ │ └── route.ts
│ │ ├── checkout/
│ │ │ ├── page.tsx
│ │ │ ├── address/
│ │ │ │ └── page.tsx
│ │ │ └── payment/
│ │ │ └── page.tsx
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ ├── AddressForm.tsx
│ │ ├── CartClient.tsx
│ │ └── OrderSummary.tsx
│ ├── context/
│ │ └── CartContext.tsx
│ ├── lib/
│ │ └── mockData.ts
│ └── types/
│ └── index.ts
├── public/
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── README.md

## Key Features

### Server-Side Rendering
The checkout page fetches cart data on the server before sending HTML to the client. This ensures the cart content is immediately visible and improves perceived performance.

### State Persistence
Cart items and address details persist throughout the checkout flow using Context API. Users can navigate between steps without losing their entered information.

### Form Validation Rules

| Field | Validation | Error Message |
|-------|------------|---------------|
| Full Name | Required | Full name is required |
| Email | Required + Regex | Invalid email address |
| Phone | Required + 10 digits | Must be 10 digits |
| PIN Code | Required | PIN code is required |
| City | Required | City is required |
| State | Required | State is required |

### Responsive Design
The interface adapts to different screen sizes using Tailwind's responsive utilities. On mobile devices, the layout stacks vertically, while desktop views use multi-column grids.

### Image Error Handling
External image URLs that fail to load are replaced with colored fallback boxes displaying the product's first letter, ensuring the UI remains functional and visually consistent.

## Installation

### Prerequisites
- Node.js version 18 or higher
- npm or yarn package manager

### Local Development Setup

1. Clone the repository
git clone https://github.com/mvinay03/ecoyaan-checkout.git
cd ecoyaan-checkout

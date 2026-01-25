# commerce.js

Hanzo Commerce SDK - Modern e-commerce framework for React and Next.js.

This package wraps [@hanzo/commerce](https://github.com/hanzoai/react-sdk/tree/main/pkg/commerce) for easy standalone usage.

## Installation

```bash
npm install commerce.js
# or
yarn add commerce.js
# or
pnpm add commerce.js
```

## Quick Start

```tsx
import {
  AddToCartWidget,
  CartPanel,
  ProductCard,
  PaymentStepForm,
  ShippingStepForm
} from 'commerce.js'

function ProductPage({ product }) {
  return (
    <div>
      <ProductCard product={product} />
      <AddToCartWidget sku={product.sku} />
    </div>
  )
}

function CartPage() {
  return <CartPanel />
}

function CheckoutPage() {
  return (
    <>
      <ShippingStepForm />
      <PaymentStepForm />
    </>
  )
}
```

## Features

- React components for commerce UIs
- Cart management with MobX
- Product catalog components
- Checkout flow components
- Square payment integration
- Crypto payment support
- Promo code handling
- Type-safe with TypeScript

## Components

- `AddToCartWidget` - Add to cart button with quantity
- `CartPanel` - Shopping cart sidebar/panel
- `ProductCard` - Product display card
- `CarouselBuyCard` - Product carousel with buy button
- `PaymentStepForm` - Payment form component
- `ShippingStepForm` - Shipping address form

## Documentation

See [@hanzo/commerce documentation](https://github.com/hanzoai/react-sdk/tree/main/pkg/commerce) for full API reference.

## License

BSD-3-Clause

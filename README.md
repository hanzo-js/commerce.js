# @hanzo/commerce.js

Modern e-commerce framework for React/Next.js. Wraps @hanzo/commerce with a standalone package.

## Installation

```bash
npm install @hanzo/commerce.js
```

## Quick Start

```tsx
import { 
  ProductCard, 
  AddToCartWidget, 
  CartPanel,
  CommerceProvider 
} from '@hanzo/commerce.js'

function Shop({ products }) {
  return (
    <CommerceProvider>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product}>
            <AddToCartWidget sku={product.sku} />
          </ProductCard>
        ))}
      </div>
      <CartPanel />
    </CommerceProvider>
  )
}
```

## Components

### Product Display
- `ProductCard` - Display product information
- `CarouselBuyCard` - Product card with carousel
- `Icons` - Commerce icons

### Cart
- `CartPanel` - Shopping cart sidebar
- `AddToCartWidget` - Add to cart button with quantity

### Checkout
- `PaymentStepForm` - Payment form step
- `ShippingStepForm` - Shipping form step

## Types

Import types from the `/types` subpath:

```ts
import type { Product, LineItem, CartItem } from '@hanzo/commerce.js/types'
```

## License

BSD-3-Clause

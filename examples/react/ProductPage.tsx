import React from 'react'
import { 
  ProductCard, 
  AddToCartWidget, 
  CartPanel,
  CommerceProvider 
} from '@hanzo/commerce.js'

// Sample product data
const products = [
  {
    id: '1',
    sku: 'WIDGET-001',
    name: 'Premium Widget',
    description: 'A fantastic widget that does amazing things.',
    price: 4999, // cents
    image: '/images/widget.jpg',
    category: 'Widgets'
  },
  {
    id: '2', 
    sku: 'GADGET-001',
    name: 'Super Gadget',
    description: 'The gadget you never knew you needed.',
    price: 7999,
    image: '/images/gadget.jpg',
    category: 'Gadgets'
  }
]

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product}>
          <AddToCartWidget sku={product.sku} />
        </ProductCard>
      ))}
    </div>
  )
}

function App() {
  return (
    <CommerceProvider>
      <div className="container mx-auto p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <CartPanel />
        </header>
        
        <ProductGrid />
      </div>
    </CommerceProvider>
  )
}

export default App

/**
 * commerce.js
 *
 * Hanzo Commerce SDK - Modern e-commerce framework for React/Next.js.
 * This package re-exports @hanzo/commerce for easy standalone usage.
 *
 * @example
 * ```tsx
 * import { AddToCartWidget, CartPanel, ProductCard } from 'commerce.js'
 *
 * function ProductPage({ product }) {
 *   return (
 *     <div>
 *       <ProductCard product={product} />
 *       <AddToCartWidget sku={product.sku} />
 *     </div>
 *   )
 * }
 * ```
 */

// Re-export everything from @hanzo/commerce
export * from '@hanzo/commerce'

/**
 * commerce.js
 *
 * Hanzo Commerce API client — billing, subscriptions, payments, usage, plans.
 * Wraps @hanzo/commerce for easy standalone usage without scoped imports.
 *
 * @example
 * ```ts
 * import { Commerce } from 'commerce.js'
 *
 * const commerce = new Commerce({
 *   commerceUrl: 'https://commerce.hanzo.ai',
 *   token: accessToken,
 * })
 *
 * const balance = await commerce.getBalance('hanzo/alice')
 * await commerce.subscribe({ planId: 'growth', userId: 'hanzo/alice' })
 * ```
 */

export { Commerce, CommerceApiError } from '@hanzo/commerce/client'
export type {
  CommerceClientConfig,
  Balance,
  Transaction,
  Subscription,
  Plan,
  Payment,
  UsageRecord,
} from '@hanzo/commerce/client'

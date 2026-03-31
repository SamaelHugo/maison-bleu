'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clearCart = useCartStore((state) => state.clearCart)
  const totalPrice = useCartStore((state) => state.totalPrice)
  const totalItems = useCartStore((state) => state.totalItems)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal/30 transition-opacity duration-[400ms] ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[420px] flex-col bg-ivory transition-transform duration-[400ms] ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-light px-6 py-5">
          <h2 className="font-cormorant text-xl font-normal text-charcoal">
            Cart ({totalItems()})
          </h2>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} strokeWidth={1.5} className="text-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <p className="font-raleway text-sm font-light text-stone">
                Your cart is empty
              </p>
              <button
                onClick={onClose}
                className="mt-6 border border-charcoal px-8 py-3 font-raleway text-xs font-normal uppercase tracking-button text-charcoal transition-colors duration-[400ms] hover:bg-charcoal hover:text-ivory"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  {/* Product image */}
                  <Link
                    href={`/catalog/${item.product.slug}`}
                    onClick={onClose}
                    className="relative h-24 w-20 shrink-0 overflow-hidden"
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/catalog/${item.product.slug}`}
                        onClick={onClose}
                        className="font-cormorant text-lg font-normal text-charcoal transition-colors hover:text-blue-deep"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-0.5 font-raleway text-sm font-light text-charcoal">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    {/* Quantity controls + remove */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center border border-blue-light text-charcoal-soft transition-colors hover:border-charcoal"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="font-raleway text-sm font-light text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center border border-blue-light text-charcoal-soft transition-colors hover:border-charcoal"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        aria-label={`Remove ${item.product.name}`}
                        className="text-stone transition-colors duration-[400ms] hover:text-charcoal"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — total + actions */}
        {items.length > 0 && (
          <div className="border-t border-blue-light px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="font-raleway text-xs font-normal uppercase tracking-nav text-stone">
                Total
              </span>
              <span className="font-raleway text-lg font-light text-charcoal">
                {formatPrice(totalPrice())}
              </span>
            </div>

            <button
              className="mt-5 w-full bg-blue-deep px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-ivory transition-colors duration-[400ms] hover:bg-blue-muted"
            >
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="mt-3 w-full py-2 font-raleway text-xs font-light text-stone transition-colors duration-[400ms] hover:text-charcoal"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}

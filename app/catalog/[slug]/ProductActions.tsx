'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { Product } from '@/lib/types'

export default function ProductActions({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <div className="mt-10 flex flex-col gap-3">
      <button
        onClick={() => addItem(product)}
        className="w-full bg-blue-deep px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-ivory transition-colors duration-[400ms] hover:bg-blue-muted"
      >
        Add to cart
      </button>
      <Link
        href="/contact"
        className="block w-full border border-charcoal px-12 py-4 text-center font-raleway text-xs font-normal uppercase tracking-button text-charcoal transition-colors duration-[400ms] hover:bg-charcoal hover:text-ivory"
      >
        Book a viewing
      </Link>
    </div>
  )
}

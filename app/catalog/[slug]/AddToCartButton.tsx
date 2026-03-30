'use client'

import { useCartStore } from '@/lib/store'
import { Product } from '@/lib/types'

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <button
      onClick={() => addItem(product)}
      className="mt-10 w-full bg-blue-deep px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-ivory transition-colors hover:bg-blue-muted"
    >
      Ajouter au panier
    </button>
  )
}

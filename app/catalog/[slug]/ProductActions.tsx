'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { Product } from '@/lib/types'
import { showCartToast } from '@/components/CartToast'

export default function ProductActions({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)
  const [showToast, setShowToast] = useState(false)

  const handleAdd = () => {
    addItem(product)
    showCartToast()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <>
      <div className="mt-10 flex flex-col gap-3">
        <button
          onClick={handleAdd}
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

      {showToast && (
        <div
          className="fixed bottom-6 right-6 z-[80] border border-blue-light bg-ivory px-5 py-3 font-raleway text-[13px] font-light text-charcoal"
          style={{
            animation: 'fadeInOut 2s ease forwards',
          }}
        >
          Ajout&eacute; au panier
        </div>
      )}
    </>
  )
}

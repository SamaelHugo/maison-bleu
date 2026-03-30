'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalog/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="mt-4 font-raleway text-xs font-normal uppercase tracking-nav text-stone">
        {product.collection}
      </p>
      <h3 className="mt-1 font-cormorant text-[22px] font-normal text-charcoal">
        {product.name}
      </h3>
      <p className="mt-1 font-raleway text-[15px] font-light text-charcoal">
        {formatPrice(product.price)}
      </p>
    </Link>
  )
}

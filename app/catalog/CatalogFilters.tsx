'use client'

import { useState } from 'react'
import { Product } from '@/lib/types'
import CatalogGrid from './CatalogGrid'

interface Filter {
  label: string
  slug: string
}

interface CatalogFiltersProps {
  filters: Filter[]
  products: Product[]
  initialCategory: string
}

export default function CatalogFilters({
  filters,
  products,
  initialCategory,
}: CatalogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <section className="bg-ivory px-8 py-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-8">
          {filters.map((filter) => {
            const isActive = activeCategory === filter.slug
            return (
              <button
                key={filter.slug}
                onClick={() => setActiveCategory(filter.slug)}
                className={`relative pb-2 font-raleway text-xs font-normal uppercase tracking-nav transition-colors duration-[400ms] ${
                  isActive
                    ? 'text-blue-deep'
                    : 'text-stone hover:text-charcoal'
                }`}
              >
                {filter.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-brass" />
                )}
              </button>
            )
          })}
        </div>

        {/* Product grid */}
        <CatalogGrid key={activeCategory} products={filtered} />
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { products, collections } from '@/lib/mock-data'
import ProductCard from '@/components/ProductCard'
import CatalogGrid from './CatalogGrid'

export const metadata = {
  title: 'Catalog — Maison Bleu',
}

const filters = [
  { label: 'All', slug: '' },
  ...collections.map((c) => ({ label: c.name, slug: c.slug })),
]

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const activeCategory = searchParams.category || ''
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <>
      {/* Catalog Hero — 50vh */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80"
          alt="Atelier Maison Bleu"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(44,44,44,0.4) 0%, transparent 50%)',
          }}
        />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="font-cormorant text-[clamp(48px,8vw,80px)] font-light tracking-heading text-ivory">
            Catalog
          </h1>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-ivory px-8 py-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-8">
            {filters.map((filter) => {
              const isActive = activeCategory === filter.slug
              return (
                <Link
                  key={filter.slug}
                  href={filter.slug ? `/catalog?category=${filter.slug}` : '/catalog'}
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
                </Link>
              )
            })}
          </div>

          {/* Product grid with stagger */}
          <CatalogGrid products={filtered} />
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import { getProducts, getCollections } from '@/lib/content'
import CatalogFilters from './CatalogFilters'

export const metadata = {
  title: 'Catalog — Maison Bleu',
}

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const products = getProducts()
  const collections = getCollections()
  const filters = [
    { label: 'All', slug: '' },
    ...collections.map((c) => ({ label: c.name, slug: c.slug })),
  ]
  const initialCategory = searchParams.category || ''

  return (
    <>
      {/* Catalog Hero — 50vh */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=80"
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

      {/* Filters + Grid — client component for immediate state updates */}
      <CatalogFilters
        filters={filters}
        products={products}
        initialCategory={initialCategory}
      />
    </>
  )
}

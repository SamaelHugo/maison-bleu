import ProductCard from '@/components/ProductCard'
import ScrollReveal from '@/components/ScrollReveal'
import { products, collections } from '@/lib/mock-data'
import Link from 'next/link'

export const metadata = {
  title: 'Collections — Maison Bleu',
}

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const filtered = searchParams.category
    ? products.filter((p) => p.category === searchParams.category)
    : products

  return (
    <section className="bg-ivory px-8 pb-[120px] pt-40">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <h1 className="text-center font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
            Collections
          </h1>
        </ScrollReveal>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            href="/catalog"
            className={`font-raleway text-xs font-normal uppercase tracking-nav transition-colors ${
              !searchParams.category
                ? 'text-charcoal'
                : 'text-stone hover:text-charcoal'
            }`}
          >
            Tout
          </Link>
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/catalog?category=${collection.slug}`}
              className={`font-raleway text-xs font-normal uppercase tracking-nav transition-colors ${
                searchParams.category === collection.slug
                  ? 'text-charcoal'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              {collection.name}
            </Link>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.15}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

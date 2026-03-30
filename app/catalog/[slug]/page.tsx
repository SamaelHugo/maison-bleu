import { notFound } from 'next/navigation'
import Image from 'next/image'
import { products } from '@/lib/mock-data'
import { formatPrice } from '@/lib/utils'
import ScrollReveal from '@/components/ScrollReveal'
import ProductCard from '@/components/ProductCard'
import AddToCartButton from './AddToCartButton'

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return { title: 'Produit introuvable' }
  return { title: `${product.name} — Maison Bleu` }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <section className="bg-ivory px-8 pb-[120px] pt-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Photo gallery */}
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={img}
                    alt={`${product.name} — photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Product info */}
          <ScrollReveal delay={0.15}>
            <div className="sticky top-40">
              <h1 className="font-cormorant text-[clamp(36px,4vw,56px)] font-light tracking-heading text-charcoal">
                {product.name}
              </h1>
              <p className="mt-2 font-raleway text-lg font-light text-stone">
                {formatPrice(product.price)}
              </p>

              <p className="mt-8 font-raleway text-base font-light leading-[1.7] text-charcoal-soft">
                {product.description}
              </p>

              <div className="mt-10">
                <h3 className="font-raleway text-xs font-medium uppercase tracking-nav text-charcoal">
                  Materiaux
                </h3>
                <ul className="mt-3 space-y-1">
                  {product.materials.map((material) => (
                    <li
                      key={material}
                      className="font-raleway text-sm font-light text-charcoal-soft"
                    >
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-raleway text-xs font-medium uppercase tracking-nav text-charcoal">
                  Dimensions
                </h3>
                <p className="mt-2 font-raleway text-sm font-light text-charcoal-soft">
                  {product.dimensions}
                </p>
              </div>

              <AddToCartButton product={product} />
            </div>
          </ScrollReveal>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-32">
            <ScrollReveal>
              <h2 className="text-center font-cormorant text-[clamp(30px,4vw,48px)] font-light tracking-heading text-charcoal">
                Vous aimerez aussi
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {related.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.15}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

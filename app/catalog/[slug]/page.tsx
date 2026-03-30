import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products, collections } from '@/lib/mock-data'
import { formatPrice } from '@/lib/utils'
import ScrollReveal from '@/components/ScrollReveal'
import ProductCard from '@/components/ProductCard'
import ProductGallery from './ProductGallery'
import ProductActions from './ProductActions'

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return { title: 'Product not found' }
  return { title: `${product.name} — Maison Bleu` }
}

function parseDimensions(dim: string): { width?: string; height?: string; depth?: string } | null {
  const match = dim.match(/^(\d+)\s*x\s*(\d+)\s*x\s*(\d+)\s*cm$/)
  if (!match) return null
  return { width: `${match[1]} cm`, depth: `${match[2]} cm`, height: `${match[3]} cm` }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const collection = collections.find((c) => c.slug === product.category)
  const dims = parseDimensions(product.dimensions)

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <section className="bg-ivory px-8 pb-[60px] pt-32 md:pb-[120px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Breadcrumb */}
        <ScrollReveal>
          <nav className="mb-10 flex items-center gap-2 font-raleway text-xs font-light text-stone">
            <Link href="/catalog" className="transition-colors duration-[400ms] hover:text-charcoal">
              Catalog
            </Link>
            <span>/</span>
            {collection && (
              <>
                <Link
                  href={`/catalog?category=${collection.slug}`}
                  className="transition-colors duration-[400ms] hover:text-charcoal"
                >
                  {collection.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-charcoal-soft">{product.name}</span>
          </nav>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid gap-12 md:grid-cols-[55%_1fr] md:gap-16">
          {/* Left — Photo gallery */}
          <ScrollReveal>
            <ProductGallery images={product.images} name={product.name} />
          </ScrollReveal>

          {/* Right — Product info */}
          <ScrollReveal delay={0.15}>
            <div className="md:sticky md:top-32">
              <h1 className="font-cormorant text-[40px] font-normal leading-[1.1] tracking-heading text-charcoal">
                {product.name}
              </h1>

              <p className="mt-3 font-raleway text-lg font-light text-charcoal">
                {formatPrice(product.price)}
              </p>

              <p className="mt-8 font-raleway text-base font-light leading-[1.7] text-charcoal-soft">
                {product.description}
              </p>

              {/* Materials — badges */}
              <div className="mt-8">
                <h3 className="font-raleway text-[11px] font-normal uppercase tracking-nav text-stone">
                  Materials
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="border border-blue-light px-3 py-1.5 font-raleway text-xs font-light text-charcoal-soft"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="mt-8">
                <h3 className="font-raleway text-[11px] font-normal uppercase tracking-nav text-stone">
                  Dimensions
                </h3>
                {dims ? (
                  <table className="mt-3 w-full text-left">
                    <tbody>
                      <tr className="border-b border-blue-light/50">
                        <td className="py-2 font-raleway text-sm font-light text-stone">Width</td>
                        <td className="py-2 font-raleway text-sm font-light text-charcoal-soft">{dims.width}</td>
                      </tr>
                      <tr className="border-b border-blue-light/50">
                        <td className="py-2 font-raleway text-sm font-light text-stone">Depth</td>
                        <td className="py-2 font-raleway text-sm font-light text-charcoal-soft">{dims.depth}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-raleway text-sm font-light text-stone">Height</td>
                        <td className="py-2 font-raleway text-sm font-light text-charcoal-soft">{dims.height}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p className="mt-2 font-raleway text-sm font-light text-charcoal-soft">
                    {product.dimensions}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <ProductActions product={product} />
            </div>
          </ScrollReveal>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <ScrollReveal>
              <h2 className="text-center font-cormorant text-[clamp(30px,4vw,48px)] font-light tracking-heading text-charcoal">
                You may also like
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
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

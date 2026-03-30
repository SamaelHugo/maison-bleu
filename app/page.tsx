import Hero from '@/components/Hero'
import BrandPhilosophy from '@/components/BrandPhilosophy'
import FeaturedCollections from '@/components/FeaturedCollections'
import Workshop from '@/components/Workshop'
import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'
import ProductCard from '@/components/ProductCard'
import Materials from '@/components/Materials'
import { products } from '@/lib/mock-data'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <>
      <Hero
        title="L&#39;art de vivre"
        subtitle="Mobilier artisanal depuis 1987"
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
      />

      {/* Brand Philosophy */}
      <BrandPhilosophy />

      <SectionDivider />

      {/* Featured Collections */}
      <FeaturedCollections />

      {/* Workshop */}
      <Workshop />

      <SectionDivider />

      {/* Materials */}
      <Materials />

      <SectionDivider color="brass" />

      {/* Featured Products */}
      <section className="bg-ivory-dark px-8 py-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="text-center font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
              Pieces choisies
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.15}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <Link
                href="/catalog"
                className="inline-block border border-charcoal px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Voir toutes les collections
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'
import ProductCard from '@/components/ProductCard'
import { collections, products } from '@/lib/mock-data'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <>
      <Hero
        title="Maison Bleu"
        subtitle="Mobilier artisanal francais"
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
      />

      {/* Brand Philosophy */}
      <section className="bg-ivory px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mx-auto max-w-text text-center">
              <h2 className="font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
                L&apos;art du meuble
              </h2>
              <p className="mt-8 font-raleway text-base font-light leading-[1.7] text-charcoal-soft md:text-lg">
                Chaque piece est concue dans notre atelier en France, faconnee a la main
                a partir de bois massif, de pierre naturelle et de textiles d&apos;exception.
                Nous ne fabriquons pas de meubles en serie. Nous construisons des objets
                qui traversent les generations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Featured Collections */}
      <section className="bg-ivory-dark px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="text-center font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
              Collections
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {collections.map((collection, i) => (
              <ScrollReveal key={collection.id} delay={i * 0.15}>
                <Link href={`/catalog?category=${collection.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 font-cormorant text-2xl font-normal text-charcoal">
                    {collection.name}
                  </h3>
                  <p className="mt-2 font-raleway text-sm font-light leading-relaxed text-charcoal-soft">
                    {collection.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="brass" />

      {/* Workshop */}
      <section className="bg-ivory px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
                alt="Atelier Maison Bleu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="max-w-text">
              <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                Notre Atelier
              </h2>
              <p className="mt-6 font-raleway text-base font-light leading-[1.7] text-charcoal-soft md:text-lg">
                Dans notre atelier du sud de la France, chaque meuble prend forme
                sous les mains de nos artisans. Le temps est notre allie, jamais
                notre contrainte. Nous choisissons nos bois un par un, nous ajustons
                chaque assemblage a la main.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block border border-charcoal px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Decouvrir
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Featured Products */}
      <section className="bg-ivory-dark px-8 py-[120px] md:py-[120px] py-[60px]">
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
                className="inline-block bg-blue-deep px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-ivory transition-colors hover:bg-blue-muted"
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

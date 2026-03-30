import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'

export const metadata = {
  title: 'Notre Atelier — Maison Bleu',
}

export default function AboutPage() {
  return (
    <>
      {/* Full-screen photo */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80"
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
      </section>

      {/* History */}
      <section className="bg-ivory px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mx-auto max-w-text text-center">
              <h2 className="font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
                Notre histoire
              </h2>
              <p className="mt-8 font-raleway text-base font-light leading-[1.7] text-charcoal-soft md:text-lg">
                Maison Bleu est nee de la conviction que le mobilier doit etre concu pour durer.
                Fondee en 2008 dans le sud de la France, notre atelier perpetue un savoir-faire
                transmis de generation en generation. Chaque piece porte la marque de la main
                qui l&apos;a faconnee.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Craftsmen */}
      <section className="bg-ivory-dark px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
          <ScrollReveal delay={0.15}>
            <div className="max-w-text">
              <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                Nos artisans
              </h2>
              <p className="mt-6 font-raleway text-base font-light leading-[1.7] text-charcoal-soft md:text-lg">
                Douze artisans travaillent dans notre atelier. Ebenistes, menuisiers, vanniers,
                forgerons — chacun maitre de son metier. Ils connaissent le bois par le toucher,
                le son, l&apos;odeur. C&apos;est cette connaissance intime du materiau qui donne
                a nos meubles leur caractere singulier.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
                alt="Artisan au travail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider color="brass" />

      {/* Process */}
      <section className="bg-ivory px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Processus de fabrication"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="max-w-text">
              <h2 className="font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                Le processus
              </h2>
              <p className="mt-6 font-raleway text-base font-light leading-[1.7] text-charcoal-soft md:text-lg">
                De la selection du bois brut a la finition a la cire, chaque etape est realisee
                a la main. Un meuble Maison Bleu demande entre quatre et douze semaines de travail.
                Nous ne raccourcissons jamais ce temps. Il fait partie de l&apos;objet.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="bg-ivory-dark px-8 py-[120px] md:py-[120px] py-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mx-auto max-w-text text-center">
              <h2 className="font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
                Nos valeurs
              </h2>
              <p className="mt-8 font-raleway text-base font-light leading-[1.7] text-charcoal-soft md:text-lg">
                Materiaux naturels, sourcing responsable, fabrication locale. Nous croyons
                qu&apos;un meuble bien fait est l&apos;oppose du jetable. Chaque choix de
                conception vise la durabilite — dans le materiau, la structure, et l&apos;esthetique.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

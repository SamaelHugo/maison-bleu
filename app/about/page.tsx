import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'
import CraftsmenGrid from './CraftsmenGrid'
import ProcessSteps from './ProcessSteps'

export const metadata = {
  title: 'Our Story — Maison Bleu',
}

const timeline = [
  {
    year: '1987',
    title: 'Founded',
    description:
      'Jean-Pierre Moreau opens a one-room workshop in Aix-en-Provence with a lathe, a workbench, and a conviction that furniture should be built to outlast its maker.',
  },
  {
    year: '1995',
    title: 'First showroom',
    description:
      'A small space on Rue du Faubourg Saint-Antoine in Paris. Word travels among architects and interior designers. Orders begin to arrive from across France.',
  },
  {
    year: '2008',
    title: 'The Provence collection',
    description:
      'Our first full collection — kitchens, dining, and living — built entirely from materials sourced within 200 kilometres of the atelier. It becomes our signature.',
  },
  {
    year: '2023',
    title: 'Online atelier',
    description:
      'We open our workshop to the world. Consultations, commissions, and our full catalog become available to anyone who shares our belief in furniture made to last.',
  },
]

const values = [
  {
    title: 'Handcrafted',
    description:
      'Every piece passes through the hands of our artisans. No automated production lines, no shortcuts. The time it takes is part of what makes it last.',
  },
  {
    title: 'Natural Materials',
    description:
      'Oak, walnut, marble, brass, linen. We work with materials that age honestly — growing more beautiful with use rather than wearing out.',
  },
  {
    title: 'Timeless',
    description:
      'We do not design for seasons. A Maison Bleu piece should feel as right in thirty years as it does today. Restraint is our strongest design tool.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — fullscreen */}
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
            background:
              'linear-gradient(to top, rgba(44,44,44,0.4) 0%, transparent 50%)',
          }}
        />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="font-cormorant text-[clamp(48px,8vw,72px)] font-light tracking-heading text-ivory">
            Our Story
          </h1>
        </div>
      </section>

      {/* History — timeline + founder photo */}
      <section className="bg-ivory px-8 py-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="text-center">
              <span className="font-raleway text-[11px] font-normal uppercase tracking-sub text-brass">
                Since 1987
              </span>
              <h2 className="mt-4 font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                A workshop, not a factory
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid items-start gap-16 md:grid-cols-[1fr_380px]">
            {/* Timeline */}
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.15}>
                  <div className="grid grid-cols-[80px_1fr] gap-6 border-b border-blue-light/50 py-8 first:pt-0 last:border-0 md:grid-cols-[120px_1fr] md:gap-10">
                    <span className="font-cormorant text-[32px] font-light tracking-heading text-blue-deep">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-cormorant text-2xl font-normal text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-raleway text-[15px] font-light leading-[1.7] text-charcoal-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Founder photo */}
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                  alt="Jean-Pierre Moreau, founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <p className="mt-3 font-raleway text-xs font-light text-stone">
                Jean-Pierre Moreau, founder, in the original workshop
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Craftsmen */}
      <section className="bg-ivory-dark px-8 py-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="text-center">
              <span className="font-raleway text-[11px] font-normal uppercase tracking-sub text-brass">
                The team
              </span>
              <h2 className="mt-4 font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                Our craftsmen
              </h2>
              <p className="mx-auto mt-6 max-w-text font-raleway text-base font-light leading-[1.7] text-charcoal-soft">
                Twelve artisans work in our atelier. Cabinetmakers, ceramists,
                metalworkers — each a master of their trade. They know wood by
                touch, sound, and scent.
              </p>
            </div>
          </ScrollReveal>

          <CraftsmenGrid />
        </div>
      </section>

      <SectionDivider color="brass" />

      {/* Process */}
      <section className="bg-ivory px-8 py-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="text-center">
              <span className="font-raleway text-[11px] font-normal uppercase tracking-sub text-brass">
                How we build
              </span>
              <h2 className="mt-4 font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                The process
              </h2>
            </div>
          </ScrollReveal>

          <ProcessSteps />
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="bg-ivory-dark px-8 py-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="text-center">
              <span className="font-raleway text-[11px] font-normal uppercase tracking-sub text-brass">
                What we believe
              </span>
              <h2 className="mt-4 font-cormorant text-[clamp(36px,5vw,56px)] font-light tracking-heading text-charcoal">
                Our values
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="text-center md:text-left">
                  <div className="mx-auto mb-6 h-px w-[60px] bg-brass md:mx-0" />
                  <h3 className="font-cormorant text-[28px] font-normal text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-4 font-raleway text-[15px] font-light leading-[1.7] text-charcoal-soft">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

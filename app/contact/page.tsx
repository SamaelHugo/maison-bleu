import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'

export const metadata = {
  title: 'Contact — Maison Bleu',
}

export default function ContactPage() {
  return (
    <section className="bg-ivory px-8 pb-[120px] pt-40">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <h1 className="text-center font-cormorant text-[clamp(36px,5vw,64px)] font-light tracking-heading text-charcoal">
            Contact
          </h1>
        </ScrollReveal>

        <div className="mt-16 grid gap-20 md:grid-cols-2">
          {/* Showroom info */}
          <ScrollReveal>
            <div>
              <h2 className="font-raleway text-xs font-medium uppercase tracking-nav text-charcoal">
                Showroom
              </h2>
              <div className="mt-6 space-y-2">
                <p className="font-raleway text-base font-light leading-[1.7] text-charcoal-soft">
                  12 Rue du Faubourg Saint-Antoine
                </p>
                <p className="font-raleway text-base font-light leading-[1.7] text-charcoal-soft">
                  75012 Paris, France
                </p>
              </div>

              <div className="mt-8">
                <h2 className="font-raleway text-xs font-medium uppercase tracking-nav text-charcoal">
                  Horaires
                </h2>
                <div className="mt-4 space-y-1">
                  <p className="font-raleway text-sm font-light text-charcoal-soft">
                    Lundi — Vendredi : 10h — 19h
                  </p>
                  <p className="font-raleway text-sm font-light text-charcoal-soft">
                    Samedi : 11h — 18h
                  </p>
                  <p className="font-raleway text-sm font-light text-charcoal-soft">
                    Dimanche : sur rendez-vous
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="font-raleway text-xs font-medium uppercase tracking-nav text-charcoal">
                  Contact
                </h2>
                <div className="mt-4 space-y-1">
                  <p className="font-raleway text-sm font-light text-charcoal-soft">
                    contact@maisonbleu.fr
                  </p>
                  <p className="font-raleway text-sm font-light text-charcoal-soft">
                    +33 1 43 46 12 00
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Consultation form */}
          <ScrollReveal delay={0.15}>
            <div>
              <h2 className="font-raleway text-xs font-medium uppercase tracking-nav text-charcoal">
                Demander une consultation
              </h2>
              <form className="mt-6 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-raleway text-xs font-normal uppercase tracking-nav text-stone"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-2 w-full border-b border-blue-light bg-transparent pb-3 font-raleway text-base font-light text-charcoal outline-none transition-colors focus:border-blue-deep"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-raleway text-xs font-normal uppercase tracking-nav text-stone"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full border-b border-blue-light bg-transparent pb-3 font-raleway text-base font-light text-charcoal outline-none transition-colors focus:border-blue-deep"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-raleway text-xs font-normal uppercase tracking-nav text-stone"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-2 w-full resize-none border-b border-blue-light bg-transparent pb-3 font-raleway text-base font-light text-charcoal outline-none transition-colors focus:border-blue-deep"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-deep px-12 py-4 font-raleway text-xs font-normal uppercase tracking-button text-ivory transition-colors hover:bg-blue-muted"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

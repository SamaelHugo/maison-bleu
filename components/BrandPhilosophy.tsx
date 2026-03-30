'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandPhilosophy() {
  return (
    <section className="bg-ivory px-8 py-[60px] md:py-[120px]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* Photo — shows first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="order-first md:order-last"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
              alt="Artisan au travail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[520px] text-center md:text-left"
        >
          <span className="font-raleway text-[11px] font-normal uppercase tracking-sub text-brass">
            Philosophy
          </span>

          <div className="mx-auto mt-4 h-px w-[60px] bg-brass md:mx-0" />

          <h2 className="mt-6 font-cormorant text-[48px] font-normal leading-[1.1] tracking-heading text-charcoal">
            Every piece tells a story
          </h2>

          <p className="mt-8 font-raleway text-[17px] font-light leading-[1.8] text-charcoal-soft">
            At Maison Bleu, furniture is not manufactured. It is built, slowly,
            by the hands of artisans who have spent decades mastering their craft.
            Each joint, each surface, each finish carries the quiet confidence of
            someone who knows wood the way a musician knows an instrument.
          </p>

          <p className="mt-6 font-raleway text-[17px] font-light leading-[1.8] text-charcoal-soft">
            We source our timber from managed French forests, our stone from
            Burgundy quarries, our brass from a single foundry in Lyon. These
            are not choices of convenience. They are commitments to a way of
            making things that respects both the material and the person who
            will live with it.
          </p>

          <p className="mt-6 font-raleway text-[17px] font-light leading-[1.8] text-charcoal-soft">
            The result is furniture that does not follow trends. It outlasts them.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

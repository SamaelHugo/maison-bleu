'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Workshop() {
  return (
    <section className="bg-ivory px-8 py-[60px] md:py-[120px]">
      {/* Section divider — brass, 80px, centered */}
      <div className="mb-[60px] flex justify-center md:mb-[120px]">
        <div className="h-px w-[80px] bg-brass" />
      </div>

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* Photo — left (top on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1000&q=80"
              alt="Atelier Maison Bleu — outils et bois"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Text — right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="max-w-[520px]"
        >
          <span className="font-raleway text-[11px] font-normal uppercase tracking-sub text-brass">
            Workshop
          </span>

          <h2 className="mt-5 font-cormorant text-[44px] font-normal leading-[1.1] tracking-heading text-charcoal">
            Where form is born
          </h2>

          <p className="mt-8 font-raleway text-[17px] font-light leading-[1.8] text-charcoal-soft">
            Our workshop sits in a converted stone barn in southern France, where
            the light is steady and the air carries the scent of freshly planed
            oak. Here, twelve artisans work with hand tools passed down through
            generations — chisels, planes, spoke shaves — alongside modern
            joinery equipment calibrated to fractions of a millimetre.
          </p>

          <p className="mt-6 font-raleway text-[17px] font-light leading-[1.8] text-charcoal-soft">
            Every piece begins as a rough plank, selected for its grain, its
            weight, its character. From that first selection to the final coat
            of wax, the process is unhurried. We do not have a production line.
            We have a workshop, and the difference is everything.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block font-raleway text-[13px] font-normal text-blue-deep transition-colors duration-[400ms] hover:text-brass"
          >
            Learn more about our process &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

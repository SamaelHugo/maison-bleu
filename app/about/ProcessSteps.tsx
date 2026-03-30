'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Sketch',
    description:
      'Every piece begins as a pencil drawing. We work through proportion, joinery, and material before anything is cut.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
  },
  {
    number: '02',
    title: 'Material',
    description:
      'We select each plank, each slab of stone, each hide of leather by hand. The material shapes the final piece as much as the design.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  },
  {
    number: '03',
    title: 'Assembly',
    description:
      'Mortise and tenon, dovetail, tongue and groove. Traditional joinery that holds without glue or screws where possible.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80',
  },
  {
    number: '04',
    title: 'Finish',
    description:
      'Hand-applied wax, oil, or lacquer. Each surface is polished until it feels right under the hand. This is where patience becomes beauty.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export default function ProcessSteps() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4"
    >
      {steps.map((step) => (
        <motion.div key={step.number} variants={stepVariants} className="relative">
          {/* Large step number — watermark */}
          <span
            className="pointer-events-none absolute -top-2 left-0 font-cormorant text-[72px] font-light leading-none"
            style={{ color: 'var(--blue-light)', opacity: 0.3 }}
          >
            {step.number}
          </span>

          {/* Photo */}
          <div className="relative mt-12 aspect-[4/3] overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Text */}
          <h3 className="mt-5 font-cormorant text-2xl font-normal text-charcoal">
            {step.title}
          </h3>
          <p className="mt-2 font-raleway text-sm font-light leading-[1.7] text-charcoal-soft">
            {step.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

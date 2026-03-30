'use client'

import { motion, type Variants } from 'framer-motion'
import { TreePine, Diamond, Lamp, Coffee } from 'lucide-react'

const materials = [
  {
    icon: TreePine,
    name: 'Oak',
    description: 'French solid oak, air-dried for two years before it enters our workshop. Dense, stable, and rich with character.',
  },
  {
    icon: Diamond,
    name: 'Marble',
    description: 'Natural stone quarried in Burgundy, hand-polished to reveal its unique veining. Cool to the touch, warm in tone.',
  },
  {
    icon: Lamp,
    name: 'Brass',
    description: 'Forged by our metalworkers, each fitting develops a living patina over time. Never lacquered, always honest.',
  },
  {
    icon: Coffee,
    name: 'Ceramic',
    description: 'Shaped and glazed in the kilns of Provence. Every tile carries the trace of the hand that made it.',
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export default function Materials() {
  return (
    <section
      className="px-8 py-[60px] md:py-[120px]"
      style={{ backgroundColor: 'var(--blue-deep)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="font-cormorant text-[52px] font-light tracking-heading text-ivory">
            Materials
          </h2>
          <p className="mt-4 font-raleway text-sm font-light text-blue-light">
            Hand-selected, time-tested
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 md:grid-cols-4 md:gap-0"
        >
          {materials.map((material, i) => {
            const Icon = material.icon
            return (
              <motion.div
                key={material.name}
                variants={itemVariants}
                className={`flex flex-col items-center text-center px-6 ${
                  i < materials.length - 1
                    ? 'md:border-r md:border-blue-muted'
                    : ''
                }`}
              >
                <Icon
                  size={32}
                  strokeWidth={1}
                  style={{ color: 'var(--brass)' }}
                />
                <h3 className="mt-6 font-cormorant text-2xl font-normal text-ivory">
                  {material.name}
                </h3>
                <p className="mt-3 max-w-[240px] font-raleway text-sm font-light leading-relaxed text-blue-light">
                  {material.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

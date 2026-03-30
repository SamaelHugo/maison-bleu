'use client'

import { motion, type Variants } from 'framer-motion'
import { TreePine, Diamond, Lamp, Coffee } from 'lucide-react'

const materials = [
  {
    icon: TreePine,
    name: 'Ch\u00eane',
    description: 'Bois massif francais, seche naturellement pendant deux ans avant d\u2019entrer dans notre atelier.',
  },
  {
    icon: Diamond,
    name: 'Marbre',
    description: 'Pierre naturelle extraite en Bourgogne, polie a la main pour reveler ses veines uniques.',
  },
  {
    icon: Lamp,
    name: 'Laiton',
    description: 'Alliage forge par nos artisans, patine au fil du temps pour un eclat profond et vivant.',
  },
  {
    icon: Coffee,
    name: 'C\u00e9ramique',
    description: 'Faconnee et emaillee dans les ateliers de Provence, chaque piece porte la trace du geste.',
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
            Mat&eacute;riaux
          </h2>
          <p className="mt-4 font-raleway text-sm font-light text-blue-light">
            S&eacute;lectionn&eacute;s &agrave; la main, &eacute;prouv&eacute;s par le temps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0"
        >
          {materials.map((material, i) => {
            const Icon = material.icon
            return (
              <motion.div
                key={material.name}
                variants={itemVariants}
                className={`flex flex-col items-center text-center ${
                  i < materials.length - 1
                    ? 'md:border-r md:border-ivory/10'
                    : ''
                } px-6`}
              >
                <Icon
                  size={32}
                  strokeWidth={1}
                  style={{ color: 'var(--brass)' }}
                />
                <h3 className="mt-6 font-cormorant text-2xl font-normal text-ivory">
                  {material.name}
                </h3>
                <p className="mt-3 max-w-[200px] font-raleway text-sm font-light leading-relaxed text-blue-light">
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

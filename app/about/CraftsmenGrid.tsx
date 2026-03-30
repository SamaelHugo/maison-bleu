'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'

const craftsmen = [
  {
    name: 'Marc Delacroix',
    role: 'Master Carpenter',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
  },
  {
    name: 'Claire Fontaine',
    role: 'Ceramist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    name: 'Antoine Moreau',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export default function CraftsmenGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3"
    >
      {craftsmen.map((person) => (
        <motion.div key={person.name} variants={cardVariants} className="group text-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover grayscale transition-[filter] duration-700 ease-in-out group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="mt-5 font-cormorant text-2xl font-normal text-charcoal">
            {person.name}
          </h3>
          <p className="mt-1 font-raleway text-xs font-normal uppercase tracking-nav text-stone">
            {person.role}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

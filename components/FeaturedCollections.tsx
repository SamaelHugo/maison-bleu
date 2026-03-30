'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { collections } from '@/lib/mock-data'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export default function FeaturedCollections() {
  return (
    <section className="bg-ivory-dark px-8 py-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="font-cormorant text-[56px] font-light tracking-heading text-charcoal">
            Collections
          </h2>
          <p className="mt-4 font-raleway text-sm font-light text-stone">
            Three directions, one philosophy
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {collections.map((collection) => (
            <motion.div key={collection.id} variants={cardVariants}>
              <Link
                href={`/catalog?category=${collection.slug}`}
                className="group block"
              >
                {/* Photo with hover overlay */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-700 ease-in-out group-hover:bg-charcoal/30">
                    <span className="font-cormorant text-[36px] font-light text-ivory opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                      {collection.name}
                    </span>
                  </div>
                </div>

                {/* Text below photo */}
                <h3 className="mt-5 font-cormorant text-[28px] font-normal text-charcoal">
                  {collection.name}
                </h3>
                <span className="mt-2 inline-block font-raleway text-xs font-normal uppercase tracking-nav text-brass">
                  View collection
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  image: string
}

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="font-cormorant text-[clamp(48px,8vw,96px)] font-light leading-[1.05] tracking-heading text-ivory"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mt-6 font-raleway text-[13px] font-light uppercase tracking-sub"
          style={{ color: '#FFFFFF', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          className="h-10 w-px"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
        />
        <span
          className="font-raleway text-[11px] uppercase tracking-[0.15em]"
          style={{ color: '#FFFFFF', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
        >
          Découvrir
        </span>
      </motion.div>
    </section>
  )
}

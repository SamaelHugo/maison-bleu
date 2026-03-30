'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/lib/store'

const navLinks = [
  { href: '/catalog', label: 'Collections' },
  { href: '/about', label: 'Notre Atelier' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const totalItems = useCartStore((state) => state.totalItems)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-[400ms] ease-in-out"
      style={{
        backgroundColor: scrolled ? 'var(--ivory)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--blue-light)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="font-cormorant text-xl font-semibold tracking-heading"
          style={{ color: scrolled ? 'var(--charcoal)' : 'var(--ivory)' }}
        >
          MAISON BLEU
        </Link>

        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-raleway text-xs font-normal uppercase tracking-nav transition-colors duration-[400ms]"
              style={{ color: scrolled ? 'var(--charcoal)' : 'var(--ivory)' }}
            >
              {link.label}
            </Link>
          ))}

          <button className="relative" aria-label="Panier">
            <ShoppingBag
              size={20}
              strokeWidth={1.5}
              style={{ color: scrolled ? 'var(--charcoal)' : 'var(--ivory)' }}
              className="transition-colors duration-[400ms]"
            />
            {totalItems() > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brass font-raleway text-[10px] text-ivory">
                {totalItems()}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

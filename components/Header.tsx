'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store'

const navLinks = [
  { href: '/catalog', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const totalItems = useCartStore((state) => state.totalItems)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const textColor = scrolled ? 'var(--charcoal)' : 'var(--ivory)'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-in-out"
        style={{
          backgroundColor: scrolled ? 'var(--ivory)' : 'transparent',
          borderBottom: '1px solid',
          borderBottomColor: scrolled ? 'var(--blue-light)' : 'transparent',
        }}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          {/* Logo — left */}
          <Link
            href="/"
            className="font-cormorant text-xl font-semibold tracking-heading"
            style={{ color: textColor }}
          >
            MAISON BLEU
          </Link>

          {/* Nav — centered (hidden on mobile) */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-raleway text-xs font-normal uppercase tracking-nav transition-colors duration-[400ms]"
                style={{ color: textColor }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — search + cart + mobile hamburger */}
          <div className="flex items-center gap-6">
            <button className="hidden md:block" aria-label="Rechercher">
              <Search
                size={18}
                strokeWidth={1.5}
                style={{ color: textColor }}
                className="transition-colors duration-[400ms]"
              />
            </button>

            <button className="relative" aria-label="Panier">
              <ShoppingBag
                size={18}
                strokeWidth={1.5}
                style={{ color: textColor }}
                className="transition-colors duration-[400ms]"
              />
              {totalItems() > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brass font-raleway text-[10px] text-ivory">
                  {totalItems()}
                </span>
              )}
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.5} style={{ color: 'var(--charcoal)' }} />
              ) : (
                <Menu size={22} strokeWidth={1.5} style={{ color: textColor }} className="transition-colors duration-[400ms]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-ivory"
          style={{ paddingTop: '80px' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-raleway text-sm font-normal uppercase tracking-nav text-charcoal transition-colors hover:text-blue-deep"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

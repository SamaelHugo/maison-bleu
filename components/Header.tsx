'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import CartDrawer from '@/components/CartDrawer'
import CartToast from '@/components/CartToast'

const navLinks = [
  { href: '/catalog', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartBounce, setCartBounce] = useState(false)
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const prevCountRef = useRef(itemCount)
  const { scrollY } = useScroll()

  // Bounce the cart icon when item count increases
  useEffect(() => {
    if (itemCount > prevCountRef.current) {
      setCartBounce(true)
      const timer = setTimeout(() => setCartBounce(false), 300)
      return () => clearTimeout(timer)
    }
    prevCountRef.current = itemCount
  }, [itemCount])

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

  // On homepage: ivory text over hero, charcoal after scroll
  // On inner pages: always charcoal
  const textColor = !isHome || scrolled ? 'var(--charcoal)' : 'var(--ivory)'
  const headerBg = !isHome || scrolled ? 'var(--ivory)' : 'transparent'
  const borderColor = !isHome || scrolled ? 'var(--blue-light)' : 'transparent'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-in-out"
        style={{
          backgroundColor: headerBg,
          borderBottom: '1px solid',
          borderBottomColor: borderColor,
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

            <button
              className="relative"
              aria-label="Panier"
              onClick={() => setCartOpen(true)}
              style={{
                transform: cartBounce ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <ShoppingBag
                size={18}
                strokeWidth={1.5}
                style={{ color: textColor }}
                className="transition-colors duration-[400ms]"
              />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brass font-raleway text-[10px] text-ivory">
                  {itemCount}
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

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Cart toast */}
      <CartToast />
    </>
  )
}

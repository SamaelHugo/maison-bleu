'use client'

import { useEffect, useState } from 'react'

let listeners: Array<() => void> = []

export function showCartToast() {
  listeners.forEach((fn) => fn())
}

export default function CartToast() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const trigger = () => {
      setMounted(true)
      setVisible(true)
    }
    listeners.push(trigger)
    return () => {
      listeners = listeners.filter((fn) => fn !== trigger)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [visible])

  useEffect(() => {
    if (!mounted || visible) return
    const timer = setTimeout(() => setMounted(false), 300)
    return () => clearTimeout(timer)
  }, [visible, mounted])

  if (!mounted) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-[80] border border-blue-light bg-ivory px-5 py-3 font-raleway text-[13px] font-light text-charcoal shadow-sm transition-opacity duration-300 ease-in-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      Added to cart
    </div>
  )
}

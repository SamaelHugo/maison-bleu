'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {/* Main photo */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`${name} — photo ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative aspect-square w-20 shrink-0 overflow-hidden transition-opacity duration-[400ms] ${
                i === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
              aria-label={`View photo ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} — thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
              {i === activeIndex && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-brass" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Mobile swipe hint */}
      <div className="mt-4 flex justify-center gap-1.5 md:hidden">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1 rounded-full transition-all duration-[400ms] ${
              i === activeIndex ? 'w-5 bg-brass' : 'w-1 bg-stone/40'
            }`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

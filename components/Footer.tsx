import Link from 'next/link'

const catalogLinks = [
  { href: '/catalog?category=cuisine', label: 'Kitchens' },
  { href: '/catalog?category=salle-a-manger', label: 'Dining' },
  { href: '/catalog?category=cabinets', label: 'Studies' },
  { href: '/catalog', label: 'All Collections' },
]

const brandLinks = [
  { href: '/about', label: 'About' },
  { href: '/about#atelier', label: 'Workshop' },
  { href: '/#materials', label: 'Materials' },
  { href: '/press', label: 'Press' },
]

function InstagramIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PinterestIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="17" x2="12" y2="22" />
      <path d="M8 22l4-5 4 5" />
      <circle cx="12" cy="10" r="8" />
      <path d="M9.5 14.5C8 13 7.5 11 8 9s2-3.5 4-3.5 3.5 1.5 4 3.5-0 4-1.5 5.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-8 pb-10 pt-20">
        {/* Top — 4 columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="font-cormorant text-lg font-semibold tracking-heading text-ivory"
            >
              MAISON BLEU
            </Link>
            <p className="mt-5 max-w-[260px] font-raleway text-[13px] font-light leading-relaxed text-stone">
              French furniture atelier. Handcrafted kitchens, dining rooms,
              and interior collections built to outlast generations.
            </p>
          </div>

          {/* Column 2 — Catalog */}
          <div>
            <h4 className="mb-6 font-raleway text-[11px] font-normal uppercase tracking-nav text-brass">
              Catalog
            </h4>
            <ul className="space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-raleway text-[13px] font-light text-stone transition-colors duration-[400ms] hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Brand */}
          <div>
            <h4 className="mb-6 font-raleway text-[11px] font-normal uppercase tracking-nav text-brass">
              Brand
            </h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-raleway text-[13px] font-light text-stone transition-colors duration-[400ms] hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="mb-6 font-raleway text-[11px] font-normal uppercase tracking-nav text-brass">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="font-raleway text-[13px] font-light leading-relaxed text-stone">
                12 Rue du Faubourg Saint-Antoine
                <br />
                75012 Paris, France
              </li>
              <li>
                <a
                  href="tel:+33143461200"
                  className="font-raleway text-[13px] font-light text-stone transition-colors duration-[400ms] hover:text-ivory"
                >
                  +33 1 43 46 12 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@maisonbleu.fr"
                  className="font-raleway text-[13px] font-light text-stone transition-colors duration-[400ms] hover:text-ivory"
                >
                  contact@maisonbleu.fr
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-raleway text-[13px] font-light text-stone transition-colors duration-[400ms] hover:text-ivory"
                >
                  Book consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-charcoal-soft" />

        {/* Bottom — copyright + social */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-raleway text-[11px] font-light text-stone">
            &copy; 2025 Maison Bleu. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone transition-colors duration-[400ms] hover:text-brass"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-stone transition-colors duration-[400ms] hover:text-brass"
            >
              <PinterestIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

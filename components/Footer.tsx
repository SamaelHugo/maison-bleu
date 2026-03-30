import Link from 'next/link'

const footerLinks = [
  { href: '/catalog', label: 'Collections' },
  { href: '/about', label: 'Notre Atelier' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-8 py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="font-cormorant text-xl font-semibold tracking-heading">
              MAISON BLEU
            </Link>
            <p className="mt-4 max-w-xs font-raleway text-sm font-light leading-relaxed text-stone">
              Mobilier artisanal francais. Cuisines, salles a manger, collections interieures.
            </p>
          </div>

          <nav className="flex gap-10">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-raleway text-xs font-normal uppercase tracking-nav text-ivory transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-right">
            <p className="font-raleway text-xs font-light uppercase tracking-nav text-stone">
              Showroom
            </p>
            <p className="mt-2 font-raleway text-sm font-light text-ivory/80">
              12 Rue du Faubourg Saint-Antoine
            </p>
            <p className="font-raleway text-sm font-light text-ivory/80">
              75012 Paris, France
            </p>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-brass/30" />

        <p className="text-center font-raleway text-[11px] text-stone">
          &copy; {new Date().getFullYear()} Maison Bleu. Tous droits reserves.
        </p>
      </div>
    </footer>
  )
}

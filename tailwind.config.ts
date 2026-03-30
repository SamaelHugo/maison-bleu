import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-deep': 'var(--blue-deep)',
        'blue-muted': 'var(--blue-muted)',
        'blue-light': 'var(--blue-light)',
        ivory: 'var(--ivory)',
        'ivory-dark': 'var(--ivory-dark)',
        stone: 'var(--stone)',
        charcoal: 'var(--charcoal)',
        'charcoal-soft': 'var(--charcoal-soft)',
        brass: 'var(--brass)',
        'brass-light': 'var(--brass-light)',
        'marble-white': 'var(--marble-white)',
        oak: 'var(--oak)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        raleway: ['var(--font-raleway)'],
      },
      letterSpacing: {
        heading: '-0.02em',
        nav: '0.15em',
        button: '0.12em',
        sub: '0.2em',
      },
      maxWidth: {
        text: '680px',
      },
    },
  },
  plugins: [],
}

export default config

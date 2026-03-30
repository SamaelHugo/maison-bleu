# MAISON BLEU — Design System

## Brand
French furniture atelier. Kitchens, dining rooms, interior collections.
Handcrafted, natural materials, heritage of craft.
Tone: calm, confident, no exclamation marks. Like a quiet conversation with a master craftsman in his workshop.

## Aesthetic
Reference: Aesop (aesop.com). Generous whitespace, large photography, minimal elements per screen.
NOT glassmorphism. NOT neon. NOT dark theme. NOT gradients.
This is warm, light, tactile design. The feeling of paper, wood, ceramic.

## Palette (CSS Variables)
```css
:root {
  /* Primary */
  --blue-deep: #2B5A8C;        /* French blue — dominant color */
  --blue-muted: #4A7BAD;       /* Muted blue — hover states, secondary */
  --blue-light: #D6E4EF;       /* Light blue — backgrounds, dividers */
  
  /* Neutrals */
  --ivory: #FAF7F2;            /* Primary background — warm white */
  --ivory-dark: #F0EBE3;       /* Section background — alternating */
  --stone: #B8AFA5;            /* Stone gray — captions, small text */
  --charcoal: #2C2C2C;         /* Primary text */
  --charcoal-soft: #4A4A4A;    /* Secondary text */
  
  /* Accents */
  --brass: #C9A84C;            /* Brass — lines, icons, hover accents */
  --brass-light: #DFC67A;      /* Light brass — decorative */
  --marble-white: #F5F0EC;     /* Marble — product cards */
  --oak: #8B6F47;              /* Oak — anchor elements */
}
```

## Typography
- Headings: `Cormorant Garamond` (serif) — weight 300, 400, 600. Large sizes (48-96px desktop), letter-spacing: -0.02em.
- Subheadings / Navigation: `Raleway` (sans-serif) — weight 300, 400, 500. uppercase, letter-spacing: 0.15em, font-size 12-14px.
- Body text: `Raleway` weight 300-400, size 16-18px, line-height 1.7.
- FORBIDDEN: Inter, Roboto, Arial, Space Grotesk, Poppins, Montserrat, system fonts.

## Component Rules

### Navigation
- Fixed top, transparent background → --ivory on scroll
- Logo: "MAISON BLEU" as text (Cormorant Garamond, 600, 20px)
- Links: Raleway uppercase, 12px, letter-spacing 0.15em
- No hamburger on desktop. Thin 1px --blue-light bottom border
- Cart: small --brass circle badge with count
- Background transition: 0.4s ease

### Hero
- Full viewport height (100vh), background image (object-fit: cover)
- Gentle overlay: linear-gradient(to top, rgba(44,44,44,0.4) 0%, transparent 50%)
- Heading: Cormorant Garamond, 300, 80-96px, --ivory, centered
- Subheading: Raleway uppercase, 13px, letter-spacing 0.2em, --ivory at opacity 0.85
- Scroll indicator at bottom: thin vertical line 40px + small text, Raleway 11px
- Animation: heading fade-in + y 40→0 (duration 1s, delay 0.3s), subheading (delay 0.6s), scroll indicator (delay 1.2s)
- No buttons in hero. Atmosphere only.

### Content Sections
- Alternating backgrounds: --ivory / --ivory-dark
- Padding: 120px vertical (desktop), 60px (mobile)
- Text block max-width: 680px
- Text on one side, photo on the other (alternating left/right per section)
- Section dividers: thin 1px line --blue-light or --brass, max-width 120px, centered

### Catalog / Product Cards
- Grid: 2 or 3 columns, gap 40px
- Cards: no shadows, no border-radius, no borders
- Photo aspect-ratio: square or 4:5, opacity transition on hover
- Name: Cormorant 24px, weight 400
- Price: Raleway 14px, --stone color
- Hover: subtle zoom (scale 1.03, transition 0.6s ease)

### Buttons
- Primary: --blue-deep background, --ivory text, Raleway uppercase 12px, letter-spacing 0.12em, padding 16px 48px, no border
- Hover: --blue-muted background
- Secondary: transparent background, border 1px --charcoal, --charcoal text
- No border-radius (border-radius: 0). Furniture brand — sharp, clean edges.

### Animations
- Framer Motion for scroll reveals
- whileInView, viewport once, threshold 0.2
- All animations: opacity 0→1, y: 30→0, duration 0.8, ease "easeOut"
- Stagger: delayChildren 0.1, staggerChildren 0.15
- Lenis smooth scroll (default settings, lerp: 0.1)
- FORBIDDEN: bounce, spring with high stiffness, any animation < 0.4s duration

### Photography
- Use Unsplash photos: interiors, furniture, workshops
- Tonality: warm natural light, daytime, natural colors
- Do NOT use: studio photos on white background, 3D renders
- Formats: hero — landscape 16:9, catalog — portrait 4:5 or square

### Footer
- Background: --charcoal, text: --ivory
- Minimal: logo, navigation, contacts, social links
- Dividers: --brass thin lines
- Copyright: Raleway 11px, --stone

## Page Structure
1. Home: Hero → Brand Philosophy → Featured Collections (3) → Workshop (photo + text) → Materials → Press/Reviews → Footer
2. Catalog: Filters at top (categories) → Product grid → Pagination
3. Product: Photo gallery → Description + specs + materials → Related products
4. About: Full-screen photo → History → Craftsmen → Process → Values
5. Contact: Showroom address + map → Consultation booking form
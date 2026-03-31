# MAISON BLEU

French artisan furniture — brand story + product catalog with admin panel.

![Next.js](https://img.shields.io/badge/Next.js_14-000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=fff)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=fff)
![TinaCMS](https://img.shields.io/badge/TinaCMS-EC4815?logo=tina&logoColor=fff)

🔗 **Live:** [maison-bleu-one.vercel.app](https://maison-bleu-one.vercel.app)

---

## Overview

Premium furniture brand website inspired by Aesop's aesthetic. Warm ivory palette, French blue accents, brass details, elegant serif typography. Content-managed through TinaCMS.

## Features

- **Brand story** — philosophy, workshop, materials sections with scroll reveal animations
- **Product catalog** — filterable grid with category tabs and hover effects
- **Product pages** — photo gallery, specs, materials, add to cart
- **Cart** — real-time updates via Zustand, toast notifications
- **Smooth scroll** — Lenis integration for premium feel
- **Admin panel** — TinaCMS at `/admin` for content editing
- **Responsive** — desktop + mobile

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion + Lenis |
| State | Zustand |
| CMS | TinaCMS |
| Deploy | Vercel |

## Design System

| Element | Choice |
|---------|--------|
| Headings | Cormorant Garamond (serif) |
| Body / Nav | Raleway (sans-serif) |
| Primary | French Blue `#2B5A8C` |
| Background | Ivory `#FAF7F2` |
| Accent | Brass `#C9A84C` |
| Text | Charcoal `#2C2C2C` |

## Run Locally
```bash
git clone https://github.com/SamaelHugo/maison-bleu.git
cd maison-bleu
npm install
npm run tina     # starts Next.js + TinaCMS admin
```

Open [localhost:3000](http://localhost:3000) — site
Open [localhost:3000/admin](http://localhost:3000/admin) — CMS

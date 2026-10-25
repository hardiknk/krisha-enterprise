# Krisha Enterprises - Official Static Website

A polished, responsive, mobile-first static website built for **Krisha Enterprises**, a neighborhood service business based in Mundra - Kutch, Gujarat.

## Business Profile

- **Business Name:** Krisha Enterprises
- **Tagline:** Fast • Secure • Trusted Service
- **Phone / WhatsApp:** +91 7600468552
- **Address:** Baroi Road, Adeshvar Complex, Near Mahalaxmi Mall, Opposite Sabri Hotel, Mundra - Kutch
- **Core Services:**
  1. Credit Card Bill Payment
  2. Flight, Train, and Bus Booking
  3. All Types of Recharge
  4. PF-Related Services

---

## Technical Highlights

- **Framework:** Next.js 16 (App Router) & React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom brand tokens (Navy `#0c1c38`, Red `#dc2626`, Amber `#facc15`, Crisp White)
- **Icons:** Lucide React
- **Static Export Architecture:**
  - Configured with `output: 'export'` in `next.config.ts`.
  - Zero server dependencies, databases, or backend APIs.
  - Generates standalone static files directly into the `out/` directory.
  - Image optimization configured with `unoptimized: true` for full compatibility with all static hosts (Cloudflare Pages, GitHub Pages, Netlify, Vercel, AWS S3, Apache, Nginx).
- **SEO & Structured Data:**
  - Semantic HTML5 with complete `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`, and `<footer>` landmarks.
  - JSON-LD structured data (`LocalBusiness` Schema) for Google Search and Local Pack indexing.
  - OpenGraph & Twitter Card metadata.
  - Pre-generated `robots.txt` and `sitemap.xml`.
- **Accessibility & UX:**
  - Skip to main content keyboard link.
  - W3C WAI-ARIA compliant Carousel (`role="region"`, `aria-roledescription="carousel"`, `role="tablist"`).
  - Native keyboard controls (Arrow Left/Right, Home, End).
  - Touch swipe support on mobile devices.
  - Respects `prefers-reduced-motion` user preferences.
  - WCAG AAA/AA color contrast across all sections.
  - Sticky mobile quick-action bar for one-tap WhatsApp and Call.

---

## Local Development

### Prerequisites

- Node.js 18.18+ or 20+ (tested on Node v22)
- npm 9+ or 10+

### Steps

1. Clone or navigate to the repository directory:
   ```bash
   cd calm-oppenheimer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Production Static Build

To generate the complete, self-contained static website:

```bash
npm run build
```

This compiles TypeScript, executes Next.js static generation, and outputs all static assets into the `out/` folder:

```
out/
├── 404.html
├── _next/
├── favicon.ico
├── icon.svg
├── images/
│   └── krisha-poster.jpeg
├── index.html
├── robots.txt
└── sitemap.xml
```

To preview the built static site locally:

```bash
npx serve out
```
or with Python:
```bash
python3 -m http.server --directory out 8080
```

---

## Code Structure

```
├── app/
│   ├── globals.css         # Global styles, Tailwind imports, reduced motion rules
│   ├── icon.svg            # Custom vector favicon
│   ├── layout.tsx          # Root layout, metadata, OpenGraph, JSON-LD schema
│   └── page.tsx            # Single-page layout connecting all sections
├── components/
│   ├── Header.tsx          # Sticky responsive header with wordmark and navigation
│   ├── Hero.tsx            # Headline, quick contact buttons, and carousel container
│   ├── PosterCarousel.tsx  # Accessible poster-style carousel with 4 slides
│   ├── Services.tsx        # 4 service cards with direct WhatsApp inquiry actions
│   ├── About.tsx           # Business identity, tagline values, poster preview
│   ├── ContactLocation.tsx # Exact address, click-to-call, directions link, map
│   ├── Footer.tsx          # Business details, copyright, back-to-top button
│   ├── FloatingCTA.tsx     # Mobile-first floating bar for WhatsApp & Call
│   └── PosterModal.tsx     # Fullscreen viewer for official business poster
├── data/
│   └── businessInfo.ts     # Central source of truth for business information
├── public/
│   ├── images/
│   │   └── krisha-poster.jpeg  # High-resolution original business poster
│   ├── robots.txt          # SEO crawler instructions
│   └── sitemap.xml         # XML sitemap for search engines
├── next.config.ts          # Static export configuration (output: 'export')
└── tsconfig.json           # TypeScript configuration
```

---

## Static Hosting Deployment

The `out/` folder is ready to deploy on any static hosting platform:

- **Cloudflare Pages:** Set build command to `npm run build` and output directory to `out`.
- **GitHub Pages:** Deploy the `out/` folder via GitHub Actions or the `gh-pages` branch.
- **Vercel / Netlify:** Automatically detects Next.js static export; output folder is `out`.
- **Apache / Nginx / S3:** Upload the contents of `out/` directly to your web root or bucket.

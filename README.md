# Madurai Balaje Tours & Travels — React Site

This is the React + Vite conversion of the original HTML/CSS/JS website, with a few
additions requested during the rebuild.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

The `dist/` folder from `npm run build` is what you upload to your web host.

## What's new vs. the original site

1. **SEO description block** — right under the hero, a heading + subtext block:
   "Top Bus Services near Chennai - Best Bus Booking Today!" plus the AC Sleeper /
   Luxury / Corporate / Wedding / Outstation description. It's also set as the page
   `<meta name="description">` in `index.html`.

2. **Bus Gallery with AC / Non-AC tabs** — `src/components/Gallery.jsx`. Buttons filter
   the fleet gallery to "All Buses", "AC", or "Non-AC", each image tagged with a badge.
   Edit `src/data/gallery.js` to add real photos of your AC and Non-AC buses (just
   drop images into `public/Images/` and update the `src` paths).

3. **"Areas We Serve" local SEO section + pages** — the ~70 Chennai localities you
   listed are in `src/data/locations.js`. On the homepage they render as a link grid
   (`AreasWeServe.jsx`); each one routes to its own page at
   `/ac-bus-rent-in/<area-slug>` (`src/pages/LocationPage.jsx`), which reuses your
   site's design with area-specific heading, copy, and call-to-action.

   Note: your original list linked out to `vmmotorsbustravels.com` — a different
   company's domain. I built these as **your own site's internal pages** instead
   (same design, same phone/WhatsApp), so the SEO value goes to your own domain
   rather than a competitor's. Edit the boilerplate copy in `LocationPage.jsx` per
   area if you want unique content for each page (recommended for real SEO ranking).

## Project structure

```
src/
  components/   Header, Hero, Gallery, Services, Contact, Footer, etc.
  data/         gallery.js, services.js, locations.js — edit content here
  pages/        Home.jsx, LocationPage.jsx
  index.css     full stylesheet (ported from the original style.css)
public/Images/  all site images
```

## Latest update

- **Services split into AC / Non-AC** — `Services.jsx` now renders two grouped
  blocks (`#services-ac`, `#services-non-ac`) plus an "Other Services" block, all
  editable in `src/data/services.js`.
- **Destinations We Cover** gained a 5th card (Rameswaram) and the **Bus Gallery**
  gained 3 more fleet cards (12 total) — see `src/data/gallery.js`. A few reuse
  existing placeholder photos with a new caption; swap in real photos when ready.
- **Hero video** — `Hero.jsx` now plays `/Videos/hero-bus.mp4` on loop, muted,
  with `Images/hero.jpg` as the poster. Drop your own video file at
  `public/Videos/hero-bus.mp4` (see the README inside that folder). If no video
  is present (or it fails to load), the hero automatically falls back to the photo.
- **Local coverage: Chennai + Madurai** — `AreasWeServe.jsx` now has city tabs.
  Chennai keeps all ~70 areas; a new Madurai tab lists 4 areas (Simmakkal,
  Tallakulam, Villapuram, Goripalayam) in `src/data/locations.js`. Each links to
  its own `/ac-bus-rent-in/:slug` page.
- **Contact page redesign** — a prominent "Book Now on WhatsApp" button up top,
  the original Call/WhatsApp/Email quick-cards, and a new booking form (name,
  phone, travel date, trip details) that opens the visitor's email app with
  everything pre-filled — no backend required, it composes a `mailto:` link.
- **Navbar dropdowns** — "Services" now expands to AC Services / Non-AC Services
  / All Services. A new "Bus Types" nav link expands to AC Buses / Non-AC Buses /
  36–50 Seater, each deep-linking into the Gallery with that filter already applied
  (e.g. `/?type=ac#gallery` or `/?seats=45#gallery`).
- **Email removed from the navbar** — the header now shows only the Call button
  (desktop and mobile). Email is still available in the Contact section and footer.

## Notes

- All original interactions were re-implemented in React: sticky header on scroll,
  mobile hamburger menu, smooth-scroll nav, scroll-to-top button, gallery lightbox,
  destination tag toast, and scroll fade-ins are native CSS/React now (no jQuery-style
  DOM scripts needed).
- Routing uses `react-router-dom`. If you deploy to static hosting (Netlify, Vercel,
  GitHub Pages, etc.) make sure to configure a fallback to `index.html` for client-side
  routing to work on direct links like `/ac-bus-rent-in/adyar`.

// src/entry-server.jsx
//
// Build-time-only static-rendering entry point (Critical #1 of the SEO
// audit: prerendered HTML so crawlers/social scrapers see real content,
// headings, and metadata before any JS executes).
//
// This file is never shipped to the browser and never imported by
// src/main.jsx. It is compiled separately by `vite build --ssr` into
// `dist-ssr/`, then run in Node by scripts/prerender.mjs, once per route
// in the sitemap, to render that route's real markup + react-helmet-async
// head tags to a string, which scripts/prerender.mjs stitches into a
// standalone `index.html` for that route under `dist/`.
//
// Client-side navigation/hydration (src/main.jsx: createRoot + BrowserRouter
// + src/routes/AppRoutes.jsx's route-level lazy() code-splitting) is
// completely untouched. createRoot (not hydrateRoot) takes over and
// re-renders the app client-side exactly as it does today — this file only
// adds a parallel, build-time-only rendering path.
//
// Routes here mirror src/routes/AppRoutes.jsx's <Route> paths 1:1, but
// import each page eagerly instead of via lazy(): a build-time static
// render must be synchronous and complete in one pass, so route-level
// Suspense (which is a client-side loading-UX optimization, irrelevant for
// a prerender step that already waits for everything) is intentionally
// not used here. If a route is added/removed/changed in AppRoutes.jsx, the
// same change should be mirrored below so prerendering stays in sync.

import { StaticRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Packages from './pages/Packages'
import Process from './pages/Process'
import Portfolio from './pages/Portfolio'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function StaticRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:category/:service" element={<ServiceDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

/**
 * Render a single route to a complete HTML string.
 *
 * @param {string} url - the route path to render, e.g. "/about"
 * @returns {Promise<{ html: string, helmet: import('react-helmet-async').HelmetServerState }>}
 */
export async function render(url) {
  const { renderToStaticMarkup } = await import('react-dom/server')

  const helmetContext = {}

  const html = renderToStaticMarkup(
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <StaticRoutes />
      </HelmetProvider>
    </StaticRouter>
  )

  return { html, helmet: helmetContext.helmet }
}

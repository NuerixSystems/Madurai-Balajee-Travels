// scripts/prerender.mjs
//
// Critical #1 (SEO audit): build-time prerendering / static HTML generation.
//
// Runs AFTER both the client build (`vite build`, -> dist/) and the
// SSR-bundle build (`vite build --ssr src/entry-server.jsx`, -> dist-ssr/).
// For every route in public/sitemap.xml (the single source of truth for
// "which routes must be prerendered", per the audit requirement), it:
//
//   1. Renders that route with src/entry-server.jsx (real page content +
//      react-helmet-async's per-page title/meta/canonical/OG/Twitter/JSON-LD).
//   2. Takes dist/index.html (the real, Vite-built app shell — same JS/CSS
//      asset tags, same static site-wide Organization/WebSite JSON-LD) as a
//      template.
//   3. Swaps that template's *default* (homepage) title/meta description/
//      robots/canonical/OG/Twitter tags for the route's own, and fills
//      <div id="root"> with the route's real rendered markup.
//   4. Writes the result to dist/<route>/index.html (dist/index.html itself
//      for "/"), so Netlify serves fully-formed HTML for that URL with no
//      JS execution required.
//
// Client-side behavior is unaffected: the shipped bundle still boots via
// createRoot() (see src/main.jsx) exactly as before and takes over the page
// the same way it always has; this script only changes what is served
// before that JS runs.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST_DIR = resolve(ROOT, 'dist')
const DIST_SSR_DIR = resolve(ROOT, 'dist-ssr')
const SITEMAP_PATH = resolve(ROOT, 'public/sitemap.xml')

// ---------------------------------------------------------------------------
// 1. Routes to prerender = every <loc> in the existing sitemap.
// ---------------------------------------------------------------------------
function getRoutesFromSitemap() {
  const xml = readFileSync(SITEMAP_PATH, 'utf-8')
  const locs = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1])

  if (locs.length === 0) {
    throw new Error(`No <loc> entries found in ${SITEMAP_PATH}`)
  }

  return locs.map((loc) => {
    const url = new URL(loc)
    return url.pathname || '/'
  })
}

// ---------------------------------------------------------------------------
// 2. Pull the per-route <title>/<meta>/<link> tags that react-helmet-async
//    (via React 19's built-in metadata hoisting) floats to the very front
//    of the rendered output, ahead of any visible body content.
// ---------------------------------------------------------------------------
function extractHeadTags(html) {
  const leadingTag = /^(<title>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>)/

  let remaining = html
  const headTags = []

  let match = remaining.match(leadingTag)
  while (match) {
    headTags.push(match[1])
    remaining = remaining.slice(match[1].length)
    match = remaining.match(leadingTag)
  }

  return { headTags, bodyHtml: remaining }
}

// ---------------------------------------------------------------------------
// 3. Strip the *default* (homepage) SEO tags out of the built index.html
//    template so they can be replaced with the route's own. Only tags that
//    react-helmet-async's <SEO> component (src/seo/SEO.jsx) actually manages
//    are removed — icons, fonts, keywords, author, language, theme-color,
//    and the site-wide Organization/WebSite JSON-LD stay untouched.
// ---------------------------------------------------------------------------
const STATIC_TAGS_TO_REPLACE = [
  /[ \t]*<title>[\s\S]*?<\/title>\r?\n/,
  /[ \t]*<meta name="title"[^>]*\/>\r?\n/,
  /[ \t]*<meta name="description"[^>]*\/>\r?\n/,
  /[ \t]*<meta name="robots"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:type"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:url"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:site_name"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:title"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:description"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:image" [^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:image:width"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="og:image:height"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="twitter:card"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="twitter:url"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="twitter:title"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="twitter:description"[^>]*\/>\r?\n/,
  /[ \t]*<meta property="twitter:image"[^>]*\/>\r?\n/,
  /[ \t]*<link rel="canonical"[^>]*\/>\r?\n/,
  // These two section comments have no content of their own once the tags
  // above are removed — drop them too so no empty "<!-- Twitter -->" /
  // "<!-- Canonical -->" comments are left behind in the prerendered head.
  /[ \t]*<!-- Twitter -->\r?\n/,
  /[ \t]*<!-- Canonical -->\r?\n/,
]

function stripDefaultSeoTags(template) {
  let out = template
  for (const pattern of STATIC_TAGS_TO_REPLACE) {
    out = out.replace(pattern, '')
  }
  return out
}

function buildRouteHtml(template, { headTags, bodyHtml }) {
  let html = stripDefaultSeoTags(template)

  // Insert the route's own title/meta/canonical/OG/Twitter tags right after
  // the viewport tag — a stable anchor present in every build of index.html.
  const viewportTag = '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
  if (!html.includes(viewportTag)) {
    throw new Error('Could not find the viewport <meta> anchor tag in dist/index.html')
  }
  html = html.replace(viewportTag, `${viewportTag}\n\n  <!-- Page-specific SEO (prerendered) -->\n  ${headTags.join('\n  ')}`)

  // Fill the SPA mount point with the route's real rendered markup.
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Could not find the empty <div id="root"></div> mount point in dist/index.html')
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)

  return html
}

function routeToOutputPath(route) {
  if (route === '/' || route === '') {
    return join(DIST_DIR, 'index.html')
  }
  const cleanRoute = route.replace(/^\/+|\/+$/g, '')
  return join(DIST_DIR, cleanRoute, 'index.html')
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    throw new Error(`dist/ not found at ${DIST_DIR} — run "vite build" first.`)
  }
  const ssrEntryPath = resolve(DIST_SSR_DIR, 'entry-server.js')
  if (!existsSync(ssrEntryPath)) {
    throw new Error(`${ssrEntryPath} not found — run "vite build --ssr src/entry-server.jsx --outDir dist-ssr" first.`)
  }

  const template = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8')
  const routes = getRoutesFromSitemap()
  const { render } = await import(`${ssrEntryPath.replace(/\\/g, '/')}?t=${Date.now()}`)

  console.log(`\nPrerendering ${routes.length} route(s) from public/sitemap.xml...\n`)

  let succeeded = 0
  const failed = []

  for (const route of routes) {
    try {
      const { html } = await render(route)
      const { headTags, bodyHtml } = extractHeadTags(html)

      if (headTags.length === 0) {
        throw new Error('No <title>/<meta>/<link> head tags were rendered for this route')
      }

      const finalHtml = buildRouteHtml(template, { headTags, bodyHtml })
      const outputPath = routeToOutputPath(route)

      mkdirSync(dirname(outputPath), { recursive: true })
      writeFileSync(outputPath, finalHtml)

      succeeded += 1
      console.log(`  ✓ ${route.padEnd(55)} -> ${outputPath.replace(ROOT + '/', '')}`)
    } catch (err) {
      failed.push({ route, error: err })
      console.error(`  ✗ ${route.padEnd(55)} -> FAILED: ${err.message}`)
    }
  }

  console.log(`\nPrerendered ${succeeded}/${routes.length} route(s).`)

  // dist-ssr/ is a build-time-only intermediate artifact (the SSR bundle
  // used to generate the HTML above). It is never read at request time and
  // must not be deployed, so it's removed once prerendering is done.
  rmSync(DIST_SSR_DIR, { recursive: true, force: true })
  console.log('Removed dist-ssr/ (build-time only, not part of the deployable output).\n')

  if (failed.length > 0) {
    console.error(`Prerendering FAILED for ${failed.length} route(s):`)
    for (const { route, error } of failed) {
      console.error(`  - ${route}: ${error.stack || error.message}`)
    }
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('\nPrerendering failed:\n', err)
  process.exit(1)
})

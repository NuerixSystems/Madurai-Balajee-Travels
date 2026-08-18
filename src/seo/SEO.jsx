// src/seo/SEO.jsx
//
// Central, reusable SEO component.
// Every page imports this once and passes its own title/description/path.
// It renders <title>, meta description, canonical link, Open Graph tags
// and Twitter Card tags via react-helmet-async.
//
// No window.history / document.querySelector logic anywhere — Helmet
// manages the <head> declaratively per route.

import { Helmet } from 'react-helmet-async'
import { SITE_URL, SITE_NAME } from '../constants'

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  robots = 'index, follow',
  schema = null,
}) {
  // Build absolute canonical URL from the page's path, e.g. "/about" -> https://nuerixdigital.com/about
  const url = `${SITE_URL}${path === '/' ? '/' : path}`

  // `schema` can be a single JSON-LD object or an array of them, so pages
  // (e.g. a service page needing Service + BreadcrumbList + FAQPage) can
  // attach more than one structured data block at once.
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Page-specific JSON-LD structured data (Service, BreadcrumbList, FAQPage, etc.) */}
      {schemaList.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}

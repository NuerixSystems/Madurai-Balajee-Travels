// src/seo/schema.js
//
// Small, reusable JSON-LD builders for page-specific structured data.
// Site-wide Organization/WebSite schema already lives as static JSON-LD in
// index.html (it doesn't change per route). These helpers cover the
// structured data that DOES vary per page: breadcrumbs, individual
// services, and FAQs that are genuinely visible on that page.

import { SITE_URL, SITE_NAME } from '../constants'

/**
 * BreadcrumbList schema for a page.
 * @param {{ name: string, path: string }[]} crumbs - ordered from Home to current page.
 */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  }
}

/**
 * Service schema for an individual service detail page.
 */
export function serviceSchema({ name, description, path, categoryName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    ...(categoryName ? { category: categoryName } : {}),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
  }
}

/**
 * FAQPage schema. Only use this on pages where the questions/answers are
 * genuinely rendered as visible content on that same page.
 * @param {{ q: string, a: string }[]} faqs
 */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

// src/pages/Portfolio.jsx
import SEO from '../seo/SEO'
import Portfolio from '../components/Portfolio'
import { breadcrumbSchema } from '../seo/schema'

export default function PortfolioPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ])

  return (
    <>
      <SEO
        title="Portfolio | Websites & Apps Built by NuerixDigital"
        description="Browse recent websites, CRM software, and digital products built by NuerixDigital for travel, technology, and business clients."
        path="/portfolio"
        schema={schema}
      />
      <>
        <Portfolio as="h1" />
      </>
    </>
  )
}

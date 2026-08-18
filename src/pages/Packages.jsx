// src/pages/Packages.jsx
import { FaCheck, FaRocket, FaCrown } from 'react-icons/fa'
import SEO from '../seo/SEO'
import Packages from '../components/Packages'
import { breadcrumbSchema } from '../seo/schema'

// Mirrors the icon/color pairing used for the Basic, Standard, and Premium
// plans in components/Packages.jsx, so this guide visually matches the
// pricing cards above it.
const packageGuide = [
  {
    name: 'Basic',
    icon: FaRocket,
    color: '#3b82f6',
    bestFor: 'Best for small businesses just getting started.',
    points: ['5-page website', 'Basic SEO setup', '2 months of support'],
  },
  {
    name: 'Standard',
    icon: FaCrown,
    color: '#8b5cf6',
    bestFor: 'Best for growing businesses that need more.',
    points: ['10-page site + business email', 'Advanced SEO & enquiry form', '6 months of support'],
  },
  {
    name: 'Premium',
    icon: FaCrown,
    color: '#f59e0b',
    bestFor: 'Best for businesses ready to scale up.',
    points: ['15-page site + lead generation form', 'Advanced SEO strategy', '1 year of priority support'],
  },
]

export default function PackagesPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
  ])

  return (
    <>
      <SEO
        title="Website Packages & Pricing | NuerixDigital"
        description="Transparent, affordable website packages from NuerixDigital, from a 5-page business site to fully custom builds, with domain, hosting, and SEO setup included."
        path="/packages"
        schema={schema}
      />
      <>
        <Packages as="h1" />
        <section className="package-guide">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Which Package Is Right for You?</h2>
              <p className="section-description">
                Not sure which plan to choose? Here's a quick guide based on what each package includes.
              </p>
            </div>
            <div className="package-guide__grid">
              {packageGuide.map((pkg) => (
                <div className="package-guide__card" key={pkg.name}>
                  <div className="package-guide__header">
                    <div
                      className="package-guide__icon-wrapper"
                      style={{ background: `${pkg.color}15` }}
                    >
                      <pkg.icon className="package-guide__icon" style={{ color: pkg.color }} />
                    </div>
                    <h3>{pkg.name}</h3>
                  </div>
                  <p className="package-guide__best-for">{pkg.bestFor}</p>
                  <ul className="package-guide__list">
                    {pkg.points.map((point) => (
                      <li key={point}>
                        <span className="package-guide__list-icon">
                          <FaCheck />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  )
}

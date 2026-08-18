// src/components/ServicesCatalog.jsx
//
// Full, categorized directory of every service — shown on the /services
// page. Each category is a click-to-expand accordion row (collapsed by
// default) so scrolling the page doesn't show every sub-service at once —
// the visitor clicks a category to reveal its services as a simple, plain
// list (no card backgrounds).
//
// Clicking a sub-service opens that service's own full, dedicated page
// (/services/:category/:service — see ServiceDetail.jsx), the same way
// the Mega Menu does, landing at the top of the new page.

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import Reveal from './Reveal'
import { serviceCategories } from '../data/servicesData'
import '../styles/ServicesCatalog.css'

export default function ServicesCatalog() {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (slug) => {
    setOpenCategory((prev) => (prev === slug ? null : slug))
  }

  return (
    <section className="section services-catalog">
      <div className="container">
        <Reveal type="fade-up">
          <div className="section-header">
            <span className="eyebrow">Full Service Directory</span>
            <h2 className="section-title">
              Browse Services by <span>Category</span>
            </h2>
            <p className="section-description">
              Click a category to see every service under it, then open the one you need.
            </p>
          </div>
        </Reveal>

        <div className="services-catalog__accordion">
          {serviceCategories.map((category, ci) => {
            const isOpen = openCategory === category.slug
            return (
              <Reveal key={category.slug} type="fade-up" delay={ci * 40}>
                <div className={`services-catalog__row ${isOpen ? 'services-catalog__row--open' : ''}`}>
                  <button
                    type="button"
                    className="services-catalog__row-header"
                    onClick={() => toggleCategory(category.slug)}
                    aria-expanded={isOpen}
                  >
                    <span className="services-catalog__row-label">
                      <category.icon className="services-catalog__row-icon" />
                      <span>
                        <span className="services-catalog__row-title">{category.title}</span>
                        <span className="services-catalog__row-blurb">{category.blurb}</span>
                      </span>
                    </span>
                    <FaChevronDown
                      className={`services-catalog__row-chevron ${isOpen ? 'services-catalog__row-chevron--open' : ''}`}
                    />
                  </button>

                  <div className="services-catalog__row-body">
                    <div className="services-catalog__row-body-inner">
                      {category.items.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/services/${category.slug}/${item.slug}`}
                          className="services-catalog__sub-link"
                        >
                          <item.icon className="services-catalog__sub-link-icon" />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

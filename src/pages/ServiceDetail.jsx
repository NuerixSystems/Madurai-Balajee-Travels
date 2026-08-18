// src/pages/ServiceDetail.jsx
//
// Single reusable, data-driven template for every service page:
//   /services/:category/:service
// e.g. /services/web-development/business-website
//
// Content for each service lives in src/data/servicesData.js — add a new
// entry there and it automatically gets a page, a mega menu entry, and a
// sitemap route, with zero extra component code.

import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  FaCheckCircle,
  FaChevronDown,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import SEO from '../seo/SEO'
import Reveal from '../components/Reveal'
import ServiceVisual from '../components/ServiceVisual'
import { getService } from '../data/servicesData'
import { TEL_LINK, WHATSAPP_LINK } from '../constants'
import { breadcrumbSchema, serviceSchema, faqSchema } from '../seo/schema'
import NotFound from './NotFound'
import '../styles/ServiceDetail.css'

export default function ServiceDetail() {
  const { category, service } = useParams()
  const data = getService(category, service)

  if (!data) {
    return <NotFound />
  }

  const {
    title,
    h1,
    seoTitle,
    metaDescription,
    tagline,
    heroDesc,
    about,
    features,
    whyChooseUs,
    faqs,
    related,
    icon: Icon,
    category: cat,
  } = data

  // `h1` is an optional, keyword-specific override for on-page headings
  // (used on the priority SEO pages); falls back to the short nav `title`
  // for services that don't need a longer, more specific H1.
  const pageHeading = h1 || title
  const path = `/services/${cat.slug}/${data.slug}`

  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: title, path },
    ]),
    serviceSchema({
      name: pageHeading,
      description: metaDescription || heroDesc,
      path,
      categoryName: cat.title,
    }),
    // faqs here are the exact Q&As rendered in the ServiceFAQ section below
    faqSchema(faqs),
  ]

  // Resolve `related` slugs (e.g. "digital-marketing/seo") to full service
  // records for the internal-linking section below.
  const relatedServices = (related || [])
    .map((slugPath) => {
      const [relCategory, relService] = slugPath.split('/')
      return getService(relCategory, relService)
    })
    .filter(Boolean)

  return (
    <>
      <SEO
        title={seoTitle || `${title} | ${cat.title} Services | NuerixDigital`}
        description={metaDescription || heroDesc}
        path={path}
        schema={schema}
      />
      <>
        {/* ---------- Hero ---------- */}
        <section className="section service-hero">
          <div className="container service-hero__inner">
            <Reveal type="fade-right" className="service-hero__content">
              <nav className="service-hero__breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/services">Services</Link>
                <span>/</span>
                <span aria-current="page">{title}</span>
              </nav>

              <span className="eyebrow">
                <Icon className="service-hero__eyebrow-icon" /> {cat.title}
              </span>
              <h1 className="service-hero__title">{pageHeading}</h1>
              <p className="service-hero__tagline">{tagline}</p>
              <p className="service-hero__desc">{heroDesc}</p>

              <div className="service-hero__actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Free Consultation <FaArrowRight />
                </Link>
                <a href={TEL_LINK} className="btn btn-outline">
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </Reveal>

            <Reveal type="fade-left" className="service-hero__visuals" delay={100}>
              <ServiceVisual icon={Icon} variant="a" label={`${pageHeading} illustration`} />
              <ServiceVisual icon={Icon} variant="b" label={`${pageHeading} secondary illustration`} />
            </Reveal>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section className="section service-about">
          <div className="container">
            <Reveal type="fade-up">
              <div className="section-header">
                <span className="eyebrow">About This Service</span>
                <h2 className="section-title">
                  Everything You Need for <span>{pageHeading}</span>
                </h2>
              </div>
            </Reveal>
            <Reveal type="fade-up" delay={80}>
              <p className="service-about__text">{about}</p>
            </Reveal>
          </div>
        </section>

        {/* ---------- Key Features ---------- */}
        <section className="section service-features">
          <div className="container">
            <Reveal type="fade-up">
              <div className="section-header">
                <span className="eyebrow">Key Features</span>
                <h2 className="section-title">
                  What's <span>Included</span>
                </h2>
              </div>
            </Reveal>

            <div className="service-features__grid">
              {features.map((feature, i) => (
                <Reveal key={feature} type="fade-up" delay={i * 60}>
                  <div className="service-feature-card">
                    <FaCheckCircle className="service-feature-card__icon" />
                    <p>{feature}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Why Choose Us ---------- */}
        <section className="section service-why">
          <div className="container">
            <Reveal type="fade-up">
              <div className="section-header">
                <span className="eyebrow">Why Choose Us</span>
                <h2 className="section-title">
                  Why Businesses <span>Trust NuerixDigital</span>
                </h2>
              </div>
            </Reveal>

            <div className="service-why__grid">
              {whyChooseUs.map((point, i) => (
                <Reveal key={point} type="fade-up" delay={i * 70}>
                  <div className="service-why-card">
                    <span className="service-why-card__number">{String(i + 1).padStart(2, '0')}</span>
                    <p>{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Related Services (internal linking) ---------- */}
        {relatedServices.length > 0 && (
          <section className="section service-related">
            <div className="container">
              <Reveal type="fade-up">
                <div className="section-header">
                  <span className="eyebrow">Explore More</span>
                  <h2 className="section-title">
                    Services You Might Also <span>Need</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal type="fade-up" delay={80}>
                <div className="service-related__links">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/services/${rel.category.slug}/${rel.slug}`}
                      className="btn btn-outline"
                    >
                      {rel.title} <FaArrowRight />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ---------- FAQ ---------- */}
        <ServiceFAQ faqs={faqs} />

        {/* ---------- Contact CTA ---------- */}
        <section className="section service-cta">
          <div className="container">
            <Reveal type="fade-up">
              <div className="service-cta__box">
                <h2>
                  Ready to Get Started with <span>{pageHeading}</span>?
                </h2>
                <p>
                  Talk to our team and get a free, no-obligation consultation tailored to your business.
                </p>
                <div className="service-cta__actions">
                  <Link to="/contact" className="btn btn-primary">
                    Get Free Consultation <FaArrowRight />
                  </Link>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </>
    </>
  )
}

function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="section service-faq">
      <div className="container">
        <Reveal type="fade-up">
          <div className="section-header">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
        </Reveal>

        <div className="service-faq__list">
          {faqs.map((item, i) => (
            <Reveal key={item.q} type="fade-up" delay={i * 70}>
              <div className={`service-faq__item ${openIndex === i ? 'service-faq__item--open' : ''}`}>
                <button
                  className="service-faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{item.q}</span>
                  <FaChevronDown
                    className={`service-faq__chevron ${openIndex === i ? 'service-faq__chevron--open' : ''}`}
                  />
                </button>
                <div className="service-faq__answer-wrap">
                  <div className="service-faq__answer-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

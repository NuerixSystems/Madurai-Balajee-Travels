import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import Reveal from './Reveal'
import '../styles/Portfolio.css'

import maduraiBalajeeImg from '../assets/portfolio/madurai-balajee-travels.jpg'
import nuerixDigitalImg from '../assets/portfolio/nuerixdigital.jpg'
import nuerixCrmImg from '../assets/portfolio/nuerixcrm.jpg'

const projects = [
  {
    name: 'Madurai Balajee Travels',
    category: 'Travels',
    image: maduraiBalajeeImg,
    alt: 'Bus Rental and Travel Services ',
    url: 'https://chennaibusrental.in/',
    description:
      'Book affordable bus rentals in Chennai with well-maintained buses and professional drivers for weddings, corporate travel, tours, and airport transfers.',
    servicePath: '/services/web-development/business-website',
    serviceLabel: 'Business Website Development services',
  },
  {
    name: 'NuerixDigital',
    category: 'Web Development & Digital Marketing Company',
    image: nuerixDigitalImg,
    alt: 'Digital Marketing and Website Development Company',
    url: 'https://nuerixdigital.com/',
    description:
      'Building modern websites, custom software, and digital solutions for startups and growing businesses.',
    servicePath: '/services/web-development/corporate-website',
    serviceLabel: 'Corporate Website Development services',
  },
  {
    name: 'NuerixCRM',
    category: 'CRM Software Platform',
    image: nuerixCrmImg,
    alt: 'CRM Software and Business Management Platform',
    url: 'https://nuerix.in/',
    description:
      'A software development company delivering custom web, AI-powered digital marketing, CRM, and scalable business solutions for startups and enterprises.',
    servicePath: '/services/web-development/custom-web-application',
    serviceLabel: 'Custom Web Application Development services',
  },
]

// variant="summary" renders a condensed teaser (used on the homepage):
// project thumbnails with name/category only, without the long
// per-project descriptions and service links, plus a single link to the
// dedicated /portfolio page for the full case studies.
export default function Portfolio({ as: HeadingTag = 'h2', variant = 'full' }) {
  if (variant === 'summary') {
    return (
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <Reveal type="fade-up">
            <div className="section-header">
              <span className="eyebrow">Our Work</span>

              <HeadingTag className="section-title">
                Recent <span>Projects</span>
              </HeadingTag>

              <p className="section-description">
                A few of the websites, apps and CRM platforms we've built for
                travel, technology and business clients — see the full case
                studies on our Portfolio page.
              </p>
            </div>
          </Reveal>

          <div className="portfolio__grid">
            {projects.map((p, i) => (
              <Reveal key={p.name} type="fade-up" delay={(i % 3) * 100}>
                <div className="project-card">
                  <div className="project-card__image">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="project-card__img"
                      loading="lazy"
                    />
                  </div>

                  <div className="project-card__body">
                    <span className="project-card__category">
                      {p.category}
                    </span>

                    <h3>{p.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal type="fade-up" delay={120}>
            <div className="portfolio__home-cta">
              <Link to="/portfolio" className="btn btn-primary">
                View Full Portfolio
                <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <Reveal type="fade-up">
          <div className="section-header">
            <span className="eyebrow">Our Work</span>

            <HeadingTag className="section-title">
              Recent <span>Projects</span>
            </HeadingTag>

            <p className="section-description">
              Crafting digital experiences that make a difference
            </p>
          </div>
        </Reveal>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} type="fade-up" delay={(i % 3) * 100}>
              <div className="project-card">
                <div className="project-card__image">
  <img
    src={p.image}
    alt={p.alt}
    className="project-card__img"
    loading="lazy"
  />

  <div className="project-card__overlay">
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card__view-btn"
    >
      View Project <FaArrowRight />
    </a>
  </div>
</div>

                <div className="project-card__body">
                  <span className="project-card__category">
                    {p.category}
                  </span>

                  <h3>{p.name}</h3>

                  <p className="project-card__description">
                    {p.description}
                  </p>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Explore <FaExternalLinkAlt />
                  </a>

                  {p.servicePath && (
                    <Link to={p.servicePath} className="project-card__link">
                      {p.serviceLabel} <FaArrowRight />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
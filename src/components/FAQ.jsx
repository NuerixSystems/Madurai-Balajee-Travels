import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaQuestionCircle, FaLightbulb } from 'react-icons/fa'
import Reveal from './Reveal'
import '../styles/FAQ.css'

export const faqs = [
  {
    q: 'How many days will it take to build my website?',
    a: 'Most business websites are delivered within 5–10 working days, depending on the package and number of pages. E-commerce and custom React applications may take a little longer — we\'ll give you a clear timeline before starting.',
    icon: FaQuestionCircle
  },
  {
    q: 'Do you provide hosting?',
    a: 'Yes. All our packages include domain and hosting setup, so your website goes live without any extra hassle on your end.',
    icon: FaQuestionCircle
  },
  {
    q: 'Is SEO included?',
    a: 'Yes, basic on-page SEO is included in every package. Standard and Premium plans include more advanced SEO optimization to help you rank higher.',
    icon: FaQuestionCircle
  },
  {
    q: 'Can I update the website later?',
    a: 'Absolutely. We can hand over an easily editable website, or you can reach out to us any time for updates as part of your support period or maintenance plan.',
    icon: FaQuestionCircle
  },
  {
    q: 'How much does a website cost in Chennai?',
    a: 'Website costs depend on the number of pages and features you need. Our packages start from ₹4,999 for a Basic 5-page site and go up to ₹11,999 for a Premium package with advanced SEO and a full year of priority support. Visit our Packages page for the full breakdown, or contact us for a custom quote.',
    icon: FaQuestionCircle
  },
]

// variant="summary" renders a condensed teaser (used on the homepage):
// the question list only (no expandable answers, which are the long
// duplicated text), plus a single link to the dedicated /faq page.
export default function FAQ({ as: HeadingTag = 'h2', variant = 'full' }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  if (variant === 'summary') {
    return (
      <section id="faq" className="section faq">
        <div className="container faq__container">
          <Reveal type="fade-up">
            <div className="section-header">
              <span className="eyebrow">FAQ</span>
              <HeadingTag className="section-title">
                Frequently Asked <span>Questions</span>
              </HeadingTag>
              <p className="section-description">
                Quick answers about timelines, hosting, SEO and pricing —
                see the full FAQ page for details on each question.
              </p>
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={60}>
            <div className="faq__home-list">
              {faqs.map((item) => (
                <Link key={item.q} to="/faq" className="faq__home-item">
                  <span className="faq__home-item-icon">
                    <item.icon />
                  </span>
                  <span className="faq__home-item-text">{item.q}</span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={120}>
            <div className="faq__home-cta">
              <Link to="/faq" className="btn btn-primary">
                View All FAQs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="faq" className="section faq">
      <div className="container faq__container">
        <Reveal type="fade-up">
          <div className="section-header">
            <span className="eyebrow">FAQ</span>
            <HeadingTag className="section-title">
              Frequently Asked <span>Questions</span>
            </HeadingTag>
            <p className="section-description">
              Everything you need to know before getting started
            </p>
          </div>
        </Reveal>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <Reveal key={item.q} type="fade-up" delay={i * 80}>
              <div className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <div className="faq__question-content">
                    <span className="faq__question-icon">
                      <item.icon />
                    </span>
                    <span className="faq__question-text">{item.q}</span>
                  </div>
                  <span className={`faq__chevron-wrapper ${openIndex === i ? 'active' : ''}`}>
                    <FaChevronDown className="faq__chevron" />
                  </span>
                </button>
                <div className="faq__answer-wrap">
                  <div className="faq__answer-content">
                    <p className="faq__answer">{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="faq__footer">
          <FaLightbulb className="faq__footer-icon" />
          <p className="faq__footer-text">
            Still have questions? <Link to="/contact" className="faq__footer-link">Contact us</Link> and we'll help you out.
          </p>
        </div>
      </div>
    </section>
  )
}
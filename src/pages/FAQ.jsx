// src/pages/FAQ.jsx
import SEO from '../seo/SEO'
import FAQ, { faqs } from '../components/FAQ'
import { breadcrumbSchema, faqSchema } from '../seo/schema'

export default function FAQPage() {
  const schema = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
    // Safe to attach FAQPage schema here: these are the exact questions
    // and answers rendered visibly on this page by the <FAQ /> component.
    faqSchema(faqs),
  ]

  return (
    <>
      <SEO
        title="Frequently Asked Questions | NuerixDigital"
        description="Answers to common questions about website timelines, hosting, SEO, pricing, and updates when you work with NuerixDigital."
        path="/faq"
        schema={schema}
      />
      <>
        <FAQ as="h1" />
      </>
    </>
  )
}

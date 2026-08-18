// src/pages/Contact.jsx
import SEO from '../seo/SEO'
import Contact from '../components/Contact'
import { breadcrumbSchema } from '../seo/schema'

export default function ContactPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ])

  return (
    <>
      <SEO
        title="Contact NuerixDigital | Get a Free Consultation"
        description="Get in touch with NuerixDigital for a free consultation on your website, app, or digital marketing project. Call, WhatsApp, or send us a message."
        path="/contact"
        schema={schema}
      />
      <>
        <Contact as="h1" />
      </>
    </>
  )
}

// src/pages/Services.jsx
import SEO from '../seo/SEO'
import Services from '../components/Services'
import ServicesCatalog from '../components/ServicesCatalog'
import { breadcrumbSchema } from '../seo/schema'

export default function ServicesPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ])

  return (
    <>
      <SEO
        title="Our Services | Web Development, Digital Marketing & More"
        description="Explore NuerixDigital's services: web development, mobile app development, digital marketing, social media marketing, and SEO."
        path="/services"
        schema={schema}
      />
      <>
        <Services as="h1" />
        <div className="container">
          <p className="section-description">
            NuerixDigital provides website development, mobile app development,
            digital marketing, and social media marketing services from our
            team in Chennai. Browse the categories below to find the right
            service for your business, from a new business website to
            ongoing SEO and ad campaign management.
          </p>
        </div>
        <ServicesCatalog />
      </>
    </>
  )
}

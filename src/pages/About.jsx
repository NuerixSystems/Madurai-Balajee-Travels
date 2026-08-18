// src/pages/About.jsx
import SEO from '../seo/SEO'
import About from '../components/About'
import { breadcrumbSchema } from '../seo/schema'

export default function AboutPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ])

  return (
    <>
      <SEO
        title="About NuerixDigital | Web Development & Digital Marketing Team"
        description="NuerixDigital is a Chennai-based web development and digital marketing agency building fast, SEO-friendly websites and apps for growing businesses."
        path="/about"
        schema={schema}
      />
      <>
        <About as="h1" />
      </>
    </>
  )
}

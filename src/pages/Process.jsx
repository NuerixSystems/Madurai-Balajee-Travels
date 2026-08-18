// src/pages/Process.jsx
import SEO from '../seo/SEO'
import Process from '../components/Process'
import { breadcrumbSchema } from '../seo/schema'

export default function ProcessPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
  ])

  return (
    <>
      <SEO
        title="Our Website Development Process | NuerixDigital"
        description="See how NuerixDigital takes your project from discovery and design through development, testing, and launch, with a clear timeline at every step."
        path="/process"
        schema={schema}
      />
      <>
        <Process as="h1" />
      </>
    </>
  )
}

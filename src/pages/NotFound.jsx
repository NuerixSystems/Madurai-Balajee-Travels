// src/pages/NotFound.jsx
//
// Note: because this is a client-rendered SPA route (see public/_redirects,
// which rewrites all paths to /index.html with a 200 for client-side
// routing to work), the server always responds 200 even for unknown URLs.
// The <meta name="robots" content="noindex, follow" /> below is what tells
// search engines not to index this page; true HTTP 404 status codes would
// require server/edge-function level routing, which is a hosting-level
// change outside this codebase (see final report).
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | NuerixDigital</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Explore NuerixDigital's services, packages, or contact us for help."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <>
        <section
          className="section"
          style={{ textAlign: 'center', padding: '160px 20px 120px' }}
        >
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist. Here are a few places to go instead:</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/services" className="btn btn-outline">Browse Services</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </section>
      </>
    </>
  )
}

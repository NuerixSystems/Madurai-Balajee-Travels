// src/routes/AppRoutes.jsx
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Layout from '../components/Layout'

// Route-level code splitting: only Home (the most-landed-on page) is
// imported eagerly so it paints as fast as possible. Every other page is
// fetched on demand, which shrinks the initial JS bundle sent on first
// load — no visual or functional change, pages render identically once
// loaded.
import Home from '../pages/Home'
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Packages = lazy(() => import('../pages/Packages'))
const Process = lazy(() => import('../pages/Process'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const FAQ = lazy(() => import('../pages/FAQ'))
const Contact = lazy(() => import('../pages/Contact'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <>
      {/* Always land at the top of the new page when the route changes */}
      <ScrollToTop />

      {/*
        Layout (Navbar/ScrollProgress/Footer/FloatingButtons) lives here,
        outside <Routes>, so it stays mounted across navigations instead
        of unmounting/remounting per page. Previously every page wrapped
        its own content in <Layout>, which meant the Navbar's mount
        animation replayed on every route change — briefly hiding /
        misaligning the top nav bar when tapping a mobile menu link.
      */}
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category/:service" element={<ServiceDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

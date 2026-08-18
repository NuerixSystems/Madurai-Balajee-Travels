// src/components/Layout.jsx
//
// Shared chrome used on every page (Navbar, scroll progress bar, Footer,
// floating WhatsApp/Call buttons). Each page passes its section component
// as children, e.g.:
//
//   <Layout>
//     <About />
//   </Layout>
//
// This keeps every page file small and guarantees the header/footer/
// floating buttons stay identical and unchanged across all routes.

import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollProgress />

      <main>{children}</main>

      <Footer />
      <FloatingButtons />
    </>
  )
}

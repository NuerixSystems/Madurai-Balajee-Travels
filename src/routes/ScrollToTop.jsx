// src/routes/ScrollToTop.jsx
//
// Since each section is now its own real page/route, we no longer smooth
// scroll to an in-page anchor when navigating between sections. Instead,
// like any normal multi-page site, navigating to a new route should land
// the user at the top of that new page — unless the URL includes a
// #hash (e.g. footer links jumping to a specific section on that page),
// in which case we scroll to the matching element instead.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')

      // The target page may still be loading (route-level code
      // splitting), so the element might not exist in the DOM yet.
      // Poll briefly for it instead of scrolling to top immediately.
      let attempts = 0
      const maxAttempts = 50 // ~2s at 40ms intervals

      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < maxAttempts) {
          attempts += 1
          setTimeout(tryScroll, 40)
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      }

      tryScroll()
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    // Preserve Google Analytics pageview tracking now that each section
    // is a real route change instead of an in-page anchor scroll.
    ReactGA.send({ hitType: 'pageview', page: pathname })
  }, [pathname, hash])

  return null
}

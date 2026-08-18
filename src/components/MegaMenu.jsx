// src/components/MegaMenu.jsx
//
// Services Mega Menu.
// Clicking any sub-service (desktop hover panel or mobile drawer) opens
// that service's own full, dedicated page — /services/:category/:service —
// exactly like a normal site navigation (see ServiceDetail.jsx), instead
// of a popup/tooltip. It's a real page load into the same window/tab,
// landing at the top ("full screen"), never a new tab or a small popup.
//
// Desktop: opens on hover over the "Services" nav link, shows all
// categories + sub-services in a grid.
// Mobile: renders as an accordion inside the mobile nav drawer instead of
// a hover dropdown (hover doesn't make sense on touch devices).

import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaChevronDown, FaChevronRight, FaArrowRight } from 'react-icons/fa'
import { serviceCategories } from '../data/servicesData'
import '../styles/MegaMenu.css'

export function DesktopMegaMenu({ closeMenu }) {
  const [open, setOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState(serviceCategories[0]?.slug)
  const closeTimer = useRef(null)
  const navigate = useNavigate()

  const activeCategory =
    serviceCategories.find((c) => c.slug === activeSlug) || serviceCategories[0]

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveSlug(serviceCategories[0]?.slug)
    setOpen(true)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  const goToServices = (e) => {
    e.preventDefault()
    setOpen(false)
    closeMenu?.()
    navigate('/services')
  }

  return (
    <div
      className="mega-menu"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <NavLink
        to="/services"
        onClick={goToServices}
        className={({ isActive }) =>
          `mega-menu__trigger ${isActive ? 'navbar__link--active' : ''}`
        }
        aria-expanded={open}
      >
        Services
        <FaChevronDown className={`mega-menu__caret ${open ? 'mega-menu__caret--open' : ''}`} />
      </NavLink>

      <div className={`mega-menu__panel ${open ? 'mega-menu__panel--open' : ''}`}>
        <div className="mega-menu__flyout">
          {/* Left column — category list */}
          <div className="mega-menu__cat-list">
            {serviceCategories.map((category) => (
              <div
                className={`mega-menu__cat-item ${
                  category.slug === activeSlug ? 'mega-menu__cat-item--active' : ''
                }`}
                key={category.slug}
                onMouseEnter={() => setActiveSlug(category.slug)}
              >
                <NavLink
                  to={`/services`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/services')
                    setOpen(false)
                    closeMenu?.()
                  }}
                  className="mega-menu__cat-row"
                >
                  <span className="mega-menu__cat-row-label">
                    {category.title}
                  </span>
                  <FaChevronRight className="mega-menu__cat-row-arrow" />
                </NavLink>
              </div>
            ))}
          </div>

          {/* Right column — sub-services of the active category */}
          <div className="mega-menu__sub-panel">
            <div className="mega-menu__sub-header">
              <p className="mega-menu__sub-category">{activeCategory.title}</p>
              <p className="mega-menu__sub-description">{activeCategory.blurb}</p>
            </div>
            <ul className="mega-menu__sub-list">
              {activeCategory?.items.map((item) => (
                <li key={item.slug}>
                  <NavLink
                    to={`/services/${activeCategory.slug}/${item.slug}`}
                    onClick={() => {
                      setOpen(false)
                      closeMenu?.()
                    }}
                    className="mega-menu__sub-item"
                  >
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mega-menu__footer">
          <p>Not sure which service fits your business?</p>
          <NavLink to="/contact" className="mega-menu__cta" onClick={() => { setOpen(false); closeMenu?.() }}>
            Get Free Consultation <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export function MobileMegaMenu({ closeMenu, menuOpen }) {
  const [openCategory, setOpenCategory] = useState(null)

  // Every time the mobile drawer opens, all service categories should
  // start collapsed — this component stays mounted between opens/closes,
  // so without this reset a category expanded in a previous session would
  // still be open the next time the menu is opened.
  useEffect(() => {
    if (menuOpen) {
      setOpenCategory(null)
    }
  }, [menuOpen])

  const toggleCategory = (slug) => {
    setOpenCategory((prev) => (prev === slug ? null : slug))
  }

  return (
    <div className="mobile-mega-menu">
      <NavLink
        to="/services"
        end
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? 'navbar__link--active' : undefined)}
      >
        All Services
      </NavLink>

      {serviceCategories.map((category) => (
        <div className="mobile-mega-menu__category" key={category.slug}>
          <button
            type="button"
            className="mobile-mega-menu__category-btn"
            onClick={() => toggleCategory(category.slug)}
            aria-expanded={openCategory === category.slug}
          >
            <span className="mobile-mega-menu__category-label">
              <category.icon />
              {category.title}
            </span>
            <FaChevronDown
              className={`mobile-mega-menu__chevron ${
                openCategory === category.slug ? 'mobile-mega-menu__chevron--open' : ''
              }`}
            />
          </button>

          <div
            className={`mobile-mega-menu__sublist ${
              openCategory === category.slug ? 'mobile-mega-menu__sublist--open' : ''
            }`}
          >
            <div className="mobile-mega-menu__sublist-inner">
              {category.items.map((item) => (
                <NavLink
                  key={item.slug}
                  to={`/services/${category.slug}/${item.slug}`}
                  onClick={closeMenu}
                  className="mobile-mega-menu__sublink"
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

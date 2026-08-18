// src/components/PackagesMenu.jsx
//
// Packages dropdown submenu.
// Clicking "Web Development" or "Digital Marketing" navigates to the
// Packages page and opens that specific tab (/packages?tab=webdev or
// /packages?tab=marketing) — same pattern as the Services mega menu.
//
// Desktop: opens on hover/click over the "Packages" nav link, shows the
// two package categories in a simple dropdown.
// Mobile: renders as an accordion inside the mobile nav drawer.

import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaChevronDown, FaLaptopCode, FaBullhorn } from 'react-icons/fa'
import '../styles/PackagesMenu.css'

const packageCategories = [
  {
    key: 'webdev',
    title: 'Web Development',
    blurb: 'Business websites with hosting, domain & SEO setup included.',
    icon: FaLaptopCode,
  },
  {
    key: 'marketing',
    title: 'Digital Marketing',
    blurb: 'SEO, ads & social media growth packages for every budget.',
    icon: FaBullhorn,
  },
]

export function DesktopPackagesMenu({ closeMenu }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const navigate = useNavigate()

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  const goToPackages = (e) => {
    e.preventDefault()
    setOpen(false)
    closeMenu?.()
    navigate('/packages')
  }

  const goToTab = (key) => {
    setOpen(false)
    closeMenu?.()
    navigate(`/packages?tab=${key}`)
  }

  return (
    <div
      className="packages-menu"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <NavLink
        to="/packages"
        onClick={goToPackages}
        className={({ isActive }) =>
          `packages-menu__trigger ${isActive ? 'navbar__link--active' : ''}`
        }
        aria-expanded={open}
      >
        Packages
        <FaChevronDown className={`packages-menu__caret ${open ? 'packages-menu__caret--open' : ''}`} />
      </NavLink>

      <div className={`packages-menu__panel ${open ? 'packages-menu__panel--open' : ''}`}>
        <ul className="packages-menu__list">
          {packageCategories.map((category) => (
            <li key={category.key}>
              <button
                type="button"
                className="packages-menu__item"
                onClick={() => goToTab(category.key)}
              >
                <span className="packages-menu__item-icon">
                  <category.icon />
                </span>
                <span className="packages-menu__item-text">
                  <span className="packages-menu__item-title">{category.title}</span>
                  <span className="packages-menu__item-blurb">{category.blurb}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function MobilePackagesMenu({ closeMenu, menuOpen }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // Collapse every time the mobile drawer re-opens so a previously
  // expanded state doesn't carry over between sessions.
  useEffect(() => {
    if (menuOpen) {
      setOpen(false)
    }
  }, [menuOpen])

  const toggleOpen = () => setOpen((prev) => !prev)

  const goToTab = (key) => {
    closeMenu?.()
    navigate(`/packages?tab=${key}`)
  }

  return (
    <div className="mobile-packages-menu">
      <button
        type="button"
        className="mobile-packages-menu__btn"
        onClick={toggleOpen}
        aria-expanded={open}
      >
        <span>Packages</span>
        <FaChevronDown
          className={`mobile-packages-menu__chevron ${open ? 'mobile-packages-menu__chevron--open' : ''}`}
        />
      </button>

      <div
        className={`mobile-packages-menu__sublist ${open ? 'mobile-packages-menu__sublist--open' : ''}`}
      >
        <div className="mobile-packages-menu__sublist-inner">
          {packageCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              className="mobile-packages-menu__sublink"
              onClick={() => goToTab(category.key)}
            >
              <category.icon className="mobile-packages-menu__sublink-icon" />
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { TEL_LINK, COMPANY_NAME } from "../constants";
import { DesktopMegaMenu, MobileMegaMenu } from "./MegaMenu";
import { DesktopPackagesMenu, MobilePackagesMenu } from "./PackagesMenu";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const linksBefore = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

const linksAfter = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      
      setScrollProgress(scrolled);
      setScrolled(winScroll > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;

    if (!open || window.innerWidth > 900) {
      body.style.overflow = "";
      root.style.overflow = "";
      return undefined;
    }

    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;

    body.style.overflow = "hidden";
    root.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
    };
  }, [open]);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={logo} alt={`${COMPANY_NAME} logo`} className="navbar__logo-img" width="169" height="40" />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
            {/* Close Button - Inside Menu */}
            <button
              className="navbar__close-btn"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>

            {linksBefore.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navbar__link--active" : undefined
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Services - Mega Menu (hover dropdown on desktop, accordion on mobile) */}
            <div className="navbar__mega-menu-slot navbar__mega-menu-slot--desktop">
              <DesktopMegaMenu closeMenu={closeMenu} />
            </div>
            <div className="navbar__mega-menu-slot navbar__mega-menu-slot--mobile">
              <MobileMegaMenu closeMenu={closeMenu} menuOpen={open} />
            </div>

            {/* Packages - dropdown submenu (hover dropdown on desktop, accordion on mobile) */}
            <div className="navbar__mega-menu-slot navbar__mega-menu-slot--desktop">
              <DesktopPackagesMenu closeMenu={closeMenu} />
            </div>
            <div className="navbar__mega-menu-slot navbar__mega-menu-slot--mobile">
              <MobilePackagesMenu closeMenu={closeMenu} menuOpen={open} />
            </div>

            {linksAfter.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "navbar__link--active" : undefined
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* ONLY ONE Call Now - Mobile */}
            <a
              href={TEL_LINK}
              className="navbar__cta-mobile"
              onClick={closeMenu}
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </nav>

          {/* Desktop Actions - ONLY ONE Call Now */}
          <div className="navbar__actions">
            {/* ONLY ONE Call Now - Desktop */}
            <a href={TEL_LINK} className="navbar__cta">
              <FaPhoneAlt />
              Call Now
            </a>

            <button
              className="navbar__toggle"
              onClick={toggleMenu}
              aria-label={open ? "Close Menu" : "Open Menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="navbar__progress">
          <div 
            className="navbar__progress-bar" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      {/* Overlay */}
      <div 
        className={`navbar__overlay ${open ? "navbar__overlay--active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}
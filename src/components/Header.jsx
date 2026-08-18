import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { id: "home", label: "Home", type: "link" },
  {
    id: "services",
    label: "Fleet & Rates",
    type: "dropdown",
    anchor: "local-tariff",
    children: [
      { label: "Local Tariff", anchor: "local-tariff" },
      {
        label: "Bus Types",
        type: "group",
        items: [
          { label: "AC Buses", anchor: "gallery", search: "type=ac" },
          { label: "Non-AC Buses", anchor: "gallery", search: "type=non-ac" },
          { label: "36 Seater", anchor: "gallery", search: "seats=36" },
          { label: "40 Seater", anchor: "gallery", search: "seats=40" },
          { label: "45 Seater", anchor: "gallery", search: "seats=45" },
          { label: "50 Seater", anchor: "gallery", search: "seats=50" },
        ],
      },
    ],
  },
  { id: "packages", label: "Packages", type: "link" },
  { id: "gallery", label: "Gallery", type: "link" },
  { id: "testimonials", label: "Testimonials", type: "link" },
  { id: "tariff", label: "Tariff", type: "route", to: "/tariff" },
  { id: "contact", label: "Contact", type: "link" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const homeSectionIds = [
    "local-tariff",
    "packages",
    "gallery",
    "why-us",
    "testimonials",
    "contact",
  ];
  const isHome =
    location.pathname === "/" ||
    location.pathname.startsWith("/home") ||
    homeSectionIds.includes(location.pathname.slice(1));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);

      if (isHome) {
        const scrollPos = window.scrollY + 120;
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(section.id);
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".nav-item-dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [openDropdown]);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenGroup(null);
  };

  const goToSection = (e, id) => {
    e.preventDefault();
    closeAll();
    navigate(id === "home" ? "/home" : `/${id}`);
  };

  const toggleDropdown = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => {
      const next = prev === id ? null : id;
      if (next !== prev) setOpenGroup(null);
      return next;
    });
  };

  const toggleGroup = (e, key) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenGroup((prev) => (prev === key ? null : key));
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="header-container">
        <Link to="/" className="brand" onClick={closeAll}>
          <div className="logo-wrap">
            <img src="/Images/bus1.jpg" alt="Chennai Bus Rental Logo" className="logo-image" />
          </div>
          <div className="brand-text">
            <p className="brand-name">Chennai Bus Rental</p>
            <div className="tagline"><span className="highlight">Travel with Pride</span></div>
          </div>
        </Link>

        <button
          className={`hamburger${menuOpen ? " active" : ""}`}
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {menuOpen && (
          <div
            className="nav-overlay"
            onClick={closeAll}
            aria-hidden="true"
          ></div>
        )}

        <nav className={`nav-menu${menuOpen ? " active" : ""}`} id="navMenu" aria-hidden={!menuOpen}>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              if (item.type === "route") {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.to ?? `/${item.id}`}
                      className={`nav-link${location.pathname === (item.to ?? `/${item.id}`) ? " active" : ""}`}
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              if (item.type === "link") {
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`nav-link${isHome && activeId === item.id ? " active" : ""}`}
                      onClick={(e) => goToSection(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              const isOpen = openDropdown === item.id;
              return (
                <li key={item.id} className={`nav-item-dropdown${isOpen ? " open" : ""}`}>
                  <div
                    className="nav-link-row"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${item.label} menu`}
                    onClick={(e) => toggleDropdown(e, item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleDropdown(e, item.id);
                    }}
                  >
                    <span
                      className={`nav-link${isHome && activeId === item.anchor ? " active" : ""}`}
                    >
                      {item.label}
                    </span>
                    <i className="fas fa-chevron-down caret"></i>
                  </div>
                  <ul className="dropdown-panel">
                    {item.children.map((child) => {
                      if (child.type === "group") {
                        const groupKey = `${item.id}:${child.label}`;
                        const groupOpen = openGroup === groupKey;
                        return (
                          <li
                            key={child.label}
                            className={`dropdown-group${groupOpen ? " open" : ""}`}
                          >
                            <div
                              className="dropdown-group-toggle"
                              role="button"
                              tabIndex={0}
                              aria-expanded={groupOpen}
                              onClick={(e) => toggleGroup(e, groupKey)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") toggleGroup(e, groupKey);
                              }}
                            >
                              <span>{child.label}</span>
                              <i className="fas fa-chevron-down caret"></i>
                            </div>
                            <ul className="dropdown-subpanel">
                              {child.items.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    to={{
                                      pathname: `/${sub.anchor}`,
                                      search: sub.search ? `?${sub.search}` : "",
                                    }}
                                    onClick={closeAll}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }

                      return (
                        <li key={child.label}>
                          <Link
                            to={{
                              pathname: `/${child.anchor}`,
                              search: child.search ? `?${child.search}` : "",
                            }}
                            onClick={closeAll}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="nav-contact">
            <a href="tel:+919791135678" className="nav-call-btn">
              <i className="fas fa-phone-alt"></i>
              <span>+91 97911 35678</span>
            </a>
          </div>
        </nav>

        <div className="contact-header">
          <a href="tel:+919791135678" className="call-btn-header">
            <i className="fas fa-phone-alt"></i>
            <span>+91 97911 35678</span>
          </a>
        </div>
      </div>
    </header>
  );
}

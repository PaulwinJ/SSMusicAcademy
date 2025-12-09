import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* DESKTOP / TABLET NAVBAR */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ssma-navbar d-none d-lg-flex ${
          scrolled ? "ssma-navbar-scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex align-items-center ssma-brand"
            to="/"
          >
            <img src="/images/logo.png" alt="SSMA Logo" className="ssma-logo" />
            <span className="brand-text">SS Music Academy</span>
          </Link>

          <div>
            <ul className="navbar-nav ms-auto">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ssma-nav-link ${
                      isActive(item.path) ? "ssma-active" : ""
                    }`}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR (VISIBLE ONLY < LG) */}
      <nav className="navbar fixed-top ssma-navbar d-flex d-lg-none">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand ssma-brand d-flex align-items-center"
          >
            <img
              src="/images/LogoTransparent.png"
              alt="SSMA Logo"
              className="ssma-logo"
            />
            <span className="brand-text">SS Music Academy</span>
          </Link>

          <button
            className="navbar-toggler ssma-toggler"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu d-lg-none ${open ? "open" : ""}`}>
        <ul className="navbar-nav">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <li className="nav-item" key={index}>
              <Link
                className={`nav-link ssma-nav-link ${
                  isActive(item.path) ? "ssma-active" : ""
                }`}
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef<HTMLUListElement>(null);

  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
  });

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      ".ssma-nav-link.ssma-active"
    ) as HTMLElement;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      const reducedWidth = offsetWidth * 0.6;
      const centeredLeft = offsetLeft + (offsetWidth - reducedWidth) / 2;

      setUnderline({
        left: centeredLeft,
        width: reducedWidth,
      });
    }
  }, [location.pathname]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="navbar navbar-expand-lg fixed-top ssma-navbar d-none d-lg-flex">
        <div className="container-fluid">
          <Link
            className="navbar-brand ssma-brand d-flex align-items-center"
            to="/"
          >
            <img src="/images/logo.png" alt="SSMA Logo" className="ssma-logo" />
            <span className="brand-text">SS Music Academy</span>
          </Link>

          <ul className="navbar-nav ms-auto position-relative" ref={navRef}>
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

            {/* 🔥 Animated underline */}
            <span
              className="nav-underline"
              style={{
                transform: `translateX(${underline.left}px)`,
                width: underline.width,
              }}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}

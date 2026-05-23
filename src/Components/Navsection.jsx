import React, { useState, useEffect, useCallback } from "react";
import Hero from "./Hero";

const Navsection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on ESC + lock body scroll when open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);

    // lock/unlock scroll
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <section className="navsection" id="home">
      <header>
        <nav>
          <div className="left-side">
            <h1>DevBen</h1>
          </div>

          <div className="right-side">
            {/* Overlay (click to close) */}
            <div
              className={`overlay ${menuOpen ? "active" : ""}`}
              onClick={closeMenu}
              aria-hidden={!menuOpen}
            />

            {/* Mobile Menu */}
            <ul
              className={`mobile-menu ${menuOpen ? "active" : ""}`}
              aria-hidden={!menuOpen}
            >
              <li
                className="closeMenu"
                onClick={closeMenu}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && closeMenu()}
                style={{ cursor: "pointer" }}
              >
                <img src="/close.svg" alt="Close menu" />
              </li>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact-me</a></li>
            </ul>

            {/* Desktop Menu */}
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact-me</a></li>
              <li
                className="openMenu"
                onClick={openMenu}
                style={{ cursor: "pointer" }}
              >
                <img src="/menu.svg" alt="Open menu" />
              </li>
            </ul>
          </div>
        </nav>
      </header>

    <Hero/>
    </section>
  );
};

export default Navsection;

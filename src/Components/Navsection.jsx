import { useState, useEffect, useCallback, useRef } from "react";
import Hero from "./Hero";
import styles from "./Navbar.module.css";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const Navsection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef(null);
  const closeRef = useRef(null);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // While the mobile menu is open: close on Escape, lock page scroll, move focus into it
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  // Close the mobile menu if the window grows to desktop width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Add a background to the bar once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in view
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav} aria-label="Main">
          <a href="#home" className={styles.logo}>
            DevBen
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            onClick={openMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className={`${styles.overlay} ${menuOpen ? styles.overlayActive : ""}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <ul
            id="primary-menu"
            className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
          >
            <li className={styles.closeItem}>
              <button
                ref={closeRef}
                type="button"
                className={styles.close}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </li>

            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${styles.link} ${active === id ? styles.linkActive : ""}`}
                  aria-current={active === id ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}

            <li className={styles.ctaItem}>
              <a href="#contact" className={styles.cta} onClick={closeMenu}>
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Hero />
    </>
  );
};

export default Navsection;
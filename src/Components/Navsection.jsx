import { useState, useEffect, useCallback } from "react";
import Hero from "./Hero";
import styles from "./Navbar.module.css"

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
    <section className={styles["navsection"]} id="home">
      <header className={styles["navbar"]}>
        <nav>
          <a href="#home">
             <div className={styles["left-side"]}>
            <h1>DevBen</h1>
          </div>
          </a>
          <div className={styles["right-side"]}>
            {/* Overlay (click to close) */}
            <div
            className={`${styles.overlay} ${menuOpen ? styles.overlayActive : ""}`}
            onClick={closeMenu}
          />

            {/* Mobile Menu */}
           <ul
          className={`${styles.mobile_menu} ${menuOpen ? styles.mobileMenuActive : ""}`}
        >
              <li
                className={styles["closeMenu"]}
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
              <li><a href="#contact" onClick={closeMenu}>Get-In-Touch</a></li>
            </ul>

            {/*Menu Menu*/}
            <ul className={styles["nav-links"]}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Get-In-Touch</a></li>
              <li
                className={styles["openMenu"]}
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

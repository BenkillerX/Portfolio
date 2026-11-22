import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    href: "mailto:benedictakhere802@gmail.com",
    label: "Email",
    icon: <FaEnvelope aria-hidden="true" />,
    external: false,
  },
  {
    href: "https://github.com/BenkillerX",
    label: "GitHub",
    icon: <FaGithub aria-hidden="true" />,
    external: true,
  },
  {
    href: "https://x.com/DevBen08",
    label: "X",
    icon: <FaTwitter aria-hidden="true" />,
    external: true,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>DevBen</p>
            <p className={styles.tagline}>
              Full&#8209;stack software engineer building fast, clear web products.
            </p>

            <ul className={styles.socials}>
              {socials.map(({ href, label, icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className={styles.social}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.nav}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} DevBen. All rights reserved.
          </p>
          <a href="#home" className={styles.toTop}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
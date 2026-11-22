import styles from "./Hero.module.css";

const facts = [
  { value: "5+", label: "Projects built" },
  { value: "Next.js", label: "Frontend" },
  { value: "Node & Express", label: "Backend" },
];

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.intro}>
            Benedict Akhere, full&#8209;stack software engineer
          </p>

          <h1 className={styles.headline}>
            I build modern web applications that solve real problems.
          </h1>

          <p className={styles.lead}>
            I create responsive, user&#8209;friendly and scalable products with
            Next.js, Tailwind CSS, Node.js and Firebase.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View projects
            </a>
            <a href="#contact" className={styles.secondary}>
              Get in touch
            </a>
          </div>

          <dl className={styles.facts}>
            {facts.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <div className={styles.photoWrap}>
            <img
              src="/Me.JPG"
              alt="Benedict Akhere"
              className={styles.photo}
            />
          </div>

          <a
            href="https://www.greenspringhome.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
          >
            <span className={styles.badgeRole}>Co&#8209;founder</span>
            <span className={styles.badgeName}>GreenSpringHomes</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <>
      <main className={styles["hero"]}>
  <div className={styles["hero-text"]}>

    <span className={styles["hero-badge"]}>
      Software Engineer
    </span>

    <h1>
      I Build Modern <span>Web Applications</span> That
      Solve Real Problems
    </h1>

    <p>
      I'm Benedict Akhere, a Software engineer passionate about
      creating responsive, user-friendly, and scalable web applications
      using mordern technologies such as Next.js, Tailwind, Firebase, and modern web technologies.
    </p>

    <div className={styles["hero-buttons"]}>
      <a href="#projects" className={`${styles.btn} ${styles["secondary-btn"]}`}>
        View Projects
      </a>

      <a href="#contact" className={`${styles.btn} ${styles["secondary-btn"]}`}>
        Get In Touch
      </a>
    </div>

    <div className={styles["hero-stats"]}>
      <div>
        <h3>5+</h3>
        <span>Projects Built</span>
      </div>

      <div>
        <h3>Next.js</h3>
        <span>Frontend Focus</span>
      </div>

      <div>
        <h3>Firebase</h3>
        <span>Backend Integration</span>
      </div>
    </div>

  </div>

  <div className={styles["hero-image"]}>
    <img
      src="/DevBen.JPG"
      alt="Benedict Akhere"
      className={styles["img_img"]}
    />
  </div>
</main>
    </>
  )
}

export default Hero

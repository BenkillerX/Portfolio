import styles from "./About.module.css";

const skills = [
  { area: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { area: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
  { area: "Mobile", items: ["React Native"] },
];

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About me</h2>

        <div className={styles.grid}>
          <p className={styles.statement}>
            I build web and mobile products that are fast, intuitive and useful
            to the people who use them.
          </p>

          <div className={styles.body}>
            <p>
              I&rsquo;m Benedict Akhere, a full-stack software engineer based in
              Nigeria. I work mostly with React, Next.js, Node.js and MongoDB,
              and reach for React Native when a product needs to live on phones.
            </p>
            <p>
              I&rsquo;m drawn to fintech and marketplace products, where speed
              and clarity decide whether people trust what you&rsquo;ve built.
              I&rsquo;m a co-founder of GreenSpringHomes, a property marketplace,
              and I&rsquo;ve contributed to SignalHaive, a trading signals
              platform.
            </p>
            <p>
              My work ranges from early-stage startups to collaborative
              open&#8209;source projects. Outside of code, I follow emerging
              tech, enjoy brainstorming creative solutions, and like trading
              ideas with other developers.
            </p>

            <dl className={styles.skills}>
              {skills.map(({ area, items }) => (
                <div className={styles.skillRow} key={area}>
                  <dt>{area}</dt>
                  <dd>
                    <ul className={styles.chips}>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <div className={styles.cta}>
              <p>Want to talk about a product, an idea or the Nigerian tech scene?</p>
              <a href="#contact" className={styles.button}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
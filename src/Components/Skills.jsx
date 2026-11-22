import styles from "./Skills.module.css";

const groups = [
  {
    name: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend and data",
    items: ["Node.js", "Express.js", "MongoDB", "Redis", "Firebase", "SupaBase"],
  },
  {
    name: "Testing",
    items: ["Jest"],
  },
];

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Tools and technologies</h2>
          <p className={styles.subtitle}>
            What I use to design, build and test products.
          </p>
        </header>

        <div className={styles.groups}>
          {groups.map(({ name, items }) => (
            <div className={styles.group} key={name}>
              <h3 className={styles.groupName}>{name}</h3>
              <ul className={styles.list}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
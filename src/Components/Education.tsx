import styles from './Education.module.css'

// Edit this data to update the section. Nothing else needs to change.
const education = {
  school: "Federal University Oye-Ekiti",
  degree: "B.Eng. Software Engineering", // change to B.Sc. if that's what your certificate will say
  location: "Oye-Ekiti, Ekiti State, Nigeria",
  duration: 4, // length of the programme in years
  currentLevel: 2, // 2 = 200 Level
  startYear: "2025", // TODO: year you were admitted
  endYear: "2029", // TODO: expected graduation year
  summary:
    "Studying software engineering while building real products in the MERN stack, with a focus on fintech and payments.",
  highlights: [
    // TODO: replace with your own. Examples: courses, projects, clubs, results.
    "Data structures and algorithms",
    "Object-oriented programming",
    "Database systems",
  ],
};

const Education = () => {
  const { school, degree, location, duration, currentLevel, startYear, endYear, summary, highlights } =
    education;
  const levels = Array.from({ length: duration }, (_, i) => (i + 1) * 100);

  return (
    <section id="education" className={styles.section} aria-labelledby="education-title">
      <div className={styles.inner}>
        <h2 id="education-title" className={styles.title}>
          Education
        </h2>

        <article className={styles.card}>
          <header className={styles.head}>
            <div>
              <h3 className={styles.school}>{school}</h3>
              <p className={styles.degree}>{degree}</p>
            </div>
            <p className={styles.meta}>
              <span>{location}</span>
              <span>
                {startYear} to {endYear}
              </span>
            </p>
          </header>

          <p className={styles.summary}>{summary}</p>

          <ol className={styles.track} aria-label={`Progress through the ${duration}-year programme`}>
            {levels.map((level, i) => {
              const n = i + 1;
              const state = n < currentLevel ? "done" : n === currentLevel ? "current" : "upcoming";
              return (
                <li
                  key={level}
                  className={`${styles.step} ${styles[state]}`}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.level}>{level} Level</span>
                  <span className={styles.status}>
                    {state === "done" ? "Completed" : state === "current" ? "In progress" : "Ahead"}
                  </span>
                </li>
              );
            })}
          </ol>

          {highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </section>
  );
};

export default Education;
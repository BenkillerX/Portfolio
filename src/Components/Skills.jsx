const skills = [
   "HTML", "CSS", "JavaScript", "React", "Next.js", "Typescript", "Jest", "Firebase", "Tailwind", "Node.js", "Express.js", "MongoDB", "Redis"
]

const Skills = () => {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title">Tools and Technologies.</h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
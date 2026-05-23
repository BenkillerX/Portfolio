const skills = [
   "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Jest", "Firebase", "Typescript", "Node.js", "Express.js", "MongoDB"
]

const Skills = () => {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title">My Tech Stack</h2>
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
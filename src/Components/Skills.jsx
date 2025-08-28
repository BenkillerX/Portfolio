import React from 'react'


const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Firebase"
]

const Skills = () => {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title" data-aos="fade-up">My Skills</h2>
      <div className="skills-list" data-aos="fade-up">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx} data-aos="fade-up">
            <span data-aos="fade-up">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
import React from 'react'


const projects = [
  {
    title: "Movie App",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80", // Cinema seats
    url: "https://movie-app-react-hooks.vercel.app/"
  },
  {
    title: "Weather App",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80", // Cloudy sky
    url: "https://weather-app-react-phi-six.vercel.app/"
  },
  {
    title: "Calculator",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", // Calculator
    url: "https://react-calculator-app-ashen.vercel.app/"
  },
  {
    title: "Todo List",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // Notepad
    url: "https://react-todo-list-app-omega.vercel.app/"
  },
  {
    title: "Recipe Finder",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Food
    url: "https://react-recipe-app-chi.vercel.app/"
  },
  {
    title: "Quiz App",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Question mark
    url: "https://react-quiz-app-omega.vercel.app/"
  },
  {
    title: "Notes App",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80", // Sticky notes
    url: "https://react-notes-app-omega.vercel.app/"
  },
  {
    title: "Expense Tracker",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80", // Money
    url: "https://react-expense-tracker-app.vercel.app/"
  },
  {
    title: "Portfolio Website",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Laptop/desk
    url: "https://react-portfolio-template-omega.vercel.app/"
  }
]

const Projects = () => {
  return (
    <section className="projects-section" id='projects' >
      <h2 data-aos="fade-up" className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            data-aos="fade-up"
          >
            <img src={project.img} alt={project.title} className="project-img" data-aos="fade-up"/>
            <div className="project-info" data-aos="fade-up">
              <h3 data-aos="fade-up">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
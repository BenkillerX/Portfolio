import { useState } from "react";
import styles from "./Project.module.css"
const projects = [
  {
    title: "School Management System",
    img: "/school-system.png",
    url: "https://school-portal-amber.vercel.app",
    description:
      "A modern school management system built to simplify the daily operations of schools, students, teachers and administrators. The project was created to solve common problems such as manual student record keeping, attendance management, course organization, and communication within schools. The platform features a clean and responsive user interface with pages for student management, academic records, dashboard analytics, and school information. Built using React for the frontend, Firebase for backend services and authentication, and Tailwind for styling, the project focuses on speed, scalability, and user experience. This project also helped improve my understanding of component-based architecture, routing, responsive web design, state management, and integrating frontend applications with cloud databases and authentication systems."
  },
  {
  title: "Booking Web App",
  img: "/booking-app.png",
  url: "https://booking-app-ben-dev27.vercel.app",
  description:
    "A booking platform designed to simplify reservations and appointment management for users and businesses. The project was created to solve common challenges involved in manual booking processes such as scheduling conflicts, poor organization, and inefficient customer management. The platform features a clean and responsive interface where users can browse available services, select booking dates, and manage reservations seamlessly. Built using React for the frontend, Firebase for backend services and authentication, and Tailwind CSS for styling, the application focuses on performance, scalability, and user experience. Developing this project helped strengthen my understanding of dynamic user interfaces, component-based architecture, responsive web design, routing, state management, and integrating cloud databases with real-time functionality."
}, 
];

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (idx) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <section className={styles["projects-section"]} id="projects">
      <h2 className={styles["projects-title"]}>My Past Work</h2>

      <div>
        {projects.map((project, idx) => {
          const isExpanded = expandedCard === idx;

          return (
            <div className={styles["project-card"]} key={idx}>
              
              {/* LEFT SIDE */}
              <div className={styles["project-left"]}>
                <h3>{project.title}</h3>

                <p>
                  {isExpanded
                    ? project.description
                    : `${project.description.substring(0, 180)}...`}
                </p>

                <div className={styles["project-buttons"]}>
                  <button onClick={() => toggleReadMore(idx)}>
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    Visit App
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className={styles["project-right"]}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles["project-img"]}
                />
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
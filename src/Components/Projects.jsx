import { useState } from "react";
import styles from "./Project.module.css";

const projects = [
  {
    title: "GreenSpringHomes",
    category: "Property marketplace",
    img: "/greenspring.png",
    url: "https://www.greenspringhome.com",
    summary:
      "A full-stack property marketplace that simplifies property discovery and connects tenants with property owners and service providers across Nigeria.",
    details:
      "Features include property listings and management, image uploads through Cloudinary, JWT-based authentication, role-based access control, advanced property search, and direct communication between tenants and property owners.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
  },
  {
    title: "SignalHaive",
    category: "Fintech platform",
    img: "/signalhaive.png",
    url: "https://www.signalhaive.com",
    summary:
      "A financial technology platform that delivers trading signals and market insights, so users can find opportunities, track signal performance and make more informed trading decisions.",
    details:
      "Contributing to the platform gave me experience building and maintaining a real-world product, collaborating on technical decisions, and developing software within a growing product team.",
    stack: [],
  },
  {
    title: "School Management System",
    category: "Education",
    img: "/school-system.png",
    url: "https://school-portal-amber.vercel.app",
    summary:
      "A school management system that simplifies daily operations for schools, students, teachers and administrators, from student records and attendance to course organization and result checking.",
    details:
      "The interface is clean and responsive, with pages for student management, academic records, dashboard analytics and school information. The project sharpened my understanding of component-based architecture, routing, responsive design, state management, and connecting frontend apps to cloud databases and authentication.",
    stack: ["React", "Firebase", "Tailwind CSS"],
  },
];

const hostname = (url) => url.replace(/^https?:\/\//, "").replace(/^www\./, "");

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => setExpanded(expanded === idx ? null : idx);

  return (
    <section className={styles.section} id="projects">
      <header className={styles.header}>
        <h2 className={styles.title}>Projects I&rsquo;ve worked on</h2>
        <p className={styles.subtitle}>
          Real products I&rsquo;ve built or contributed to, live and in use.
        </p>
      </header>

      <div className={styles.list}>
        {projects.map((project, idx) => {
          const isOpen = expanded === idx;
          const panelId = `project-details-${idx}`;

          return (
            <article
              className={`${styles.card} ${idx % 2 === 1 ? styles.flip : ""}`}
              key={project.title}
            >
              <div className={styles.content}>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.name}>{project.title}</h3>
                <p className={styles.summary}>{project.summary}</p>

                <div
                  id={panelId}
                  className={`${styles.more} ${isOpen ? styles.moreOpen : ""}`}
                >
                  <div className={styles.moreInner}>
                    <p className={styles.details}>{project.details}</p>
                  </div>
                </div>

                {project.stack.length > 0 && (
                  <ul className={styles.stack} aria-label={`${project.title} tech stack`}>
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.actions}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visit}
                  >
                    Visit app
                    <span className={styles.visitIcon} aria-hidden="true">
                      &#8599;
                    </span>
                  </a>
                  <button
                    type="button"
                    className={styles.toggle}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>

              <a
                className={styles.media}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                tabIndex={-1}
              >
                <div className={styles.frame}>
                  <div className={styles.frameBar} aria-hidden="true">
                    <span className={styles.dots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.urlPill}>{hostname(project.url)}</span>
                  </div>
                  <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className={styles.shot}
                    loading="lazy"
                  />
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
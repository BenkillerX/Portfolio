import { useState } from "react";
import styles from "./Project.module.css";


const projects = [
  {
    title: "GreenSpringHomes",
    category: "Real Estate Marketplace",
    img: "/greenspring.png",
    url: "https://www.greenspringhome.com",
    summary:
      "A full-stack real estate marketplace designed to simplify property discovery and connect tenants with property owners and service providers across Nigeria.",
    details:
      "Features include property listings and management, Cloudinary-powered media uploads, JWT-based authentication, role-based access control, advanced property search, property verification workflows, and direct communication between platform users.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
  },
  {
    title: "SignalHaive",
    category: "Fintech & Trading Platform",
    img: "/signalhaive.png",
    url: "https://www.signalhaive.com",
    summary:
      "A trading platform that delivers forex market signals and insights, helping users discover trading opportunities and track signal performance.",
    details:
      "Contributing to the development and maintenance of a growing real-world product, collaborating on technical decisions, improving application functionality, and working within a product development team.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },
  {
    title: "Upfund",
    category: "Digital Wallet & Fintech",
    img: "/upfund.png",
    url: "https://www.upfunds.com.ng",
    summary:
      "A digital wallet platform that enables users to fund their wallets, manage balances, and monitor financial transactions through an integrated payment system.",
    details:
      "Features include Paystack payment integration, wallet balance management, transaction processing, user authentication, administrative dashboards, and transaction monitoring. Built with a focus on secure payment workflows and reliable financial operations.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Paystack",
      "JWT",
      "Resend",
    ],
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
import { useState } from "react";
import styles from "./Project.module.css"
const projects = [
  {
  title: "ShopHub",
  img: "/e-commerce.png",
  url: "https://shop-hub-mu-hazel.vercel.app/",
  description:
    "An e-commerce platform designed to help businesses showcase and sell products online through a modern, responsive, and user-friendly interface. The application features a dedicated admin dashboard where administrators can efficiently manage products through full CRUD operations (Create, Read, Update, and Delete), making inventory management simple and organized. Customers can browse products, view detailed product information, add items to their cart, and proceed to checkout seamlessly. For order processing, the checkout system redirects customers directly to the business owner's WhatsApp account, enabling quick communication and order confirmation without requiring a payment gateway.Built with React, Firebase, and Tailwind CSS, the platform emphasizes performance, scalability, and mobile responsiveness, ensuring a smooth experience across smartphones, tablets, and desktop devices. Developing this project strengthened my skills in frontend development, state management, authentication, database integration, responsive design, routing, and building real-world business solutions using modern web technologies."
},
{
    title: "A School Management System",
    img: "/school-system.png",
    url: "https://school-portal-amber.vercel.app",
    description:
      "A school management system built to simplify the daily operations of schools, students, teachers and administrators. The project was created to solve common problems such as manual student record keeping, attendance management, course organization, and communication within schools, result checking, ETC. The platform features a clean and responsive user interface with pages for student management, academic records, dashboard analytics, and school information. Built using React for the frontend, Firebase for backend services and authentication, and Tailwind for styling, the project focuses on speed, scalability, and user experience. This project also helped improve my understanding of component-based architecture, routing, responsive web design, state management, and integrating frontend applications with cloud databases and authentication systems."
},
{
  title: "QuickStay",
  img: "/QuickStay.png",
  url: "https://booking-app-two-delta.vercel.app/",
  description:
    "A booking platform designed to simplify reservations and appointment management for users and businesses. The project was created to solve common challenges involved in manual booking processes such as scheduling conflicts, poor organization, and inefficient customer management. The platform features a clean and responsive interface where users can browse available services, select booking dates, and manage reservations seamlessly. Built using React for the frontend, Firebase for backend services and authentication, and Tailwind CSS for styling, the application focuses on performance, scalability, and user experience. Developing this project helped strengthen my understanding of dynamic user interfaces, component-based architecture, responsive web design, routing, state management, and integrating cloud databases with real-time functionality."
}, 

];
// {
//     title: "A School Management System",
//     images: ["/school-system-hero.png", "/school-system-dashboard.png", "/school-system-students.png"],
//     url: "https://school-portal-amber.vercel.app",
//     description: "A school management system built to simplify..."
//   },

{/* <div className={styles["project-right"]}>
  {project.images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`${project.title} screenshot ${i + 1}`}
      className={styles["project-img"]}
    />
  ))}
</div> */}


const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (idx) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <section className={styles["projects-section"]} id="projects">
      <h2 className={styles["projects-title"]}>Projects I&rsquo;ve Worked On</h2>

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
                    className={styles["visit-btn"]}
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
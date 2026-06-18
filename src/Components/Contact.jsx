import { useState } from "react";
import styles from "./Contact.module.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For Gmail, you can use EmailJS or a backend API.
    // Example with mailto (simple, but opens user's email client):
    window.location.href = `mailto:benedictakhere802@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (Reply to: ${formData.email})`;
  };

  return (
    <section className={styles["contact-section"]} id="contact">
      <h2 className={styles["contact-title"]}>Get In Touch</h2>
      <p className={styles["contact-desc"]}>
      I&rsquo;m always open to new projects, collaborations, or just a friendly chat.
      Whether you want to discuss an idea, ask a question, or simply connect,
      feel free to reach out — I&rsquo;ll get back to you as soon as possible.
     </p>
      <p className={styles["contact-note"]}>
    Prefer social? You can also reach me directly on WhatsApp, Twitter, or GitHub.
    </p>

      <div className={styles["contact-links"]}>
        <a
          className={`${styles["contact-btn"]} ${styles["whatsapp"]}`}
          href="https://wa.me/+2348033885711"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          className={`${styles["contact-btn"]} ${styles["twitter"]}`}
          href="https://twitter.com/DevBen08"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      <a
      className={`${styles["contact-btn"]} ${styles["github"]}`}
      href="https://github.com/BenkillerX"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>

      </div>

      <form className={styles["contact-form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles["form-btn"]}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

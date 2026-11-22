import { useState } from "react";
import styles from "./Contact.module.css";

const EMAIL = "benedictakhere802@gmail.com";

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/2348033885711", external: true },
  { label: "X", value: "@DevBen08", href: "https://x.com/DevBen08", external: true },
  { label: "GitHub", value: "BenkillerX", href: "https://github.com/BenkillerX", external: true },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Opens the visitor's email app with the message filled in.
  // For sending straight from the site, swap this for EmailJS or a backend endpoint.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.desc}>
            Have a question, an idea or something you&rsquo;re building? Send me
            a message and I&rsquo;ll get back to you as soon as I can.
          </p>

          <ul className={styles.channels}>
            {channels.map(({ label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.channel}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className={styles.channelLabel}>{label}</span>
                  <span className={styles.channelValue}>{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send message
          </button>

          <p className={styles.note} role="status">
            {sent
              ? `Your email app should open with your message ready to send. If it doesn't, email me at ${EMAIL}.`
              : "This opens your email app with your message ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
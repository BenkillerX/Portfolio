import React from 'react'

const whatsappNumber = "+2348033885711" // Replace with your WhatsApp number (country code + number, no +)

const Contact = () => {
  return (
    <section className="contact-section" id='contact' >
      <h2 className="contact-title" data-aos="fade-up">Contact Me</h2>
      <p className="contact-desc" data-aos="fade-up">
        Want to work with me or have a question? Reach out directly on WhatsApp!
      </p>
      <a
        className="whatsapp-btn"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
      >
        Message Me on WhatsApp
      </a>
    </section>
  )
}

export default Contact
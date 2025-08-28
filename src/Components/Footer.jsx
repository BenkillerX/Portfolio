import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 data-aos="fade-up">DevBen</h3>
        <p data-aos="fade-up">Building modern web experiences with passion and precision.</p>
        <div className="footer-socials" data-aos="fade-up">
          <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
        <p data-aos="fade-up" className="footer-copy">&copy; {new Date().getFullYear()} DevBen. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
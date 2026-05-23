import React from 'react'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>DevBen</h3>
        <p>Building modern web experiences with passion and precision.</p>
        <div className="footer-socials">
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=benedictakhere802@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
>
  <FaEnvelope />
</a>
          <a href="https://github.com/BenkillerX" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} DevBen. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/KenKuffler" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <BsTwitterX className="footer-icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-text">&copy; 2023 Kenneth Kuffler. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
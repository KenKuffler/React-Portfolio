import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="https://github.com/KenKuffler" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/KenKuffler" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/KenKuffler" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
      <p className="footer-text">&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
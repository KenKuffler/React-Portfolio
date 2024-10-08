import React from 'react';
import '../styles/Resume.css';
const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      
      {/* Downloadable Resume */}
      <div className="resume-download">
      <a href="/ken-kuffler-resume.pdf" download>
          Download My Resume
        </a>
      </div>
      
      {/* List of Proficiencies */}
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML, CSS, JavaScript, TypeScript </li>
          <li>React </li>
          <li>Node.js, Express.js</li>
          <li>PostgreSQL, MongoDB, Docker</li>
          <li>Version Control (Git, GitHub)</li>
          <li>RESTful APIs</li>
          <li>Responsive Design & Mobile-First Development</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
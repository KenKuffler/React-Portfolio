import React from 'react';
import '../styles/Portfolio.css';

// Import your project images
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';
import project5Image from '../assets/project5.png';
import project6Image from '../assets/project6.png';

function Portfolio() {
  const projects = [
    {
      title: "Employee Payroll Tracker",
      description: "an application that enables a payroll manager to view and manage employee payroll data. To run, navigate to repository, clone, and preview the index.html via live server. [HTML, CSS, JavaScript]",
      image: project1Image,
      github: "https://github.com/KenKuffler/Employee-Payroll-Tracker",
      demo: ""
    },
    {
      title: "Portfolio-Page",
      description: "Basic Portfolio Page that shows off projects and contact information. To run, navigate to the repository, clone it, and preview the index.html via Live Server[HTML, CSS]",
      image: project2Image,
      github: "https://github.com/KenKuffler/Portfolio-Page",
      demo: ""
    },
    {
      title: "Personal-Blog",
      description: "a two-page website where users will input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. To run, navigate to the repository, clone, and preview the index.html file via live server. [HTML, CSS, JavaScript]",
      image: project3Image,
      github: "https://github.com/KenKuffler/Personal-Blog",
      demo: ""
    },
    {
      title: "Proffessional README Generator",
      description: "This application will help a user generate a README without having to worry about applying proper markdown syntax. To run, navigate to repository and follow README instructions. [JavaScript, Node.JS]",
      image: project4Image,
      github: "https://github.com/KenKuffler/Pro-README-Generator",
      demo: ""
    },
    {
      title: "ShopSpot",
      description: "An e-commerce website for showing prospective clientele a website example for potentially being hired to make a website for those potential clients. [HTML, CSS(partial bootstrap incorporation), JavaScript]",
      image: project5Image,
      github: "https://github.com/KenKuffler/ShopSpot",
      demo: "https://kenkuffler.github.io/ShopSpot/"
    },
    {
      title: "SQL-Employee-Tracker",
      description: "A content management system(CMS) that is a command-line application intended to manage a company's employee database. To run, navigate to repository and follow README instructions. [Node.js, Inquirer, PostgreSQL]",
      image: project6Image,
      github: "https://github.com/KenKuffler/SQL-Employee-Tracker",
      demo: ""
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
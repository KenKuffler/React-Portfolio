import React, { useState } from 'react';
import '../styles/Portfolio.css';
import NoDemoModal from '../components/NoDemoModal';

// Import your project images
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';
import project5Image from '../assets/project5.png';
import project6Image from '../assets/project6.png';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Candidate Search Application",
      description: "An application that utilizes Github API to search for candidates. API keys may be non-functioning... ",
      image: project1Image,
      github: "https://github.com/KenKuffler/Candidate-Search-Tool",
      demo: "https://kenk-candidatesearchtool.netlify.app/"
    },
    {
      title: "Book Search Editor",
      description: "a full-stack web application that allows users to search for books, save favorites, and manage their saved books...",
      image: project2Image,
      github: "https://github.com/KenKuffler/Portfolio-Page",
      demo: "https://book-search-editor-1.onrender.com"
    },
    {
      title: "Personal-Blog",
      description: "A two-page website where users input and view blog posts...",
      image: project3Image,
      github: "https://github.com/KenKuffler/Personal-Blog",
      demo: "" // No demo available
    },
    {
      title: "Professional README Generator",
      description: "A CLI tool to help users generate well-formatted README files...",
      image: project4Image,
      github: "https://github.com/KenKuffler/Pro-README-Generator",
      demo: "" // No demo available
    },
    {
      title: "VetFinder",
      description: "A MERNG Stack Application for the searching of and price comparison of vet offices and their services.",
      image: project5Image,
      github: "https://github.com/KenKuffler/VetFinder",
      demo: "https://vetfinder-ib4b.onrender.com"
    },
    {
      title: "SQL-Employee-Tracker",
      description: "A command-line application for managing company employees...",
      image: project6Image,
      github: "https://github.com/KenKuffler/SQL-Employee-Tracker",
      demo: "" // No demo available
    }
  ];

  // Handle clicking the Live Demo button
  const handleLiveDemoClick = (project) => {
    if (!project.demo) {
      setSelectedProject(project.title);
      setIsModalOpen(true);
    } else {
      window.open(project.demo, "_blank");
    }
  };

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
                  <button onClick={() => handleLiveDemoClick(project)}>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for No Demo */}
      <NoDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectTitle={selectedProject} 
      />
    </div>
  );
}

export default Portfolio;

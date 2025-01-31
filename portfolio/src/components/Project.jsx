import React, { useState } from 'react';
import NoDemoModal from './NoDemoModal';

function Project({ title, image, deployedLink, repoLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoClick = (event) => {
    if (!deployedLink) {
      event.preventDefault(); // Prevent navigation
      setIsModalOpen(true);
    }
  };

  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>
        {deployedLink ? (
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" onClick={handleDemoClick}>
            View Deployed App
          </a>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>View Deployed App</button>
        )}
        {" | "}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>

      {/* Modal Component */}
      <NoDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Project;

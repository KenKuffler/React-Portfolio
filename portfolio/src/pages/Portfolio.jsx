import Project from '../components/project';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Project One"
        image="/path-to-image1.jpg"
        deployedLink="https://project-one-url.com"
        repoLink="https://github.com/yourusername/project-one"
      />
      <Project
        title="Project Two"
        image="/path-to-image2.jpg"
        deployedLink="https://project-two-url.com"
        repoLink="https://github.com/yourusername/project-two"
      />
      {/* Add more Project components as needed */}
    </section>
  );
}

export default Portfolio;
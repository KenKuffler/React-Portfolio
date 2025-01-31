import React from 'react';
import '../styles/About.css';
import myImage from '../assets/me.jpeg';

function About() {
  return (
    <section className="about">
      <div>
        <img id="photo" src={myImage} alt="Kenneth Kuffler" />
      </div>
      <h1>Hi, I'm Kenneth Kuffler</h1>
      <h2>I'm a Full-Stack Web Developer</h2>
      <p>
        I’m a passionate full-stack developer with expertise in building modern, responsive, and dynamic web applications.
        My skill set includes JavaScript, React, Node.js, Express, MongoDB, SQL, GraphQL, a minor dip into Python. 
        As well as experience in using testing frameworks such as Vitest and Jest/Supertest. I enjoy solving complex problems and 
        crafting intuitive user experiences.
      </p>
      <p>
        With experience working on both frontend and backend technologies, I have built scalable applications that provide 
        seamless user interactions. I love staying up-to-date with emerging technologies and constantly learning new ways 
        to improve my workflow.
      </p>
      <p>
        When I'm not coding, you can find me experimenting with my other hobbies such as cooking, hiking, and gaming. 
        My goal is to develop impactful applications that make a difference in people’s lives.
      </p>
    </section>
  );
}

export default About;
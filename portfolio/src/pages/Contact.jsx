import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> <a href="kennethrkuffler@hotmail.com">kennethrkuffler@hotmail.com</a></p>
        <p><strong>Phone:</strong> (920)-392-2089</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/KenKuffler" target="_blank" rel="noopener noreferrer">github.com/KenKuffler</a></p>
      </div>
    </div>
  );
};

export default Contact;

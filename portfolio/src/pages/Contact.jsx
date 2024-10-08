import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import './styles/contact.css';

const Contact = () => {
  return (
    <div>
      <h3 className="h3 tc pa3 pb6">Contact</h3>
      <p className="tc">Want to get in touch?</p>
      <ul className="icons h1">
        <li>
          <a href="mailto:thepawelmisiak@gmail.com" className="fas fa-envelope"></a>
        </li>
        <li>
          <a href="http://github.com/pawelmisiak" className="fab fa-github"></a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/pawel-misiak" className="fab fa-linkedin"></a>
        </li>
        <li>
          <a href="./assets/Resume.pdf" className="fas fa-file"></a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

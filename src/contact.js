import React from 'react';
import './styles/contact.css';

const Contact = () => {
  return (
    <div>
      <h3 className="h3 tc pa3 pb6">Contact</h3>
      <ul className="icons h1">
        <li>
          <a href="mailto:thepawelmisiak@gmail.com" className="fas fa-envelope">
            <br />
          </a>
          <p>email</p>
        </li>
        <li>
          <a href="http://github.com/pawelmisiak" className="fab fa-github">
          <br />
        </a>
        <p>github</p>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/pawel-misiak" className="fab fa-linkedin">
          <br />
          </a>
          <p>linkedin</p>
        </li>
        <li>
          <a href="./assets/Resume.pdf" className="fas fa-file">
            <br />
          </a>
          <p>resume</p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

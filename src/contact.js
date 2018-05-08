import React from 'react';
import './styles/contact.css';

const Contact = () => {
  return (
    <div>
      <h3 className="h3 tc pa3 pb6">Contact</h3>
      <p className="tc">Want to get in touch?</p>
      {/* <h4 className="h4 tc pa1">
        <i className="fas fa-envelope"> thepawelmisiak@gmail.com
        </i>
      </h4> */}
      <ul>
        <li>
          <a href="mailto:thepawelmisiak@gmail.com" className="fas fa-envelope"></a>
        </li>
        <li>
          <a href="http://github.com/pawelmisiak" className="fab fa-github"></a>
        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
      </ul>
    </div>
  );
}

export default Contact;

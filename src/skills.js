import React from 'react';
import './styles/skills.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className="skills_container">
      <h3 className="h3 tc pa3">Skills</h3>
      <ul className="icons_list">
        <li>
          <span class="icon">
            <i className="devicon-git-plain colored"></i>
          </span>
          <br />
          Git
        </li>
        <li>
          <span class="icon">
            <i className="devicon-javascript-plain colored"></i>
          </span>
          <br />
          JavaScript
        </li>
        <li>
          <span class="icon">
            <i className="devicon-atom-original colored"></i>
          </span>
          <br />
          Atom
        </li>
        <li>
          <span class="icon">
            <i className="devicon-bootstrap-plain colored"></i>
          </span>
          <br />
          Bootstrap
        </li>
        <li>
          <span class="icon">
            <i className="devicon-css3-plain colored"></i>
          </span>
          <br />
          CSS3
        </li>
        <li>
          <span class="icon">
            <i className="devicon-github-plain colored"></i>
          </span>
          <br />
          Github
        </li>
        <li>
          <span class="icon ">
            <i className="devicon-heroku-original colored"></i>
          </span>
          <br />
          Heroku
        </li>
        <li>
          <span class="icon">
            <i className="devicon-html5-plain-wordmark colored"></i>
          </span>
          <br />
          HTML5
        </li>
        <br />
        <li>
          <span class="icon">
            <i className="devicon-linux-plain colored"></i>
          </span>
          <br />
          Linux
        </li>
        <li>
          <span class="icon">
            <i className="devicon-mysql-plain colored"></i>
          </span>
          <br />
          MySQL
        </li>
        <li>
          <span class="icon">
            <i className="devicon-nodejs-plain colored"></i>
          </span>
          <br />
          Node.js
        </li>
        <li>
          <span class="icon ">
            <i className="devicon-photoshop-plain colored"></i>
          </span>
          <br />
          Photoshop
        </li>
        <li>
          <span class="icon">
            <i className="devicon-postgresql-plain colored"></i>
          </span>
          <br />
          PostgreSQL
        </li>
        <li>
          <span class="icon">
            <i className="devicon-react-original colored"></i>
          </span>
          <br />
          React
        </li>
        <li>
          <span class="icon">
            <i className="devicon-ruby-plain colored"></i>
          </span>
          <br />
          Ruby
        </li>
        <li>
          <span class="icon">
            <i className="devicon-slack-plain colored"></i>
          </span>
          <br />
          Slack
        </li>
      </ul>
    </div>
  );
}

export default Skills;

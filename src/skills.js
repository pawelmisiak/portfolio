import React from 'react';
import './styles/skills.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className="skills_container">
      <h3 className="h3 tc pa3 pb6">Skills</h3>
      <ul className="icons_list">
        <li>
          <span class="icon devicon-git-plain colored"></span>
          <br />
          Git
        </li>
        <li>
          <span class="icon devicon-javascript-plain colored"></span>
          <br />
          JavaScript
        </li>
        <li>
          <span class="icon devicon-atom-original colored"></span>
          <br />
          Atom
        </li>
        <li>
          <span class="icon devicon-bootstrap-plain colored"></span>
          <br />
          Bootstrap
        </li>
        <li>
          <span class="icon devicon-css3-plain colored"></span>
          <br />
          CSS3
        </li>
        <li>
          <span class="icon devicon-github-plain colored"></span>
          <br />
          Github
        </li>
        <li>
          <span class="icon devicon-heroku-original colored"></span>
          <br />
          Heroku
        </li>
        <li>
          <span class="icon devicon-html5-plain-wordmark colored"></span>
          <br />
          HTML5
        </li>
        <li>
          <span class="icon devicon-linux-plain colored"></span>
          <br />
          Linux
        </li>
        <li>
          <span class="icon devicon-mysql-plain colored"></span>
          <br />
          MySQL
        </li>
        <li>
          <span class="icon devicon-nodejs-plain colored"></span>
          <br />
          Node.js
        </li>
        <li>
          <span class="icon devicon-photoshop-plain colored"></span>
          <br />
          Photoshop
        </li>
        <li>
          <span class="icon devicon-postgresql-plain colored"></span>
          <br />
          PostgreSQL
        </li>
        <li>
          <span class="icon devicon-react-original colored"></span>
          <br />
          React
        </li>
        <li>
          <span class="icon devicon-ruby-plain colored"></span>
          <br />
          Ruby
        </li>
        <li>
          <span class="icon devicon-slack-plain colored"></span>
          <br />
          Slack
        </li>
      </ul>
    </div>
  );
}

export default Skills;

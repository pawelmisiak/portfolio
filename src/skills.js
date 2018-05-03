import React from 'react';
import './styles/skills.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Skills = () => {
  return (
    <div>
      <h3 className="h3 tc pa3 pb6">Skills</h3>
      <ul className="icons">
        <li class="devicon-git-plain colored"></li>
        <li class="devicon-javascript-plain colored"></li>
        <li class="devicon-atom-original colored"></li>
        <li class="devicon-bootstrap-plain colored"></li>
        <li class="devicon-css3-plain colored"></li>
        <li class="devicon-github-plain colored"></li>
        <li class="devicon-heroku-original colored"></li>
        <li class="devicon-html5-plain-wordmark colored"></li>
        <li class="devicon-linux-plain colored"></li>
        <li class="devicon-mysql-plain colored"></li>
        <li class="devicon-nodejs-plain colored"></li>
        <li class="devicon-photoshop-plain colored"></li>
        <li class="devicon-postgresql-plain colored"></li>
        <li class="devicon-react-original colored"></li>
        <li class="devicon-ruby-plain colored"></li>
        <li class="devicon-slack-plain colored"></li>
      </ul>
    </div>
  );
}

export default Skills;

import React from 'react';
import './styles/skills.css';
import {skills} from './skillList';

const Skills = () => {

  const SkillsMapped = skills.map((skill,idx) => {
    return(
      <li key={idx}>
        <span className="icon">
          <i className={skills[idx].iconClassName}></i>
        </span>
        <br />
        {skills[idx].name}
      </li>
    );

  });

  return (
    <div className="skills_container">
      <h3 className="title">Skills</h3>
      <ul className="icons_list">
        {SkillsMapped}
      </ul>
    </div>
  );
}

export default Skills;

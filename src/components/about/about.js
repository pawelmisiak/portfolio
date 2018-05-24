import React from 'react';
import './about.css';


const About = () => {
  return (
    <div >
        <h3 className="title">About</h3>
        <div className="halfs">
          <div className="half">
            <p className="paragraph">
              Programming is like a set of tools that can easily transform into toys and the workplace into a playground.<br/><br/>
              I am an NYC-based software developer with a background in computer science and photography. Both of those skills I find very useful in ideas and design creation.
              I enjoy working in a team and approach problems from unusual perspectives.
            </p>
            <div className="tc">
              <a href="./assets/Resume.pdf" className="btn btn-outline-warning btn-lg">Resume </a>
            </div>
          </div>
          <div className="half">
            <img
              src="./assets/profile.jpg" alt="" className="shadow-3 profilePicture"/>
          </div>
        </div>
    </div>
  );
}

export default About;

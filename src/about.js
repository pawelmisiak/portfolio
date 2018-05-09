import React from 'react';
import './styles/about.css';

const About = () => {
  return (
    <div className="AboutMain">
        <h3 className="h3 tc pa3 pb6">About</h3>
        <div className="ParagAndPict">
          <div>
            <p className="pb3 Paragraph">
              Programming is like a set of tools that can easily transform into toys and the workplace into playground.<br />
              I am a NYC-based softwere developer with a background in computer science and photography. Both of those skills I find very useful in ideas and design creation.
              I enjoy working in a team and approach problems from unusual perspectives.
            </p>
            <a href="./assets/Resume.pdf" type="button" class="btn btn-outline-warning btn-lg">Resume
            </a>
          </div>
          <div>
            <img
              src="./assets/profile.jpg" alt="" className="shadow-3 profilePicture"/>
          </div>
        </div>
    </div>
  );
}

export default About;

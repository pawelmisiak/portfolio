import React from 'react';
import './styles/about.css';
// import Background from './pictures/background.jpg';
//
// const sectionStyle = {
//   width: "100%",
//   height: "auto",
//   backgroundImage: `url(${Background})`,
//   // padding: "1px",
// }

const About = () => {
  return (
    <div className="AboutMain">
    {/* <div style={ sectionStyle } className="AboutMain"> */}
        <h3 className="h3 tc pa3 pb6">About</h3>
        <div className="ParagAndPict">
          <div className="Paragraph">
            <p>
              Programming to me is an everyday challenge. It is a skill set that has to be developed and maintained in order to be the best at it. It can be fun by doing daily programming challenges or it can be productive by building something that can be limited only by our imagination.
            </p>
            <p>
              I have decided to become a developer because I did not want to feel like I am stuck doing the same thing over and over again. Software development allows me to approach problems in various different ways, explore different concepts and what is the most important - work with a team of highly motivated people that are working towards the same goal.
            </p>
            <p>
              I have finished a degree in computer science which allowed me to lay a foundation to learn Web Development. Since I am a self-learner I have decided that learning skills in JavaScript, React, HTML and CSS by doing my own project will teach me the most by exposure. Well then just look into my portfolio and see for yourself
            </p>
          </div>
        {/* <img
          src="https://cdn-images-1.medium.com/max/1600/1*Ma-vB61c-MeBPbJXvUUpGw.gif" alt="" className="movingImg"/> */}
        </div>
    </div>
  );
}

export default About;

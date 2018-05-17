import React from 'react';
import './styles/portfolio.css';
import Tilt from 'react-tilt'

const Portfolio = () => {

  return (
    <div >
      <h3 className="title">Portfolio</h3>
      <div className="Gifs">
        <div className="tile">
          <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
            <img src='./assets/project1.gif' alt=""/>
          </Tilt>
          <div className="linkButtons">
            <a href="https://github.com/pawelmisiak/youtube_like_app" className="btn btn-outline-dark btn-lg">GITHUB </a>
          </div>
          <h5 className="pb3">Youtube-like app</h5>
          <p>Re-creation of youtube.com that dynamically
            searches for relevant videos using youtube's API. The app is build uppon React and Redux what makes it very snappy</p>
        </div>
        <div className="tile">
          <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
            <img src="./assets/project2.gif" title="made at imgflip.com" alt=""/>
          </Tilt>
          <div className="linkButtons">
            <a href="https://face-find.herokuapp.com/" className="btn btn-outline-dark btn-lg">LIVE </a>
            <a href="https://github.com/pawelmisiak/face-detection-frontend" className="btn btn-outline-dark btn-lg">GITHUB </a>
          </div>
          <h5 className="pb3">Face Find</h5>
          <p>The app uses external API, designated database, log in/out functionality and interesting dynamic background</p>
        </div>
        <div className="tile">
          <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
            <img src='./assets/project3.gif' alt=""/>
          </Tilt>
          <div className="linkButtons">
            <a href="https://robo-friend.herokuapp.com/" className="btn btn-outline-dark btn-lg">LIVE </a>
            <a href="https://github.com/pawelmisiak/robots-dynamic-search" className="btn btn-outline-dark btn-lg">GITHUB </a>
          </div>
          <h5 className="pb3">Robo Friends</h5>
          <p>It allows quickly search through the database based on the name</p>
        </div>
    </div>
  </div>
  );
}

export default Portfolio;
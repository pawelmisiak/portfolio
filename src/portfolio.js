import React from 'react';
import './styles/portfolio.css';
import Tilt from 'react-tilt'

const Portfolio = () => {
  const applications ={
    faceRecognition: 'https://face-find.herokuapp.com/',
    roboFriends: 'https://robo-friend.herokuapp.com/'
  }
  return (
    <div >
      <h3 className="h3 tc pa3">Portfolio</h3>
      <div className="Gifs">
      <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
        <img src='https://media.giphy.com/media/8hZri2xwZzxDGZ8bBB/giphy.gif'/>
      </Tilt>
      <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
        <a href="https://face-find.herokuapp.com/"><img src="https://media.giphy.com/media/oHv9d1KM9sSLgKObDL/giphy.gif" title="made at imgflip.com"/></a>
      </Tilt>
      <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
        <a href="https://robo-friend.herokuapp.com/"><img src='https://media.giphy.com/media/TIzgTYtyFmX1fJPObf/giphy.gif'/></a>
      </Tilt>
    </div>
  </div>
  );
}

export default Portfolio;

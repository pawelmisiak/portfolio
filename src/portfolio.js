import React from 'react';
import './styles/portfolio.css';


const Portfolio = () => {
  const applications ={
    faceRecognition: 'https://face-find.herokuapp.com/',
    roboFriends: 'https://robo-friend.herokuapp.com/'
  }
  return (
    <div className="PortfolioMain">
      <h3 className="h3 tc pa3">Portfolio</h3>
      <div className="Gifs">
      <img src='https://media.giphy.com/media/8hZri2xwZzxDGZ8bBB/giphy.gif' className="shadow-1"/>
      <img src='https://media.giphy.com/media/oHv9d1KM9sSLgKObDL/giphy.gif' className="shadow-1"/>
      <img src='https://media.giphy.com/media/TIzgTYtyFmX1fJPObf/giphy.gif' className="shadow-1"/>
    </div>
  </div>
  );
}

export default Portfolio;

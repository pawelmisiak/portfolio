import React from 'react';
import './styles/portfolio.css';
import Tilt from 'react-tilt'
import { Projects } from './portfolioList';

const Portfolio = () => {
  const ProjectsMapped = Projects.map((project, idx) => {
    return(
      <li key={idx} className="tile">
        <Tilt className="Tilt shadow-1" options={{ max : 7, reverse: true }} >
          <img src={Projects[idx].imageSrc} alt=""/>
        </Tilt>
        <div className="linkButtons">
          <a href={Projects[idx].linkLive} className="btn btn-outline-dark btn-lg">LIVE </a>
          <a href={Projects[idx].linkGit} className="btn btn-outline-dark btn-lg">GITHUB </a>
        </div>
        <h5 className="pb3">{Projects[idx].title}</h5>
        <p>{Projects[idx].description}</p>
      </li>
    );
  });

  return (
    <div >
      <h3 className="title">Portfolio</h3>
      <ul className="Gifs">
        {ProjectsMapped}
      </ul>
    </div>
  );
}

export default Portfolio;

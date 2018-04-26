import React from 'react';
import './styles/nav.css';

const Nav = () => {
  return(
    <nav className="navbar navbar-expand navbar-dark">
      <div className="container">
        <a className="navbar-brand " href="#page-top">Pawel Misiak</a>
          <ul className="navbar-nav text-uppercase">
            <li>
              <a className="nav-link" href="#about">About</a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a className="nav-link" href="#team">Skills</a>
            </li>
            <li>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;

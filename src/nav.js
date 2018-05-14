import React from 'react';
import './styles/nav.css';
// provides smooth scrollin when button is pressed
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navigation = () => {
  return(
    <nav className="my-nav navbar fixed-top navbar-expand-lg navbar-dark">
      <AnchorLink className="navbar-brand" href='#top'>
        Pawel Misiak
      </AnchorLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* navbarSupportedContent makes the button to drop down */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <AnchorLink className="nav-link" href='#about'>
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href='#portfolio'>
                Portfolio
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href='#skills'>
                Skills
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href='#contact'>
                Contact
              </AnchorLink>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

import React from 'react';
import './styles/nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Nav = () => {
  return(
    <nav className="navbar navbar-expand navbar-dark">
      <div className="container">
        <AnchorLink className="navbar-brand" href='#top'>
          Pawel Misiak
        </AnchorLink>
          <ul className="navbar-nav">
            <li>
              <AnchorLink className="nav-link" href='#about'>
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="nav-link" href='#portfolio'>
                Portfolio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="nav-link" href='#skills'>
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="nav-link" href='#contact'>
                Contact
              </AnchorLink>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;

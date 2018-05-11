import React from 'react';
import './styles/nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return(
    <nav class="my-nav navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <AnchorLink className="navbar-brand" href='#top'>
        Pawel Misiak
      </AnchorLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
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

export default Navigation;

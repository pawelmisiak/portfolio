import React, { Component } from 'react';
import './styles/App.css';
import Tiles from './tiles';
import Nav from './nav';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Nav-bar f4">
          <Nav />
        </nav>
        <div className="About">
          <About />
        </div>
        <div className="Portfolio">
          <Portfolio />
        </div>
        <div className="Skills">
          <Skills />
        </div>
        <p className="App-footer">
        </p>
      </div>
    );
  }
}

export default App;

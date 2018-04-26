import React, { Component } from 'react';
import './App.css';
import Tiles from './tiles';
import Nav from './nav';
import Welcome from './welcome';
import About from './about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Nav-bar f4">
          <Nav />
        </nav>
        <div className='Welcome'>
          <Welcome />
        </div>
        <div className="About">
          <About />
        </div>
        <p className="App-footer">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

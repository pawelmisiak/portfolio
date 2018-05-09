import React, { Component } from 'react';
import './styles/App.css';
import Nav from './nav';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Contact from './contact';
import ScrollingColorBackground from 'react-scrolling-color-background';

class App extends Component {
  render() {

    return (
      <div className="App">
        <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        />
        {/* <nav className="Nav-bar f4">
          <Nav />
        </nav> */}
        <section
          data-background-color='rgb(162,163,165)'
          className='js-color-stop'>
          <div className="About">
            <About />
          </div>
        </section>
        <section
          data-background-color='rgb(139,212,241)'
          className='js-color-stop'>
          <div className="Portfolio">
            <Portfolio />
          </div>
        </section>
        <section
          data-background-color='rgb(139,224,122)'
          className='js-color-stop'>
          <div className="Skills">
            <Skills />
          </div>
        </section>
        <section
          data-background-color='rgb(241,203,108)'
          className='js-color-stop'>
          <div className="Contact">
            <Contact />
          </div>
        </section>
        <p className="App-footer">
        </p>
      </div>
    );
  }
}

export default App;

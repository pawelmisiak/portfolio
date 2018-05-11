import React, { Component } from 'react';
import './styles/App.css';
import Navigation from './nav';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Contact from './contact';
import ScrollingColorBackground from 'react-scrolling-color-background';
// import { StickyContainer, Sticky } from 'react-sticky';


class App extends Component {
  render() {
    return (
      <div className="App" id="top">

        {/* makes the background change colors while scrolling */}
        <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        />
          <nav className="Nav-bar pa3">
            <Navigation />
          </nav>
          <section
            data-background-color='rgb(162,163,165)'
            className='js-color-stop'>
            <div className="About" id="about">
              <About />
            </div>
          </section>

          <section
            data-background-color='rgb(139,212,241)'
            className='js-color-stop'>
            <div className="Portfolio" id="portfolio">
              <Portfolio />
            </div>
          </section>

          <section
            data-background-color='rgb(139,224,122)'
            className='js-color-stop'>
            <div className="Skills" id="skills">
              <Skills />
            </div>
          </section>

          <section
            data-background-color='rgb(241,203,108)'
            className='js-color-stop'>
            <div className="Contact" id="contact">
              <Contact />
            </div>
            <p className="App-footer"></p>
          </section>
      </div>
    );
  }
}

export default App;

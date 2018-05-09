import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
// import ScrollingColorBackground from '../../src/';
//
// const darkPurpleRgb = 'rgb(101, 45, 172)';
// const ceriseRgb = 'rgb(217, 38, 136)';
// const pumpkinRgb = 'rgb(255, 102, 22)';
// const cornRgb = 'rgb(254, 201, 64)';
// const greenRgb = 'rgb(29, 191, 104)';
// const tealRgb = 'rgb(32, 202, 172)';
// const skyRgb = 'rgb(60, 191, 246)';
// const blueRgb = 'rgb(10, 34, 236)';
// const COLORS = [
//   darkPurpleRgb,
//   ceriseRgb,
//   pumpkinRgb,
//   cornRgb,
//   greenRgb,
//   tealRgb,
//   skyRgb,
//   blueRgb,
// ];

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

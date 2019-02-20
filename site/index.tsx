import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import './assets/css/reset.scss';
import './assets/css/index.scss';
const App = () => (
  <div>
    <Routes />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

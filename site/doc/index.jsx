import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Link} from 'react-router-dom';
import Sidebar from '../lib/Sidebar';
import NavHeader from '../lib/NavHeader';
import Content from '../lib/Content';
import {Helmet} from 'react-helmet';



const App = () => (
  <div className="l-container">
    <Helmet titleTemplate="%s - Yep-React"/>

    <div className="l-main">

      <NavHeader />
      <Sidebar />
      <Content />
    </div>

  </div>
);

render(
  (
    <Router>
      <App />
    </Router>
  ), document.getElementById('app'),
);

import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Link} from 'react-router-dom';
import Sidebar from '../lib/Sidebar';
import Content from '../lib/Content';
import {Helmet} from 'react-helmet';

const App = () => (
  <div className="l-container">
    <Helmet titleTemplate="%s - Yep-react"/>
    <header className="l-header">
      <a className="l-logo" href="//yep-react.jd.com/">
        <img src="http://yep.jd.com/index/1.0.0/img/logo.de07a48.png" alt="LRC-M"/>
        <span>Yep-react</span>
        <span style={{fontSize: 14, color: 'rgb(149, 151, 155)'}}>inspired by lrc</span>
      </a>
      <nav className="l-nav">
        <ul>
          <li className="nav-item">
            <a href="/">首页</a>
          </li>
          <li className="nav-item">
            <Link to="/doc/get-started">组件</Link>
          </li>
          <li className="nav-item">
            <a href="/">工厂</a>
          </li>
          <li className="nav-item">
            <a href="/">案例</a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="l-main">
      <Sidebar/>
      <Content/>
    </div>
    <footer className="l-footer">Copyright © 2018 JD.com</footer>
  </div>
);

render(
  (
    <Router>
      <App/>
    </Router>
  ), document.getElementById('app'),
);

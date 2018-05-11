import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../lib/Sidebar';
import Content from '../lib/Content';
import {Helmet} from "react-helmet";

const App = () => (
  <div className="l-container">
    <Helmet titleTemplate="%s - Yep-ui"/>
    <header className="l-header">
      <a className="l-logo" href="//lrc-m.jd.com/">
        <img src="//img20.360buyimg.com/uba/jfs/t17650/112/2277648625/23467/5da34e6/5aefee2dNf1aa483c.png" alt="LRC" />
        <span>LRC-M</span>
      </a>
      <nav className="l-nav">
        <ul>
          <li className="nav-item">
            <a href="/">首页</a>
          </li>
          <li className="nav-item">
            <a href="/doc">组件</a>
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
      <Sidebar />
      <Content />
    </div>
    <footer className="l-footer">Copyright © 2018 JD.com</footer>
  </div>
);

render(
  (
    <Router>
      <App />
    </Router>
  ), document.getElementById('app'),
);

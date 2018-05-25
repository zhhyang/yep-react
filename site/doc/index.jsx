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
        <span>YepReact</span>
        <span className="l-inspired" >inspired by lrc</span>
      </a>
      <nav className="l-nav">
        <ul>
          <li className="nav-item">
            <Link to="/doc/get-started">组件</Link>
          </li>
          <li className="nav-item">
            <a href="http://git.jd.com/JDC-FE/lrc-m">Gitlab</a>
          </li>
          <li className="nav-item">
            <a href="http://git.jd.com/JDC-FE/lrc-m/issues/new">问题反馈</a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="l-main">
      <Sidebar/>
      <Content/>
    </div>

  </div>
);

render(
  (
    <Router>
      <App/>
    </Router>
  ), document.getElementById('app'),
);

import React, {Fragment} from 'react';
import {render} from 'react-dom';
import {Helmet} from 'react-helmet';
import {HashRouter as Router} from 'react-router-dom';
import './base.scss';
import './component/ComponentCard/style.scss';
import Content from './Content';

render(
  <Fragment>
    <Helmet titleTemplate="%s - Yep-React" />
    <Router>
      <Content />
    </Router>
  </Fragment>,
  document.getElementById('app')
);

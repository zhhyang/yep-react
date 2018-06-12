import React, {Fragment} from 'react'
import {render} from 'react-dom'
import './base.scss'
import Content from './Content'
import '../dist/@jdcfe/yep-react.css'
import {Helmet} from "react-helmet";
import { HashRouter as Router } from 'react-router-dom';

render(
  <Fragment>
    <Helmet titleTemplate="%s - Yep-React"/>
    <Router>
      <Content/>
    </Router>
  </Fragment>
  , document.getElementById('app')
);

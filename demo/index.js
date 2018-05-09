import React from 'react'
import {render} from 'react-dom'
import './base.scss'
import Content from './Content'
import '../dist/@jdcfe/lrc-m.css'
import {Helmet} from "react-helmet";
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <div>
    <Helmet titleTemplate="%s - Yep-ui"/>
    <Router>
      <Content/>
    </Router>
  </div>
  , document.getElementById('app')
);

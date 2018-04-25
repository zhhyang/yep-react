import React from 'react'
import {render} from 'react-dom'
import './base.scss'
import {Route, Switch,} from "react-router";
import {HashRouter as Router} from "react-router-dom";
import routes from "./routes/index";
import {Helmet} from "react-helmet";

const NotFound = () => (
  <div>
    Not Found
  </div>
)

render(
  <div>
    <Helmet titleTemplate="%s - Yep-ui"/>
    <Router>
      <Switch>
        {routes.map((route, i) => <Route key={i} exact={!!route.exact} path={route.path} component={route.component}/>)}
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </div>
  , document.getElementById('app')
);

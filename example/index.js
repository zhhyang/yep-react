import React from 'react'
import {render} from 'react-dom'
import './base.scss'
import {Route, Switch,} from "react-router";
import {HashRouter as Router} from "react-router-dom";
import routes from "./routes/index";

render(
  <Router>
    <Switch>
      {routes.map((route, i) => <Route key={i} exact={!!route.exact} path={route.path} component={route.component}/>)}
    </Switch>
  </Router>, document.getElementById('app')
);

import React, {Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import marked from 'marked';
import Prism from 'prismjs';
import allDocData from './allDocData';
import Demo from './Demo';


import {toCamelCase} from '../site/lib/utils'
import App from "./App";

const Content = ({ history, location: { pathname } }) => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 100);

  if (pathname.match(/^\/demo\/?$/)) {
    history.replace(`/demo/${allDocData.docs[0].id}`);
  }

  if (pathname.match(/\/component\//)) {
    const componentName = pathname.split('/').reverse()[0];
    const currentComponent = allDocData.components[componentName];
    if (!currentComponent) {
      return (
        <h1>404 page not found</h1>
      );
    }
    return (
      <Fragment>
          {
            currentComponent && currentComponent.demos ? (
              currentComponent.demos.sort((a, b) => a.order - b.order).map(demo => (
                <Demo demo={demo} key={demo.order} componentName={componentName} />
              ))
            ) : null
          }
          <style>
            { currentComponent.style || '' }
          </style>
      </Fragment>
    );
  }
  return (
    <App/>
  );
};

export default withRouter(Content);

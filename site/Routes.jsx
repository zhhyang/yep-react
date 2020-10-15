import React from 'react';
import {withRouter} from 'react-router-dom';
import marked from 'marked';
import {Helmet} from 'react-helmet';
import Prism from 'prismjs';
import allDocData from './lib/allDocData';
import Demo from './lib/Demo';
import Sidebar from './lib/Sidebar';
import Home from './lib/Home';
import NavHeader from './lib/NavHeader';

import {toCamelCase} from './lib/utils';
import AllIconDemo from './componnets/Icons';

function handleResetScrollStatus() {
  document.querySelector('.l-header').style.left = '';
  document.querySelector('.l-menu').style.marginLeft = '-220px';
}

const LContainer = props => (
  <div className="l-container">
    <Helmet titleTemplate="%s - Yep-React" />
    <div className="l-main">{props.children}</div>
  </div>
);

const Routes = ({history, location: {pathname}}) => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 100);

  if (pathname === '/') {
    return <Home />;
  }

  if (pathname.match(/^\/doc\/?$/)) {
    history.replace(`/doc/${allDocData.docs[0].id}`);
  }

  if (pathname.match(/\/component\//)) {
    require('./assets/css/doc.scss');
    const componentName = pathname.split('/').reverse()[0];
    const currentComponent = allDocData.components[componentName];
    if (!currentComponent) {
      return <h1>404 page not found</h1>;
    }

    const contents = currentComponent.__content.split('<DEMO>'); // eslint-disable-line no-underscore-dangle

    /* eslint-disable react/no-danger */
    /* eslint-disable no-underscore-dangle */
    return (
      <div>
        <LContainer>
          <NavHeader />
          <Sidebar />
          <div className="l-content l-markdown" onClick={handleResetScrollStatus}>
            <div className="markdown-body">
              <Helmet title={`${toCamelCase(componentName)} ${currentComponent.title}`} />
              <h1>
                {toCamelCase(componentName)} {currentComponent.title}
              </h1>
              {pathname === '/doc/component/icon' && <AllIconDemo />}
              <div dangerouslySetInnerHTML={{__html: marked(contents[0])}} />
              {currentComponent && currentComponent.demos ? <h2>Demo</h2> : null}
              {currentComponent && currentComponent.demos
                ? currentComponent.demos
                    .sort((a, b) => a.order - b.order)
                    .map(demo => <Demo demo={demo} key={demo.order} componentName={componentName} />)
                : null}
              <div dangerouslySetInnerHTML={{__html: marked(contents[1] || '')}} />
              <style>{currentComponent.style || ''}</style>
            </div>
          </div>
        </LContainer>
      </div>
    );
    /* eslint-enable react/no-danger */
    /* eslint-enable no-underscore-dangle */
  }

  if (pathname.match(/^\/doc\/(\S+)/)) {
    require('./assets/css/doc.scss');
    const pageId = pathname.replace(/^\/doc\//, '');
    const page = allDocData.docs.find(d => d.id === pageId);

    if (page) {
      /* eslint-disable react/no-danger */
      /* eslint-disable no-underscore-dangle */
      return (
        <LContainer>
          <NavHeader />
          <Sidebar />
          <div className="l-content l-markdown">
            <Helmet title={page.title} />
            <div className="markdown-body">
              <div dangerouslySetInnerHTML={{__html: marked(page.__content)}} />
            </div>
          </div>
        </LContainer>
      );
      /* eslint-enable react/no-danger */
      /* eslint-enable no-underscore-dangle */
    }

    return <h1>404 page not found</h1>;
  }

  return '404';
};

export default withRouter(Routes);

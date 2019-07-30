const omit = require('lodash/omit');

const glob = require('glob');
const path = require('path');
const fs = require('fs');
const ComponentDocs = require('../site/lib/ComponentDocs');
const subListDemos = require('../demo/subListDemos');
//const parseMarkdownFile = require('../site/lib/parseMarkdownFile');
function dash2Camel(text) {
  return (text.charAt(0).toUpperCase() + text.slice(1)).replace(/-+(.)/gi, function(match, capture1) {
    return capture1.toUpperCase();
  });
}
const tree = new ComponentDocs();
const rootDir = process.cwd();
const mdFiles = glob.sync('**/*.@(md|css)', {
  cwd: path.resolve(rootDir, './src'),
});

mdFiles.forEach(filename => tree.addMarkdonwFile(filename));
const components = tree.components;

let render = (str, comps) => `
  import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import qs from 'qs';
import {NavBar, Button} from '@jdcfe/yep-react';
import comps from '../../comps';
import Demo from '../../../demo/Demo';
import ComponentTitle from '../../../demo/component/ComponentTitle';

import {Helmet} from 'react-helmet';
import {toCamelCase} from '../../../site/lib/utils';

import '../../../demo/Content.scss';
import Image from '../../../demo/image';

import {CATEGORIES, subListDemos} from '../../../demo/utils';
${comps}
import ComponentCard from '../../../demo/component/ComponentCard';
const Content = ({history, location: {pathname, search}}) => {
    const componentName = pathname.split('/').reverse()[0];
    const currentComponent = comps.filter(cpm => cpm.name == componentName)[0];
   

    const query = qs.parse(search, {ignoreQueryPrefix: true});
    return (
      <Fragment>
        <NavBar
          leftContent=""
          onLeftClick={() => history.goBack()}
          rightContent={
            <img
              className="github"
              src={Image.github}
              onClick={() => {
                window.location.href = 'https://github.com/jdf2e/yep-react';
              }}
            />
          }
        >
          {CATEGORIES.find(item => item.name === currentComponent.category).label}
        </NavBar>
        <div className="page-wrapper">
          <ComponentTitle title={currentComponent.title} desc={currentComponent.desc} englishTitle={toCamelCase(componentName)} />
          <Helmet title={toCamelCase(componentName)} />
          ${str}
        </div>
      </Fragment>
    );
  
};

export default withRouter(Content);
  
  `;

let lazyComponentsStr = '';
let lazyComponentsRouteStr = '';
Object.keys(components).forEach(componentName => {
  lazyComponentsStr += `const ${dash2Camel(
    componentName
  )}Content = lazy(() => import('./pages/${componentName}/content'));\n`;
  lazyComponentsRouteStr += `<Route path="/component/${componentName}" component={${dash2Camel(
    componentName
  )}Content} />\n`;

  components[componentName].demos.map(demo => {
    const order = demo.order;

    const demoLinkPath = path.join(__dirname, `../demo-link/`);
    if (!fs.existsSync(demoLinkPath)) {
      fs.mkdirSync(demoLinkPath);
    }
    const pagesPath = path.join(__dirname, `../demo-link/pages/`);
    if (!fs.existsSync(pagesPath)) {
      fs.mkdirSync(pagesPath);
    }
    const dirPath = path.join(__dirname, `../demo-link/pages/${componentName}/`);
    const jsFilePath = path.join(dirPath, `${order}.js`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    const jsContent =
      demo.__content
        .replace(/^\s*```jsx?/, '')
        .replace(/```\s*$/, '')
        .replace('ReactDOM.render(<Demo />, mountNode);', '') + ' export default Demo;';

    fs.writeFile(jsFilePath, jsContent, err => {
      if (err) throw err;
    });
  });

  const ww = components[componentName].demos
    .sort((a, b) => a.order - b.order)
    .map(demo => `{ query.order == ${demo.order} && <${dash2Camel(componentName)}${demo.order} />}`)
    .join('\n');

  const www = '{ query.order? <Fragment>' + ww + '</Fragment>: <Fragment>\n';

  const str =
    (subListDemos.indexOf(componentName) > -1
      ? components[componentName].demos
          .sort((a, b) => a.order - b.order)
          .map(
            (demo, index) =>
              `<div key={${index}} className="demo-wingblank">
            <Button onClick={() => (window.location.hash = \`\${window.location.hash}?order=${index}\`)}>
              ${demo.title}
            </Button>
          </div>`
          )
      : components[componentName].demos
          .sort((a, b) => a.order - b.order)
          .map(
            demo =>
              `<ComponentCard title={"${demo.title}"}>
            <${dash2Camel(componentName)}${demo.order} />
          </ComponentCard>`
          )
    ).join('\n') + '</Fragment>}';

  const comp = components[componentName].demos
    .sort((a, b) => a.order - b.order)
    .map(demo => `import ${dash2Camel(componentName)}${demo.order} from './${demo.order}'`)
    .join('\n');

  const demo = !!components[componentName].style ? `\n import './demo.css';\n` : '\n';

  fs.writeFile(
    path.join(__dirname, `../demo-link/pages/${componentName}/`, `content.js`),
    render(www + str, comp + demo),
    err => {
      if (err) throw err;
    }
  );

  if (!!components[componentName].style) {
    fs.writeFile(
      path.join(__dirname, `../demo-link/pages/${componentName}/`, `demo.css`),
      components[componentName].style,
      err => {
        if (err) throw err;
      }
    );
  }
});

const comps = Object.keys(components).map(componentName =>
  omit(components[componentName], ['demos', '__content', 'style'])
);

fs.writeFile(path.join(__dirname, `../demo-link/`, `content.js`), render, err => {
  if (err) throw err;
});

fs.writeFile(
  path.join(__dirname, `../demo-link/`, `comps.js`),
  `const comps = ${JSON.stringify(comps)} \n export default  comps;\n`,
  err => {
    if (err) throw err;
  }
);

const router = `

import React, {Fragment, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {Loading} from '@jdcfe/yep-react';
import {Helmet} from 'react-helmet';
const Index = lazy(() => import('../demo/App'));

${lazyComponentsStr}

const NotFound = () => {
  return <div>404</div>;
};

const routes = (
  <Fragment>
    <Helmet titleTemplate="%s" />
    <Suspense fallback={Loading}>
      <Switch>
        <Route path="/" exact component={Index} />
        ${lazyComponentsRouteStr}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Fragment>
);
export default routes;
`;
fs.writeFile(path.join(__dirname, `../demo-link/`, `router.js`), router, err => {
  if (err) throw err;
});

const App = `
import React, {PureComponent} from 'react';
import {Helmet} from 'react-helmet';
import '../demo/index.scss';
import {CATEGORIES, clearCache} from '../demo/utils';
import Panel from '../demo/Panel';
import Image from '../demo/image';
import components from './comps';

export default class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  componentWillMount() {}

  componentDidMount() {
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (window.location.href.indexOf('component') === -1) {
        // 表示首页，需要记录滚动位置
        sessionStorage.setItem('scrollTop', scrollTop);
      }
    };
    if (window.location.href.indexOf('component') === -1) {
      // 表示首页，需要滚动位置
      window.scrollTo(0, Number(sessionStorage.getItem('scrollTop') || 0));
    }
  }

  render() {
    const openStatusObj = JSON.parse(sessionStorage.getItem('openStatus')) || {};
    return (
      <section className="page-index">
        <Helmet title="示例" />
        <img
          className="index-github"
          src={Image.github}
          onClick={() => {
            window.location.href = 'https://github.com/jdf2e/yep-react';
          }}
        />
        <div className="logo">
          <img src="http://yep-react.jd.com/logo.de07a481.png" alt="" />
        </div>
        <div className="page-title">Yep-React</div>
        <div className="page-module-list">
          {CATEGORIES.map(category => {
            return (
              <Panel
                key={category.name}
                category={category}
                components={components}
                open={openStatusObj[category.name]}
              />
            );
          })}
        </div>
        <div className={'add-footer'}>邮箱：yep@jd.com | Copyright © 京东前端开发部</div>
      </section>
    );
  }
}

`;

fs.writeFile(path.join(__dirname, `../demo-link/`, `app.js`), App, err => {
  if (err) throw err;
});

const index = `
import React, {Fragment} from 'react';
import {render} from 'react-dom';
import {Helmet} from 'react-helmet';
import {HashRouter as Router} from 'react-router-dom';
import '../demo/base.scss';
import '../demo/component/ComponentCard/style.scss';
import router from './router';
import '../dist/@jdcfe/yep-react.css';

render(
  <Fragment>
    <Helmet titleTemplate="%s - Yep-React" />
    <Router>
      {router}
    </Router>
  </Fragment>,
  document.getElementById('app')
);

`;

fs.writeFile(path.join(__dirname, `../demo-link/`, `index.js`), index, err => {
  if (err) throw err;
});

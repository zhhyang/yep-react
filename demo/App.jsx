import React, {PureComponent} from 'react';
import allDocData from './allDocData';
import {Helmet} from 'react-helmet';
import './index.scss';
import {CATEGORIES} from './utils';
import Panel from './Panel';

export default class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const components = allDocData.components;
    return (
      <section className="page-index">
        <Helmet title="示例" />
        <div className="logo">
          <img src="http://yep-react.jd.com/logo.de07a481.png" alt="" />
        </div>
        <div className="page-title">Yep-React</div>
        <div className="page-module-list">
          {CATEGORIES.map(category => {
            return <Panel key={category.name} category={category} components={components} />;
          })}
        </div>
      </section>
    );
  }
}

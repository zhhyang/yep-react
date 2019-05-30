import React, {PureComponent} from 'react';
import allDocData from './allDocData';
import {Helmet} from 'react-helmet';
import './index.scss';
import {CATEGORIES, clearCache} from './utils';
import Panel from './Panel';
import Image from './image';

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
    const components = allDocData.components;
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

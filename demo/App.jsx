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

  componentWillMount() {
    const EXPIRE = 1800000;
    const current = new Date().getTime();
    const pre = localStorage.getItem('preTime');

    if (!pre) {
      clearCache();
    } else {
      if (current - pre > EXPIRE) {
        clearCache();
      } else {
        localStorage.setItem('preTime', `${new Date().getTime()}`);
      }
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (window.location.href.indexOf('component') === -1) {
        // 表示首页，需要记录滚动位置
        localStorage.setItem('scrollTop', scrollTop);
      }
    };
    if (window.location.href.indexOf('component') === -1) {
      // 表示首页，需要滚动位置
      window.scrollTo(0, Number(localStorage.getItem('scrollTop') || 0));
    }
  }

  render() {
    const components = allDocData.components;
    const openStatusObj = JSON.parse(localStorage.getItem('openStatus')) || {};
    return (
      <section className="page-index">
        <Helmet title="Components" />
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
      </section>
    );
  }
}

import React from 'react';
import Rellax from 'rellax';
import {withRouter} from 'react-router-dom';
import loiterInit from './loiter';
import logo from './../assets/img/logo.png';
import qrcode from './../assets/img/qrcode.png';
import triangleQrcode from './../assets/img/triangleqrcode.png';
import git3 from './../assets/img/Git-3.png';
import ppt1 from './../assets/img/ppt1.png';
import ppt2 from './../assets/img/ppt2.png';
import ppt3 from './../assets/img/ppt3.png';
import ppt4 from './../assets/img/ppt4.png';
import iconNpm from './../assets/img/npm.png';
import './../assets/css/home.scss';
import {website} from '../config';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCodeShow: false,
      activeBeforeStartContainer: 0,
      activeStartContent: 0,
      activeIntro: 0,
      toTop: false,
      scrollTop: 0,
    };
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollFunc.bind(this));
    document.body.onmousewheel = this.scrollFunc.bind(this);
    document.body.ontouchmove = this.scrollFunc.bind(this);
    document.body.onscroll = this.scrollFunc.bind(this);
    loiterInit(window);
    return new Rellax('.parallax-animation .rellax', {
      speed: -2,
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }

  scrollTo(e) {
    const {position} = e.target.dataset;
    window.scrollTo(0, position);
    // let currentPosition = document.documentElement.scrollTop;
    // const step = (position - currentPosition) / 50;
    // if (step > 1) {
    //   currentPosition += step;
    //   document.body.scrollTop = currentPosition;
    //   document.documentElement.scrollTop = currentPosition;
    //   setTimeout(this.scrollTo(e), 10);
    // } else {
    //   document.body.scrollTop = position;
    //   document.documentElement.scrollTop = position;
    // }
  }

  scrollFunc() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (document.body.clientWidth > 500) {
      //在 PC 端显示缓出动画
      if (scrollTop > 290) {
        this.setState({
          activeBeforeStartContainer: 1,
        });
      } else {
        this.setState({
          activeBeforeStartContainer: 0,
        });
      }
      if (scrollTop > 1240) {
        this.setState({
          activeStartContent: 1,
        });
      } else {
        this.setState({
          activeStartContent: 0,
        });
      }

      if (scrollTop > 2400) {
        this.setState({
          activeIntro: 1,
        });
      } else {
        this.setState({
          activeIntro: 0,
        });
      }
    } else {
      if (scrollTop > 880) {
        this.setState({
          activeIntro: 1,
        });
      } else {
        this.setState({
          activeIntro: 1,
        });
      }
      if (scrollTop > 124) {
        this.setState({
          activeBeforeStartContainer: 1,
        });
      } else {
        this.setState({
          activeBeforeStartContainer: 1,
        });
      }
      if (scrollTop > 29) {
        this.setState({
          activeStartContent: 1,
        });
      } else {
        this.setState({
          activeStartContent: 0,
        });
      }
    }
  }

  render() {
    const {qrCodeShow, activeBeforeStartContainer, activeStartContent, activeIntro} = this.state;

    return (
      <div className="home">
        <div className="page-home" id="page-home">
          <div className="page-home-bgpic" />
          <div className="page-home-content" id="page-home-content">
            <div className="page-home-jumbotron logo-animate">
              <div className="page-home-logo logo-animate">
                <img src={logo} id="logo" alt="" />
                <p className="page-home-title">Yep-React</p>
                <p className="page-home-desc">基于 React v16 的前端 UI 组件库, 主要用于快速开发移动端页面</p>
              </div>
              <div className="page-home-buttons logo-animate">
                <a
                  href={`//${website}/#/doc/get-started`}
                  className="page-home-button"
                  target="_blank"
                  rel="noopener"
                >
                  开始使用
                </a>
                <a
                  href={`//${website}/demo.html`}
                  className="page-home-button"
                  rel="noopener"
                  target="_blank"
                >
                  查看示例
                  <div className="triangle-qrcode" id="triangle-qrcode">
                    <img
                      src={triangleQrcode}
                      alt=""
                      onMouseOver={() => this.setState({qrCodeShow: true})}
                      onMouseOut={() => this.setState({qrCodeShow: false})}
                    />
                  </div>
                  {qrCodeShow && (
                    <div className="page-home-qrcode show" id="qrcode-area">
                      <i className="arrow" />
                      <div className="qrcode-container">
                        <img src={qrcode} alt="" />
                      </div>
                    </div>
                  )}
                </a>
              </div>
              <div className="page-home-warehouse logo-animate" id="page-home-warehouse">
                <a href="//github.com/jdf2e/yep-react" className="github" target="_blank">
                  <img src={git3} alt="" />
                </a>
                <i className="circ" id="circ" />
                <a href="https://npmjs.com/package/@jdcfe/yep-react" className="npm" target="_blank">
                  <img src="https://badge.fury.io/js/%40jdcfe%2Fyep-react.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="before-start-container">
          <div className="card" id="card">
            <div className="left">
              <div className={`faststart-placeholder ${activeBeforeStartContainer === 0 ? 'block' : 'none'}`}>
                <div className="fast-start" data-position="1300" onClick={this.scrollTo}>
                  快速开始
                </div>
                <div className="scroll-container">
                  <div className="chevron" />
                  <div className="chevron" />
                  <div className="chevron" />
                </div>
              </div>
              <div className={`left-content ${activeBeforeStartContainer === 0 ? 'card-init' : 'card-complete'}`}>
                <h1>Yep React Components</h1>
                <p>基于京东日常开发业务,我们提供了一套开箱即用的高质量 React 组件, 主要用于快速开发移动端页面.</p>
                <div className="fast-start" data-position="1300" onClick={this.scrollTo}>
                  快速开始
                </div>
              </div>
            </div>
            <div className="right">
              <div className={`readmore-placeholder ${activeBeforeStartContainer === 0 ? 'block' : 'none'}`}>
                <div className="read-more" data-position="2605" onClick={this.scrollTo}>
                  了解更多
                </div>
                <div className="scroll-container">
                  <div className="chevron" />
                  <div className="chevron" />
                  <div className="chevron" />
                </div>
              </div>
              <div className={`right-content ${activeBeforeStartContainer === 0 ? 'card-init' : 'card-complete'}`}>
                <h1>Feature</h1>
                <ul>
                  <li>基于 React 16 开发的 UI 组件</li>
                  <li>使用 npm + webpack + babel 的工作流，支持 ES2015</li>
                  <li>CSS 使用sass，推荐使用postcss和babel-plugin-import方便处理样式和解决样式按需加载问题</li>
                </ul>
                <div className="read-more" data-position="2605" onClick={this.scrollTo}>
                  了解更多
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="start-content" id="start-content">
          <h1>快速开始</h1>
          <div className={`start-main ${activeStartContent === 0 ? 'card-init' : 'card-complete'}`}>
            <div className="left" id="card-container">
              <div className="top">
                <h6>安装</h6>
                <div className="page-home-code">
                  <code>
                    <span className="page-home-comment"># npm</span>
                    <span>
                      <span className="pl-smi">npm install --save @jdcfe/yep-react</span>
                    </span>
                    <span className="page-home-comment"># yarn</span>
                    <span>
                      <span className="pl-smi">yarn add @jdcfe/yep-react</span>
                    </span>
                  </code>
                </div>
              </div>
              <div className="bottom">
                <h6>引入</h6>
                <div className="page-home-code">
                  <code>
                    <span className="page-home-comment">// 组件使用实例：</span>
                    <span>
                      <span className="pl-k">import </span>
                      <span className="pl-smi">{'{Button}'} </span>
                      <span className="pl-k">from </span>
                      <span className="pl-s">'@jdcfe/yep-react'</span>
                      <span className="pl-smi">;</span>
                    </span>
                    <span>
                      <span className="pl-smi">ReactDOM.</span>
                      <span className="pl-en">render</span>
                      <span className="pl-smi">{'(<Button>Start</Button>, mountNode);'} </span>
                    </span>
                    <span className="page-home-comment">// 引入样式：</span>
                    <span>
                      <span className="pl-k">import </span>
                      <span className="pl-smi"> </span>
                      <span className="pl-s">'@jdcfe/yep-react/dist/yep-react.css';</span>
                    </span>
                  </code>
                  <code>
                    <span className="page-home-comment">// 或使用：babel-plugin-import（推荐）</span>
                    <span className="page-home-comment">// babel-plugin-import 会帮助你加载 JS 和 SCSS</span>
                    <span>
                      <span className="pl-k">import </span>
                      <span className="pl-smi">{'{Button}'} </span>
                      <span className="pl-k">from </span>
                      <span className="pl-s">'@jdcfe/yep-react'</span>
                      <span className="pl-smi">;</span>
                    </span>
                  </code>
                  <code>
                    <span className="page-home-comment">// 单个手动引入</span>
                    <span>
                      <span className="pl-k">import </span>
                      <span className="pl-smi">{'Button'} </span>
                      <span className="pl-k">from </span>
                      <span className="pl-s">'@jdcfe/yep-react/lib/button'</span>
                      <span style={{color: '#969896'}}>// 加载js</span>
                      <span className="pl-smi">;</span>
                    </span>
                    <span>
                      <span className="pl-k">import </span>
                      <span className="pl-s">'@jdcfe/yep-react/lib/button/style;'</span>
                      <span style={{color: '#969896'}}>// 加载css</span>
                    </span>
                  </code>
                </div>
              </div>
            </div>
            <div className="right" id="phone-container">
              <div className="page-home-phone">
                <iframe src={`//${website}/demo.html`} frameBorder="0" />
              </div>
            </div>
          </div>
        </div>

        <div className="page-home-intro" id="page-home-intro">
          <h1 className="page-home-tit">功能介绍</h1>
          <div className="page-home-show">
            <ul className="page-home-feature">
              <li className={`${activeIntro === 0 ? 'card-init' : 'card-complete'}`}>
                <img src={ppt1} alt="" className="left" />
                <div className="right">
                  <h6 className="intro-title">组件丰富 功能全面</h6>
                  <p className="intro-motto">小体量，大功能</p>
                  <p className="intro-content">
                    提供了 40+ 基础组件、覆盖各类场景，组件符合京东APP视觉、交互规范，组件特性丰富、满足各种功能需求。
                  </p>
                </div>
              </li>
              <li className={`${activeIntro === 0 ? 'card-init' : 'card-complete'}`}>
                <div className="left">
                  <h6 className="intro-title">一步上手 按需加载</h6>
                  <p className="intro-motto">多模块化加载，去除冗余</p>
                  <p className="intro-content">
                    上手足够简单，既可以一次加载所有代码、也可以只加载用到的某几个组件的代码、避免冗余.
                  </p>
                </div>
                <img src={ppt2} alt="" className="right" />
              </li>
              <li className={`${activeIntro === 0 ? 'card-init' : 'card-complete'}`}>
                <img src={ppt3} alt="" className="left" />
                <div className="right">
                  <h6 className="intro-title">体积小巧 性能出众</h6>
                  <p className="intro-motto">顺滑体验，性能无忧</p>
                  <p className="intro-content">在不损失功能的基础上，尽量保证了单个组件的体积最小、性能最优。</p>
                </div>
              </li>
              <li className={`${activeIntro === 0 ? 'card-init' : 'card-complete'}`}>
                <div className="left">
                  <h6 className="intro-title">简易定制 多种风格</h6>
                  <p className="intro-motto">支持自定义主题</p>
                  <p className="intro-content">支持灵活的样式定制，简易生成多种风格，满足个性化产品需求。</p>
                </div>
                <img src={ppt4} alt="" className="right" />
              </li>
            </ul>
          </div>
        </div>
        <div className="parallax-animation">
          <div
            className="rellax circle-ring"
            data-rellax-speed="1"
            style={{
              width: '200px',
              height: '200px',
              position: 'absolute',
              top: '10%',
              left: '2%',
              transform: 'rotate(17deg)',
              zIndex: 1,
            }}
          />
          <div
            className="rellax small-circle-ring"
            style={{
              width: '30px',
              height: '30px',
              position: 'absolute',
              top: '13%',
              right: '70%',
              transform: 'rotate(17deg)',
              opacity: 0.8,
              zIndex: 1,
              backgroundColor: '#33B077',
            }}
            data-rellax-speed="4"
          />
          <div
            className="rellax small-circle-ring"
            style={{
              width: '30px',
              height: '30px',
              position: 'absolute',
              top: '22%',
              right: '7%',
              transform: 'rotate(17deg)',
              opacity: 0.8,
              backgroundColor: '#33B077',
            }}
            data-rellax-speed="10"
          />
          <div
            className="rellax circle"
            style={{
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '17%',
              right: '25%',
              opacity: 0.9,
              zIndex: 1,
            }}
            data-rellax-speed="10"
          />
          <div
            className="rellax react"
            style={{
              width: '200px',
              height: '200px',
              position: 'absolute',
              top: '15%',
              right: '83%',
              opacity: 0.9,
              transform: 'rotate(-53deg)',
              zIndex: 1,
            }}
            data-rellax-speed="-2"
          />
        </div>
        <footer className="page-home-footer">
          邮箱：<a href="mailto:yep_group@jd.com">jdf_yep@jd.com</a> | Copyright © 京东前端开发部
        </footer>
      </div>
    );
  }
}

export default withRouter(Home);

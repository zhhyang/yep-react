---
order: 2
title: 使用装饰器
description:
---

```js
import React from 'react';
import {LazyLoad} from '@jdcfe/yep-react';
const {lazyload} = LazyLoad;
class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true,
      count: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id && this.props.id) {
      this.setState({
        isReady: false,
      });

      setTimeout(() => {
        this.setState({
          isReady: true,
          count: this.state.count + 1,
        });
      }, 500);
    } else {
      this.setState({
        isReady: true,
      });
    }
  }

  render() {
    return this.state.isReady ? (
      <div className="widget">
        <span className="widget-counter">{this.props.count}</span>
        {this.props.once ? (
          <div className="widget-text once">
            <code>
              当前 once 属性为 true
              <br />
              更新组件时将统一刷新
              <br />
              不再监听 scroll/resize 事件
            </code>
          </div>
        ) : (
          <div className="widget-text">
            <code>
              当前 once 属性为 false
              <br />
              更新组件时将不统一刷新
              <br />
              仍监听 scroll/resize 事件
            </code>
          </div>
        )}
        <p>渲染次数: {this.state.count}</p>
        <p> id: {this.props.id}</p>
      </div>
    ) : (
      <div className="widget loading">加载中...</div>
    );
  }
}

const Operation = ({type, onClickUpdate, noExtra}) => (
  <div className="op">
    {!noExtra && (
      <div style={{lineHeight: '.5rem', width: '100%'}}>
        <a className="update-btn button-secondary pure-button" onClick={onClickUpdate}>
          更新可视区域
        </a>
        <p className="desc">
          点击上面的按钮将会触发可视区域内全部 <code>Widgets</code> 组件更新。
        </p>
        <p className="desc">
          <code>@lazyload</code>装饰 Widget 组件 通过 LazyLoad 传入的参数控制当前组件状态。
        </p>
      </div>
    )}
  </div>
);
function uniqueId() {
  return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
}

const MyWidget = lazyload({height: 200, throttle: 100})(Widget);
class Demo extends React.Component {
  constructor() {
    super();

    const id = uniqueId();
    this.state = {
      arr: Array.apply(null, Array(20)).map((a, index) => {
        return {
          uniqueId: id,
          once: [6, 7].indexOf(index) > -1,
        };
      }),
    };
  }

  handleClick = () => {
    const id = uniqueId();

    this.setState({
      arr: this.state.arr.map(el => {
        return {
          ...el,
          uniqueId: id,
        };
      }),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Operation type="normal" onClickUpdate={this.handleClick} />
        <div className="widget-list">
          {this.state.arr.map((el, index) => {
            return <MyWidget once={el.once} id={el.uniqueId} count={index + 1} />;
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

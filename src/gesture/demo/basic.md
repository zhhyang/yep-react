---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Gesture} from '@jdcfe/yep-react';
const style = `
  .outter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    border-width: 1px;
    border-color: #4c7cfa;
    border-style: solid;
    overflow: hidden;
  }
  .inner {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #588ceb;
    font-size: 14px;
    color: #fff;
  }
  .swiper-container{
    margin: 20px 0;
  }
  .swiper{
  color: #fff;
    display: flex;
flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #2a8dee;
    width: 100%;
    height: 100%;
  }
  
   .swiper p {
      margin: 10px 0;
     }
     
     .log-info p {
     margin: .2rem 0;
     }
`;

class Demo extends React.Component {
  root;
  rootNode;
  _scale;
  _rotation;
  _x;
  _y;

  constructor(props) {
    super(props);
  }
  translateVoc = key => {
    switch (key) {
      case 'direction':
        return '方向';
        break;
      case 'moveStatus':
        return '移动状态';
        break;
    }
    return key;
  };

  log = (type, keys) => (...args) => {
    window.requestAnimationFrame(() => {
      this.doLog(type, keys, ...args);
      this.doTransform(type, ...args);
    });
  };
  doLog = (type, keys, ...args) => {
    const extInfo = keys
      ? keys
          .map(
            key => `${this.translateVoc(key)} = 
    ${typeof args[0][key] === 'object' ? JSON.stringify(args[0][key]) : args[0][key]}`
          )
          .join(', ')
      : '';
    const logEl = this.refs.log;
    logEl.innerHTML += `<p>触发事件：${this.translateVoc(type)}</p><p> ${extInfo}</p>`;
    logEl.scrollTop = logEl.scrollHeight;
  };
  doTransform = (type, ...args) => {
    if (type === 'onPinch') {
      const {scale} = args[0];
      this._scale = scale;
    }
    if (type === 'onRotate') {
      const {rotation} = args[0];
      this._rotation = rotation;
    }
    if (type === 'onPan') {
      const {x, y} = args[0].moveStatus;
      this._x = x;
      this._y = y;
    }
    if (type === 'onPanEnd' || type === 'onPanCancel') {
      const {x, y} = args[0].moveStatus;
      this._x = 0;
      this._y = 0;
    }
    let transform = [];
    this._scale && transform.push(`scale(${this._scale})`);
    this._rotation && transform.push(`rotate(${this._rotation}deg)`);
    typeof this._x === 'number' && transform.push(`translateX(${this._x}px)`);
    typeof this._y === 'number' && transform.push(`translateY(${this._y}px)`);
    transform = transform.join(' ');
    this.rootNode = ReactDOM.findDOMNode(this.root);
    this.rootNode.style.transform = transform;
  };

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: style}} />

        <div ref="log" className="log-info" style={{height: 100, overflow: 'auto', margin: 10}} />
        <div className="outter">
          <Gesture
            direction="all"
            enablePinch
            enableRotate
            onTap={this.log('onTap')}
            onPress={this.log('onPress')}
            onPressUp={this.log('onPressUp')}
            onSwipe={this.log('onSwipe', ['direction'])}
            onSwipeLeft={this.log('onSwipeLeft', ['direction'])}
            onSwipeRight={this.log('onSwipeRight', ['direction'])}
            onSwipeUp={this.log('onSwipeUp', ['direction'])}
            onSwipeDown={this.log('onSwipeDown', ['direction'])}
            onPinch={this.log('onPinch', ['scale'])}
            onPinchStart={this.log('onPinchStart', ['scale'])}
            onPinchMove={this.log('onPinchMove', ['scale'])}
            onPinchEnd={this.log('onPinchEnd', ['scale'])}
            onPinchCancel={this.log('onPinchCancel', ['scale'])}
            onPinchIn={this.log('onPinchIn', ['scale'])}
            onPinchOut={this.log('onPinchOut', ['scale'])}
            onRotate={this.log('onRotate', ['rotation'])}
            onRotateStart={this.log('onRotateStart', ['rotation'])}
            onRotateMove={this.log('onRotateMove', ['rotation'])}
            onRotateEnd={this.log('onRotateEnd', ['rotation'])}
            onRotateCancel={this.log('onRotateCancel', ['rotation'])}
            onPan={this.log('onPan', ['moveStatus', 'direction'])}
            onPanStart={this.log('onPanStart', ['moveStatus', 'direction'])}
            onPanMove={this.log('onPanMove', ['moveStatus', 'direction'])}
            onPanEnd={this.log('onPanEnd', ['moveStatus', 'direction'])}
            onPanCancel={this.log('onPanCancel', ['moveStatus', 'direction'])}
            onPanLeft={this.log('onPanLeft', ['moveStatus', 'direction'])}
            onPanRight={this.log('onPanRight', ['moveStatus', 'direction'])}
            onPanUp={this.log('onPanUp', ['moveStatus', 'direction'])}
            onPanDown={this.log('onPanDown', ['moveStatus', 'direction'])}
          >
            <div
              className="inner"
              ref={el => {
                this.root = el;
              }}
            >
              拖动我
            </div>
          </Gesture>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

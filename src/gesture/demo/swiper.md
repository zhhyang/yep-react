---
order: 1
title: 水平拖动
description:
---

```js
import React from 'react';
import {Gesture} from '@jdcfe/yep-react';
const style = `
  .swiper-container{
    margin: 20px 0;
  }
  .swiper{
 
  color: #fff;
    display: flex;
flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #2a8dee;
    width: 100%;
    height: 100%;
  }
  
  .swiper p {
    margin: 10px 0;
   }
`;

class Demo extends React.Component {
  moveSwiper(e) {
    const {srcEvent, moveStatus} = e;
    const {x, y} = e.moveStatus;

    this.swiperNode = ReactDOM.findDOMNode(this.refSwiper);
    this.swiperNode.style.transform = [`translateX(${x}px)`];

    // preventDefault, avoid trigger scroll event when touch moving.
    srcEvent.preventDefault();
  }

  resetSwiper() {
    this.swiperNode = ReactDOM.findDOMNode(this.refSwiper);
    this.swiperNode.style.transform = [`translateX(0px)`];
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

  doLog = (type, keys, ...args) => {
    const extInfo = keys
      ? keys
          .map(
            key => `${this.translateVoc(key)} = 
      ${typeof args[0][key] === 'object' ? JSON.stringify(args[0][key]) : args[0][key]}`
          )
          .join(', ')
      : '';
    const logEl = this.refs.swiperlog;
    logEl.innerHTML += `<p>触发事件：${this.translateVoc(type)}</p><p> ${extInfo}</p>`;
    logEl.scrollTop = logEl.scrollHeight;
  };

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: style}} />
        <div ref="swiperlog" className="log-info" style={{height: 85, overflow: 'auto', margin: 10}} />
        <div className="swiper-container">
          <Gesture
            direction="horizontal"
            onPanMove={(e, args) => {
              this.moveSwiper(e, args);
              this.doLog('onPanMove', ['moveStatus', 'direction'], e);
            }}
            onPanEnd={() => {
              this.resetSwiper();
            }}
            onTouchMove={e => {
              console.log('still run touch move');
            }}
          >
            <div style={{height: 200, backgroundColor: 'red'}}>
              <div
                className="swiper"
                ref={e => {
                  this.refSwiper = e;
                }}
              >
                <p>基础滑块演示</p>
                <p>仅支持水平方向拖动</p>
              </div>
            </div>
          </Gesture>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

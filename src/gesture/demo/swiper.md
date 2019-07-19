---
order: 1
title: 水平拖动
description:
---

```js
import React from 'react';
import ReactDOM from 'react-dom';
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

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: style}} />

        <div className="swiper-container">
          <Gesture
            direction="horizontal"
            onPanMove={(e, args) => {
              this.moveSwiper(e, args);
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

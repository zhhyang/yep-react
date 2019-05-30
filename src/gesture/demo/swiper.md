---
order: 1
title: 左右滑动
description:
---

```js
import React from 'react';
import {Gesture} from '@jdcfe/yep-react';
const style = `
  .outter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    width: 80%;
    height: 40px;
    border-width: 1px;
    border-color: red;
    border-style: solid;
    overflow: hidden;
  }
  .inner {
    width: 80%;
    height: 80%;
    background-color: black;
  }
  .swiper-container{
    margin: 20px 0;
  }
  .swiper{
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #CCC;
    width: 100%;
    height: 100%;
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
                This is simple swiper demo. Only allow horizontal direction and height=200px to test scroll event.
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

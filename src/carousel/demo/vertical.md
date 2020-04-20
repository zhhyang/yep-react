---
order: 6
title: 垂直滚动
description: 垂直滚动
---

```js
import React from 'react';
import {Carousel} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div className="news">
        <div className="news-tit">
          <i>拍卖</i>
          <s className="">头条</s>
        </div>
        <Carousel vertical={true} autoPlay={3000} isInfinite dots={false} dynamicHeight>
          <div className="news-item">
            <i>热</i>母亲节走心好礼特惠精选，放价到底！
          </div>
          <div className="news-item">
            <i>热</i>翡翠彩宝抢拍，源头直采低价捡漏！
          </div>
          <div className="news-item">
            <i>热</i>教你拍，一学就会的新手指南！
          </div>
          <div className="news-item">
            <i>热</i>一元限时拍，紫砂陶瓷20：00开始了
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

---
order: 1
title: 图片懒加载
description:
---

```js
import React from 'react';
import {LazyLoad} from '@jdcfe/yep-react';

const Operation = ({type, onClickUpdate, noExtra}) => (
  <div className="op">
    {!noExtra && (
      <div>
        <a className="update-btn button-secondary pure-button" onClick={onClickUpdate}>
          Update
        </a>
        <p className="desc">
          Clicking this button will make all <code>Widgets</code> in <strong> visible area </strong>
          reload data from server.
        </p>
        <p className="desc">
          Pay attention to <code>props from parent</code> block in <code>Widget</code>
          to identify how LazyLoad works.
        </p>
      </div>
    )}
  </div>
);
class Demo extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="widget-list image-container">
          <LazyLoad throttle={200} height={300}>
            <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//m.360buyimg.com/babel/jfs/t21421/47/1859879985/100913/f5dd5cb5/5b3caa69N4c7a4999.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//img1.360buyimg.com/pop/jfs/t23260/244/889866376/102314/ef6393ec/5b46cb8cN1804aa98.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//m.360buyimg.com/babel/jfs/t21421/47/1859879985/100913/f5dd5cb5/5b3caa69N4c7a4999.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//img1.360buyimg.com/pop/jfs/t23260/244/889866376/102314/ef6393ec/5b46cb8cN1804aa98.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//m.360buyimg.com/babel/jfs/t21421/47/1859879985/100913/f5dd5cb5/5b3caa69N4c7a4999.jpg" />
          </LazyLoad>
          <LazyLoad throttle={200} height={300}>
            <img src="//img1.360buyimg.com/pop/jfs/t23260/244/889866376/102314/ef6393ec/5b46cb8cN1804aa98.jpg" />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

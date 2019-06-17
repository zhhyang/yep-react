---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Price} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="price-item-wrap">
          <label>默认</label>
          <div className="price-item">
            <Price value="36.00" />
          </div>
        </div>

        <div className="price-item-wrap">
          <label>默认-人民币</label>
          <div className="price-item">
            <Price value="￥36.00" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

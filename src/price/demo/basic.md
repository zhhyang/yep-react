---
order: 0
title: 基础用法
description: 货币符号、价格整数位、价格小数位底端对齐的默认展示效果
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
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

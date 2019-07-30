---
order: 6
title: 自定义价格样式
description: 可自定义价格样式，包括货币符号、价格
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
      <div className="price-item-wrap">
        <label>自定义样式</label>
        <div className="price-item">
          <Price
            value="36.00"
            symPos="sub"
            decPos="sup"
            decNum="0"
            className="yec-cont"
            symClassName="yec-sym"
            intClassName="yec-int"
            decClassName="yec-dec"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

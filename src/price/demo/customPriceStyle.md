---
order: 6
title: 自定义价格样式
description:
---

```js
import React from 'react';
import {Price} from '@jdcfe/yep-react';
import {ComponentCard} from 'ComponentCard';

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

---
order: 2
title: 自定义货币符号&小数位置
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
      <div>
        <div className="price-item-wrap">
          <label>小数右上</label>
          <div className="price-item">
            <Price value="36.00" symPos="normal" decPos="sup" />
          </div>
        </div>

        <div className="price-item-wrap">
          <label>货币符号左上&小数右上</label>
          <div className="price-item">
            <Price value="36.00" symPos="sup" decPos="sup" />
          </div>
        </div>

        <div className="price-item-wrap">
          <label>货币符号居下&小数右上</label>
          <div className="price-item">
            <Price value="36.00" symPos="sub" decPos="sup" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

---
order: 1
title: 自定义货币符号
description: 可根据传入的货币符号展示
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
        <label>美元</label>
        <div className="price-item">
          <Price value="$36.00" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

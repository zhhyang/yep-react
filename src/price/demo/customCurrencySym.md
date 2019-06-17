---
order: 1
title: 自定义货币符号
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

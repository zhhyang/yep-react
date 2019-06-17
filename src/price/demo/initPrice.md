---
order: 4
title: 价格取整
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
        <label>不要小数</label>
        <div className="price-item">
          <Price value="36.00" symPos="sub" decPos="sup" decLength="0" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

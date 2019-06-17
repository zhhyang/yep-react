---
order: 4
title: 只保留1位小数
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
        <label>只保留一位小数</label>
        <div className="price-item">
          <Price value="36.00" symPos="sub" decPos="sup" decLength="1" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

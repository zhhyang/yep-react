---
order: 6
title: 划线价
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
        <label>删除状态</label>
        <div className="price-item">
          <Price value="36.00" symPos="sub" decPos="sup" decLength="0" status="del" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

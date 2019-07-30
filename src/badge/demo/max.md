---
order: 1
title: 最大数
description: 超过最大数展示为 最大数+
---

```js
import React from 'react';
import {Badge, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={200}>
          <Icon type="cart" size="lg" />
        </Badge>
        <div className="badge-text">待收货</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

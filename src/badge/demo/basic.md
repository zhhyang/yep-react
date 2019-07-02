---
order: 0
title: 基础用法
description: 简单的徽章展示
---

```js
import React from 'react';
import {Badge, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={8}>
          <Icon type="cart" size="lg" />
        </Badge>
        <div className="badge-text">待收货</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

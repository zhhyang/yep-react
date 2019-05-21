---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={8}>
          <div className="shop-image" />
        </Badge>
        <div className="badge-text">待收货</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

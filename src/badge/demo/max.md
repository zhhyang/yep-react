---
order: 1
title: 最大数
description:
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={200}>
          <div className="shop-image" />
        </Badge>
        <div className="badge-text">待收货</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

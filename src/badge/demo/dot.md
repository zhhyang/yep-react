---
order: 3
title: 小红点
description:
---

```js
import React from 'react';
import {Badge} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge dot>
          <div className="shop-image" />
        </Badge>
        <div className="badge-text">有未读消息</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

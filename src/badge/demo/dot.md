---
order: 3
title: 小红点
description: 除字符形式，徽标也可以是小红点
---

```js
import React from 'react';
import {Badge, Icon} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge dot>
          <Icon type="cart" size="lg" />
        </Badge>
        <div className="badge-text">有未读消息</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

---
order: 4
title: 配合徽标
description: 用于展示消息提示
---

```js
import React from 'react';
import {Avatar, Badge} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Badge text={8}>
          <Avatar>Follow</Avatar>
        </Badge>
        <Badge text={6}>
          <Avatar
            shape="square"
            style={{
              backgroundColor: '#515151',
            }}
          >
            信息
          </Avatar>
        </Badge>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

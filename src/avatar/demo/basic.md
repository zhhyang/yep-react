---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Avatar, WhiteSpace} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <Avatar size="large">京东</Avatar>
          <Avatar>京东</Avatar>
          <Avatar size="small">京东</Avatar>
        </div>
        <WhiteSpace />
        <div>
          <Avatar shape="square" size="large">
            京东
          </Avatar>
          <Avatar shape="square">京东</Avatar>
          <Avatar shape="square" size="small">
            京东
          </Avatar>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

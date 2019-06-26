---
order: 2
title: 自定义样式
description: 支持自定义样式效果
---

```js
import React from 'react';
import {Avatar} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Avatar style={{backgroundColor: '#F2270C'}}>Style</Avatar>
        <Avatar shape="square" style={{backgroundColor: '#FCEDEB', color: '#333'}}>
          abc
        </Avatar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

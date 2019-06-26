---
order: 3
title: 图标
description: 可配合 Icon 组件使用
---

```js
import React from 'react';
import {Avatar, Icon} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Avatar icon="star" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

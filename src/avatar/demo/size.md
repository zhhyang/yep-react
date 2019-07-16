---
order: 5
title: 自定义尺寸
description: 除固定的三种尺寸外，也支持自定义尺寸
---

```js
import React from 'react';
import {Avatar} from '@jdcfe/yep-react';

import './demo.css';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Avatar size={64}>大小</Avatar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

---
order: 5
title: 自定义尺寸
description:
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

---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Collapse} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <Collapse />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

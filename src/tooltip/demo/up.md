---
order: 1
title: 通过direction控制依附在上方
description:
---

```js
import React from 'react';
import {ToolTip} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  render() {
    return (
      <div>
        <ToolTip overlay={'这是一个提示框'} direction={'up'}>
          <button>Open</button>
        </ToolTip>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```
